const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const soapSchema = require('./soapSchema');

// Add schema below
const lineSoapSchema = new Schema({
  // Set qty to 1 when new item pushed into lineItems
  qty: { type: Number, default: 1 },
  soap: soapSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineSoapSchema.virtual('extPrice').get(function () {
return this.qty * this.soap.price;
});

const orderSchema = new Schema({
    // An order belongs to a user
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // Embed an order's line items is logical
    lineSoaps: [lineSoapSchema],
    // A user's unpaid order is their "cart"
    isPaid: { type: Boolean, default: false },
  }, {
    timestamps: true, 
    toJSON: { virtuals: true }
  });

  orderSchema.virtual('orderTotal').get(function () {
    return this.lineSoaps.reduce((total, soap) => total + soap.extPrice, 0);
  });
  
  orderSchema.virtual('totalQty').get(function () {
    return this.lineSoaps.reduce((total, soap) => total + soap.qty, 0);
  });
  
  orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
  });

  orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
      // query
      { user: userId, isPaid: false },
      { user: userId },
      { upsert: true, new: true }
    );
  };

  orderSchema.methods.addSoapToCart = async function(soapId) {
    const cart = this;
    // Check if item already in cart
    const lineSoap = cart.lineSoaps.find(lineSoap => lineSoap.soap._id.equals(soapId));
    if (lineSoap) {
      lineSoap.qty += 1;
    } else {
      const soap = await mongoose.model('Soap').findById(soapId);
      cart.lineSoaps.push({ soap });
    }
    return cart.save();
  };
  
  // Instance method to set an item's qty in the cart (will add item if does not exist)
  orderSchema.methods.setSoapQty = function(soapId, newQty) {
    // this keyword is bound to the cart (order doc)
    const cart = this;
    // Find the line item in the cart for the menu item
    const lineSoap = cart.lineSoaps.find(lineSoap => lineSoap.soap._id.equals(soapId));
    if (lineSoap && newQty <= 0) {
      // Calling remove, removes itself from the cart.lineItems array
      lineSoap.remove();
    } else if (lineSoap) {
      // Set the new qty - positive value is assured thanks to prev if
      lineSoap.qty = newQty;
    }
    // return the save() method's promise
    return cart.save();
  };
  
  module.exports = mongoose.model('Order', orderSchema);