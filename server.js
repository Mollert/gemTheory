
const express = require("express");
const request = require("request");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
const router = express.Router();
const port = process.env.PORT || 4400;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname ,"public")));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname ,"views"));

const mainPage = require("./controllers/mainPageRoute.js");
const whenToBillsPage = require("./controllers/whenToBillsRoute.js");
const afterBillsPage = require("./controllers/afterBillsRoute.js");

app.use("/", mainPage);
app.use("/whenToBills", whenToBillsPage);
app.use("/afterBills", afterBillsPage);

app.listen(port, () => console.log(`Tuned In and Turned On to port ${port}`));