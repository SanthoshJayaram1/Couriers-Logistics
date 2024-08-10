import { Courier } from "../models/courier";

class CourierService {
  static async createCourier(courierData) {
    const courier = new Courier(courierData);
    return courier.save();
  }

  static async getCourierById(courierId) {
    return Courier.findById(courierId);
  }

  static async updateCourier(courierId, updateData) {
    return Courier.findByIdAndUpdate(courierId, updateData, { new: true });
  }

  static async deleteCourier(courierId) {
    return Courier.findByIdAndDelete(courierId);
  }
}

export default CourierService;
