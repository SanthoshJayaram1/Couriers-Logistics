import express from "express";
const router = express.Router();
import PaymentController from "../controllers/paymentController";
import { isAuthenticated } from "../../../middlewares/authMiddleware";

router.post("/", isAuthenticated, PaymentController.createPayment);
router.get("/:orderId", isAuthenticated, PaymentController.getPaymentByOrderId);
router.put("/:id", isAuthenticated, PaymentController.updatePayment);
router.delete("/:id", isAuthenticated, PaymentController.deletePayment);

export default router;
