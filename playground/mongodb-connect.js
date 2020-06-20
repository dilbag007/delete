const { MongoClient, ObjectID } = require("mongodb");

const URL = "mongodb://localhost:27017";
var dbName = "test";

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(URL, { useUnifiedTopology: true }, (err, db) => {
    if (err) {
        return console.log("Unable to connect to Database");
    }

    console.log("Connected to Database");

    var dbo = db.db(dbName);

    db.close();
});