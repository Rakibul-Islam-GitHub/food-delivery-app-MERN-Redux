import React from 'react';
import {LinkContainer} from "react-router-bootstrap";
import {Navbar, Nav, Container} from 'react-bootstrap'


const Header = () => {
    return (
      <header>
        <Navbar className="py-1" bg="dark" variant="dark"  expand="lg">
         <Container>
         <LinkContainer to="/">
         <Navbar.Brand>
            <img
              alt="logo"
              src="/images/logo/logo3.png"
              
              height="70"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
              <LinkContainer to="/cart">
              <Nav.Link> <i className="fas fa-shopping-cart"> </i> Cart</Nav.Link>
               </LinkContainer>

               <LinkContainer to="/login">
               <Nav.Link> <i className="fas fa-user"> </i> Sign In</Nav.Link>
               </LinkContainer>
             
              
            </Nav>
          </Navbar.Collapse>
         </Container>
        </Navbar>
      </header>
    );
};

export default Header;