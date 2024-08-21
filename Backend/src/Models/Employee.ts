const EmployeeSchema = new mongoose.Schema(
  {
    employeeId: { type: String, unique: true },
    name: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "manager", "courierBoy", "customerCareEmployee"],
      required: true,
    },
    photo: { type: String }, // Path to photo file
    mobileNumber: { type: String, required: true },
    residenceAddress: { type: String, required: true },
    adhaarNumber: { type: String, required: true },
    panNumber: { type: String, required: true },
  },
  { timestamps: true }
);
