import express from 'express';
const router = express.Router();
import {createOrder, getOrderById, getOrders} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'


router.route('/').post(protect, createOrder)
router.route('/').get(protect, getOrders)
router.route('/:id').get(protect, getOrderById)



export default router