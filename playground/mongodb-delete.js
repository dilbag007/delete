const { MongoClient, ObjectID } = require("mongodb");

const URL = "mongodb://localhost:27017";
var dbName = "test";

MongoClient.connect(URL, (err, db) => {
    if (err) {
        return console.log("Unable to connect to Database");
    }

    console.log("Connected to Database");

    var dbo = db.db(dbName);

    // dbo
    //     .collection("Todo")
    //     .insert({ name: "dilbag", age: 24 })
    //     .then(
    //         (data) => {
    //             console.log(data);
    //         },
    //         (err) => {
    //             console.log("data not inserted", err);
    //         }
    //     );

    // dbo
    //     .collection("Todo")
    //     .deleteMany({ name: "Company Inc" })

    // .then((data) => {
    //     console.log(JSON.stringify(data));
    // });

    // dbo
    //     .collection("Todo")
    //     .deleteOne({ name: "dilbag" })

    // .then((data) => {
    //     console.log(JSON.stringify(data));
    // });

    dbo
        .collection("Todo")
        .findOneAndDelete({ name: "dilbag" })

    .then((data) => {
        console.log(JSON.stringify(data));
    });

    db.close();
});