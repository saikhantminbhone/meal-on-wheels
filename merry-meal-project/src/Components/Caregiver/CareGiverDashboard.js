/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'
import CareGiverMenu from './CareGiverMenu'

const CareGiverDashboard = () => {
    const auth = useAuth()

  return (
    <div id="page-top">
    <div id="wrapper">
    <CareGiverMenu />

        

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
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <center>
                                <h1 class="display-5">Welcome to our Merry Meal Charity Organization</h1>
                            </center>
                        </div>
                    </div>
                </div>
                {/* End of Main Content */}
                <br/><br/><br/>
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

export default CareGiverDashboard