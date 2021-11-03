import express from 'express';
const router = express.Router();
import {createOrder, getOrderById, getOrders, makePayment} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'


router.route('/').post(protect, createOrder)
router.route('/').get(protect, getOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:orderId').put(protect, makePayment)



export default router