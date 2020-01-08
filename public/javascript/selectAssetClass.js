
let spPrice = require("../../queryData/spPrice.js");
let acwxPrice = require("../../queryData/acwxPrice.js");
let aggPrice = require("../../queryData/aggPrice.js");
//let treasuryBills = require("../../queryData/treasuryBills.js");

// Loading this up to pass to main page
let lastYearResults = {
	first: "",
	firstPercentage: "",
	plural: " only",
	second: "",
	secondPercentage: "",
	third: "",
	thirdPercentage: ""
}

let spRtn = 0;
let acwxRtn = 0;
let aggRtn = 0;
let allReturns = [];
let nextYearFirst = "";

// For loop first to get current return order then loop long enough to see how long number one was number one
for ( let i = 0 ; i < 100 ; i++ ) {

	allReturns = [];
//	let oneRate = 0;
//	let twoRate = 0;
//	let threeRate = 0;
//	let fourRate = 0;
//	let treasuryRtn = 0;
// Get latest retun of the three and push into array
	spRtn = ((spPrice[i].price - spPrice[i+12].price) / spPrice[i+12].price) * 100;
	allReturns.push(spRtn);
	acwxRtn = ((acwxPrice[i].price - acwxPrice[i+12].price) / acwxPrice[i+12].price) * 100;
	allReturns.push(acwxRtn);
	aggRtn = ((aggPrice[i].price - aggPrice[i+12].price) / aggPrice[i+12].price) * 100;
	allReturns.push(aggRtn);

/*	This captures the 3 month Treasury Bill
	oneRate = treasuryBills[i+12].threeMonth / 100;
	twoRate = treasuryBills[i+9].threeMonth / 100;
	threeRate = treasuryBills[i+6].threeMonth / 100;
	fourRate = treasuryBills[i+3].threeMonth / 100;

	treasuryRtn = oneRate + (oneRate * twoRate / 4);
	treasuryRtn = treasuryRtn + (treasuryRtn * threeRate / 4);
	treasuryRtn = treasuryRtn + (treasuryRtn * fourRate / 4);
	treasuryRtn = treasuryRtn * 100;
	allReturns.push(treasuryRtn);
*/

// Sort array to get the highest first
	allReturns.sort((a,b) => {
		if (a > b) {
			return -1;
		} else {
			return 1;
		}
	});
// For first time through sorting our the highest current returns and matching with asset
	if (i === 0) {

		lastYearResults.firstPercentage = allReturns[0].toFixed(1);
		lastYearResults.secondPercentage = allReturns[1].toFixed(1);
		lastYearResults.thirdPercentage = allReturns[2].toFixed(1);

		if(spRtn === allReturns[0]) {
			lastYearResults.first = "US Equities";
		} else if (spRtn === allReturns[1]) {
			lastYearResults.second = "US Equities";
		} else {
			lastYearResults.third = "US Equities";
		}

		if(acwxRtn === allReturns[0]) {
			lastYearResults.first = "World Equities ex US";
		} else if (acwxRtn === allReturns[1]) {
			lastYearResults.second = "World Equities ex US";
		} else {
			lastYearResults.third = "World Equities ex US";
		}
		if(aggRtn === allReturns[0]) {
			lastYearResults.first = "Bonds";
		} else if (aggRtn === allReturns[1]) {
			lastYearResults.second = "Bonds";
		} else {
			lastYearResults.third = "Bonds";
		}
/*
		if(treasuryRtn === allReturns[0]) {
			lastYearResults.first = "Three Month Treasuy Bills";
		} else if (treasuryRtn === allReturns[1]) {
			lastYearResults.second = "Three Month Treasuy Bills";
		} else {
			lastYearResults.third = "Three Month Treasuy Bills";
		}
*/
	}
// Setting up for single month asset verbage
	if (spRtn === allReturns[0]) {
		nextYearFirst = "US Equities";
	} else if (acwxRtn === allReturns[0]) {
		nextYearFirst = "World Equities ex US";
	} else {
		nextYearFirst = "Bonds";
//		nextYearFirst = "Three Month Treasuy Bills";
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