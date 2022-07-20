import { Col, Container, Row, Card, Button } from "react-bootstrap";
import PuzzleHolder from "./PuzzleHolder.jpeg"

function Premade() {
    return (
        <div className="Premade">
            <h1>Premade</h1>
            <h5>Blurb goes here yaya</h5>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
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
                                <Col className="price"><Card.Text>$$$</Card.Text></Col>
                                <Col className="buyButton"><Button variant="primary">Buy</Button></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Premade;