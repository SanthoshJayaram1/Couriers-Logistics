const CustomerOrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true, required: true }, // Unique ID for the order
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Reference to the customer
    pincode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceablePincode",
      required: true,
    }, // Pincode related to the order
    status: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "Assigned",
        "In Progress",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
      required: true,
    }, // Current status of the order
    items: [
      {
        description: { type: String, required: true }, // Description of the item(s) in the order
        quantity: { type: Number, required: true }, // Quantity of items
      },
    ],
    totalAmount: { type: Number, required: true }, // Total amount for the order
    orderDate: { type: Date, default: Date.now, required: true }, // Date the order was placed
  },
  { timestamps: true }
);
