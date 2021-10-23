import React from 'react';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import items from '../../items';
import Rating from '../Home/ItemList/Rating';


const ItemDetails = () => {
    const {id}= useParams()
    const item= items.find(item=>item._id === id)
    return (
      <>
        <Link className="btn btn-dark my-2" to="/">
          Back
        </Link>

        <Row>

          <Col md={6}>
            <Image className="h-75 w-100" src={item.image} alt={item.name} rounded  fluid></Image>
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item variant="info">
                  <h4>{item.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item >
              <Rating rating={item.rating} review={item.numReviews}></Rating>
              </ListGroup.Item>
              <ListGroup.Item>
              Price: ${item.price}
              </ListGroup.Item>
              <ListGroup.Item>
              Description: ${item.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
              <ListGroup>
                  <ListGroup.Item>
                  <Row>
                      <Col>
                      Price:
                      </Col>
                      <Col>
                      <strong> ${item.price}</strong>
                      </Col>
                  </Row>
                  </ListGroup.Item>

              
                  <ListGroup.Item>
                  <Row>
                      <Col>
                      Status:
                      </Col>
                      <Col>
                      {item.countInStock===0? 'Out of Stock' : 'In Stock'}
                      </Col>
                  </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                      <Button className="btn btn-block" type='button' disabled={item.countInStock===0}>Add To Cart</Button>
                  </ListGroup.Item>
              </ListGroup>
           
          </Col>
        </Row>
      </>
    );
};

export default ItemDetails;