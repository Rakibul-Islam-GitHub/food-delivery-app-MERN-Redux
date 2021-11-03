import asyncHandler from 'express-async-handler'
import Order from '../Models/orderModel.js'

export const createOrder= ('/', asyncHandler(async (req, res)=>{
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;
    
    const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      })
  
    const orderDone= await order.save()

    if (orderDone) {
        res.json(orderDone)
        
    }
    else {
        res.status(404)
        throw new Error('Problem with creating order')
    }


}))


/// get order by id
export const getOrderById = ('/:id', asyncHandler(async (req, res)=>{
  
  const order = await Order.findById(req.params.id).populate('user', 'name email')
    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order Details not found...");
    }
}))


/// get orders by user id
export const getOrders = ('/', asyncHandler(async (req, res)=>{
  
  const orders = await Order.find(req.user._id)
    if (orders) {
      res.json(orders);
    } else {
      res.status(404);
      throw new Error("Order History not found...");
    }
}))

/// make payment : change ispaid true
export const makePayment = ('/:orderId', asyncHandler(async (req, res)=>{

  
  
  const updatePayment = await Order.findOneAndUpdate({_id:req.params.orderId}, {isPaid:true}, {
    new: true
  })
    if (updatePayment.isPaid) {
      res.json(updatePayment.isPaid);
    } else {
      res.status(404);
      throw new Error("Order Details not found...");
    }
}))