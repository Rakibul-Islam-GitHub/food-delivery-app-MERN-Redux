import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios'

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {

    const loadAllItems= async ()=>{
        const res= await axios.get('/api/products')
        setItems(res.data)
    }
    loadAllItems();


  },[])
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