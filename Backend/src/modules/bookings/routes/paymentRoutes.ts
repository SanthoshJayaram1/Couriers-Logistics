import express from "express";
const router = express.Router();
import PaymentController from "../controllers/paymentController";

router.post("/", PaymentController.createPayment);
router.get("/:orderId", PaymentController.getPaymentByOrderId);
router.put("/:id", PaymentController.updatePayment);
router.delete("/:id", PaymentController.deletePayment);

export default router;
