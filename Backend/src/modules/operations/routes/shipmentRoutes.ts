import express from "express";
const router = express.Router();
import ShipmentController from "../controllers/shipmentController";

router.post("/", ShipmentController.createShipment);
router.get("/:id", ShipmentController.getShipmentById);
router.put("/:id", ShipmentController.updateShipment);
router.delete("/:id", ShipmentController.deleteShipment);

export default router;
