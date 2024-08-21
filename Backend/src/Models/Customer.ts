const CustomerSchema = new mongoose.Schema(
  {
    customerId: { type: String, unique: true },
    name: { type: String, required: true },
    companyName: { type: String },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    placeOfOrigin: { type: String, required: true }, // City or region
    primaryMobileNumber: { type: String, required: true },
    secondaryMobileNumbers: [{ type: String }], // Admin only view
    gstNumber: { type: String }, // Mandatory for corporate customers
    cinNumber: { type: String }, // For private limited companies
    panNumber: { type: String },
    emailIds: [{ type: String }], // Multiple emails allowed
    whatsappNumber: { type: String },
    companyLogo: { type: String }, // Path to logo file
    type: { type: String, enum: ["corporate", "walkin"], required: true }, // Distinguish between corporate and walk-in
  },
  { timestamps: true }
);
