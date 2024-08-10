import express from "express";
import courierRoutes from "./courierRoutes";
import shipmentRoutes from "./shipmentRoutes";
import vehicleRoutes from "./vehicleRoutes";

const router = express.Router();

router.use("/courier", courierRoutes);
router.use("/shipment", shipmentRoutes);
router.use("/vehicle", vehicleRoutes);

export default router;
