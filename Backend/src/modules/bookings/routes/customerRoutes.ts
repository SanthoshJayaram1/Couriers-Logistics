import express from "express";
const router = express.Router();
import CustomerController from "../controllers/customerController";

router.post("/", CustomerController.createCustomer);
router.get("/:id", CustomerController.getCustomerById);
router.put("/:id", CustomerController.updateCustomer);
router.delete("/:id", CustomerController.deleteCustomer);

export default router;
