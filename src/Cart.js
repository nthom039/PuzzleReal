import { useState } from "react";
import { Card, Form, Row, Col, Button, Modal } from "react-bootstrap";
import PuzzleHolder from "./PuzzleHolder.jpeg"
import CartList from "./cartList";
import list from './data'
import shoppingCart from "./shoppingCart";

function Cart() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const first = shoppingCart[0];

    return (
        <div className="Cart">
            <h1>Cart</h1>
            <h1>{ first?.name }</h1>
            {/*<section>
                {
                    list.map((item)=>(
                        <CartList key={item.price} item={item}/>
                        ))
                }
            </section>*/}
            <Row>
                <Col>
                    <Card>
                        <Row>
                            <Col>
                                <div className="TitleDes">
                                    <Card.Title>Name of Item</Card.Title>
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
                                <input type="number" min="0" defaultValue={"1"}/>
                                <Card.Text>Price</Card.Text>
                            </Col>
                        </Row>
                    </Card>
                    <br></br>
                    <Card>
                        <Row>
                            <Col>
                                <div className="TitleDes">
                                    <Card.Title>Name of Item</Card.Title>
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
                                <input type="number" min="0" defaultValue={"1"}/>
                                <Card.Text>Price</Card.Text>
                            </Col>
                        </Row>
                    </Card>
                    <br></br>
                    <Card>
                        <Row>
                            <Col>
                                <div className="TitleDes">
                                    <Card.Title>Name of Item</Card.Title>
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
                                <input type="number" min="0" defaultValue={"1"}/>
                                <Card.Text>Price</Card.Text>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <br></br>
                        <Card.Title>Shippoing Information</Card.Title>
                        <Row>
                            <Col><Card.Text>Name</Card.Text></Col>
                            <Col><Form.Control></Form.Control></Col>
                        </Row>
                        <Row>
                            <Col><Card.Text>Address</Card.Text></Col>
                            <Col><Form.Control></Form.Control></Col>
                        </Row>
                        <Row>
                            <Col><Card.Text>City</Card.Text></Col>
                            <Col><Form.Control></Form.Control></Col>
                        </Row>
                        <Row>
                            <Col><Card.Text>Country</Card.Text></Col>
                            <Col><Form.Control></Form.Control></Col>
                        </Row>
                        <Row>
                            <Col><Card.Text>Postal Code / ZIP</Card.Text></Col>
                            <Col><Form.Control></Form.Control></Col>
                        </Row>
                        <Row>
                            <Col><Card.Text>Email</Card.Text></Col>
                            <Col><Form.Control type="Email"></Form.Control></Col>
                        </Row>
                        <br></br>
                        <Card.Title>Billing Information</Card.Title>
                        <Row><Col><Button variant="dark">VISA</Button></Col><Col><Button variant="dark">MasterCard</Button></Col><Col><Button variant="dark">Other</Button></Col></Row>
                        <br></br>
                        <Row>
                            <Col><Card.Text>CardNumber</Card.Text></Col>
                            <Col><Form.Control></Form.Control></Col>
                        </Row>
                        <Row>
                            <Col><Card.Text>Expire</Card.Text></Col>
                            <Col><Form.Control></Form.Control></Col>
                        </Row>
                        <Row>
                            <Col><Card.Text>CCV</Card.Text></Col>
                            <Col><Form.Control></Form.Control></Col>
                        </Row>
                        <br></br>
                        <Row><Col><Button onClick={handleShow} variant="dark">Checkout</Button></Col></Row>
                        <br></br>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Congrats</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your puzzles should be at your house in 5-7 buisnes days</Modal.Body>
                <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    YAY!
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Cart;