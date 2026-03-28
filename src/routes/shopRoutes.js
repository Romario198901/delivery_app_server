import { Router } from "express";
import {getAllShops, getShopById} from '../controllers/shopController.js';


const router = Router();

router.get('/delivery-app/shops', getAllShops);
router.get('/delivery-app/shops/:shopId', getShopById);

export default router;

