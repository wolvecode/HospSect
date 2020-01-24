import React from "react"
import {Row, Form, Col, Button, Container} from "react-bootstrap"
import "../css/Bill.css"

class Bill extends React.Component{
    render() {
        return(
            <Container fluid="0">
                <Row className="bill">
                    <Col md={4} lg={4} sm={4} >hjdsjhdsvj</Col>
                    <Col md={8} lg={8} sm={8} className="bill_col">
                        <Col md={{ span: 8, offset: 2}}>
                            <h2>Sadly! There is no record yet for this patient</h2>
                            <Form className="bill_form">
                                <h4>create new bill for Azeez Biodun</h4>
                                <hr/>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Reason For Billing</Form.Label>
                                    <Form.Control type="text" placeholder="Reason For Billing" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Payment By I.d</Form.Label>
                                    <Form.Control type="text" placeholder="Payment By I.d" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Date Of Payment</Form.Label>
                                    <Form.Control type="text" placeholder="Date Of Payment" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Amount TO Pay</Form.Label>
                                    <Form.Control type="text" placeholder="Amount TO Pay" />
                                </Form.Group>
                                <Button className="button">SUBMIT </Button>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Bill;