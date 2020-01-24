import {Col, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";


export default function SideBar() {
    return (
        <Col md={3} lg={3} id="view" className="nav-pills" >
            <Nav id="sidebar" className="flex-column">
                <div className="nav-item nav-link">
                    <Link to='/' className="nav-link">
                        <i className="fa fa-plus-square" />Administration and Billing
                    </Link>
                </div>

                <div className="nav-item nav-link">
                    <Link to='/medical' className="nav-link">
                        <i className="fa fa-plus-square" />Medical History
                    </Link>
                </div>
                <Nav.Item className="nav-link" >
                    <Nav.Link eventKey="link-2" ><i className="fa fa-heartbeat" aria-hidden="true"></i>Lab And Test Result</Nav.Link>
                </Nav.Item >
                <Nav.Item  className="nav-link">
                    <Nav.Link eventKey="link-3" ><i className="fa fa-medkit" aria-hidden="true"></i>Diagnosis</Nav.Link>
                </Nav.Item >
                <Nav.Item className="nav-link">
                    <Nav.Link eventKey="link-4" ><i className="fa fa-hospital-o" aria-hidden="true"></i>Medication</Nav.Link>
                </Nav.Item >
                <Nav.Item className="nav-link" >
                    <Nav.Link eventKey="link-5" ><i className="fa fa-stethoscope" aria-hidden="true"></i>Immunization</Nav.Link>
                </Nav.Item >
                <Nav.Item className="nav-link" >
                    <Nav.Link eventKey="link-6" ><i className="fa fa-user-md" aria-hidden="true"></i>Allergies</Nav.Link>
                </Nav.Item >
            </Nav>
        </Col>
    )
}