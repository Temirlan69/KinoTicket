const express = require("express");
const ejs = require("ejs");
const app = express();
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
// const port = 3000;
app.set("views engine", "ejs");
app.use(express.static("assets"));
app.use("/", require("./routes/root"));
app.use("/about", require("./routes/about"));
app.use("/genre", require("./routes/genre"));
app.use("/index", require("./routes/index"));
app.use("/contact",require("./routes/contact"));
let port = process.env.PORT || 8000;
if (port == null || port == "") {
    port = 8000;
}
const UserRoute = require('./routes/UserRoute')
app.use('/genre/user', UserRoute)

const dbConfig = require('./config/data.config');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");
const {destroy, findAll, findOne, create} = require("./controller/authControlle");
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
)




