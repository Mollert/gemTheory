
const express = require("express");
const request = require("request");
const router = express.Router();


let assetClasses = require("../public/javascript/selectAssetClass.js");
let lastYearResults = assetClasses.lastYearResults;


router.get("/", (req, res) => {

// Site is updated to this month
	let correctMonth = "November 2019";

	res.render("mainPage", { correctMonth, lastYearResults });
});


module.exports = router;
