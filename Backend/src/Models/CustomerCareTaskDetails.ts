const CustomerCareTaskDetailsSchema = new mongoose.Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    }, // Reference to the general task
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Reference to the customer related to this task
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }, // Reference to the employee making the follow-up
    followUpDetails: {
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
