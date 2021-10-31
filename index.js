const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

// main config
require("dotenv").config();
const PORT = process.env.APP_PORT || 8080;
const URL = process.env.APP_URL || "0.0.0.0";
const corsOptions = {
  origin: `${URL}`,
};

// init server
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// enabling CORS for all requests
app.use(cors(corsOptions));

// Your route here:
app.get("/", (req, res) => {
  res.send("Welcome to YouTube Downloader");
});

// starting the server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${URL}:${PORT}`);
});