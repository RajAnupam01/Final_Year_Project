const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user: String,
    items: Array,
    totalPrice: Number,
    timestamp: { type: Date, default: Date.now }, 
  });
  

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;