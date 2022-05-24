const express = require('express');
const router = express.Router();
const controller = require("../controller/productController");

router.get('/', controller.create_form);
router.post('/', controller.create)

router.get('/all', controller.get_all);
// router.get('/all/:username', controller.get_one);

module.exports = router;