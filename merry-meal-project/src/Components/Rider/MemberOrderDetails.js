import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'
import { getOrderDetails } from './RiderAction'
import RiderMenu from './RiderMenu'

const MemberOrderDetails = () => {
    const auth = useAuth()
    const { id } = useParams()
    const [orders, setorders] = useState([])

    const getOrderdetails = (async () => {

        const res = await getOrderDetails(id);
        const ress = await JSON.parse(res)
        setorders(ress.data[0])

       
    })

    useEffect(() => {
        getOrderdetails()
    })


    return (
        <div id="page-top">
            <div id="wrapper">

                <RiderMenu />

                {/* Content Wrapper */}
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
                                    <Link class="nav-link" to="/staff/rider/profile" role="button" aria-haspopup="true" aria-expanded="false">
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
                                <h1 class="h3 mb-2 text-gray-800">View Order Details</h1>
                            </center><br />
                            <center>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 font-weight-bold">Member name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {orders.member_firstname} {orders.member_lastname}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 font-weight-bold">Order address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {orders.member_address} </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 font-weight-bold">Member Phone Number</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {orders.member_phonenumber} </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 font-weight-bold">Meal Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                       {orders.meal_name} </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 font-weight-bold">Meal Type</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                       {orders.meal_type}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 font-weight-bold">Partner Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {orders.partner_address}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0 font-weight-bold">Partner Phone Number</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {orders.partner_phonenumber}
                                    </div>
                                </div>
                                <hr />
                            </center>


                        </div>
                        {/* End of Main Content */}
                    </div>
                    {/* End of Content Wrapper */}
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
                {/* End of Page Wrapper */}

                {/* Scroll to Top Button*/}
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>
            </div>
        </div>
    )
}

export default MemberOrderDetails