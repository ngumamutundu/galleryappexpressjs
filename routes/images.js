const mongoose = require("mongoose");
// define image schema
const imageSchema = new mongoose.Schema({
    name: String,
    path: String,
    date: Date
});

// define image class and export
module.exports = new mongoose.model('Image', imageSchema);