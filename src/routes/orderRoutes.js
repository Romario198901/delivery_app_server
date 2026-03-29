import { Router } from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder,
} from '../controllers/orderController.js';
import { celebrate } from 'celebrate';
import {
  createOrderSchema,
  getOrdersSchema,
  orderIdParamSchema,
} from '../validations/orderSchema.js';

const router = Router();

router.get('/delivery-app/orders', celebrate(getOrdersSchema), getAllOrders);
router.get(
  '/delivery-app/orders/:orderId',
  celebrate(orderIdParamSchema),
  getOrderById,
);
router.post('/delivery-app/orders', celebrate(createOrderSchema), createOrder);

export default router;
