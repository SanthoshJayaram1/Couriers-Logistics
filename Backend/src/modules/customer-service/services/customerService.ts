import { CustomerServiceRequest } from "../models/customerServiceRequest";

class CustomerService {
  static async createRequest(requestData) {
    const request = new CustomerServiceRequest(requestData);
    return request.save();
  }

  static async getRequestById(requestId) {
    return CustomerServiceRequest.findById(requestId).populate("customerId");
  }

  static async updateRequest(requestId, updateData) {
    return CustomerServiceRequest.findByIdAndUpdate(requestId, updateData, {
      new: true,
    });
  }

  static async getAllRequests() {
    return CustomerServiceRequest.find().populate("customerId");
  }

  static async deleteRequest(requestId) {
    return CustomerServiceRequest.findByIdAndDelete(requestId);
  }
}

export default CustomerService;
