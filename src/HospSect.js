import React from "react"
<<<<<<< HEAD
import { Route } from 'react-router-dom'
import Bill from "./Components/Bill"
import SideBar from "./Components/SideBar";
=======
import { Col, Row, Container} from "react-bootstrap"
import { Route } from 'react-router-dom'
>>>>>>> master
import NavB from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Medical from './Components/MedicalHist'


class HospSect extends React.Component{
    render() {
        return(
            <div className="container-fluid wrapper">
                <div className="row">
                    <NavB/>
<<<<<<< HEAD
                </div>
                <div className="row">
                    <SideBar />
                    <div className="col-md-9 ml-auto col-lg-9">
=======
                </Row>
                <Row>

                    <Col md={3} sm={3}>
                        <SideBar />
                    </Col>
                    <Col md={9} sm={9}>
>>>>>>> master

                        <Route exact path="/" render={() =>
                        <Bill/>
                        }
                        />

                        {/*<Route exact path="/medical" component={Medical} />*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default HospSect;