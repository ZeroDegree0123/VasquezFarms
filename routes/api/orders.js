const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/cart', ensureLoggedIn, ordersCtrl.cart);
router.get('/history', ensureLoggedIn, ordersCtrl.orderHistory)
router.post('/cart/soaps/:id', ensureLoggedIn, ordersCtrl.addToCart);
router.post('/cart/checkout', ensureLoggedIn, ordersCtrl.checkout);
router.put('/cart/qty', ensureLoggedIn, ordersCtrl.setSoapQtyInCart);

module.exports = router;
