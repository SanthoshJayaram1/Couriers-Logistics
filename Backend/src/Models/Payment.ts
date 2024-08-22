const PaymentSchema = new mongoose.Schema(
  {
    paymentId: { type: String, unique: true, required: true }, // Unique ID for each payment
    companyTransaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompanyTransaction",
      required: true,
    }, // Reference to the related company transaction
    relatedTransaction: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "relatedModel",
      required: true,
    }, // Reference to related co-loader or customer transaction
    relatedModel: {
      type: String,
      required: true,
      enum: ["CoLoaderTransaction", "CustomerTransaction"],
    }, // Determines if relatedTransaction refers to CoLoaderTransaction or CustomerTransaction
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
    },
  },
  { timestamps: true }
);
