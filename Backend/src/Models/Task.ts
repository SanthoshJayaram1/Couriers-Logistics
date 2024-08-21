const TaskSchema = new mongoose.Schema(
  {
    taskId: { type: String, unique: true, required: true }, // Unique ID for the task
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }, // Manager who assigned the task
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }, // Employee assigned to the task
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    }, // Reference to the branch or franchise responsible for this task
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    }, // Customer related to the task
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
    statusUpdates: [
      {
        status: {
          type: String,
          enum: ["Pending", "In Progress", "Completed", "Failed"],
          required: true,
        }, // Status at a given point in time
        description: { type: String }, // Additional description or notes about the status
        updatedAt: { type: Date, default: Date.now }, // Timestamp of when this status was updated
      },
    ],
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
