import CustomerService from "../services/customerService.js";
import catchAsyncErrors from "../../../utils/catchAsyncErrors.js";
import ErrorHandler from "../../../utils/errorHandler.js";

class CustomerServiceController {
  static createRequest = catchAsyncErrors(async (req, res) => {
    const request = await CustomerService.createRequest(req.body);
    res.status(201).json(request);
  });

  static getRequestById = catchAsyncErrors(async (req, res, next) => {
    const request = await CustomerService.getRequestById(req.params.id);
    if (!request) {
      return next(new ErrorHandler("Request not found", 404));
    }
    res.status(200).json(request);
  });

  static updateRequest = catchAsyncErrors(async (req, res, next) => {
    const updatedRequest = await CustomerService.updateRequest(
      req.params.id,
      req.body
    );
    if (!updatedRequest) {
      return next(new ErrorHandler("Request not found", 404));
    }
    res.status(200).json(updatedRequest);
  });

  static getAllRequests = catchAsyncErrors(async (req, res) => {
    const requests = await CustomerService.getAllRequests();
    res.status(200).json(requests);
  });

  static deleteRequest = catchAsyncErrors(async (req, res, next) => {
    const deletedRequest = await CustomerService.deleteRequest(req.params.id);
    if (!deletedRequest) {
      return next(new ErrorHandler("Request not found", 404));
    }
    res.status(204).json();
  });
}

export default CustomerServiceController;
