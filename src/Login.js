import React from 'react';
import "./css/Login.css"

class Login extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card my-5">
                            <div className="card-body">
                                <h3 className="card-title text-center">Sign In</h3>
                                <form >
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Enter Email" required/>
                                        <label htmlFor="inputEmail">Email Address</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Enter Password" required/>
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3 p-0">
                                        <input type="checkbox" id="customCheck1" />
                                        <label className="ml-2">Remember password</label>
                                    </div>

<<<<<<< HEAD
                                    <div className="form-label-group ">
                                        <button className="form-control bg-info p-3 m-0">SUBMIT</button>
                                    </div>

                                    <div className="form-label-group">
=======
                                    <div className="media">
>>>>>>> master
                                        <p>
                                            <a href="#a">
                                                <i className="fa fa-unlock-alt" aria-hidden="true"/>
                                                Forget Password?
                                            </a>
                                            Please Contact Medical Department To Reset Password
                                        </p>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="submit"  className="form-control btn-info" value="Sign In"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
