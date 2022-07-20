import { Col, Container, Row, Button } from "react-bootstrap";
import PuzzleHolder from "./PuzzleHolder.jpeg"

function OurWork() {
    return (
        <div className="OurWork">
            <h1>Our Work</h1>
            <h5>We've made peices for celebreties, movies, companies and many many more</h5>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Top Gun</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Sharknado</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>True Romance</h5>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Wu-Tang Clan</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Nick Cage</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Elvis</h5>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>Apple</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>New Balance</h5>
                            </div>
                        </Row>
                        <Row>
                            <div className="imageGrid">
                                <img variant="top" alt="PuzzleHolder" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '12.5rem' }}/>
                                <h5>CBC</h5>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <h6><Button href="/makeyourown">Make Your Own Puzzle Now</Button></h6>
                </Row>
            </Container>
        </div>
    );
}

export default OurWork;