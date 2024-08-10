import express from "express";
const router = express.Router();
import OrderController from "../controllers/orderController";
import { isAuthenticated } from "../../../middlewares/authMiddleware";

router.post("/", isAuthenticated, OrderController.createOrder);
router.get("/:id", OrderController.getOrderById);
router.put("/:id", isAuthenticated, OrderController.updateOrder);
router.delete("/:id", isAuthenticated, OrderController.deleteOrder);

export default router;
