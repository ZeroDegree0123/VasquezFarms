const express = require('express');
const router = express.Router();
const soapsCtrl = require('../../controllers/api/soaps')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', soapsCtrl.index)
router.post('/new', soapsCtrl.create)
router.get('/:id', soapsCtrl.show)
router.post('/:id/review', soapsCtrl.createReview)


module.exports = router;