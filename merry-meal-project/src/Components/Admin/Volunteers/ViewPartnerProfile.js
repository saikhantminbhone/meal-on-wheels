/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import { Viewpartners, ViewpartnersProfile, ViewPartner } from '../AdminAction'



const ViewPartnerProfile = () => {
    const{id} = useParams()
    const [partners, setpartners] = useState([])

    const getALLpartners = async () => {
        const res = await ViewPartner(id)
        const partnerFormatted = await JSON.parse(res)
        setpartners(partnerFormatted)

    }
    console.log('care giver' +JSON.stringify(partners))

    useEffect(() => {
        getALLpartners()

    }, [])
    return (
        <div id="page-top">


            <div id="wrapper">

                <Menu />

                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* Sidebar Toggle (Topbar) */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            {/* Topbar Navbar */}
                            <ul className="navbar-nav ml-auto">
                                {/* Sign out button */}
                                <a href="#" className="btn btn-info">
                                    <span className="fas fa-sign-out-alt"></span> Sign Out
                                </a>
                            </ul>

                        </nav>
                        {/* End of Topbar */}

                        {/* Begin Page Content */}

                        {/* Begin Page Content table*/}
                        <div className="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 className="h3 mb-2 text-gray-800">Profile Details</h1>
                            </center><br />
                            {/* profile session */}
                            <div class="row">
                            


                                <div class="col-md-1">

                                </div>
                                <div class="col-md-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" class="img-thumbnail" style={{
                                        verticalAlign: "middle",
                                        width: "60%",
                                        borderRadius: "50%"
                                    }} /> <br />
                                </div>
                                
                                <div class="col-md-7">
                                     
                                    
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">First Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.fist_name}
                                            </div>
                                        </div>
                                       
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Last Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.last_name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Date of Birth</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.birthday}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">NRC</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.nrc}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">City</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.city}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Address</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.address}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Password</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.password}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Phone Number</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partners.phno}
                                            </div>
                                        </div>
                                        
                                        <hr />


                                    

                                </div>
                          
                                </div>
                            {/* /.container-fluid */}

                        </div>
                        {/* End of Main Content */}

                        {/* End of Main Content */}
                        <br />

                        {/* Footer */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Meals On Wheels 2022</span>
                                </div>
                            </div>
                        </footer>
                        {/* End of Footer */}

                    </div>
                    {/* End of Content Wrapper */}

                </div>
                {/* End of Page Wrapper */}

                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

            </div>

        </div>

    )
}

export default ViewPartnerProfile;