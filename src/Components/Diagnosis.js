import React from "react"
import {Form, Container, Row, Col, Button} from "react-bootstrap";
import '../css/Diagnosis.css';

class Diagnosis extends React.Component{
    render() {
        return(
            <Container className="s" fluid={1}>
                <Row>
                    <Col md={{span:8, offset:2}}>
                        <Col md={{span:8, offset:4}}>
                            <h3>Sorry. No diagnosis record for Azeez Biodun</h3>

                            <h4>Add new diagnosis for Azeez Biodun</h4>
                            <hr/>
                            <Form className="diagnosis_form">
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="form-label">Diagnosis:</Form.Label>
                                    <Form.Control type="text" placeholder="Diagnosis" />
                                    <p>Describe your diagnosis in full details</p>
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="form-label">Symptoms:</Form.Label>
                                    <Form.Control type="text" placeholder="Show Symptoms" />
                                    <p>Describe your diagnosis in full details</p>
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="form-label">Administer:</Form.Label>
                                    <Form.Control type="text" placeholder="Dr Administer" />
                                    <p>Describe your diagnosis in full details</p>
                                </Form.Group>
                                <Button>Create</Button>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }

}
export default Diagnosis;