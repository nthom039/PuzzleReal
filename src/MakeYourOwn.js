import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

function MakeYourOwn() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <div className="MakeYourOwn">
            <h1>Make Your Own</h1>
            <h5>Blurb goes here</h5>
            <br></br>
            <Row>
                <Col>
                    <Form.Select>
                        <option value="1">Square</option>
                        <option value="2">Rectangle</option>
                        <option value="3">Star</option>
                        <option value="4">Circle</option>
                    </Form.Select>
                    <Form.Select>
                        <option value="1">48</option>
                        <option value="2">200</option>
                        <option value="3">1000</option>
                        <option value="4">2000</option>
                    </Form.Select>
                    <Form.Select>
                        <option value="1">Monochrome</option>
                        <option value="1">Full Color</option>
                    </Form.Select>
                    <Form.Control type="file" accept="image/gif, image/jpeg, image/png" onChange={handleChange}/>
                    
                </Col>
                <Col><img src={file} class="img-fluid"/></Col>
            </Row>
            <br></br>
            <Button>Add to cart</Button>
        </div>
    );
}

export default MakeYourOwn;