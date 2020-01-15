
let spPrice = require("../../queryData/spPrice.js");
let msciExUSA = require("../../queryData/msciExUSA.js");
let aggPrice = require("../../queryData/aggPrice.js");

let dateData = require("../../public/javascript/refineDate.js");
let splitDate = dateData.divideDate;


let spRtn = 0;
let msciRtn = 0;
let aggRtn = 0;
let allDates = [];
let aYear = "";
let aMonth = "";
let aggResults = [];
let resultsEntries = 0;
let dataEntries = 0;


//for ( let i = 0 ; i < (spPrice.length-12) ; i++ ) {
for ( let i = 0 ; i < 182 ; i++ ) {

	spRtn = 0;
	msciRtn = 0;
	aggRtn = 0;

	spRtn = ((spPrice[i].price - spPrice[i+12].price) / spPrice[i+12].price) * 100;
	msciRtn = ((msciExUSA[i].price - msciExUSA[i+12].price) / msciExUSA[i+12].price) * 100;
	aggRtn = ((aggPrice[i].price - aggPrice[i+12].price) / aggPrice[i+12].price) * 100;

	
	if (aggRtn > spRtn && aggRtn > msciRtn) {
		spRtn = spRtn.toFixed(1);
		msciRtn = msciRtn.toFixed(1);
		aggRtn = aggRtn.toFixed(1);		
//		aggResults.push("For " + separateDate(spPrice[i].date) + ", bonds did " + aggRtn + "% while the S&P did " + spRtn + "% and the world did " + msciRtn + "%.");

		allDates.push(spPrice[i].date);

		aYear = splitDate(spPrice[i].date)[0];
		aMonth = splitDate(spPrice[i].date)[1];

//		console.log(aYear + " " + aMonth);

		if (aggResults.length === 0) {
			aggResults[0] = {year: aYear, data: []};		
			aggResults[0].data[0] = {month: aMonth, bReturn: aggRtn, spReturn: spRtn, wReturn: msciRtn};

//			console.log(aggResults);

		} else {
			resultsEntries = aggResults.length;

//			console.log(resultsEntries);

			if (aggResults[resultsEntries-1].year === aYear) {
				dataEntries = (aggResults[resultsEntries-1].data).length;
				aggResults[resultsEntries-1].data[dataEntries] = {month: aMonth, bReturn: aggRtn, spReturn: spRtn, wReturn: msciRtn};

//				console.log(aggResults);

			} else {
				aggResults[resultsEntries] = {year: aYear, data: []};		
				aggResults[resultsEntries].data[0] = {month: aMonth, bReturn: aggRtn, spReturn: spRtn, wReturn: msciRtn};				
			}
		}
	}
}

//console.log(aggResults);

//console.log(separateDate(spPrice[110].date));
/*
let treasuryResults = [
	{
		year: 2001,
		data: [
			{
			month: "May",
			bReturn: 3.4,
			spReturn: -11.7,
			wReturn: -9.5
			}
		]
	},{
		year: 1992,
		data: [
			{
			month: "October",
			bReturn: 6.8,
			spReturn: -4.2,
			wReturn: 1.2
			}
			,{
			month: "June",
			bReturn: 10.2,
			spReturn: 3.9,
			wReturn: -4.7	
			}
		]
	}
];
*/
//console.log(treasuryResults[0].data[0].month);
//console.log(treasuryResults[1].year);
//console.log(treasuryResults[1].data[1].spReturn);


module.exports = { aggResults, allDates };