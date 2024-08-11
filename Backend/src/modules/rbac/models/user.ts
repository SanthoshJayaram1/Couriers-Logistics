import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { RoleCodes } from "./role";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    select: false,
  },
  rf_token: {
    type: String,
    select: false,
  },
  role: {
    type: String,
    enum: [
      RoleCodes.COMPANY_ADMIN,
      RoleCodes.COMPANY_MANAGER,
      RoleCodes.COMPANY_USER,
    ],
    default: "employee",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

export default User;
