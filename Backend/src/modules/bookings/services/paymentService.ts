import { Payment } from "../models/payment";

class PaymentService {
  static async createPayment(paymentData) {
    const payment = new Payment(paymentData);
    return payment.save();
  }

  static async getPaymentByOrderId(orderId) {
    return Payment.findOne({ orderId });
  }

  static async updatePayment(paymentId, updateData) {
    return Payment.findByIdAndUpdate(paymentId, updateData, { new: true });
  }

  static async deletePayment(paymentId) {
    return Payment.findByIdAndDelete(paymentId);
  }
}

export default PaymentService;
