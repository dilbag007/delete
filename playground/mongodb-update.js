const { MongoClient, ObjectID } = require("mongodb");

const URL = "mongodb://localhost:27017";
var dbName = "test";

MongoClient.connect(URL, { useNewUrlParser: true }, (err, db) => {
    if (err) {
        return console.log("Unable to connect to Database");
    }

    console.log("Connected to Database");

    var dbo = db.db(dbName);

    dbo
        .collection("Todo")
        .findOneAndUpdate({ name: "Raj" }, { $set: { name: "Dilbag" }, $inc: { age: 1 } }, { returnOriginal: false })
        .then((result) => {
            console.log(result);
        });

    db.close();
});