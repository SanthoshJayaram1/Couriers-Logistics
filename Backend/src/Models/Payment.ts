const PaymentSchema = new mongoose.Schema(
  {
    paymentId: { type: String, unique: true, required: true }, // Unique ID for each payment
    transactionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
      required: true,
    }, // Reference to the transaction
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Reference to the customer
    paymentDate: { type: Date, default: Date.now, required: true }, // Date of payment
    amountPaid: { type: Number, required: true }, // Amount paid in this payment
    paymentMode: {
      type: String,
      enum: ["Cash", "FreightPay", "ToPay"],
      required: true,
    }, // Payment method used
    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      default: "Pending",
      required: true,
    }, // Status of the payment
  },
  { timestamps: true }
);
