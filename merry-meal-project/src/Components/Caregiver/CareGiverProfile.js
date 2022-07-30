/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import CareGiverMenu from './CareGiverMenu'
import { Link } from 'react-router-dom'
import { useAuth } from '../Login/Auth'
import { GetCareGiverProfile } from './CareGiverAction'
const CareGiverProfile = () => {
    const auth = useAuth()

    const [caregiver, setcaregiver] = useState([])



    const getALLCaregiver = async () => {
        

        const res = await GetCareGiverProfile(auth.user.user.caregiver_id)
        const caregiverFormatted = await JSON.parse(res)
       setcaregiver(caregiverFormatted)
       


    }
    console.log(caregiver)

        getALLCaregiver()
    
    return (
        <div id="page-top">
            <div id="wrapper">
                <CareGiverMenu />
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
                                    <Link class="nav-link" to="/staff/caregiver/profile" role="button" aria-haspopup="true" aria-expanded="false">
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
                                    <Link class="font-weight-bold justify-center" to="/staff/caregiver/profile/updateProfile" style={{ verticalAlign: "middle", paddingLeft: "70px" }} >Edit Profile</Link>
                                </div>
                                
                                <div class="col-md-7">
                                     
                                    
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">First Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.fist_name}
                                            </div>
                                        </div>
                                       
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Last Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.last_name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Date of Birth</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.birthday}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">NRC</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.nrc}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">City</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.city}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Address</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.address}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Password</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.password}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Phone Number</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.phno}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0 font-weight-bold">Available</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                            {caregiver.available_date}
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

export default CareGiverProfile