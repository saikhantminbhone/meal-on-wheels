import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'
import RiderMenu from './RiderMenu'

const RiderHome = () => {
    const auth = useAuth()
    return (
        <div id="page-top">

            {/* Page Wrapper */}
            <div id="wrapper">
                <RiderMenu />
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
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                <Link class="nav-link" to="/staff/rider/profile" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">{auth.user.user.firstname} {auth.user.user.lastname}</span>
                                    <img class="img-profile rounded-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png "/>
                                </Link>

                                </li>
                            </ul>

                        </nav>
                        {/* End of Topbar */}

                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            <div className="jumbotron jumbotron-fluid">
                                <div className="container">
                                    <center>
                                        <h1 className="display-5">Welcome to our Merry Meal Charity Organization</h1>
                                    </center>
                                </div>
                            </div>
                        </div>
                        {/* End of Main Content */}
                        <br /><br /><br />
                    </div>
                    {/* End of Content Wrapper */}
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
                {/* End of Page Wrapper */}

                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        </div>
    )
}

export default RiderHome