import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CheckoutSteps from './CheckoutSteps';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push("/confirm");
  };

  return (
    <Container style={{minHeight:'80vh'}}>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h3>Payment Method</h3>

          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label as="legend">Select Method</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="PayPal or Credit Card"
                  id="PayPal"
                  name="paymentMethod"
                  value={paymentMethod}
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
              </Col>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Continue
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentMethod;