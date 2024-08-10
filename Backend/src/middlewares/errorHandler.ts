import ErrorHandler from "../utils/errorHandler";

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };

  error.message = err.message;

  // Handle Mongoose Object ID Error (CastError)
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handle Mongoose Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value:any) => value.message);
    error = new ErrorHandler(message.join(", "), 400);
  }

  // Handle Mongoose Duplicate Key Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    error = new ErrorHandler(message, 400);
  }

  // Handle JWT Error (Invalid Token)
  if (err.name === "JsonWebTokenError") {
    const message = "Session is invalid";
    error = new ErrorHandler(message, 400);
  }

  // Handle Expired JWT Error
  if (err.name === "TokenExpiredError") {
    const message = "Session expired";
    error = new ErrorHandler(message, 400);
  }

  // Send the response
  res.status(error.statusCode).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
};

export default errorHandler;
