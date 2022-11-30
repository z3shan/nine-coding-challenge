const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const xss = require('xss-clean');
const helmet = require('helmet');
const cors = require("cors");
const router = require("./routes/router");
const app = express();
const errorHandler = require("./middlewares");
// enable cors
app.use(cors());
app.options('*', cors());

app.use(helmet());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

app.use(bodyParser.json());

app.use(router);
//middleware for error handling
app.use(errorHandler);

module.exports = app;