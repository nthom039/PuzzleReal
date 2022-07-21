import { useState } from "react";
import { Col, Container, Row, Card, Button, Form, Modal } from "react-bootstrap";
import PuzzleHolder from "./PuzzleHolder.jpeg"
import CanadaImg from './CanadaPuzzle.jpg'
import SharkImg from './SharkPuzzle.jpeg'
import LegoImg from './LegoPuzzle.jpeg'
import list from './data'
import ItemCard from "./ItemCard";
import CartList from "./cartList";
import shoppingCart from "./shoppingCart";

function Premade() {

    const addLego = () => {

        shoppingCart.push({
          id: ''+shoppingCart.lenght,
          name: "Lego Puzzle",
          price: 35,
          img: './LegoPuzzle.jpeg'
        });

        console.log(shoppingCart);
    };

    const addShark = () => {
        
        shoppingCart.push({
          id: ''+shoppingCart.lenght,
          name: "SharkWeek Puzzle",
          price: 45,
          img: './SharkPuzzle.jpeg'
        });
      
        console.log(shoppingCart);
    };

    const addCanada = () => {
        
        shoppingCart.push({
          id: ''+shoppingCart.lenght,
          name: "Canada Puzzle",
          price: 20,
          img: './CanadaPuzzle.jpeg'
        });
      
        console.log(shoppingCart);
    };

    return (
        <div className="Premade">
            <h1>Premade</h1>
            <h5>We've partnered with some pretty cool people to make some pretty cool stuff</h5>
            <br></br>
            <Container className="cardContainer">
                <Row>
                    <Col><Row>
                        <Col>
                        <div className="center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" alt="Image" src={LegoImg} className='img-thumbnail'/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Lego Puzzle</Card.Title>
                                    <Row>
                                    <Col className="price"><div className="cardPrice"><Card.Text>35$</Card.Text></div></Col>
                                    <Col className="buyButton"><div className="cardButton"><Button variant="primary" onClick={addLego}>Add to cart</Button></div></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                        </Col>
                        <Col>
                        <div className="center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" alt="Image" src={SharkImg} className='img-thumbnail'/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">SharkWeek Puzzle</Card.Title>
                                    <Row>
                                    <Col className="price"><div className="cardPrice"><Card.Text>45$</Card.Text></div></Col>
                                    <Col className="buyButton"><div className="cardButton"><Button variant="primary" onClick={addShark}>Add to cart</Button></div></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                        </Col>
                        <Col>
                        <div className="center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" alt="Image" src={CanadaImg} className='img-thumbnail'/>
                                <Card.Body>
                                    <Card.Title className="cardTitle">Canada Puzzle</Card.Title>
                                    <Row>
                                    <Col className="price"><div className="cardPrice"><Card.Text>20$</Card.Text></div></Col>
                                    <Col className="buyButton"><div className="cardButton"><Button variant="primary" onClick={addCanada}>Add to cart</Button></div></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                        </Col>
                    </Row></Col>
                </Row>
            </Container>
            <br></br>
        </div>
    );
}

export default Premade;