const DailyWorkAssignmentSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true }, // The date for which the work is assigned
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    }, // Reference to the employee
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }], // Array of tasks assigned on this date
    completedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }], // Array of tasks completed on this date
  },
  { timestamps: true }
);
