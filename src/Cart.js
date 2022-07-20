import { Card, Form, Row, Col, Button } from "react-bootstrap";
import PuzzleHolder from "./PuzzleHolder.jpeg"

function Cart() {
    return (
        <div className="Cart">
            <h1>Cart</h1>
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
                        <Row><Col><Button>VISA</Button></Col><Col><Button>MasterCard</Button></Col><Col><Button>Other</Button></Col></Row>
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
                        <Row><Col><Button>Checkout</Button></Col></Row>
                        <br></br>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Cart;