import React from 'react';
import {LinkContainer} from "react-router-bootstrap";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../redux/actions/userActions';


const Header = () => {
  const user= useSelector(state => state.user)
  const dispatch= useDispatch()
  const userInfo= user.userInfo;
  const logoutHandler= ()=> {
    dispatch(logout())
  }
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

               

          {userInfo ? <NavDropdown title={userInfo.name} id="username">
             
             <LinkContainer to="/orderhistory">
             <NavDropdown.Item >Order History</NavDropdown.Item>

             </LinkContainer>
             
             
               <NavDropdown.Item onClick={logoutHandler}>
                 Logout
             
               </NavDropdown.Item>
             
        
      </NavDropdown> :
        <LinkContainer to="/login">
        <Nav.Link> <i className="fas fa-user"> </i> Sign In</Nav.Link>
        </LinkContainer>
      }
               
             
              
            </Nav>
          </Navbar.Collapse>
         </Container>
        </Navbar>
      </header>
    );
};

export default Header;