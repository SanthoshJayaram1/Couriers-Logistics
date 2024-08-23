const AddressSchema = new mongoose.Schema(
  {
    mobileNumber: { type: String, required: true }, // Mobile number associated with the address
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Reference to the customer
    label: { type: String, required: true }, // Label for the address (e.g., "Home", "Office")
    recipientName: { type: String, required: true }, // Name of the recipient for this address
    address: { type: String, required: true }, // Delivery address
    pincode: { type: String, required: true }, // Pincode for the delivery address
    city: { type: String, required: true }, // City for the delivery address
    state: { type: String, required: true }, // State for the delivery address
    country: { type: String, required: true }, // Country for the delivery address
  },
  { timestamps: true }
);

// Index on mobileNumber for efficient lookup
AddressSchema.index({ mobileNumber: 1 });
