var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var Url = "mongodb://localhost:27017/TodoApp";

mongoose.connect(Url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { mongoose };