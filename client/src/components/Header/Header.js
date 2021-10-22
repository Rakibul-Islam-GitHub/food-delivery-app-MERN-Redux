import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import logo from './logo.png'

const Header = () => {
    return (
      <header>
        <Navbar className="py-1" bg="dark" variant="dark"  expand="lg">
         <Container>
         <Navbar.Brand href="/">
            <img
              alt="logo"
              src={logo}
              
              height="70"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
              <Nav.Link href="/cart"> <i className="fas fa-shopping-cart"> </i> Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"> </i> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
         </Container>
        </Navbar>
      </header>
    );
};

export default Header;