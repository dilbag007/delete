const { MongoClient, ObjectID } = require("mongodb");

const URL = "mongodb://localhost:27017";
var dbName = "test";

MongoClient.connect(URL, { useUnifiedTopology: true }, (err, db) => {
    if (err) {
        return console.log("Unable to connect to Database");
    }

    console.log("Connected to Database");

    var dbo = db.db(dbName);

    // dbo
    //     .collection("Todo")
    //     .find({ _id: new ObjectID("5eed7b26bbfcfb42b8998645") })
    //     .toArray()
    //     .then(
    //         (docs) => {
    //             console.log("Todos");
    //             console.log(JSON.stringify(docs, undefined, 2));
    //         },
    //         (err) => {
    //             console.log("unable to Fatch data", err);
    //         }
    //     );

    dbo
        .collection("Todo")
        .find({})
        .count()
        .then(
            (count) => {
                console.log("Todos");
                console.log(JSON.stringify(count));
            },
            (err) => {
                console.log("unable to Fatch data", err);
            }
        );

    db.close();
});