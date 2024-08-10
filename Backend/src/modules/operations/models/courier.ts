import mongoose from "mongoose";

export const courierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    employeeId: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
    shipments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shipment' }],
    assignedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  