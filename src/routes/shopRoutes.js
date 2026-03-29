import { Router } from 'express';
import { getAllShops, getShopById } from '../controllers/shopController.js';
import { celebrate } from 'celebrate';
import {
  getShopsSchema,
  shopIdParamsSchema,
} from '../validations/shopSchema.js';

const router = Router();

router.get('/delivery-app/shops', celebrate(getShopsSchema), getAllShops);
router.get(
  '/delivery-app/shops/:shopId',
  celebrate(shopIdParamsSchema),
  getShopById,
);

export default router;
