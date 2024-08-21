const ServiceablePincodeSchema = new mongoose.Schema(
  {
    pincode: { type: String, unique: true, required: true }, // Unique Pincode
    placeName: { type: String, required: true }, // Name of the place or locality
    address: { type: String, required: true }, // Address associated with the pincode
    branches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Branch" }], // References to branches or franchises in this pincode
    serviceStatus: {
      type: String,
      enum: ["Serviceable", "Non-Serviceable", "Limited"],
      default: "Serviceable",
      required: true,
    }, // Status of serviceability in this pincode
    managerId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // Optional: Manager responsible for this pincode, if specific
  },
  { timestamps: true }
);
