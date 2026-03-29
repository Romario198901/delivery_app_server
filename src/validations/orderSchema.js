import { Joi, Segments } from 'celebrate';
import { objectIdValidator } from './objectIdValidator.js';

export const getOrdersSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(10).default(10),
    email: Joi.string().email().lowercase().trim(),
    phone: Joi.string().trim(),
  }),
};
const createOrderItemSchema = Joi.object({
  name: Joi.string().min(3).required().trim().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name should have at least 3 characters',
    'any.required': 'Name is required',
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': 'Price must be a number',
    'number.min': 'Price should be 0 or more',
    'any.required': 'Price is required',
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    'number.base': 'Quantity must be a number',
    'number.min': 'Quantity should be more at least 1',
    'any.required': 'Quantity is required',
  }),
});
export const createOrderSchema = {
  [Segments.BODY]: Joi.object({
    customerName: Joi.string().min(3).max(50).required().trim().messages({
      'string.base': 'customerName must be a string',
      'string.min': 'customerName should have at least 3 characters',
      'any.required': 'customerName is required',
    }),
    email: Joi.string().email().required().lowercase().trim().messages({
      'string.base': 'Email must be a string',
      'string.email': 'Email should be valid',
      'string.lowercase':
        'Email should be at low register please check your keyboard',
      'any.required': 'Email is required',
    }),
    phone: Joi.string()
      .trim()
      .pattern(/^\+?[0-9]{10,15}$/)
      .required()
      .messages({
        'string.base': 'Phone must be a string',
        'string.empty': 'Phone is required',
        'string.pattern.base': 'Phone must be a valid phone number',
        'any.required': 'Phone is required',
      }),
    address: Joi.string().required().trim().messages({
      'string.base': 'Address must be a string',
      'any.required': 'Address is required',
    }),
    items: Joi.array().items(createOrderItemSchema).min(1).required().messages({
      'array.base': 'Items must be an array',
      'array.min': 'Order must contain at least 1 item',
      'any.required': 'A list of order items is required',
    }),
    totalPrice: Joi.number().min(1).required().messages({
      'number.base': 'totalPrice must be a number',
      'number.min': 'totalPrice should be at least 1',
      'any.required': 'totalPrice is required',
    }),
  }),
};

export const orderIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    orderId: Joi.string().custom(objectIdValidator).required(),
  }),
};
