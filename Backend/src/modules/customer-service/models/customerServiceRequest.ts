// models/supportTicket.js
import mongoose from "mongoose";

const customerServiceRequestSchema = new mongoose.Schema(
  {
    ticketId: { type: String, unique: true, required: true },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    issueDescription: { type: String, required: true },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open",
    },
    createdAt: { type: Date, default: Date.now },
    resolvedAt: Date,
  },
  {
    timestamps: true,
  }
);
export const CustomerServiceRequest = mongoose.model<any>(
  "CustomerServiceRequest",
  customerServiceRequestSchema
);
