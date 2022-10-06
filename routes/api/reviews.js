const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews')

// router.get('/', reviewsCtrl.index)
router.post('/new', reviewsCtrl.create);
console.log('router hit')
// router.delete('/:id', reviewsCtrl.deleteReview);


module.exports = router;