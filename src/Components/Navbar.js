import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import "../css/Navbar.css"


class NavB extends React.Component{
    render() {
        return(
            <Navbar className="bar" collapseOnSelect expand="md" bg="light" variant="light">
                <Navbar.Brand href="#Logo">Hospital</Navbar.Brand>
                <Navbar.Toggle className="toggle"/>
                <Navbar.Collapse id="responsive-nav">
                    <Nav id="nav-link" className="ml-auto">
                        <Nav.Link href="#features">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#pricing"><
                            i className="fa fa-comment" aria-hidden="true"></i>
                            Feedback
                        </Nav.Link>
                        <Nav.Link href="#deets">
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                            Dropdown
                        </Nav.Link>
                        <Nav.Link href="#deets">
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                            Settings
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavB;