const mongoose = require("mongoose");

const MongoDB_URI = "mongodb://localhost:27017/PlacementCell";
mongoose.connect(process.env.MongoDB_URI || MongoDB_URI);

const db = mongoose.connection;

db.addListener(
  "error",
  console.error.bind(console, "Error connection to mongodb")
);

db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});

module.exports = db;
