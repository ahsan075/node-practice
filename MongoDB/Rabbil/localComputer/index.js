const Client = require("mongodb").MongoClient;

const url = `mongodb://127.0.0.1:27017/`;
const config = { useUnifiedTopology: true };

Client.connect(url, config, function (error, result) {
    if (error) {
        console.log("Connection Failed");
    } else {
        console.log("Connected Successfully");
        // InsertData(result);
    }
});

function InsertData(result) {
    const myDataBase = result.db("school");
    const myCollection = myDataBase.collection("students");

    const myData = { name: "Ahsan", class: "10", roll: "01" };

    myCollection.insertOne(myData, function (error) {
        if (error) {
            console.log("Insert Failed");
        } else {
            console.log("Insert Successfully");
        }
    });
}
