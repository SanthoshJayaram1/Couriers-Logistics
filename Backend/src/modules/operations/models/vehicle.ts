import mongoose from "mongoose";

export const vehicleSchema = new mongoose.Schema({
    vehicleId: { type: String, unique: true, required: true },
    type: { type: String, enum: ['Bike', 'Van', 'Truck'], required: true },
    licensePlate: { type: String, unique: true, required: true },
    courierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Courier' },
    capacity: Number,
    currentLocation: {
      latitude: Number,
      longitude: Number
    },
    status: { type: String, enum: ['Available', 'In Use', 'Maintenance'], default: 'Available' },
    updatedAt: { type: Date, default: Date.now }
  });
  