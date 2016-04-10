var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Database connection is open");
});

var songSchema = mongoose.Schema({
    name: String,
    path: String,
    type: String,
    artist: String
});

module.exports = mongoose.model("Song", songSchema);