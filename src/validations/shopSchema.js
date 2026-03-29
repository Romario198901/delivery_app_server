import { Joi, Segments } from 'celebrate';
import { objectIdValidator } from './objectIdValidator.js';

export const getShopsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(10).default(10),
    rating: Joi.number().min(1).max(5).default(4),
  }),
};
export const shopIdParamsSchema = {
  [Segments.PARAMS]: Joi.object({
    shopId: Joi.string().custom(objectIdValidator).required(),
  }),
};
