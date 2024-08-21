const ShipmentSchema = new mongoose.Schema(
  {
    shipmentId: { type: String, unique: true, required: true }, // Unique ID for the shipment
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    }, // Reference to the order
    transactionId: { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }, // Reference to the transaction
    origin: { type: String, required: true }, // Origin address
    destination: { type: String, required: true }, // Destination address
    recipientDetails: {
      name: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      emailId: { type: String },
      address: { type: String, required: true },
      pincode: { type: String, required: true },
      place: { type: String, required: true },
    },
    serviceType: {
      type: String,
      enum: ["Standard", "Priority", "ODA"],
      required: true,
    }, // Service type (e.g., Standard, Priority)
    modeOfService: {
      type: String,
      enum: ["Air", "Bus", "Train"],
      required: true,
    }, // Mode of service
    weight: {
      volumetricWeight: { type: Number },
      chargeableWeight: { type: Number },
    },
    insuranceDetails: {
      insured: { type: Boolean, default: false },
      insuranceCompanyName: { type: String },
      insuredValue: { type: Number },
      insuranceAmount: { type: Number },
      insuranceNumber: { type: String },
      insuranceValidity: {
        from: { type: Date },
        to: { type: Date },
      },
    },
    status: {
      type: String,
      enum: ["Booked", "In Transit", "Out for Delivery", "Delivered"],
      required: true,
    }, // Current shipment status
    charges: {
      freightCharge: { type: Number },
      packingCharge: { type: Number },
      handlingCharge: { type: Number },
      insuranceCharge: { type: Number },
      fuelCharge: { type: Number },
      subTotal: { type: Number },
      gst: { type: Number },
      grandTotal: { type: Number },
    },
    podImage: { type: String }, // Proof of Delivery image path
  },
  { timestamps: true }
);
