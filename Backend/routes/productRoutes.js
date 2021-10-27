import express from 'express';
const router = express.Router();
import {getAllItems, getItemByID} from '../controllers/productController.js'


router.route('/').get( getAllItems)
router.route('/:id').get( getItemByID)




export default router