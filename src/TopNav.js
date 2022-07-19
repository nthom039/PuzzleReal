import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import React, { useState } from 'react';


function TopNav() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="TopNav">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Title</Navbar.Brand>
          <div>
          <Button variant="light">Cart</Button>
          <Button variant="light" onClick={handleShow}>Launch</Button> 
          </div>
          <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Our Work</Nav.Link>
                <Nav.Link>Premade</Nav.Link>
                {/*<Nav.Link as={Link} to="/MakeYourOwn">Make Your Own</Nav.Link>*/}
                <Nav.Link>Ambitious</Nav.Link>
                {/*<Nav.Link as={Link} to="/Cart">Cart</Nav.Link>*/}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;