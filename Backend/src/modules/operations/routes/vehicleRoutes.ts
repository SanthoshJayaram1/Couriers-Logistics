import express from "express";
const router = express.Router();
import VehicleController from "../controllers/vehicleController";
import { isAuthenticated } from "../../../middlewares/authMiddleware";

router.post("/", isAuthenticated, VehicleController.createVehicle);
router.get("/:id", isAuthenticated, VehicleController.getVehicleById);
router.put("/:id", isAuthenticated, VehicleController.updateVehicle);
router.delete("/:id", isAuthenticated, VehicleController.deleteVehicle);

export default router;
