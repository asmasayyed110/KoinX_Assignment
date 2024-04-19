const express = require('express');

const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const route = require('./routes/route.js');
const { json } = require('body-parser');
const app = express();
const db=require("./DBConnection/dbconnect.js")
app.use(bodyParser.json());

app.use('/', route);    //parse incoming request body in JSON FORMAT

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))    //Listen for incoming requests
});