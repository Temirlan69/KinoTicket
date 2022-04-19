const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("assets"));
app.use("/", require("./routes/root"));
app.use("/about", require("./routes/about"));
app.use("/genre", require("./routes/genre"));
app.use("/index", require("./routes/index"));
app.use("/contact",require("./routes/contact"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
)




