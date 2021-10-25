import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler'
import Product from '../Models/productModel.js'

router.get('/', async (req, res)=> {
    try {
        const products= await Product.find()

    res.json(products)
        
    } catch (error) {
        res.json( error.message)
    }
})


/// fetching item by ID 
/// private route
/// api/products/:id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Item Not Found...");
    }
  })
);

export default router