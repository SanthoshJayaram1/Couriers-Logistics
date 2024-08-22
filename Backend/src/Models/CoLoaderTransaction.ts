const CoLoaderTransactionSchema = new mongoose.Schema(
  {
    coLoaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CoLoader",
      required: true,
    }, // Reference to the co-loader
    transactionDate: { type: Date, default: Date.now, required: true }, // Date of the transaction
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Reference to the customer related to this transaction
    consignmentNoteImages: [{ type: String, required: true }], // Consignment note images provided by the co-loader
    invoiceDetails: {
      invoiceNumber: { type: String, required: true }, // Invoice number provided by the co-loader
      invoiceDate: { type: Date, required: true }, // Date of the invoice
      amount: { type: Number, required: true }, // Amount charged by the co-loader
      invoiceImage: { type: String, required: true }, // Link to the invoice image/document
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
      required: true,
    }, // Status of the payment to the co-loader
  },
  { timestamps: true }
);
