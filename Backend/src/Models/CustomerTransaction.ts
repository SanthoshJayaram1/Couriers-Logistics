const CustomerTransactionSchema = new mongoose.Schema(
  {
    transactionId: { type: String, unique: true, required: true }, // Unique ID for the transaction
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    }, // Reference to the order
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Reference to the customer
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    }, // Branch or franchise originating the transaction
    paymentMode: {
      type: String,
      enum: ["Cash", "FreightPay", "ToPay"],
      required: true,
    }, // Payment mode
    transactionDate: { type: Date, default: Date.now, required: true }, // Date of the transaction
    totalAmount: { type: Number, required: true }, // Total amount for the order
    status: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
      required: true,
    }, // Payment status
    shipments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Shipment" }], // Array of references to related shipments
    payments: [
      {
        paymentDate: { type: Date, default: Date.now },
        amountPaid: { type: Number },
        paymentMode: { type: String, enum: ["Cash", "FreightPay", "ToPay"] },
      },
    ],
  },
  { timestamps: true }
);
