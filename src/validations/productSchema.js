import { Joi, Segments } from 'celebrate';
import { objectIdValidator } from './objectIdValidator.js';
export const getProductsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(10).default(10),
    shopId: Joi.string().custom(objectIdValidator),
      categories: Joi.string(),
    sortBy: Joi.string().valid('price', 'name'),
    sortOrder: Joi.string().valid('asc', 'desc').default('asc'),
  }),
};
export const productIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    productId: Joi.string().custom(objectIdValidator).required(),
  }),
};
