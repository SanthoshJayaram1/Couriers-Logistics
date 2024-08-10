import CourierService from "../services/courierService.js";
import catchAsyncErrors from "../../../utils/catchAsyncErrors.js";
import ErrorHandler from "../../../utils/errorHandler.js";

class CourierController {
  static createCourier = catchAsyncErrors(async (req, res) => {
    const courier = await CourierService.createCourier(req.body);
    res.status(201).json(courier);
  });

  static getCourierById = catchAsyncErrors(async (req, res, next) => {
    const courier = await CourierService.getCourierById(req.params.id);
    if (!courier) {
      return next(new ErrorHandler("Courier not found", 404));
    }
    res.status(200).json(courier);
  });

  static updateCourier = catchAsyncErrors(async (req, res, next) => {
    const updatedCourier = await CourierService.updateCourier(
      req.params.id,
      req.body
    );
    if (!updatedCourier) {
      return next(new ErrorHandler("Courier not found", 404));
    }
    res.status(200).json(updatedCourier);
  });

  static deleteCourier = catchAsyncErrors(async (req, res, next) => {
    const deletedCourier = await CourierService.deleteCourier(req.params.id);
    if (!deletedCourier) {
      return next(new ErrorHandler("Courier not found", 404));
    }
    res.status(204).json();
  });
}

export default CourierController;
