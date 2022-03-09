const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/users');

router.post('/new', categoriesCtrl.create)

module.exports = router;