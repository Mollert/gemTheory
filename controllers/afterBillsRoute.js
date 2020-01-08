
const express = require("express");
const request = require("request");
const router = express.Router();


let fillPage = require("../public/javascript/afterBills.js");
let justMissed = fillPage.listOfMissed;
let avReturn = fillPage.averageReturn;


router.get("/", (req, res) => {


	res.render("afterBillsPage", { justMissed, avReturn });
});


module.exports = router;