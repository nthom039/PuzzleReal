import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import OurWork from './OurWork';
import Home from './Home';
import Ambitious from './Ambitious';
import Premade from './Premade';


function TopNav() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Router>
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
                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                <Nav.Link as={Link} to="/OurWork">Our Work</Nav.Link>
                <Nav.Link as={Link} to="/Premade">Premade</Nav.Link>
                {/*<Nav.Link as={Link} to="/MakeYourOwn">Make Your Own</Nav.Link>*/}
                <Nav.Link as={Link} to="/Ambitious">Ambitious</Nav.Link>
                {/*<Nav.Link as={Link} to="/Cart">Cart</Nav.Link>*/}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </div>
    <div>
      <Switch>
        <Route path="Home">
          <Home />
        </Route>
        <Route path="OurWork">
          <OurWork />
        </Route>
        <Route path="Premade">
          <Premade />
        </Route>
        {/*<Route path="MakeYourOwn">
          <MakeYourOwn />
        </Route>*/}
        <Route path="Ambitious">
          <Ambitious />
        </Route>
        {/*<Route path="Cart">
          <Cart />
        </Route>*/}
      </Switch>
    </div>
    </Router>
  );
}

export default TopNav;