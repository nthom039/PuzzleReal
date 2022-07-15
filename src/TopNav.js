import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import React, { useState } from 'react';

function TopNav() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="TopNav">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
          <Button variant="light">Cart</Button>
          <Button variant="light" onClick={handleShow}>
            Launch
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;