const express = require("express");
const router = express.Router();
const path = require("path");
const {create, findOne} = require("../controller/authControlle")
router
    .route("/")
    .get((req, res) => findOne(req,res)

    ).post((req,res) => create(req,res))

module.exports = router;