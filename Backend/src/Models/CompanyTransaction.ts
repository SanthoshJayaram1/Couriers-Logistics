const CompanyTransactionSchema = new mongoose.Schema(
  {
    transactionId: { type: String, unique: true, required: true }, // Unique ID for the transaction
    transactionDate: { type: Date, default: Date.now, required: true }, // Date of the transaction
    type: {
      type: String,
      enum: ["Income", "Expense"],
      required: true,
    }, // Type of transaction: Income (Customer) or Expense (CoLoader)
    amount: { type: Number, required: true }, // Transaction amount
    paymentMode: {
      type: String,
      enum: ["Cash", "BankTransfer", "Cheque"],
      required: true,
    }, // Payment mode
    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
      required: true,
    }, // Payment status
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
    description: { type: String }, // Additional details about the transaction
  },
  { timestamps: true }
);