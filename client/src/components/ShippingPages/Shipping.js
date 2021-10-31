import React, { useState } from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AddShippingAddress } from '../../redux/actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import './checkoutsteps.css'

const Shipping = () => {
    const shippingAddress = useSelector(state => state.cart.shippingAddress)
   
    const dispatch= useDispatch()
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [phone, setPhone] = useState(shippingAddress.phone)
    const history= useHistory()
  
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(AddShippingAddress( address, city, postalCode, phone ))
        history.push('/payment')
    }
    return (
        <Container>
            <div className="steps">
            <CheckoutSteps step1></CheckoutSteps>
            </div>
           
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
            <h2>Your Shipping Address</h2>


        <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Phone No.</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Phone No'
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className='mt-3 btn-block' type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
        </Col>
      </Row>
    </Container>
    );
};

export default Shipping;