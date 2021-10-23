import React from 'react';
import ItemList from './ItemList/ItemList';
import items from '../../../src/items'
import { Col, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <>

        <h1 className="text-center mb-3">Latest Food Items</h1>
        <Row>
          {items.map(item => 
              (<Col sm={12} md={6} lg={4} xl={3}>
                
                <ItemList  item={item} key={item._id} />
              </Col>)
          )}
        </Row>
        </>
    );
};

export default Home;