const ServiceablePincodeSchema = new mongoose.Schema(
  {
    pincode: { type: String, required: true, unique: true }, // Unique Pincode
    placeName: { type: String, required: true }, // Name of the place
    address: { type: String, required: true }, // Address associated with the pincode
    manager: {
      managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
      }, // Reference to Employee model
      name: { type: String, required: true }, // Manager's name
      contactNumber: { type: String, required: true }, // Manager's contact number
      emailId: { type: String, required: true }, // Manager's email ID
    },
  },
  { timestamps: true }
);
