import createHttpError from 'http-errors';
import { Shop } from '../models/shop.js';

export const getAllShops = async (req, res) => {
  const shops = await Shop.find();
  res.status(200).json(shops);
};

export const getShopById = async (req, res) => {
  const { shopId } = req.params;
  const shop = await Shop.findOne({
    _id: shopId,
  });
  if (!shop) {
    throw createHttpError(404, 'Shop not found');
  }
  res.status(200).json(shop);
};
