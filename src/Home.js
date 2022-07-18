import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
    return (
        <div>
            <img alt="Banner"/>
            <h1>Home Name Title</h1>
            <h5>Blurb</h5>
            <Container>
                <Row>
                    <Col><img alt="Image"/><h6>What</h6><p>Blurb</p></Col>
                    <Col><img alt="Image"/><h6>Going</h6><p>Blurb</p></Col>
                    <Col><img alt="Image"/><h6>Happen</h6><p>Blurb</p></Col>
                </Row>
            </Container>
            <Row>
                <h6><Button>Make Your Own Puzzle Now</Button></h6>
            </Row>
        </div>
    );
}

export default Home;