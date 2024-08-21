const OrderProcessingSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomerOrder",
      required: true,
    }, // Reference to the order
    pincode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceablePincode",
      required: true,
    }, // Pincode related to the order
    assignedBranch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    }, // Branch that accepted the order
    assignedCourier: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // Courier boy assigned to the order
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }, // Manager who assigned the courier
    status: {
      type: String,
      enum: ["Pending", "Assigned", "In Progress", "Completed", "Cancelled"],
      default: "Pending",
      required: true,
    }, // Status of the assignment
    assignmentDate: { type: Date, default: Date.now, required: true }, // Date the assignment was made
  },
  { timestamps: true }
);
