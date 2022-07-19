import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";

function Ambitious() {
    return (
        <div className="Ambitious">
            <h1>Ambitious</h1>
            <Card className="Card">
            <br></br>
            <Form>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <Form.Label className="cardText">Occasion</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Enter Occasion"></Form.Control>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Company's/Individual's Name</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="Text" placeholder="Enter Name"></Form.Control>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Email</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="Email" placeholder="Enter Email"></Form.Control>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Phone Number</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="Phone" placeholder="Enter Phone Number"></Form.Control>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Shape</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="Text" placeholder="Enter Shape"></Form.Control>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Detailed Description</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="Text" placeholder="Enter Shape"></Form.Control>
                        </Col>
                    </Row>
                </Container>
            </Form>
            <br></br>
            <Button>Submit</Button>
            <br></br>
            </Card>
        </div>
    );
}

export default Ambitious;