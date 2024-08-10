import AuthService from "./authService.js";
import catchAsyncErrors from "../../utils/catchAsyncErrors.js";

class AuthController {
  static login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await AuthService.login({ email, password }, next);
    //handle here
  });

  static logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged out Successfully",
    });
  });
}

export default AuthController;
