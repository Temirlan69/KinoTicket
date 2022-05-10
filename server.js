const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const app = express();
// const port = 3000;
app.set("views engine", "ejs");
app.use(express.static("assets"));
app.use(express.json())
app.use("/", require("./routes/root"));
app.use("/about", require("./routes/about"));
app.use("/genre", require("./routes/genre"));
app.use("/index", require("./routes/index"));
app.use("/contact",require("./routes/contact"));
app.use("/auth", authRouter);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://qwerty:qwert123@cluster0.uweoq.mongodb.net/KinoTicket?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`App listening at http://localhost:${port}`))
    } catch (e) {
        console.log(e)
    }
}



