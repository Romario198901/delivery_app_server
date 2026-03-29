import createHttpError from 'http-errors';
import { Order } from '../models/order.js';

export const getAllOrders = async (req, res) => {
  const { page = 1, perPage = 10, email, phone } = req.query;
  const skip = (page - 1) * perPage;

  const ordersQuery = Order.find();
  if (email) {
    ordersQuery.where('email').equals(email);
  }
  if (phone) {
    ordersQuery.where('phone').equals(phone);
  }
  if (email && phone) {
    ordersQuery.where('email').equals(email).where('phone').equals(normalizedPhone);
  }
  const [totalItems, orders] = await Promise.all([
    ordersQuery.clone().countDocuments(),
    ordersQuery.skip(skip).limit(perPage),
  ]);
  const totalPages = Math.ceil(totalItems / perPage);
  res.status(200).json({
    page,
    perPage,
    totalItems,
    totalPages,
    orders,
  });
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
