import express from "express";
import CustomerServiceController from "../controllers/customerServiceController";

const router = express.Router();

router.post("/requests", CustomerServiceController.createRequest);
router.get("/requests/:id", CustomerServiceController.getRequestById);
router.put("/requests/:id", CustomerServiceController.updateRequest);
router.get("/requests", CustomerServiceController.getAllRequests);
router.delete("/requests/:id", CustomerServiceController.deleteRequest);

export default router;
