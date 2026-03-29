import createHttpError from 'http-errors';
import { Shop } from '../models/shop.js';

export const getAllShops = async (req, res) => {
  const { page = 1, perPage = 10, minRating, maxRating } = req.query;
  const skip = (page - 1) * perPage;
  const filter = {};

  if (minRating !== undefined || maxRating !== undefined) {
    filter.rating = {};
    if (minRating !== undefined) filter.rating.$gte = Number(minRating);
    if (maxRating !== undefined) filter.rating.$lte = Number(maxRating);
  }
  const shopsQuery = Shop.find();

  const [totalItems, shops] = await Promise.all([
    shopsQuery.clone().countDocuments(filter),
    shopsQuery.find(filter).skip(skip).limit(perPage),
  ]);
  const totalPages = Math.ceil(totalItems / perPage);
  res.status(200).json({
    page,
    perPage,
    totalItems,
    totalPages,
    shops,
  });
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
