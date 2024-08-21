const TaskSchema = new mongoose.Schema(
  {
    taskId: { type: String, unique: true, required: true }, // Unique ID for the task
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }, // Reference to the manager
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }, // Reference to the employee (courier boy or customer care employee)
    taskType: {
      type: String,
      enum: [
        "Pickup",
        "Delivery",
        "CoLoaderDelivery",
        "FollowUp",
        "PaymentCollection",
        "CustomerInquiry",
        "ShipmentUpdate",
      ],
      required: true,
    }, // Type of task assigned
    dateAssigned: { type: Date, default: Date.now, required: true }, // Date task was assigned
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed", "Failed"],
      default: "Pending",
      required: true,
    }, // Status of the task
    courierTaskDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourierTaskDetails",
    }, // Reference to courier-specific details
    customerCareTaskDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomerCareTaskDetails",
    }, // Reference to customer care-specific details
  },
  { timestamps: true }
);
