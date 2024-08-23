const BranchSchema = new mongoose.Schema(
  {
    branchId: { type: String, unique: true, required: true }, // Unique ID for each branch or franchise
    branchType: {
      type: String,
      enum: ["Main", "Sub-Branch", "Franchise"],
      required: true,
    }, // Type of branch
    name: { type: String, required: true }, // Name of the branch or franchise
    address: { type: String, required: true }, // Address of the branch or franchise
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }, // Manager in charge of this branch
    courierBoys: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }], // Courier boys assigned to this branch
    customerCareEmployees: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    ], // Customer care employees in this branch
    serviceStatus: {
      type: String,
      enum: ["Serviceable", "Non-Serviceable", "Limited"],
      default: "Serviceable",
      required: true,
    }, // Service status of the branch
  },
  { timestamps: true }
);
