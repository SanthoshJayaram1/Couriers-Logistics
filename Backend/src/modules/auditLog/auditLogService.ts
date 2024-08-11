import logToCloudWatch from "../../utils/cloudWatchLogger";
import { Types } from "mongoose";

export class AuditLogService {
  models;
  user;
  entityType: string;
  entityId: string;

  ignoredColumns = {
    createdAt: 1,
    updatedAt: 2,
    _id: 3,
    id: 4,
    __v: 5,
  };

  constructor(models, user, entityType, entityId) {
    this.models = models;
    this.user = user;
    this.entityType = entityType;
    this.entityId = entityId;
  }

  async logAudit(oldEntity, newEntity) {
    for (const [key, value] of Object.entries(newEntity)) {
      if (this.ignoredColumns.hasOwnProperty(key)) {
        continue;
      }

      if (
        (!oldEntity[key] && newEntity[key]) ||
        (value instanceof Types.ObjectId
          ? !(value as Types.ObjectId).equals(oldEntity[key])
          : oldEntity[key] !== value)
      ) {
        const aLog = {
          entityType: this.entityType,
          entityId: this.entityId,
          fieldName: key,
          oldValue: oldEntity[key]?.toString(),
          newValue: value?.toString(),
          userName: this.user.name,
        };
        await logToCloudWatch(aLog);
      }
    }
  }
}
