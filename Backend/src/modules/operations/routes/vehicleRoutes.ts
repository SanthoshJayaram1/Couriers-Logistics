import express from "express";
const router = express.Router();
import VehicleController from "../controllers/vehicleController";

router.post("/", VehicleController.createVehicle);
router.get("/:id", VehicleController.getVehicleById);
router.put("/:id", VehicleController.updateVehicle);
router.delete("/:id", VehicleController.deleteVehicle);

export default router;
