import { Customer } from "../models/customer";

class CustomerService {
  static async createCustomer(customerData) {
    const customer = new Customer(customerData);
    return customer.save();
  }

  static async getCustomerById(customerId) {
    return Customer.findById(customerId);
  }

  static async updateCustomer(customerId, updateData) {
    return Customer.findByIdAndUpdate(customerId, updateData, { new: true });
  }

  static async deleteCustomer(customerId) {
    return Customer.findByIdAndDelete(customerId);
  }
}

export default CustomerService;
