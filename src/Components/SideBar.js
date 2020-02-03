import {Link} from "react-router-dom";
import React from "react";
import "../css/SideBar.css";


export default function SideBar() {
    return (
<<<<<<< HEAD
        <div className="container-fluid">
            <div className="row">
                <div id="sidebar" className="col-6 col-sm-2 col-md-3  col-lg-3 flex-column">
                    <div className="nav-item nav-link">
                        <Link to='/' className="nav-link">
                            <i className="fa fa-plus-square" />
                            Administration and Billing
                        </Link>
                    </div>

                    <div className="nav-item nav-link">
                        <Link to='/medical' className="nav-link">
                            <i className="fa fa-plus-square" />
                            Medical History
                        </Link>
                    </div>

                    <div className="nav-item nav-link" >
                        <a href="#lab">
                            <i className="fa fa-heartbeat"/>
                            Lab And Test Result
                        </a>
                    </div >

                    <div  className="nav-item nav-link">
                        <a href="#lb">
                            <i className="fa fa-medkit">
                            </i>
                            Diagnosis
                        </a>
                    </div >
=======
        <Col md={3} lg={3} id="view" className="nav-pills" >
            <Nav id="sidebar" className="flex-column">
                <div className="nav-item nav-link">
                    <Link to='/' className="nav-link">
                        <i className="fa fa-money" />Administration and Billing
                    </Link>
                </div>
>>>>>>> master

                    <div className="nav-item nav-link">
                        <a href="#b">
                            <i className="fa fa-hospital-o" >
                            </i>
                            Medication
                        </a>
                    </div >

                    <div className="nav-item nav-link" >
                        <a href="#ab">
                            <i className="fa fa-stethoscope">
                            </i>
                            Immunization
                        </a>
                    </div >

                    <div className="nav-link" >
                        <a href="#labm">
                            <i className="fa fa-user-md">
                            </i>
                            Allergies
                        </a>
                    </div >
                </div>
                <div className="col-6 col-sm-10 col-md-8">
                </div>
            </div>
        </div>
    )
}