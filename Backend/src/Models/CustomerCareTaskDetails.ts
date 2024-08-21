const CustomerCareTaskDetailsSchema = new mongoose.Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    }, // Reference to the general task
    followUpDetails: {
      customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
      }, // Customer to follow up with
      followUpType: {
        type: String,
        enum: ["POD", "PendingPayment", "Inquiry", "ShipmentUpdate"],
        required: true,
      }, // Type of follow-up
      followUpStatus: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending",
        required: true,
      }, // Status of follow-up
      remarks: { type: String }, // Any additional remarks
    },
  },
  { timestamps: true }
);
