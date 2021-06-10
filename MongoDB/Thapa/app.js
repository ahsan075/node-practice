const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/ahsan", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected"))
    .catch((error) => console.log("Not Connected" + error));

const playlistSchema = new mongoose.Schema({
    name: { type: String, require: true },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now,
    },
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

// const createDocument = async () => {
//     try {
//         const reactPlaylist = new Playlist({
//             name: "React Js",
//             ctype: "Front End",
//             videos: 80,
//             author: "Ahsan Shakil",
//             active: true,
//         });

//         const result = await reactPlaylist.save();
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// };

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "React Js",
            ctype: "Front End",
            videos: 30,
            author: "Ahsan Shakil",
            active: true,
        });
        const jsPlaylist = new Playlist({
            name: "Js",
            ctype: "Front End",
            videos: 40,
            author: "Shakil",
            active: true,
        });

        const phpPlaylist = new Playlist({
            name: "Php",
            ctype: "Back End",
            videos: 60,
            author: "Ahsan",
            active: true,
        });

        const result = await Playlist.insertMany([
            reactPlaylist,
            jsPlaylist,
            phpPlaylist,
        ]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

// createDocument();

// const getDocument = async () => {
//     const result = await Playlist.find({
//         ctype: { $nin: ["Front End"] },
//     }).select({
//         name: 1,
//     });
//     // .limit(2);
//     console.log(result);
// };

// const getDocument = async () => {
//     const result = await Playlist.find({
//         $nor: [{ ctype: "Back End" }, { author: "Ahsan" }],
//     }).select({
//         name: 1,
//     });
//     // .limit(2);
//     console.log(result);
// };

const getDocument = async () => {
    const result = await Playlist.find()
        .select({
            name: 1,
        })
        .sort({ name: -1 });
    // .countDocuments();
    // .limit(2);
    console.log(result);
};

getDocument();
