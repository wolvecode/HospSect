import React from "react";
import {Tabs, Tab, Col, Container,Row, Sonnet} from "react-bootstrap";
import "../css/MedicalHist.css";

class MedicalHist extends React.Component{
    render() {

        return(
            <Container fluid={1}>
                <Row className="user" >
                    <Col>
                        <p>
                            <i className="fa fa-user" aria-hidden="true">
                            </i>
                            he
                        </p>
                    </Col>
                    <Col>
                        Welcome
                    </Col>
                </Row>
                <Row>
                    <div>
                        <nav className="tabs tabs-style-line">
                            <ul>
                                <li>
                                    Key
                                </li>
                                <li>
                                    Home
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Row>
            </Container>
        )
    }
}
export default MedicalHist;
