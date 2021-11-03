import React, { useEffect, useState } from 'react';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getItemDetails } from '../../redux/actions/itemActions';

import Rating from '../Home/ItemList/Rating';
import Loader from '../spinner/Loader';
import './itemDetails.css'


const ItemDetails = () => {
  const [quantity, setQuantity]= useState(1)
  const dispatch= useDispatch()
  const getitemDetails= useSelector(state => state.itemDetails)
  const {item, loading, error} = getitemDetails

  const {id} = useParams()

  useEffect(() => {

    dispatch(getItemDetails(id))


  },[dispatch, id])
const history= useHistory()
  const handleAddToCart=()=>{
    history.push(`/cart/${id}?qty=${quantity}`)
  }
    
    return (
      <>
        <Link className="btn btn-dark my-2" to="/">
          Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <h4>{error}</h4>
        ) : (
          <Row>
            <Col md={6}>
              <Image
                className="h-75 w-100"
                src={item.image}
                alt={item.name}
                rounded
                fluid
              ></Image>
            </Col>

            <Col md={3} className="itemdetails-title">
              <ListGroup variant="flush">
                <ListGroup.Item variant="info">
                  <h4>{item.name}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={item.rating}
                    review={item.numReviews}
                  ></Rating>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
                <ListGroup.Item className='mb-4'>
                  Description: ${item.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong> ${item.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {item.countInStock === 0 ?  <p style={{color:'red'}}>Out of stock</p> : `In Stock(${item.countInStock})`}
                    </Col>
                  </Row>
                </ListGroup.Item>
                
                <div className="quantity-input">
                  <button  disabled={quantity===1|| item.countInStock===0 }
                    className="quantity-input__modifier quantity-input__modifier--left"
                    onClick={()=>setQuantity(quantity-1)}
                  >
                    &mdash;
                  </button>
                  <input
                    className="quantity-input__screen"
                    type="number"
                    value={quantity}
                    min='1'
                    readOnly
                  />
                  <button  disabled={quantity ===item.countInStock || item.countInStock===0}
                    className="quantity-input__modifier quantity-input__modifier--right"
                    onClick={()=>setQuantity(quantity+1)}
                  >
                    &#xff0b;
                  </button>
                </div>

                <ListGroup.Item>
                  <Button
                    className="btn btn-block"
                    type="button"
                    disabled={item.countInStock === 0}
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        )}
      </>
    );
};

export default ItemDetails;