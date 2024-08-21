const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true, required: true }, // Unique ID for the order
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Reference to the customer
    orderDate: { type: Date, default: Date.now, required: true }, // Date of order placement
    pickupStatus: {
      type: String,
      enum: ["Pending", "Picked Up", "Cancelled"],
      default: "Pending",
      required: true,
    }, // Status of the pickup process
    shipments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Shipment" }], // Array of references to shipments
    totalEstimatedCost: { type: Number }, // Estimated cost based on the order details
    pickupScheduledDate: { type: Date }, // Scheduled date for pickup by courier boy
  },
  { timestamps: true }
);
