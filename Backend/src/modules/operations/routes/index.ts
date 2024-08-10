import express from "express";
import courierRoutes from "./courierRoutes";
import shipmentRoutes from "./shipmentRoutes";
import vehicleRoutes from "./vehicleRoutes";

const router = express.Router();

router.use("/orders", courierRoutes);
router.use("/payments", shipmentRoutes);
router.use("/customers", vehicleRoutes);

export default router;
