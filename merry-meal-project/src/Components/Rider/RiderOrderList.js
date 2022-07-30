import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'
import { getOrderLists } from './RiderAction'
import RiderMenu from './RiderMenu'

const RiderOrderList = () => {
    const auth = useAuth()
    const [acceptedorder, setacceptedorder] = useState([])
    const [id, setId] = useState('')


    const getALLacceptedorder = (async () => {

        const res = await getOrderLists();
        const allMember = await JSON.parse(res)
        setacceptedorder(allMember.data)

    })

    useEffect(() => {
        getALLacceptedorder()
    }, [])

    return (
        <div id="page-top">
{/* Page Wrapper */}
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
                                    <img class="img-profile rounded-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png "/>
                                </Link>
                    </li>
                 
                </ul>

            </nav>
                {/* End of Topbar */}

                {/* Begin Page Content */}

                {/* Begin Page Content table*/}
                <div class="container-fluid">

                    {/* Page Heading */}
                    <center>
                        <h1 class="h3 mb-2 text-gray-800">Order List</h1>
                    </center><br/>
                    {/* Data table */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Order Detail List</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Address</th>
                                            <th>Order Date</th>
                                            <th>Status</th>
                                            <th>Rider Name</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Address</th>
                                            <th>OrderDate</th>
                                            <th>Status</th>
                                            <th>Rider Name</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                    {acceptedorder ? Object.keys(acceptedorder).map((keyName, i) => (
                                        acceptedorder[keyName].status === 'delivered' ?
                                                    <tr>
                                                        <td>{acceptedorder[keyName].id} </td>
                                                        <td>{acceptedorder[keyName].address}</td>
                                                        <td>{acceptedorder[keyName].created_at}</td>
                                                        <td>{acceptedorder[keyName].status}</td>
                                                        <td>{auth.user.user.firstname} {auth.user.user.lastname}</td>

                                                    </tr> : ''
                                                )): <tr>
                                                    <td>No Data</td>
                                                    <td>No Data</td>
                                                    <td>No Data</td>
                                                    <td>No Data</td>
                                                    <td>No Data</td>
                                                    </tr>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                {/* /.container-fluid */}

            </div>
            {/* End of Main Content */}

            {/* End of Main Content */}
            <br/>

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
        

    )
}

export default RiderOrderList