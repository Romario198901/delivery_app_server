import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
} from '../controllers/productController.js';
import { celebrate } from 'celebrate';
import {
  getProductsSchema,
  productIdParamSchema,
} from '../validations/productSchema.js';

const router = Router();
router.get(
  '/delivery-app/products',
  celebrate(getProductsSchema),
  getAllProducts,
);
router.get(
  '/delivery-app/products/:productId',
  celebrate(productIdParamSchema),
  getProductById,
);

export default router;
