import { Card, Form } from "react-bootstrap";

function Ambitious() {
    return (
        <div className="Ambitious">
            <h1>Ambitious</h1>
            <Card className="Card">
            <Form>
                <Form.Group>
                    <Form.Label>Occasion</Form.Label>
                    <Form.Control type="text" placeholder="Enter Occasion"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Company's/Individual's Name</Form.Label>
                    <Form.Control type="Text" placeholder="Enter Name"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Enter Email"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="Phone" placeholder="Enter Phone Number"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Shape</Form.Label>
                    <Form.Control type="Text" placeholder="Enter Shape"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Detailed Description</Form.Label>
                    <Form.Control type="Text" placeholder="Enter Shape"></Form.Control>
                </Form.Group>
            </Form>
            </Card>
        </div>
    );
}

export default Ambitious;