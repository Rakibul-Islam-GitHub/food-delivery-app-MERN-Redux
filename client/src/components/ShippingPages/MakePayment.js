import React, { useEffect, useState } from 'react';
import { Card, Col, Image, ListGroup, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { getOrderDetails, makePayment } from '../../redux/actions/orderActions';
import Loader from '../spinner/Loader';

const MakePayment = () => {
    const orderDetails= useSelector(state => state.orderDetails)
    const [isPaid, setIsPaid] = useState(false)
    let [loadingAfterPay, setloadingAfterPay]= useState(false)
    
    const {loading, error, orderById} = orderDetails
    const order= orderById 
    const {id} = useParams()
    const orderId= id;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrderDetails(orderId))


    },[orderId, dispatch, isPaid])

    const handlePayment= async (orderId)=>{
      setloadingAfterPay(true)
     await dispatch(makePayment(orderId))
      setIsPaid(true)
      setloadingAfterPay(false)

    }
    return (
        <>
      {loading || loadingAfterPay? <Loader></Loader> : error? <h5>{error}</h5> :
      
      <Row>
          <h3 className='order-title'>Order #{order._id}</h3>
      <Col md={8}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            
           <div className="shipping-heading">
             <Col sm={4} style={{paddingLeft:'0px'}}>
             <h2>Shipping</h2>
             </Col>
             <Col sm={4}>
             {order.isDelivered ? (
              <p variant='success'>
                Delivered on {order.deliveredAt}
              </p>
            ) : (
              <div style={{marinBottom: '0px'}} className="alert alert-danger" role="alert">
  Not Delivered!
</div>
            )}

             </Col>
           </div>
            <p>
              <strong>Name: </strong> {order.user.name}
            </p>
            <p>
              <strong>Email: </strong>{' '}
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
            <p>
              <strong>Address:</strong>
              {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
              {order.shippingAddress.postalCode},{' '}
              {order.shippingAddress.phone}
            </p>
            
          </ListGroup.Item>

          <ListGroup.Item>
            
          <div className="shipping-heading">
             <Col sm={4} style={{paddingLeft:'0px'}}>
             <h2>Payment</h2>
             </Col>
             <Col sm={8}>
             {order.isPaid ? (
              
              <div style={{marinBottom: '0px'}} className="alert alert-success" role="alert">
              
                Paid On{' '} 
                <Moment format="DD-MM-YYYY HH:mm A">
                {order.updatedAt}
                </Moment>
              
            </div>
            ) : (
              <div style={{marinBottom: '0px'}} className="alert alert-danger" role="alert">
  Not Paid!
</div>
            )}

             </Col>
           </div>



            <p>
              <strong>Method: </strong>
              {order.paymentMethod}
            </p>
           
          </ListGroup.Item>

          <ListGroup.Item>
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <h4>Order is empty</h4>
            ) : (
              <ListGroup variant='flush'>
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col xs={6} md={1} >
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
                      <Col className='price' xs={6}>
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
        <Card className="mt-3 mb-5">
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Order Summary</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>${order.totalPrice- order.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Shipping</Col>
                <Col>${order.shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Tax</Col>
                <Col>${order.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>${order.totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            
            
               {!order.isPaid &&  <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn btn-block'
                    onClick={()=>handlePayment(order._id)}
                    
                  >
                    Pay Now
                  </Button>
                </ListGroup.Item>}
              
          </ListGroup>
        </Card>
      </Col>
    </Row>
      }
      
      
    </>
    );
};

export default MakePayment;