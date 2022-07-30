/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'
import { AcceptRequestMember, getRequestMember } from './CareGiverAction'
import CareGiverMenu from './CareGiverMenu'

const CareGiverRequestMember = () => {
    const [members, setMembers] = useState([])
    const auth = useAuth();


    const getALLMembers = (async () => {

        const res = await getRequestMember();
        const allMember = await JSON.parse(res)
        console.log(allMember)
        setMembers(allMember.data)

    })

    const onClickHandler = async (id, e) => {

        console.log('id is' + id)
        const data = { id: id, caregiver_id: auth.user.user.caregiver_id }
        const res = await AcceptRequestMember(JSON.stringify(data))
        console.log(res)

    }


    useEffect(() => {
        getALLMembers()
    })






    return (
        <div id="page-top">
            {/* Page Wrapper */}
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

                        {/* Begin Page Content table*/}
                        <div class="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 class="h3 mb-2 text-gray-800">Request Member List</h1>
                            </center><br />
                            {/* Data table */}
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Request Member List</h6>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Member Name</th>
                                                    <th>Birthday</th>
                                                    <th>Address</th>
                                                    <th>Phone Number</th>
                                                    <th>email</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Member Name</th>
                                                    <th>Birthday</th>
                                                    <th>Address</th>
                                                    <th>Phone Number</th>
                                                    <th>email</th>
                                                    <th>Status</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>

                                                {members ? Object.keys(members).map((keyName, i) => (
                                                    members[keyName].caregiver_id == 1 ?
                                                        <tr>
                                                            <td>{members[keyName].fist_name} {members[keyName].last_name} </td>
                                                            <td>{members[keyName].birthday}</td>
                                                            <td>{members[keyName].address}</td>
                                                            <td>{members[keyName].phonenumber}</td>
                                                            <td>{members[keyName].email}</td>
                                                            <td>
                                                                <Link to="/staff/caregiver/acceptedMember" class="btn btn-primary" value={members[keyName].id} onClick={(e) => onClickHandler(members[keyName].id, e)} role="button">Accept <i class="fas fa-fw fa-user-check "></i></Link>
                                                            </td>

                                                        </tr> : ''
                                                )) : <tr>
                                                    <td>No Data</td>
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
                    <br />

                    {/* Footer */}
                    <footer class="sticky-footer bg-white ">
                        <div class="container my-auto ">
                            <div class="copyright text-center my-auto ">
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
            <a class="scroll-to-top rounded " href="#page-top ">
                <i class="fas fa-angle-up "></i>
            </a>


        </div>
    )
}

export default CareGiverRequestMember