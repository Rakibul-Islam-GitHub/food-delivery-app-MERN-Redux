import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import CartPage from './components/Cart/CartPage';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import Shipping from './components/ShippingPages/Shipping';
import PaymentMethod from './components/ShippingPages/PaymentMethod';
import ConfirmOrder from './components/ShippingPages/ConfirmOrder';
import MakePayment from './components/ShippingPages/MakePayment';
import OrderHistory from './components/OrderHistory/OrderHistory';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="main container py-3">
      <Route path="/login">
          <Login></Login>
        </Route>
        <Route  path="/item/:id">
          <ItemDetails></ItemDetails>
        </Route>
        <Route  path="/cart/:id?">
          <CartPage></CartPage>
        </Route>
        <PrivateRoute path="/shipping">
          <Shipping></Shipping>
        </PrivateRoute>
        <PrivateRoute path="/payment">
          <PaymentMethod></PaymentMethod>
        </PrivateRoute>
        <PrivateRoute path="/confirm">
          <ConfirmOrder></ConfirmOrder>
        </PrivateRoute>
        <PrivateRoute path="/order/:id">
          <MakePayment></MakePayment>
        </PrivateRoute>
        <PrivateRoute path="/orderhistory">
          <OrderHistory></OrderHistory>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </div>

      <Footer></Footer>
    </Router>
  );
}

export default App;
