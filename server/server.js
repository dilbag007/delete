var express = require("express");
const bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose.js");
var { Todo } = require("./models/todo.js");
var { User } = require("./models/user.js");
var app = express();

var port = 3000;

app.use(bodyParser.json()); //used to parse string data to Json for http requests...
app.post("/todo", (req, res) => {
    console.log(req.body);
    var newTodo = new Todo(req.body);
    newTodo.save().then(
        (result) => {
            res.send(result);
        },
        (err) => {
            res.send(err);
        }
    );
});

app.listen(port, () => {
    console.log("server is running on port:", port);
});