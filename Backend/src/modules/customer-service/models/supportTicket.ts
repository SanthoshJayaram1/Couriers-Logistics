// models/supportTicket.js
import mongoose from 'mongoose';

export const supportTicketSchema = new mongoose.Schema({
  ticketId: { type: String, unique: true, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved', 'Closed'], default: 'Open' },
  createdAt: { type: Date, default: Date.now },
  resolvedAt: Date
});

