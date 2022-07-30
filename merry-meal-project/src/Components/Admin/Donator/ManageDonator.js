/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from '../SignOut'
import { GetDonators } from '../AdminAction'

const ManageDonator = () => {
    const [donators, setdonators] = useState([])
    const [id, setID] = useState('')
    const getdonators = (async () => {

        const res = await GetDonators();
        const ress = await JSON.parse(res)
        setdonators(ress.data)

    })

    useEffect(() => {
        getdonators()
    })



    return (
        <div id="page-top">
            {/* Page Wrapper */}
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
                            <SignOut />

                        </nav>
                        {/* End of Topbar */}

                        {/* Begin Page Content */}
                        <div className="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 className="h3 mb-2 text-gray-800">Donator and Supporter Management Table</h1>
                            </center><br />
                            {/* Data table */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Management Table</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Name (Full Name)</th>
                                                    <th>Email</th>
                                                    <th>Phone Number</th>
                                                    <th>Amount</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Name (Full Name)</th>
                                                    <th>Email</th>
                                                    <th>Phone Number</th>
                                                    <th>Amount</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {donators ? Object.keys(donators).map((keyName, i) => (

                                                    donators[keyName].email ?
                                                        <tr>
                                                            <td>{donators[keyName].fist_name} {donators[keyName].last_name}</td>
                                                            <td>{donators[keyName].email}</td>
                                                            <td>{donators[keyName].phno}</td>
                                                            <td>${donators[keyName].amount}</td>
                                                            <td>
                                                                <Link className="btn btn-primary" to={"/admin/manageDonator/viewDonator/" + donators[keyName].id} role="button">View</Link>
                                                            </td>

                                                        </tr> : ''

                                                )) : <tr>
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
    )
}

export default ManageDonator;