import React, { useEffect } from 'react';
import { Card, Col, Image, ListGroup, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import CheckoutSteps from './CheckoutSteps';
import { createOrder } from '../../redux/actions/orderActions';
import { CREATE_ORDER_RESET } from '../../redux/actions/orderActionTypes';

const ConfirmOrder = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const order= useSelector(state => state.order)
  const {success,  orderDetails}= order

  const cart = useSelector((state) => state.cart)
  cart.paymentMethod= 'PayPal'
  if (!cart.shippingAddress.address) {
    history.push('/shipping')
  } 
  else if (!cart.paymentMethod) {
    history.push('/payment')
  }

  /// item price and tax
  cart.itemsPrice= cart.cartItems.reduce((acc, item) => acc+ item.price* item.quantity ,0)
  cart.taxPrice= cart.itemsPrice* 0.02
  cart.shippingPrice=0
  cart.totalPrice= cart.itemsPrice + cart.taxPrice + cart.shippingPrice
  
  useEffect(()=>{
    if (success) {
      history.push(`/order/${orderDetails._id}`)
      dispatch({type: CREATE_ORDER_RESET})
    }
  })
    
  const placeOrderHandler=()=> {
     dispatch(createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,

     }))
  }

    return (
        <>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        

        <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.phone}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <h4>Your cart is empty</h4>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.quantity} x ${item.price} = ${item.quantity * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>Order Summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax(2%)</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {/* {error && <Message variant='danger'>{error}</Message>} */}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
            
        </>
    );
};

export default ConfirmOrder;