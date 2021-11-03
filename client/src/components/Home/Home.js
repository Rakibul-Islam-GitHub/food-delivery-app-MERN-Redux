import React, { useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import { Col, Row } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { getItems } from '../../redux/actions/itemActions';
import Loader from '../spinner/Loader';
import HomeHeader from './HomeHeader/HomeHeader';

const Home = () => {
  const dispatch= useDispatch()

  const itemList= useSelector(state=> state.itemList)
  const {items, error, loading} = itemList
  

  useEffect(() => {

    dispatch(getItems())


  },[dispatch])
    return (
        <>
        <HomeHeader></HomeHeader>
        <h1 className="text-center mb-3">Latest Food Items</h1>
        {loading ? <Loader/>
        : error ? <h4>{error}</h4> : 
         <Row>
         {items.map(item => 
         
             (<Col key={item._id} sm={12} md={6} lg={4} xl={3}>
               
               <ItemList  item={item}  />
             </Col>)
         )}
       </Row>
        }
       
        </>
    );
};

export default Home;