
let spPrice = require("../../queryData/spPrice.js");
let acwxPrice = require("../../queryData/acwxPrice.js");
let treasuryBills = require("../../queryData/treasuryBills.js");


let lastYearResults = {
	first: "",
	firstPercentage: "",
	plural: " only",
	second: "",
	secondPercentage: "",
	third: "",
	thirdPercentage: ""
}
let nextYearFirst = "";


for ( let i = 0 ; i < 100 ; i++ ) {

	let allReturns = [];
	let spRtn = 0;
	let acwxRtn = 0;
	let oneRate = 0;
	let twoRate = 0;
	let threeRate = 0;
	let fourRate = 0;
	let treasuryRtn = 0;

	spRtn = ((spPrice[i].price - spPrice[i+12].price) / spPrice[i+12].price) * 100;
	allReturns.push(spRtn);
	acwxRtn = ((acwxPrice[i].price - acwxPrice[i+12].price) / acwxPrice[i+12].price) * 100;
	allReturns.push(acwxRtn);

	oneRate = treasuryBills[i+12].threeMonth / 100;
	twoRate = treasuryBills[i+9].threeMonth / 100;
	threeRate = treasuryBills[i+6].threeMonth / 100;
	fourRate = treasuryBills[i+3].threeMonth / 100;

	treasuryRtn = oneRate + (oneRate * twoRate / 4);
	treasuryRtn = treasuryRtn + (treasuryRtn * threeRate / 4);
	treasuryRtn = treasuryRtn + (treasuryRtn * fourRate / 4);
	treasuryRtn = treasuryRtn * 100;
	allReturns.push(treasuryRtn);

	allReturns.sort((a,b) => {
		if (a > b) {
			return -1;
		} else {
			return 1;
		}
	});

	if (i === 0) {

		lastYearResults.firstPercentage = allReturns[0].toFixed(1);
		lastYearResults.secondPercentage = allReturns[1].toFixed(1);
		lastYearResults.thirdPercentage = allReturns[2].toFixed(1);

		if(spRtn === allReturns[0]) {
			lastYearResults.first = "US Equitys";
		} else if (spRtn === allReturns[1]) {
			lastYearResults.second = "US Equitys";
		} else {
			lastYearResults.third = "US Equitys";
		}

		if(acwxRtn === allReturns[0]) {
			lastYearResults.first = "World Equitys ex US";
		} else if (acwxRtn === allReturns[1]) {
			lastYearResults.second = "World Equitys ex US";
		} else {
			lastYearResults.third = "World Equitys ex US";
		}

		if(treasuryRtn === allReturns[0]) {
			lastYearResults.first = "Three Month Treasuy Bills";
		} else if (treasuryRtn === allReturns[1]) {
			lastYearResults.second = "Three Month Treasuy Bills";
		} else {
			lastYearResults.third = "Three Month Treasuy Bills";
		}
	}

	if (spRtn === allReturns[0]) {
		nextYearFirst = "US Equitys";
	} else if (acwxRtn === allReturns[0]) {
		nextYearFirst = "World Equitys ex US";
	} else {
		nextYearFirst = "Three Month Treasuy Bills";
	}

	if (lastYearResults.first === nextYearFirst) {
		if (i === 1) {
			lastYearResults.monthsFirst = 2;
			lastYearResults.plural = "s";			
		}
		if (i > 1) {
			lastYearResults.monthsFirst++;
		}
	} else {
		i = 100;
	}
}


module.exports = { lastYearResults };