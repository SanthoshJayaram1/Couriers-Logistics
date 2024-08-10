import express from "express";
const router = express.Router();
import ShipmentController from "../controllers/shipmentController";
import { isAuthenticated } from "../../../middlewares/authMiddleware";

router.post("/", isAuthenticated, ShipmentController.createShipment);
router.get("/:id", isAuthenticated, ShipmentController.getShipmentById);
router.put("/:id", isAuthenticated, ShipmentController.updateShipment);
router.delete("/:id", isAuthenticated, ShipmentController.deleteShipment);

export default router;
