import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import PuzzleHolder from './PuzzleHolder.jpeg';

const CartList = ({ item }) => {

    const { name, price } = item;
    
    var [value, setValue] = useState('');
    
    return (
        <div> 
            <Card>
                <Row>
                    <Col>
                        <div className="TitleDes">
                            <Card.Title>{ name }</Card.Title>
                            <Card.Text>Description of product</Card.Text>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <Col><Card.Img alt="image of product" src={PuzzleHolder} style={{ maxWidth: '15rem' }}/></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Card.Text>Quantity</Card.Text>
                        <input type="number" min="0" defaultValue={1} input onChange={event => setValue(event.target.value)}/>
                        <Card.Text>{ price * value}$</Card.Text>
                    </Col>
                </Row>
            </Card>
            <br></br>
        </div>
     );
}
 
export default CartList;