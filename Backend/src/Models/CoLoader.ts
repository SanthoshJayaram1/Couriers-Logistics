const CoLoaderSchema = new mongoose.Schema(
  {
    coLoaderId: { type: String, unique: true },
    name: { type: String, required: true },
    vehicleName: { type: String },
    serviceRoute: { type: String, required: true }, // E.g., "Guwahati to Bangalore"
    destination: { type: String, required: true }, // Final destination city
    vehicleNumber: { type: String },
    driverContactNumber: { type: String, required: true },
    driverEmailId: { type: String },
    fromAddress: { type: String, required: true },
    fromPincode: { type: String, required: true },
  },
  { timestamps: true }
);
