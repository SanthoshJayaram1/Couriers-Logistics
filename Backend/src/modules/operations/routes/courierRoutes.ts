import express from "express";
const router = express.Router();
import CourierController from "../controllers/courierController";
import { isAuthenticated } from "../../../middlewares/authMiddleware";

router.post("/", isAuthenticated, CourierController.createCourier);
router.get("/:id", isAuthenticated, CourierController.getCourierById);
router.put("/:id", isAuthenticated, CourierController.updateCourier);
router.delete("/:id", isAuthenticated, CourierController.deleteCourier);

export default router;
