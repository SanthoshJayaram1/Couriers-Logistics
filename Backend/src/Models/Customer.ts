const CustomerSchema = new mongoose.Schema(
  {
    customerId: { type: String, unique: true, required: true }, // Unique ID for the customer
    name: { type: String, required: true }, // Customer name (either individual or corporate contact person)

    // Common Fields
    address: { type: String, required: true }, // Address for the customer
    pincode: { type: String, required: true }, // Pincode for the address
    placeOfOrigin: { type: String, required: true }, // City or region (place of origin)

    // Contact Details
    primaryMobileNumber: { type: String, required: true }, // Primary contact number
    secondaryMobileNumbers: [{ type: String }], // Secondary contact numbers, admin only view
    emailIds: [{ type: String }], // Array of email addresses
    whatsappNumber: { type: String }, // WhatsApp contact number

    // PAN Number
    panNumber: { type: String }, // PAN Number, applicable for both individuals and corporates

    // Specific to Corporate Customers
    companyDetails: {
      companyName: { type: String }, // Name of the company, relevant for CorporateCustomer
      gstNumber: { type: String }, // GST Number, required for CorporateCustomer
      cinNumber: { type: String }, // CIN Number, relevant for registered companies
      companyLogo: { type: String }, // Path to the company's logo file
    },

    // Customer Type
    customerType: {
      type: String,
      enum: ["Corporate", "Individual"],
      required: true,
    }, // Type of customer (Corporate or Individual)
  },
  { timestamps: true }
);

