import React from "react";
import {Col, Container,Row, } from "react-bootstrap";
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
                    <div className="tabs">
                        <div className="tab-2">
                            <label htmlFor="tab2-1">Medical</label>
                            <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
                            {/*  Tab Content  */}
                                <div>
                                    <h4>Tab One</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat
                                        id velit quis vestibulum. Nam id orci eu urna mollis porttitor. Nunc nisi
                                    </p>
                                </div>
                        </div>
                        <div className="tab-2">
                            <label htmlFor="tab2-2">New History</label>
                            <input id="tab2-2" name="tabs-two" type="radio" />
                            {/*  Tab Content  */}
                                <div>
                                    <h4>Tab Two</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci,
                                        animi aspernatur dolorem earum est, exercitationem illum iusto laudantium
                                    </p>
                                </div>
                        </div>
                        </div>
                </Row>
            </Container>
        )
    }
}
export default MedicalHist;
