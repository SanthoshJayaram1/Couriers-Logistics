import { AnyObject } from 'mongoose';
import {Order} from '../models/order';

class OrderService {
    static async createOrder(orderData: AnyObject) {
        const order = new Order(orderData);
        return order.save();
    }

    static async getOrderById(orderId) {
        return Order.findById(orderId).populate('customerId');
    }

    static async updateOrder(orderId, updateData) {
        return Order.findByIdAndUpdate(orderId, updateData, { new: true });
    }

    static async deleteOrder(orderId) {
        return Order.findByIdAndDelete(orderId);
    }
}

export default OrderService