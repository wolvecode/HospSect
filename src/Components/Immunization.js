import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import '../css/Immunization.css';

class Immunization extends React.Component{
    render() {
        return(
            <Container className="s" fluid={1}>
                <Row>
                    <Col md={{span:8, offset:2}}>
                        <Col md={{span:8, offset:4}}>
                            <h3>Sorry. There is no Immunization record for Azeez Biodun</h3>

                            <h4>Fill new Immunisation record for Azeez Biodun</h4>
                            <hr/>
                            <Form className="immunization_form">
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="form-label">Vaccine:</Form.Label>
                                    <Form.Control type="text" placeholder="immunization  name" />
                                    <p>Name of vaccine administered</p>
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="form-label">type:</Form.Label>
                                    <Form.Control type="text" placeholder="Immunization type" />
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="form-label">Administer:</Form.Label>
                                    <Form.Control type="text" placeholder="Dr Administer" />
                                    <p>Doctor or Clinician that gave this immunization</p>
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="form-label">Next Dose:</Form.Label>
                                    <Form.Control type="text" placeholder="DD-MM-YYYY" />
                                    <p>Date of next dose, if not do not specify</p>
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

export default Immunization;