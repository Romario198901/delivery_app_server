import createHttpError from 'http-errors';
import { Product } from '../models/product.js';

export const getAllProducts = async (req, res) => {
  const { page = 1, perPage = 10, shopId, category, price } = req.query;
  const skip = (page - 1) * perPage;
  const productsQuery = Product.find();
  if (shopId) {
    productsQuery.where('shopId').equals(shopId);
  }
  if (category) {
    productsQuery.where('category').equals(category);
  }
  if (shopId && category) {
    productsQuery
      .where('shopId')
      .equals(shopId)
      .where('category')
      .equals(category);
  }
  if (price) {
    productsQuery.where('price').gte(price);
  }
  const [totalItems, products] = await Promise.all([
    productsQuery.clone().countDocuments(),
    productsQuery.skip(skip).limit(perPage),
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
