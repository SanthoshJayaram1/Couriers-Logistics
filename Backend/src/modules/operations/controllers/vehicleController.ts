import VehicleService from "../services/vehicleService.js";
import catchAsyncErrors from "../../../utils/catchAsyncErrors.js";
import ErrorHandler from "../../../utils/errorHandler.js";

class VehicleController {
  static createVehicle = catchAsyncErrors(async (req, res) => {
    const vehicle = await VehicleService.createVehicle(req.body);
    res.status(201).json(vehicle);
  });

  static getVehicleById = catchAsyncErrors(async (req, res, next) => {
    const vehicle = await VehicleService.getVehicleById(req.params.id);
    if (!vehicle) {
      return next(new ErrorHandler("Vehicle not found", 404));
    }
    res.status(200).json(vehicle);
  });

  static updateVehicle = catchAsyncErrors(async (req, res, next) => {
    const updatedVehicle = await VehicleService.updateVehicle(
      req.params.id,
      req.body
    );
    if (!updatedVehicle) {
      return next(new ErrorHandler("Vehicle not found", 404));
    }
    res.status(200).json(updatedVehicle);
  });

  static deleteVehicle = catchAsyncErrors(async (req, res, next) => {
    const deletedVehicle = await VehicleService.deleteVehicle(req.params.id);
    if (!deletedVehicle) {
      return next(new ErrorHandler("Vehicle not found", 404));
    }
    res.status(204).json();
  });
}

export default VehicleController;
