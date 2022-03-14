const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/orders/cart
router.get('/cart', ensureLoggedIn, ordersCtrl.cart);
console.log('routes happy')
// POST /api/orders/cart/items/:id
router.post('/cart/soaps/:id', ensureLoggedIn, ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ensureLoggedIn, ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', ensureLoggedIn, ordersCtrl.setSoapQtyInCart);

module.exports = router;
