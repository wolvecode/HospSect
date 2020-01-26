import React from "react"
import { Col, Row, Container} from "react-bootstrap"
import { Route } from 'react-router-dom'
import NavB from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Medical from './Components/MedicalHist'


class HospSect extends React.Component{
    render() {
        return(
            <Container fluid={1} className="wrapper">
                <Row>
                    <NavB/>
                </Row>
                <Row>

                    <Col md={3} sm={3}>
                        <SideBar />
                    </Col>
                    <Col md={9} sm={9}>

                        <Route exact path="/" render={() => <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores delectus,
                            eaque eius et fuga hic incidunt, minima minus mollitia neque odio totam voluptate? Aperiam consectetur doloremque excepturi nisi saepe.
                            </p>}
                        />

                        <Route exact path="/medical" component={Medical} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HospSect;