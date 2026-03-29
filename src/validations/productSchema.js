import { Joi, Segments } from 'celebrate';
import { objectIdValidator } from './objectIdValidator.js';
export const getProductsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(10).default(10),
    shopId: Joi.string().custom(objectIdValidator),
    category: Joi.string().valid(
      'Burgers',
      'Drinks',
      'Desserts',
      'Pizza',
      'Salads',
      'Snacks',
    ),
    price: Joi.number().positive(),
  }),
};
export const productIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    productId: Joi.string().custom(objectIdValidator).required(),
  }),
};
