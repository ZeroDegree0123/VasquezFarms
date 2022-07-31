const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

router.get('/', categoriesCtrl.index)
router.post('/new', categoriesCtrl.create)

module.exports = router;