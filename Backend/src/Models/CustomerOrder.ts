const CustomerOrderSchema = new mongoose.Schema(
  {
    orderId: { type: String, unique: true, required: true },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, 
    orderType: {
      type: String,
      enum: ["Forward", "ReversePickup"],
      required: true,
    }, 
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
    },
    origin: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      pincode: { type: String, required: true },
      placeOfOrigin: { type: String, required: true },
    },
    destination: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      pincode: { type: String, required: true },
      placeOfDestination: { type: String, required: true },
    },
    items: [
      {
        description: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true }
);
