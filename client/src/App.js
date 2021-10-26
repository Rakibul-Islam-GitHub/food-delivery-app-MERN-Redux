import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import CartPage from './components/Cart/CartPage';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="main container py-3">
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/item/:id">
          <ItemDetails></ItemDetails>
        </Route>
        <Route  path="/cart/:id?">
          <CartPage></CartPage>
        </Route>
      </div>

      <Footer></Footer>
    </Router>
  );
}

export default App;
