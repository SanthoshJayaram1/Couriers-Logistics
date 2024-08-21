import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Backend/src/modules/auth/authRoutes"
import bookingRoutes from "./Backend/src/modules/bookings/routes";
import operationsRoutes from "./Backend/src/modules/operations/routes";
import customerServiceRoutes from "./Backend/src/modules/customer-service/routes/customerServiceRoute";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import ErrorHandler from "./Backend/src/utils/errorHandler";
import errorHandler from "./Backend/src/middlewares/errorHandler";

const app = express();
dotenv.config();

// Middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "jwt-token",
      "Access-Control-Allow-Credentials",
    ],
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/operations", operationsRoutes);
app.use("/api/customer-service", customerServiceRoutes);

// Handle undefined routes
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware
app.use(errorHandler);

export default app;
