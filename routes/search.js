const express = require("express");
const search_router = express.Router();

search_router.post("/search",(req,res)=>{
    console.log("Received image saved on DB")
});

module.exports = search_router;
