import React from "react";
import {Container,Navbar,NAv, Nav} from 'react-bootstrap'
import './Header.css'
export const Header = () => {
  return <header>
    <Navbar className="nav-bg" variant='dark'>
      <Container>
       <Navbar.Brand href='/'>Fc Market</Navbar.Brand>
       <Nav>
        <Nav.Link href='/cart'>سبد خرید</Nav.Link>
        <Nav.Link href='/account'>حساب کاربری </Nav.Link>
       </Nav>
      </Container>
    </Navbar>
  </header>;
};
