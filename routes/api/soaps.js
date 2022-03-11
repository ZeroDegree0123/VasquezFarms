const express = require('express');
const router = express.Router();
const soapsCtrl = require('../../controllers/api/soaps')

router.get('/', soapsCtrl.index)
router.post('/new', soapsCtrl.create)
router.get('/:id', soapsCtrl.show)
console.log('routes happy')

module.exports = router;