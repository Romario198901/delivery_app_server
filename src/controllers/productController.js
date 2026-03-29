import createHttpError from 'http-errors';
import { Product } from '../models/product.js';

export const getAllProducts = async (req, res) => {
  const {
    page = 1,
    perPage = 10,
    shopId,
    categories,
    sortBy,
    sortOrder = 'asc',
  } = req.query;
  const skip = (page - 1) * perPage;
  const productsQuery = Product.find();
  const filter = {};

  if (shopId) {
    filter.shopId = shopId;
  }

  if (categories) {
    const parsedCategories = categories.split(',').map((item) => item.trim());
    filter.category = { $in: parsedCategories };
  }
  const sort = {};

  if (sortBy) {
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
  }
  const [totalItems, products] = await Promise.all([
    productsQuery.clone().countDocuments(filter),
    productsQuery.find(filter).sort(sort).skip(skip).limit(perPage),
  ]);
  const totalPages = Math.ceil(totalItems / perPage);
  res.status(200).json({
    page,
    perPage,
    totalItems,
    totalPages,
    products,
  });
};
export const getProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findOne({
    _id: productId,
  });
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json(product);
};
