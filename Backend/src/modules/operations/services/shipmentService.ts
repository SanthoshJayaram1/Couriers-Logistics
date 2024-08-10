import { Shipment } from "../models/shipment";

class ShipmentService {
  static async createShipment(shipmentData) {
    const shipment = new Shipment(shipmentData);
    return shipment.save();
  }

  static async getShipmentById(shipmentId) {
    return Shipment.findById(shipmentId)
      .populate("orderId")
      .populate("courierId")
      .populate("vehicleId");
  }

  static async updateShipment(shipmentId, updateData) {
    return Shipment.findByIdAndUpdate(shipmentId, updateData, { new: true });
  }

  static async deleteShipment(shipmentId) {
    return Shipment.findByIdAndDelete(shipmentId);
  }
}

export default ShipmentService;
