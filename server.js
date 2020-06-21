const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        trim: true,
        required: true,
        minlength: 1,
    },
    completed: {
        type: Boolean,
        default: true,
    },
    completedAt: {
        type: Number,
        default: null,
    },
});

var newTodo = new Todo({
    text: "This is my Todo 2",
});

newTodo.save().then(
    (doc) => {
        console.log("Data saved", doc);
    },
    (e) => {
        console.log("Unable to save", e);
    }
);