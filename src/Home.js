import { Container, Row, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import PuzzleBanner from "./Screenshot 2022-07-20 153943.png"
import MovieReelImg from './MovieReel.jpg'
import ConstructionImg from './Construction.jpg'
import IdeaImg from './Idea.jpg'
import JigSawImg from './jigsaw-puzzle-1.jpg'

function Home() {
    return (
        <div>
            <img alt="Banner" src={PuzzleBanner} style={{ width: "100%" }}/>
            <h1>Puzzles By You</h1>
            <h5>How We Roll</h5>
            <p>Here at <strong>Puzzles By You</strong> we provide people with the ability to make the puzzles of their dreams with a wide selection of customization options. If you can dream it we can make it.</p>
            <Container>
                <Row>
                    <Col><Link to="/ourwork"><img alt="img" src={MovieReelImg} className='img-thumbnail' style={{ maxWidth: '19rem' }} href="/"/></Link><h6>View Our Work</h6><p>We've work with everyone in the movie, music and tech buissnes</p></Col>
                    <Col><Link to="/premade"><img alt="img" src={JigSawImg} className='img-thumbnail' style={{ maxWidth: '19rem' }}/></Link><h6>Chose From Our Premade Selection</h6><p>Pick a puzzle from our premade selection to take home</p></Col>
                    <Col><Link to="/makeyourown"><img alt="img" src={ConstructionImg} className='img-thumbnail' style={{ maxWidth: '19rem' }}/></Link><h6>Make Your Puzzle Come To Life</h6><p>Put your idea in the form of a puzzle and tell your friends about it</p></Col>
                    <Col><Link to="/ambitious"><img alt="img" src={IdeaImg} className='img-thumbnail' style={{ maxWidth: '19rem' }}/></Link><h6>Have An Ambitious Idea? Tell Us About It</h6><p>If your thinking way outside the box, tell us exactly what you want, we will try out best to make it come to life</p></Col>
                </Row>
            </Container>
            <Row>
                <h6><Button href="/makeyourown">Make Your Own Puzzle Now</Button></h6>
            </Row>
        </div>
    );
}

export default Home;