import { Button, Col, Form, Row, Modal } from "react-bootstrap";
import { useState } from "react";

function MakeYourOwn() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="MakeYourOwn">
            <h1>Make Your Own</h1>
            <h5>Your idea, your puzzle</h5>
            <br></br>
            <Row>
                <Col>
                <Row>
                    <Col sm={1}><p>Shape</p></Col>
                    <Col><Form.Select>
                        <option></option>
                        <option value="1">Original</option>
                        <option value="2">Square</option>
                        <option value="3">Rectangle</option>
                        <option value="4">Star</option>
                        <option value="5">Circle</option>
                    </Form.Select></Col>
                </Row>
                    
                <Row>
                    <Col sm={1}><p>Pieces</p></Col>
                    <Col><Form.Select>
                        <option></option>
                        <option value="1">48</option>
                        <option value="2">200</option>
                        <option value="3">1000</option>
                        <option value="4">2000</option>
                    </Form.Select></Col>
                </Row>
                <Row>
                    <Col sm={1}><p>Color</p></Col>
                    <Col><Form.Select>
                        <option></option>
                        <option value="1">Monochrome</option>
                        <option value="1">Full Color</option>
                    </Form.Select></Col>
                </Row>
                <Row>
                    <Col sm={1}><p>Image</p></Col>
                    <Col><Form.Control type="file" accept="image/gif, image/jpeg, image/png" onChange={handleChange}/></Col>
                </Row>
                </Col>
                <Col><img src={file} class="img-fluid" alt="Puzzle will apear here"/></Col>
            </Row>
            <br></br>
            <Button onClick={handleShow}>Add to cart</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Congrats</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your custon puzzle has been added to your cart!</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    YAY!
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MakeYourOwn;