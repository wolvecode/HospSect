import React from 'react';
import "../css/Navbar.css"


class NavB extends React.Component{
    render() {
        return(
           <div className="container-fluid p-0">
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <a className="navbar-brand" href="#">HospSect</a>
                   <button className="navbar-toggler" type="button" data-toggle="collapse"
                           data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                           aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon">
                       </span>
                   </button>

                   <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                       <form className="form-inline my-2 my-lg-0">
                           <input className="form form-control mr-sm-2" type="search" placeholder="Search"/>
                           <button className="btn btn-info my-2 my-sm-0" type="submit">
                               <i className="fa fa-search"/>
                           </button>
                       </form>
                       <ul className="nav navbar-nav ml-auto mt-2 mt-lg-0">
                           <li className="nav-item active">
                               <a className="nav-link" href="#m">
                                   <i className="fa fa-home"/>
                                   Home
                                   <span className="sr-only">(current)</span>
                               </a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#y">
                                   <i className="fa fa-comment"/>
                                   Feedback
                               </a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#h">
                                   <i className="fa fa-cog"/>
                                   Settings
                               </a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#u">
                                   <i className="fa fa-sign-out"/>
                                   Logout
                               </a>
                           </li>
                       </ul>
                   </div>
               </nav>
           </div>
        )
    }
}

export default NavB;