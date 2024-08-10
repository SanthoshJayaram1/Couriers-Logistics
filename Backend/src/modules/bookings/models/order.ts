// models/order.js
import mongoose from 'mongoose';

export const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  items: [{ description: String, weight: Number, quantity: Number, price: Number }],
  totalPrice: Number,
  status: { type: String, enum: ['Pending', 'Dispatched', 'Delivered', 'Cancelled'], default: 'Pending' },
  orderDate: { type: Date, default: Date.now },
});

