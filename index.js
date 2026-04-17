const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const login = require("./models/login.js");
const methodOverride = require("method-override");
const port = 6000;

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));




main()
    .then(() => {
        console.log("connection is succesfull");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/foxshop');
}


// app.post("/home", (req, res) => {
//     let { user, email, pass } = req.body;
//     let newdata = new login({
//         user: user,
//         email: email,
//         pass: pass,

//     });
//     newdata.save().then((res) => {
//         console.log("data was saved");
//     })
//         .catch((err) => {
//             console.log(err);
//         });

//     // res.redirect("/chats");
// });


app.get("/", (req, res) => {
    res.render("index.html");
})

app.listen(port, () => {
    console.log(`listening on port ${port}. `);
});