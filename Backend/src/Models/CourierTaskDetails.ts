const CourierTaskDetailsSchema = new mongoose.Schema(
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
    }, // Reference to the courier responsible for the task
    pickupDetails: {
      address: { type: String }, // Pickup address
      consignmentDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shipment",
      }, // Shipment details if applicable
    },
    deliveryDetails: {
      coLoaderId: { type: mongoose.Schema.Types.ObjectId, ref: "CoLoader" }, // Reference to co-loader if delivering to a co-loader
      deliveryAddress: { type: String }, // Delivery address
      recipientId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" }, // Reference to the recipient
      consignmentDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shipment",
      }, // Shipment details if applicable
    },
  },
  { timestamps: true }
);
