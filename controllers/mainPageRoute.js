
const express = require("express");
const request = require("request");
const router = express.Router();


let spPrice = require("../queryData/spPrice.js");

let assetClasses = require("../public/javascript/selectAssetClass.js");
let lastYearResults = assetClasses.lastYearResults;

let dateData = require("../public/javascript/refineDate.js");
let splitDate = dateData.divideDate;
let dateArray = splitDate(spPrice[0].date);
let correctMonth = dateArray[1] + " " + dateArray[0];


router.get("/", (req, res) => {


	res.render("mainPage", { correctMonth, lastYearResults });
});


module.exports = router;