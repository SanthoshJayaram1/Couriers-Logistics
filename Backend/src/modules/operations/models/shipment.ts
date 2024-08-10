import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema(
  {
    shipmentId: { type: String, unique: true, required: true },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    courierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courier",
      required: true,
    },
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    pickupAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    deliveryAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    shipmentDate: { type: Date, default: Date.now },
    deliveryDate: Date,
    status: {
      type: String,
      enum: ["In Transit", "Delivered", "Delayed", "Cancelled"],
      default: "In Transit",
    },
    trackingHistory: [
      {
        status: String,
        location: String,
        timestamp: Date,
      },
    ],
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Shipment = mongoose.model<any>("Shipment", shipmentSchema);
