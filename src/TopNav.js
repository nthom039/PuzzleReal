import { Button, Col, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import React, { useState } from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';


function TopNav() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="TopNav">
      <Navbar variant="dark" fixed="top" style={{ background: '#FB8500' }}>
        <Container>
          <linkContainer to="/"><Navbar.Brand href='/'>Puzzles By You</Navbar.Brand></linkContainer>
          <div>
          <Button variant="light" href='/cart'>Cart</Button>
          <Button variant="light" onClick={handleShow}>Menu</Button>
          </div>
          <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <linkContainer to="/"><Nav.Link  href='/'>Home</Nav.Link></linkContainer>
                <linkContainer to="/ourwork"><Nav.Link href='/ourwork'>Our Work</Nav.Link></linkContainer>
                <linkContainer to="/premade"><Nav.Link href='/premade'>Premade</Nav.Link></linkContainer>
                <linkContainer to="/MakeYourOwn"><Nav.Link href='/MakeYourOwn'>Make Your Own</Nav.Link></linkContainer>
                <linkContainer to="/ambitious"><Nav.Link href='/ambitious'>Ambitious</Nav.Link></linkContainer>
                <linkContainer to="/cart"><Nav.Link href='/cart'>Cart</Nav.Link></linkContainer>
                <linkContainer to="/FAQ"><Nav.Link href='/FAQ'>FAQ</Nav.Link></linkContainer>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;