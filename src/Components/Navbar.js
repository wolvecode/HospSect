import React from 'react';
import {Form, Button, FormControl, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import "../css/Navbar.css"


class NavB extends React.Component{
    render() {
        return(
            <Container fluid={1} className="p-0">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">HospSect</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <div className="form-style">
                        <Form inline>
                            <FormControl type="text" placeholder="Search"/>
                            <Button>
                                <i className="fa fa-search" aria-hidden="true">
                                </i>
                            </Button>
                        </Form>
                    </div>

                    <div className="nav ml-auto">
                        <Navbar.Collapse id="responsive-navbar-nav" className="">
                            <Nav  className="mr-auto nav-link">

                                <Nav.Link href="#home">
                                    <i className="fa fa-home" aria-hidden="true">
                                    </i>
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#features">
                                    <i className="fa fa-comment" aria-hidden="true">
                                    </i>
                                    Feedback
                                </Nav.Link>
                                <Nav.Link href="#Settings">
                                    <i className="fa fa-cogs" aria-hidden="true">
                                    </i>
                                    Settings
                                </Nav.Link>
                                <Nav.Link href="#Logout">
                                    <i className="fa fa-sign-out" aria-hidden="true">
                                    </i>
                                    Logout
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

            </Container>
        )
    }
}

export default NavB;