import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import PartnerMenu from './PartnerMenu'
import '../assets/style.partner.css'
import { useAuth } from '../Login/Auth'
import { GetPartner } from './PartnerAction'

const PartnerProfile = () => {
    const auth = useAuth()

    const [partner, setpartner] = useState([])


    const getpartner = async () => {
        

        const res = await GetPartner(auth.user.user.partner_id)
        const Formatted = await JSON.parse(res)
       setpartner(Formatted)
       


    }

    getpartner()
    
    return (
        <div id="page-top">
            <div id="wrapper">
                <PartnerMenu />
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        {/* Topbar */}
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* Sidebar Toggle (Topbar) */}
                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>

                            {/* Topbar Navbar */}
                            <ul class="navbar-nav ml-auto">
                                {/* Nav Item - User Information */}
                                <li class="nav-item dropdown no-arrow">
                                    <Link class="nav-link" to="/staff/partner/profile" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{auth.user.user.firstname} {auth.user.user.lastname}</span>
                                        <img class="img-profile rounded-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png " />
                                    </Link>
                                </li>

                            </ul>


                        </nav>
                        {/* End of Topbar */}

                        {/* Begin Page Content */}

                        <div class="container-fluid">


                            <center>
                                <h1 class="h3 mb-2 text-gray-800">Profile Details</h1>
                            </center><br />
                           
                            <div class="row">
                            


                                <div class="col-md-1">

                                </div>
                                <div class="col-md-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" class="img-thumbnail" style={{
                                        verticalAlign: "middle",
                                        width: "60%",
                                        borderRadius: "50%"
                                    }} /> <br />
                                    <Link class="font-weight-bold justify-center" to="/staff/partner/profile/updateProfile" style={{ verticalAlign: "middle", paddingLeft: "70px" }} >Edit Profile</Link>
                                </div>
                                
                                <div class="col-md-7">
                                     
                                    
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">First Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.fist_name}
                                            </div>
                                        </div>
                                       
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Last Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.last_name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Date of Birth</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.birthday}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">NRC</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.nrc}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">City</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.city}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Address</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.address}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Password</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.password}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Phone Number</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {partner.phno}
                                            </div>
                                        </div>
                                        <hr />
                                        


                                    

                                </div>
                          
                                </div>
                           
                           

                        </div>
                        {/* End of Main Content */}

                        {/* End of Main Content */}
                        <br />

                        {/* Footer */}
                        <footer class="sticky-footer bg-white">
                            <div class="container my-auto">
                                <div class="copyright text-center my-auto">
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
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>

            </div>
        </div>
    )
}

export default PartnerProfile