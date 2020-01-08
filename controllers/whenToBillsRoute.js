
const express = require("express");
const request = require("request");
const router = express.Router();


let goingToTreasurys = require("../public/javascript/whenToBills.js");
let whenTreasurys = goingToTreasurys.aggResults;
//console.log(goingToTreasurys.aggResults);


router.get("/", (req, res) => {


	res.render("whenToBillsPage", { whenTreasurys });
});


module.exports = router;