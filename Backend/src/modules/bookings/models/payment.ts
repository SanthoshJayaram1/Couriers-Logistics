import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    paymentId: { type: String, unique: true, required: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    paymentMethod: { type: String, enum: ['Credit Card', 'Debit Card', 'Net Banking', 'UPI'], required: true }
  });
  