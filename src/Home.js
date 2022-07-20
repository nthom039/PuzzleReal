import { Container, Row, Col, Button } from "react-bootstrap";
import PuzzleHolder from "./PuzzleHolder.jpeg"
import PuzzleBanner from "./Screenshot 2022-07-20 153943.png"

function Home() {
    return (
        <div>
            <img alt="Banner" src={PuzzleBanner} style={{ width: "100%" }}/>
            <h1>Puzzles By You</h1>
            <h5>How We Roll</h5>
            <p>Here at """insert name here""" we provide people with the ability to make the puzzles of their dreams with a wide selection of customization options. If you can dream it we can make it.</p>
            <Container>
                <Row>
                    <Col><img alt="img" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '19rem' }}/><h6>View Our Work</h6><p>We've work with everyone in the movie, music and tech buissnes</p></Col>
                    <Col><img alt="img" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '19rem' }}/><h6>Chose From Our Premade Selection</h6><p>Pick a puzzle from our premade selection to take home</p></Col>
                    <Col><img alt="img" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '19rem' }}/><h6>Make Your Puzzle Come To Life</h6><p>Put your idea in the form of a puzzle and tell your friends about it</p></Col>
                    <Col><img alt="img" src={PuzzleHolder} className='img-thumbnail' style={{ maxWidth: '19rem' }}/><h6>Have An Ambitious Idea? Tell Us About It</h6><p>If your thinking way outside the box, tell us exactly what you want, we will try out best to make it come to life</p></Col>
                </Row>
            </Container>
            <Row>
                <h6><Button href="/makeyourown">Make Your Own Puzzle Now</Button></h6>
            </Row>
        </div>
    );
}

export default Home;