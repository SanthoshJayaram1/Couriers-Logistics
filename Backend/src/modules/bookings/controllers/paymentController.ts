import PaymentService from "../services/paymentService.js";
import catchAsync from "../../../utils/catchAsyncErrors.js";
import ErrorHandler from "../../../utils/errorHandler.js";

class PaymentController {
  static createPayment = catchAsync(async (req, res) => {
    const payment = await PaymentService.createPayment(req.body);
    res.status(201).json(payment);
  });

  static getPaymentByOrderId = catchAsync(async (req, res, next) => {
    const payment = await PaymentService.getPaymentByOrderId(
      req.params.orderId
    );
    if (!payment) {
      return next(new ErrorHandler("Payment not found", 404));
    }
    res.status(200).json(payment);
  });

  static updatePayment = catchAsync(async (req, res, next) => {
    const updatedPayment = await PaymentService.updatePayment(
      req.params.id,
      req.body
    );
    if (!updatedPayment) {
      return next(new ErrorHandler("Payment not found", 404));
    }
    res.status(200).json(updatedPayment);
  });

  static deletePayment = catchAsync(async (req, res, next) => {
    const deletedPayment = await PaymentService.deletePayment(req.params.id);
    if (!deletedPayment) {
      return next(new ErrorHandler("Payment not found", 404));
    }
    res.status(204).json();
  });
}

export default PaymentController;
