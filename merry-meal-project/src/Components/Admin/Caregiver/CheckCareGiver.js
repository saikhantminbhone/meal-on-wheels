import React, { useEffect, useState } from 'react'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from '../SignOut'
import { Checkcaregiver } from '../AdminAction'

const CheckCareGiver = () => {
    const [caregiver, setCaregiver] = useState('')

    const getcaregiver = async () => {
        const res = await Checkcaregiver();
        const ress = await JSON.parse(res)
        setCaregiver(ress.data)
    }



    useEffect(() => {
        getcaregiver()
    })


    return (
        <div id="page top">
            <div id="wrapper">

                <Menu />

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
                            <SignOut />
                        </nav>
                        {/* End of Topbar */}

                        {/* Begin Page Content */}

                        {/* Begin Page Content table*/}
                        <div class="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 class="h3 mb-2 text-gray-800">Reviewing care giver and member progress</h1>
                            </center><br />
                            {/* Data table */}
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Care Giver and Member List</h6>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Member Name</th>
                                                    <th>Care Giver Name</th>
                                                    <th>Day</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Member Name</th>
                                                    <th>Care Giver Name</th>
                                                    <th>CareGiver</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {caregiver ? Object.keys(caregiver).map((keyName, i) => (

                                                    <tr>
                                                        <td>{caregiver[keyName].member_fistname} {caregiver[keyName].member_lastname}</td>
                                                        <td>{caregiver[keyName].caregiver_first_name}{caregiver[keyName].caregiver_last_name}</td>
                                                        <td>{caregiver[keyName].member_created_at}</td>



                                                    </tr>
                                                )) : <tr>
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

export default CheckCareGiver