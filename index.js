const express = require('express');

const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const route = require('./routes/route.js');
const { json } = require('body-parser');
const app = express();
const db=require("./DBConnection/dbconnect.js")
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect("mongodb://localhost:27017/KoinX", {    //Connecting to the Database 
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )

app.use('/', route);    //parse incoming request body in JSON format

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))    //Listen for incoming requests
});