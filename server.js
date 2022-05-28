const express = require("express");
let port = process.env.PORT | 8000;

// const ejs = require("ejs");
const app = express();
const methodOverride = require('method-override')
const expressSession = require('express-session')
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')

app.use(expressSession({
    secret: 'keyboard cat'
}))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

// const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("assets"));


app.use(methodOverride('_method'))

// if (port == null || port == "") {
//     port = 8000;
// }
/* FILE UPLOAD (IMAGE) */
const fileUpload = require('express-fileupload')
app.use(fileUpload())

const UserRoute = require('./routes/UserRoute')
app.use('/genre/user', UserRoute)

const dbConfig = require('./config/data.config');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");
const {destroy, findAll, findOne, create} = require("./controller/authControlle");

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {useNewUrlParser: true})
    .then(() => {
        console.log("Database Connected Successfully!!");
    }).catch(err => {
        console.log('Could not connect to the database', err);
        process.exit();
    });


app.use("/about", require("./routes/about"));
app.use("/genre", require("./routes/genre"));
app.use("/", require("./routes/index"));
app.use("/contact",require("./routes/contact"));
app.use("/booking",require("./routes/booking"));

app.use("/product",require("./routes/product"));

app.use("/login",require("./routes/login"))
app.use("/profile",require("./routes/profile"))
app.use("/after",require("./routes/after"))



app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
)




