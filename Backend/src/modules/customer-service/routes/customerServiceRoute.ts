import express from "express";
import CustomerServiceController from "../controllers/customerServiceController";
import { isAuthenticated } from "../../../middlewares/authMiddleware";

const router = express.Router();

router.post(
  "/requests",
  isAuthenticated,
  CustomerServiceController.createRequest
);
router.get(
  "/requests/:id",
  isAuthenticated,
  CustomerServiceController.getRequestById
);
router.put(
  "/requests/:id",
  isAuthenticated,
  CustomerServiceController.updateRequest
);
router.get(
  "/requests",
  isAuthenticated,
  CustomerServiceController.getAllRequests
);
router.delete(
  "/requests/:id",
  isAuthenticated,
  CustomerServiceController.deleteRequest
);

export default router;
