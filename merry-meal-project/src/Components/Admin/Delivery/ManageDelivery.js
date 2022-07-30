/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from '../SignOut'
import { GetAdminDelivery, GetDeliveryList, GetOrders } from '../AdminAction'

const ManageDelivery = () => {
    const [delivery, setdelivery] = useState([])
    // const [members, setmembers] = useState([])
    // const [riders, setriders] = useState([])

    const getdelivery = (async () => {

        const res = await GetAdminDelivery();
        const ress = JSON.parse(res)
        setdelivery(ress.data)

    })


    useEffect(() => {
        getdelivery()
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

                        {/* Begin Page Content table*/}
                        <div className="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 className="h3 mb-2 text-gray-800">All Order List</h1>
                            </center><br />
                            {/* Data table */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Order List</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Member name</th>
                                                    <th>Member Phone</th>
                                                    <th>Order Address</th>
                                                    <th>Rider name</th>
                                                    <th>Rider Phone</th>
                                                    <th>Order Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Member name</th>
                                                    <th>Member Phone</th>
                                                    <th>Order Address</th>
                                                    <th>Rider name</th>
                                                    <th>Rider Phone</th>
                                                    <th>Order Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {delivery ? Object.keys(delivery).map((keyName, i) => (
                                                    <tr>
                                                        <td>{delivery[keyName].member_firstname} {delivery[keyName].member_lastname}</td>
                                                        <td>{delivery[keyName].member_phonenumber}</td>
                                                        <td>{delivery[keyName].order_address}</td>
                                                        <td>{delivery[keyName].rider_firstname} {delivery[keyName].rider_lastname}</td>
                                                        <td>{delivery[keyName].rider_phonenumber}</td>
                                                        <td>{delivery[keyName].order_created_at}</td>
                                                        <td>{delivery[keyName].status}</td>


                                                    </tr>
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
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; delivery On Wheels 2022</span>
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

export default ManageDelivery