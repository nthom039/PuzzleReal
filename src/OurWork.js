import { Col, Container, Row, Img } from "react-bootstrap";

function OurWork() {
    return (
        <div className="OurWork">
            <h1>Our Work</h1>
            <h5>Blurb goes here</h5>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                        <Row>
                            <img variant="top" src="holder.js/100px180" />
                            <h5>Text</h5>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurWork;