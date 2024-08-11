import mongoose from "mongoose";
import { Schema } from "mongoose";

interface IRole {
  roleCode: string;
  roleName: string;
}

export enum RoleCodes {
  COMPANY_ADMIN = "COMPANY_ADMIN",
  COMPANY_MANAGER = "COMPANY_MANAGER",
  COMPANY_USER = "COMPANY_USER",
}

const roleSchema = new Schema<IRole>(
  {
    roleCode: {
      type: String,
      unique: true,
      index: true,
      required: true,
      enum: Object.keys(RoleCodes),
    },
    roleName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Role = mongoose.model<IRole>("Role", roleSchema);
