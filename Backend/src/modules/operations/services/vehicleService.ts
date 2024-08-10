import { Vehicle } from "../models/vehicle";

class VehicleService {
  static async createVehicle(vehicleData) {
    const vehicle = new Vehicle(vehicleData);
    return vehicle.save();
  }

  static async getVehicleById(vehicleId) {
    return Vehicle.findById(vehicleId);
  }

  static async updateVehicle(vehicleId, updateData) {
    return Vehicle.findByIdAndUpdate(vehicleId, updateData, { new: true });
  }

  static async deleteVehicle(vehicleId) {
    return Vehicle.findByIdAndDelete(vehicleId);
  }
}

export default VehicleService;
