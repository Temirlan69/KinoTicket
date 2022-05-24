const express = require("express");
const router = express.Router();
const path = require("path");
const {findOne} = require("../controller/authControlle")
router
    .route("/")
    .get((req, res) => {
        res.render('login');
    }).post((req,res) => findOne(req,res))

module.exports = router;