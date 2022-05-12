const express = require("express");
const router = express.Router();
const path = require("path");
const {create} = require("../controller/authControlle");
router
    .route("/")
    .get((req, res) => {
        res.render('index.ejs');
    })

module.exports = router;