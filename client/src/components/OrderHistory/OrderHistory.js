import React, { useEffect } from 'react';
import { Col, Row, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { myOrderHistory } from '../../redux/actions/orderActions';
import Loader from '../spinner/Loader';

const OrderHistory = () => {
    const dispatch = useDispatch()
    const { orderHistory, loading, error}= useSelector(state => state.orderHistory)
 

    useEffect(() => {
        dispatch(myOrderHistory())

    },[dispatch])
    return (
      <>
        <Row className='justify-content-center'>
          <Col s={11} md={12} lg={8} className=''>
            <h2>Order History</h2>
            {loading ? (
              <Loader />
            ) : error ? (
              <p variant="danger">{error}</p>
            ) : (
              <Table  hover responsive className="table-sm">
                <thead className="bg-dark">
                  <tr style={{color: 'white'}}>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.totalPrice}</td>
                      <td>
                        {order.isPaid ? (
                          order.updatedAt.substring(0, 10)
                        ) : (
                          <i
                            className="fas fa-times"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </td>
                      <td>
                        {order.isDelivered ? (
                          order.deliveredAt.substring(0, 10)
                        ) : (
                          <i
                            className="fas fa-times"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </td>
                      <td>
                        <LinkContainer to={`/order/${order._id}`}>
                          <Button className="btn-sm" variant="light">
                            View
                          </Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </>
    );
};

export default OrderHistory;