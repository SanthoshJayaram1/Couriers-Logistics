import express from "express";
import AuthController from "./authController"

const router = express.Router();

router.route("/login").post(AuthController.login);
router.route("/logout").get(AuthController.logout);

export default router;
