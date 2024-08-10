import express from "express";
import orderRoutes from "./orderRoutes";
import paymentRoutes from "./paymentRoutes";
import customerRoutes from "./customerRoutes";

const router = express.Router();

router.use("/orders", orderRoutes);
router.use("/payments", paymentRoutes);
router.use("/customers", customerRoutes);

export default router;
