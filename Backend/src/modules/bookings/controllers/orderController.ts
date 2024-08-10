import OrderService from "../services/orderService.js";
import catchAsync from "../../../utils/catchAsyncErrors.js";
import ErrorHandler from "../../../utils/errorHandler.js";

class OrderController {
  static createOrder = catchAsync(async (req, res) => {
    const order = await OrderService.createOrder(req.body);
    res.status(201).json(order);
  });

  static getOrderById = catchAsync(async (req, res, next) => {
    const order = await OrderService.getOrderById(req.params.id);
    if (!order) {
      return next(new ErrorHandler("Order not found", 404));
    }
    res.status(200).json(order);
  });

  static updateOrder = catchAsync(async (req, res, next) => {
    const updatedOrder = await OrderService.updateOrder(
      req.params.id,
      req.body
    );
    if (!updatedOrder) {
      return next(new ErrorHandler("Order not found", 404));
    }
    res.status(200).json(updatedOrder);
  });

  static deleteOrder = catchAsync(async (req, res, next) => {
    const deletedOrder = await OrderService.deleteOrder(req.params.id);
    if (!deletedOrder) {
      return next(new ErrorHandler("Order not found", 404));
    }
    res.status(204).json();
  });
}

export default OrderController;
