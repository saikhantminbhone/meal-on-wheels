/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import {Link} from 'react-router-dom'

const FrogetPassword = () => {
    return (
        <div>
            <Menu />

            <div className="container">

                <form className="form-horizontal" role="form">
                    <h2>Forgot Password</h2>
                    <h3 className="text-center" style={{height: "90px"}}>Enter Your email address</h3>

                
                    <div className="form-group" >

                        <input type="text" id="email" placeholder="Enter Email Address" className="form-control" name="email"/>
                    </div>
                    <br />

                    <Link to="/resetPassword" className="btn btn-secondary">Continue</Link> 
                    <br />
                    <br /><br />



                </form> 

            </div> 
            <br />


            <Footer />

        </div>
    )
}

export default FrogetPassword