import mongoose from 'mongoose';
import { Order } from '../models/order.js';
import { Product } from '../models/product.js';
import { Shop } from '../models/shop.js';
export const connectMongoDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    await mongoose.connect(mongoURL);
    console.log('Connection to MongoDB established successfully');
    await Shop.syncIndexes();
    await Product.syncIndexes();
    await Order.syncIndexes();
  } catch (error) {
    const isProd = process.env.NODE_ENV === 'production';
    console.error(isProd ? 'Something went wrong' : error.message);
    process.exit(1);
  }
};
