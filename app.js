
// Import express package
const express = require('express');

let indexRouter = require('./routes/index');

// Initialize express
const app = express();

// Set up a view engine
app.set('view engine', 'ejs');


// Set a static folder
app.use(express.static('public'));

// Define the index router
app.use('/', indexRouter);

//conecting to mongodb
const mongoose = require("mongoose");

let DB_NAME = process.env.DB_NAME;
let DB_USER = process.env.DB_USER;
let DB_PASS = process.env.DB_PASS;
let DB_URL = process.env.DB_URL
let db_url = "mongodb+srv://" + DB_USER + ":" + DB_PASS + "@galleryapp.xziuwg7.mongodb.net/" +DB_NAME;
console.log(db_url);
let option = {
    maxPoolSize:10,
    family:4
};
mongoose.connect(db_url,option);
let db = mongoose.connection
db.once("open",() => {
    console.log("Successful connection to the database");
});

db.on("error", ()=> {
    console.log("Connection to DB failed");
});


// Define the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
});