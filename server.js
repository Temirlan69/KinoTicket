const express = require("express");
const ejs = require("ejs");
const app = express();
// const port = 3000;
app.set("views engine", "ejs");
app.use(express.static("assets"));
app.use("/", require("./routes/root"));
app.use("/about", require("./routes/about"));
app.use("/genre", require("./routes/genre"));
app.use("/index", require("./routes/index"));
app.use("/contact",require("./routes/contact"));
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
)



