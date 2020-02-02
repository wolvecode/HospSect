import React from "react"
import { Route } from 'react-router-dom'
import Bill from "./Components/Bill"
import SideBar from "./Components/SideBar";
import NavB from "./Components/Navbar";

class HospSect extends React.Component{
    render() {
        return(
            <div className="container-fluid wrapper">
                <div className="row">
                    <NavB/>
                </div>
                <div className="row">
                    <SideBar />
                    <div className="col-md-9 ml-auto col-lg-9">

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