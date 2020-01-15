
let treasuryBills = require("../../queryData/treasuryBills.js");
let spPrice = require("../../queryData/spPrice.js");

let dateData = require("../../public/javascript/refineDate.js");
let splitDate = dateData.divideDate;
let monthsList = dateData.monthsOfYear;

let fromWhenToBills = require("../../public/javascript/whenToBills.js");
let treasuryDates = fromWhenToBills.allDates;

let treasuryFuture = 0;
let spFuture = 0;
let averageTimes = 0;
let averageReturn = 0;
let missedMonth = "";
let missedYear = 0;
let monthNum = 0;
let nextMonth = "";
let listOfMissed = [];


for ( let i = treasuryDates.length ; i > 0 ; i-- ) {
	if (treasuryDates[i-1] - treasuryDates[i] === 1 || treasuryDates[i-1] - treasuryDates[i] === 89) {
		treasuryDates.splice(i, 1);
	}
}
//console.log(treasuryDates);

for ( let i = 0 ; i < treasuryDates.length ; i++ ) {

	for ( let j = 0 ; j < 194 ; j++ ) {

		if (treasuryDates[i] === spPrice[j].date) {

			treasuryFuture = treasuryBills[j-1].threeMonth / 12;

			spFuture = ((spPrice[j-1].price - spPrice[j].price) / spPrice[j].price) * 100;

			averageTimes++;
			averageReturn = averageReturn + spFuture;

			treasuryFuture = treasuryFuture.toFixed(2);
			spFuture = spFuture.toFixed(1);
		}

		missedYear = splitDate(treasuryDates[i])[0];
		missedMonth = splitDate(treasuryDates[i])[1];
		monthNum = splitDate(treasuryDates[i])[2];
		if (monthNum === 11) {
			nextMonth = monthsList[0];
		} else {
			nextMonth = monthsList[monthNum];
		}

		listOfMissed[i] = {year: missedYear, month: missedMonth, plusMonth: nextMonth, returnT: treasuryFuture, returnSP: spFuture};	
	}
}

averageReturn = averageReturn / averageTimes;
averageReturn = averageReturn.toFixed(1);


module.exports = { listOfMissed, averageReturn };