const Order = require('../../models/order');
const User = require("../../models/user");

module.exports = {
  cart,
  addToCart,
  setSoapQtyInCart,
  checkout,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  console.log('ctrl happy')
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an soap to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addSoapToCart(req.params.id);   
  res.json(cart);
}

// Updates an soap's qty in the cart
async function setSoapQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setSoapQty(req.body.soapId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}