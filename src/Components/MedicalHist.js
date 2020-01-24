import React from "react";
import {Tabs, Tab, Col, Container, Form} from "react-bootstrap";
import "../css/MedicalHist.css";

class MedicalHist extends React.Component{
    render() {

        return(
            <Container fluid={1} className="content">
                <Col  md={{span: 9, offset: 3}} className="tab tab-s">
                    <Tabs className="tab-i" defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab class="tab-l active" eventKey="home" title="Medical History">
                            <Col md={{span: 8, offset: 2}}>
                                <Form>
                                    <h4>Medical History For Azeez Biodun Habeeb</h4>
                                    <hr/>
                                    ghjhfdkjfdfdkj
                                </Form>
                            </Col>
                        </Tab>
                        <Tab eventKey="profile" title="New History">
                            <h4>Medical History For Azeez Biodun</h4>
                            <hr/>
                            <h4>15,Nov 2019</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium distinctio doloribus dolorum, eum fuga illo iste maxime molestiae nam necessitatibus nemo nesciunt nobis odio optio quas sint soluta sunt veniam veritatis? Asperiores corporis facere labore nam nemo non nostrum, reiciendis? Consectetur, cumque fuga incidunt libero minima provident ratione repellat.</h5>
                        </Tab>

                    </Tabs>
                    <hr/>
                </Col>
            </Container>
        )
    }
}
export default MedicalHist;
