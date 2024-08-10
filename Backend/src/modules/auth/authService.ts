import User from "./userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import ErrorHandler from "../../utils/errorHandler";

class AuthService {
  static async login({ email, password }, next) {
    // Checks if email and password is entered by user
    if (!email || !password) {
      return next(new ErrorHandler("Please enter email & password", 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new ErrorHandler("Invalid email or password", 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ErrorHandler("Invalid email or password", 401);
    }

    return user;
  }
}

export default AuthService;
