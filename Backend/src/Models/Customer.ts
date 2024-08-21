const CustomerSchema = new mongoose.Schema(
  {
    customerId: { type: String, unique: true, required: true }, // Unique ID for the customer
    name: { type: String, required: true }, // Customer name (either individual or corporate contact person)

    // Common Fields
    address: { type: String, required: true }, // Primary address for the customer
    pincode: { type: String, required: true }, // Pincode for the primary address
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

    // Delivery Addresses
    deliveryAddresses: [
      {
        label: { type: String, required: true }, // Label for the address (e.g., "Home", "Office")
        recipientName: { type: String, required: true }, // Name of the recipient for this address
        contactNumber: { type: String, required: true }, // Contact number for delivery
        address: { type: String, required: true }, // Delivery address
        pincode: { type: String, required: true }, // Pincode for the delivery address
        city: { type: String, required: true }, // City for the delivery address
        state: { type: String, required: true }, // State for the delivery address
        country: { type: String, required: true }, // Country for the delivery address
      },
    ],

    // Customer Type
    customerType: {
      type: String,
      enum: ["CorporateCustomer", "IndividualCustomer"],
      required: true,
    }, // Type of customer (Corporate or Individual)
  },
  { timestamps: true }
);
