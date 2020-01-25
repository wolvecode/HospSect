import React from 'react';
import {Form, Button, FormControl, Container, Nav, Navbar} from 'react-bootstrap';
import "../css/Navbar.css"


class NavB extends React.Component{
    render() {
        return(
            <Container fluid={1} className="p-0">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">HospSect</Navbar.Brand>
                    <div className="nav ml-auto">
                        <Nav className="nav-link">
                            <div className="form-style">
                                <Form inline>
                                    <FormControl type="text" placeholder="Search"/>
                                    <Button>
                                        <i className="fa fa-search" aria-hidden="true">
                                        </i>
                                    </Button>
                                </Form>
                            </div>
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
                    </div>
                </Navbar>
            </Container>
        )
    }
}

export default NavB;