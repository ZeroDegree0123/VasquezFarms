const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');
// const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get('/', categoriesCtrl.index)
console.log('routes happy')
router.post('/new', categoriesCtrl.create)

module.exports = router;