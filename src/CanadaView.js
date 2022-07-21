import { Col, Row } from 'react-bootstrap'
import PuzzleHolder from './PuzzleHolder.jpeg'

function CanadaView() {
    return(
        <div>
            <br></br>
            <img src={PuzzleHolder} style={{ width: "50%" }} alt="here"/>
            <br></br>
            <Row>
                <Col>
                    <h6>Quality</h6>
                    <p>Some of the best quality in the buissnes</p>
                </Col>
                <Col>
                    <h6>Shape</h6>
                    <p>Weirdest shapes around</p>
                </Col>
                <Col>
                    <h6>Unique</h6>
                    <p>Nothing like it anywhere else but here</p>
                </Col>
            </Row>
        </div>
    )
}

export default CanadaView