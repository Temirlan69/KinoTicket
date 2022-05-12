const express = require("express");
const router = express.Router();
const path = require("path");
const {create} = require("../controller/authControlle")
router
    .route("/")
    .get((req, res) => {
        res.render('genre.ejs');
    }).post((req,res) => create(req,res))

module.exports = router;