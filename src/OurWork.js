import { Col, Container, Row } from "react-bootstrap";
import PuzzleHolder from "./PuzzleHolder.jpeg"

function OurWork() {
    return (
        <div className="OurWork">
            <h1>Our Work</h1>
            <h5>Blurb goes here</h5>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Text</h5>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurWork;