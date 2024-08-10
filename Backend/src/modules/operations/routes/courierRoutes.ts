import express from "express";
const router = express.Router();
import CourierController from "../controllers/courierController";

router.post("/", CourierController.createCourier);
router.get("/:id", CourierController.getCourierById);
router.put("/:id", CourierController.updateCourier);
router.delete("/:id", CourierController.deleteCourier);

export default router;
