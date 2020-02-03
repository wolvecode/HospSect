import React from "react";
import "../css/User.css";

class UserBill extends React.Component{
    render() {
        return(
            <div className="row nav-row">
                <div className="col-lg-12 p-0">
                    <ul className="nav p-2">
                        <li className="nav-item">
                            <i className="fa fa-user" /> Azeez Biodun Habeeb
                        </li>
                        <li className="nav-item ml-auto">
                            <i className="fa fa-sign-in" /> You are sign as Azeez Biodun Habeeb
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserBill;
