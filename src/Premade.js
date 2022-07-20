import { Col, Container, Row, Card, Button } from "react-bootstrap";
import PuzzleHolder from "./PuzzleHolder.jpeg"

function Premade() {
    return (
        <div className="Premade">
            <h1>Premade</h1>
            <h5>We've partnered with some pretty cool people to make some pretty cool stuff</h5>
            <br></br>
            <Container className="cardContainer">
                <Row>
                    <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                </Row>
                <br></br>
                <Row>
                <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                </Row>
                <br></br>
                <Row>
                <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Image" src={PuzzleHolder} className='img-thumbnail'/>
                            <Card.Body>
                                <Card.Title className="cardTitle">Card Title</Card.Title>
                                <Row>
                                <Col className="price"><div className="cardPrice"><Card.Text>$$$</Card.Text></div></Col>
                                <Col className="buyButton"><div className="cardButton"><Button variant="primary">Add to cart</Button></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                </Row>
            </Container>
            <br></br>
        </div>
    );
}

export default Premade;