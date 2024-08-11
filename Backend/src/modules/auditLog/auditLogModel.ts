import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema({
  entityType: {
    type: String,
    required: true,
  },
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fieldName: {
    type: String,
    required: true,
  },
  oldValue: {
    type: String,
  },
  newValue: {
    type: String,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AuditLog = mongoose.model("AuditLog", auditLogSchema);

export default AuditLog;
