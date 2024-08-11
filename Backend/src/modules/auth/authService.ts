import User from "../rbac/models/user.js";
import jwt from "jsonwebtoken";
import ErrorHandler from "../../utils/errorHandler.js";
import bcrypt from "bcryptjs";

class AuthService {
  static async login({ email, password }, next) {
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

  static async updateUserRefreshToken(userId, refreshToken) {
    return User.findByIdAndUpdate(userId, { rf_token: refreshToken });
  }

  static async clearUserRefreshToken(userId) {
    return User.findByIdAndUpdate(userId, { rf_token: null });
  }

  static async getUserByRefreshToken(rfToken) {
    const decoded:any = jwt.verify(rfToken, process.env.REFRESH_TOKEN_SECRET!);
    return User.findById(decoded.id).select("rf_token");
  }
}

export default AuthService;
