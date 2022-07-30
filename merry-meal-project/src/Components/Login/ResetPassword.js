/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import {Link} from 'react-router-dom'

const ResetPassword = () => {
    return (
        <div>
            <Menu />
            <br/>





                <div className="container">

                    <form className="form-horizontal" role="form">
                        <h2>New Password</h2>
                        <h3 className="text-center" style={{height: "80px"}}>Please create new password</h3>


                        <div className="form-group">
                            <input type="text" id="email" placeholder="Create new password" className="form-control" name="newpwd" />
                        </div>
                        <br/>

                            <div className="form-group">
                                <input type="password" id="pwd" placeholder="confirm your password" className="form-control" name="confirmpwd" />
                            </div>
                            <br/>

                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Next</button>


                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">Your Password change successfully </div>
                                            <div className="modal-footer">
                                            <Link to="/login">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">
                                                  Continue</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </form>

                        </div>
                        <br/><br/>


                        <Footer />
                </div>
                )
}

                export default ResetPassword