import asyncHandler from 'express-async-handler'
import Product from '../Models/productModel.js'

/// fetching all items
/// public route
/// api/products
export const getAllItems= ('/', asyncHandler(async (req, res)=> {
    try {
        const products= await Product.find()

    res.json(products)
        
    } catch (error) {
        res.json( error.message)
    }
}))

/// fetching item by ID 
/// private route
/// api/products/:id
export const getItemByID =
  ("/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Item Not Found...");
    }
  }));