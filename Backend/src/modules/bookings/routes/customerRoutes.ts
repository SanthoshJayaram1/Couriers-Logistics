import express from "express";
const router = express.Router();
import CustomerController from "../controllers/customerController";
import { isAuthenticated } from "../../../middlewares/authMiddleware";

router.post("/", isAuthenticated, CustomerController.createCustomer);
router.get("/:id", isAuthenticated, CustomerController.getCustomerById);
router.put("/:id", isAuthenticated, CustomerController.updateCustomer);
router.delete("/:id", isAuthenticated, CustomerController.deleteCustomer);

export default router;
