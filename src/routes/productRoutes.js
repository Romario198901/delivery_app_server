import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
} from '../controllers/productController.js';

const router = Router();
router.get('/delivery-app/products', getAllProducts);
router.get('/delivery-app/products/:productId', getProductById);

export default router;
