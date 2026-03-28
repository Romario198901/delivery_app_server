import { Router } from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder,
} from '../controllers/orderController.js';

const router = Router();

router.get('/delivery-app/orders', getAllOrders);
router.get('/delivery-app/orders/:orderId', getOrderById);
router.post('/delivery-app/orders', createOrder);

export default router;
