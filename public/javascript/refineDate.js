
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const divideDate = (combined) => {
	let dateCombo = [];
	let theYear = "";
	let theEnd = "";
	let theMonth = "";

	combined = combined.toString();
	theYear = combined.slice(0, -2);

	theEnd = combined.slice(-2);
	theEnd = Number(theEnd);
	theMonth = monthsOfYear[theEnd-1];

	dateCombo.push(theYear);
	dateCombo.push(theMonth);
	dateCombo.push(theEnd);

	return dateCombo;
}


module.exports = { divideDate, monthsOfYear };
