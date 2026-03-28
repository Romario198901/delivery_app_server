import createHttpError from 'http-errors';
import { Order } from '../models/order.js';

export const getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
};

export const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findOne({
    _id: orderId,
  });
  if (!order) {
    throw createHttpError(404, 'Order not found');
  }
  res.status(200).json(order);
};

export const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};
