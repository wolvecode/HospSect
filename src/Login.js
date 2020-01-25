import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                    </div>

                                    <button className="btn btn-lg btn-info btn-block text-uppercase" type="submit">Sign in</button>
                                    <div className="media">
                                        <p>
                                             <a href="">
                                                 <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                                 Forget Password?
                                             </a>
                                            Please Contact Medical Department To Reset Password
                                        </p>
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
