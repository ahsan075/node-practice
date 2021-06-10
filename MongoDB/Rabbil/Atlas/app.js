// Require MongoDB DataBase //

const Client = require("mongodb").MongoClient;

// MongoDB Compas URL //

const url =
    "mongodb+srv://ahsan:Ahsan075@cluster0.yl1tg.mongodb.net?retryWrites=true&w=majority";

// Database Configuration //

const config = { useUnifiedTopology: true };

// Connect With DataBase //

Client.connect(url, config, function (error, result) {
    if (error) {
        console.log("connection failed");
    } else {
        console.log("connected successfully");
        // insertData(result);
        // DeleteOneItem(result);
        // DeleteAllItem(result);
        // FindWithout(result);
        // FindWith(result);
        // FindAll(result);
        // FindProjection(result);
        // FindQuery(result);
        // FindLimit(result);
        // FindSort(result);
        // UpdateDataOne(result);
        // CreateNewCollection(result)
        // DeleteCollection(result);
    }
});

// Insert Data //

function insertData(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    const MyData = { name: "Ahsan", Roll: "02", Class: "Ten", City: "Dhaka" };

    myCollection.insertOne(MyData, function (error) {
        if (error) {
            console.log("Data Insert failed");
        } else {
            console.log("Data Insert successfully");
        }
    });
}

// Delete One by one Datas //

function DeleteOneItem(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    const deleteObj = { Roll: "01" };

    myCollection.deleteOne(deleteObj, function (error) {
        if (error) {
            console.log("Data Delete failed");
        } else {
            console.log("Data Delete successfully");
        }
    });
}

// Delete All Datas //

function DeleteAllItem(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    myCollection.deleteMany(function (error, rslt) {
        if (error) {
            console.log("Data Delete failed");
        } else {
            console.log(
                "Data Delete successfully \n" + rslt.result.n + " Items Deleted"
            );
        }
    });
}

// Find Without Condition //

function FindWithout(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    const FindObj = {};
    myCollection.findOne(FindObj, function (error, rslt) {
        console.log(rslt);
    });
}

// Find With Condition //

function FindWith(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    const FindObj = { Roll: "03" };
    myCollection.findOne(FindObj, function (error, rslt) {
        console.log(rslt);
    });
}

// Find All Data //

function FindAll(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    myCollection.find().toArray(function (error, rslt) {
        console.log(rslt);
    });
}

// Find All Data By Projection //

function FindProjection(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    let ItemObj = {};
    let ItemProjection = { projection: { Class: 1, Roll: 1 } };

    myCollection.find(ItemObj, ItemProjection).toArray(function (error, rslt) {
        console.log(rslt);
    });
}

// Find All Data With Query //

function FindQuery(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    let query = { City: "Dhaka", Roll: "03" };

    myCollection.find(query).toArray(function (error, rslt) {
        console.log(rslt);
    });
}

// Find All Data With Limit //

function FindLimit(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    myCollection
        .find()
        .limit(2)
        .toArray(function (error, rslt) {
            console.log(rslt);
        });
}

// Find All Data With Sort //

function FindSort(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    // const sortPattern = { Roll: 1 };
    const sortPattern = { Roll: -1 };

    myCollection
        .find()
        .sort(sortPattern)
        .toArray(function (error, rslt) {
            console.log(rslt);
        });
}

// Update Data One //

function UpdateDataOne(result) {
    const myDataBase = result.db("Students");

    const myCollection = myDataBase.collection("lists");

    const query = { Roll: "03" };
    const newValue = { $set: { name: "Ahsan Ullah Shakil", City: "ChandPur" } };

    myCollection.updateOne(query, newValue, function (error, rslt) {
        console.log(rslt);
    });
}

// Create New Collection //

function CreateNewCollection(result) {
    const myDataBase = result.db("Students");
    myDataBase.createCollection("teachers", function (error, rslt) {
        console.log(rslt);
    });
}

// Delete Collection //

function DeleteCollection(result) {
    const myDataBase = result.db("Students");
    myDataBase.dropCollection("teachers", function (error, rslt) {
        console.log(rslt);
    });
}
