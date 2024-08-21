const EmployeeSchema = new mongoose.Schema(
  {
    employeeId: { type: String, unique: true, required: true }, // Unique ID for the employee
    name: { type: String, required: true },
    role: {
      type: String,
      enum: ["manager", "courierBoy", "customerCareEmployee"],
      required: true,
    },
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    }, // Reference to the branch/franchise they belong to
    mobileNumber: { type: String, required: true },
    residenceAddress: { type: String, required: true },
    adhaarNumber: { type: String, required: true },
    panNumber: { type: String, required: true },
  },
  { timestamps: true }
);
