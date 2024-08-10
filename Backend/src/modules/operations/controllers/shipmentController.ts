import ShipmentService from "../services/shipmentService.js";
import catchAsyncErrors from "../../../utils/catchAsyncErrors.js";
import ErrorHandler from "../../../utils/errorHandler.js";

class ShipmentController {
  static createShipment = catchAsyncErrors(async (req, res) => {
    const shipment = await ShipmentService.createShipment(req.body);
    res.status(201).json(shipment);
  });

  static getShipmentById = catchAsyncErrors(async (req, res, next) => {
    const shipment = await ShipmentService.getShipmentById(req.params.id);
    if (!shipment) {
      return next(new ErrorHandler("Shipment not found", 404));
    }
    res.status(200).json(shipment);
  });

  static updateShipment = catchAsyncErrors(async (req, res, next) => {
    const updatedShipment = await ShipmentService.updateShipment(
      req.params.id,
      req.body
    );
    if (!updatedShipment) {
      return next(new ErrorHandler("Shipment not found", 404));
    }
    res.status(200).json(updatedShipment);
  });

  static deleteShipment = catchAsyncErrors(async (req, res, next) => {
    const deletedShipment = await ShipmentService.deleteShipment(req.params.id);
    if (!deletedShipment) {
      return next(new ErrorHandler("Shipment not found", 404));
    }
    res.status(204).json();
  });
}

export default ShipmentController;
