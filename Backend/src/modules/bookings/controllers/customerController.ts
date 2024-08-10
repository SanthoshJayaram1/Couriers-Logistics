import CustomerService from "../services/customerService.js";
import catchAsyncErrors from "../../../utils/catchAsyncErrors.js";
import ErrorHandler from "../../../utils/errorHandler.js";

class CustomerController {
  static createCustomer = catchAsyncErrors(async (req, res, next) => {
    const customer = await CustomerService.createCustomer(req.body);
    res.status(201).json(customer);
  });

  static getCustomerById = catchAsyncErrors(async (req, res, next) => {
    const customer = await CustomerService.getCustomerById(req.params.id);
    if (!customer) {
      return next(new ErrorHandler("Customer not found", 404));
    }
    res.status(200).json(customer);
  });

  static updateCustomer = catchAsyncErrors(async (req, res, next) => {
    const updatedCustomer = await CustomerService.updateCustomer(
      req.params.id,
      req.body
    );
    if (!updatedCustomer) {
      return next(new ErrorHandler("Customer not found", 404));
    }
    res.status(200).json(updatedCustomer);
  });

  static deleteCustomer = catchAsyncErrors(async (req, res, next) => {
    const deletedCustomer = await CustomerService.deleteCustomer(req.params.id);
    if (!deletedCustomer) {
      return next(new ErrorHandler("Customer not found", 404));
    }
    res.status(204).json();
  });
}

export default CustomerController;
