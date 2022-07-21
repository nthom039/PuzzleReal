import { Card, Row, Col, Button } from "react-bootstrap"
import PuzzleHolder from './PuzzleHolder.jpeg'
import React from "react";

const ItemCard = ({ item, handleBuy }) => {

    const { name, price } = item;

    return (
        <div className="ItemCard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                <Card.Body>
                    <Card.Title className="cardTitle">{ name }</Card.Title>
                    <Row>
                    <Col className="price"><div className="cardPrice">{ price }$<Card.Text></Card.Text></div></Col>
                    <Col className="buyButton"><div className="cardButton"><Button variant="light" onClick={() => handleBuy(item)}>Add to cart</Button></div></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default ItemCard;