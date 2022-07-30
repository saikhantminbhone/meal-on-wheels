import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'
import { AcceptOrder, getOrderLists } from './PartnerAction'
import PartnerMenu from './PartnerMenu'

const PartnerOrderList = () => {
    const auth = useAuth()
    const [orders, setorders] = useState([])


    const getALLorders = (async () => {

        const res = await getOrderLists()
        const allOrders = await JSON.parse(res)

        setorders(allOrders.data)


    })

    const onClickHandler = async (id, e) => {

        console.log('id is' + id)
        const data = { id: id, status: 'partner_accepted', rider_id: auth.user.user.rider_id }
        console.log(JSON.stringify(data))
        const res = await AcceptOrder(JSON.stringify(data))
    }


    useEffect(() => {
        getALLorders()
    })


    return (
        <div id="page-top">
            {/* Page Wrapper */}
            <div id="wrapper">

                <PartnerMenu />

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
                                        <img class="img-profile rounded-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png " />
                                    </Link>

                                </li>

                            </ul>


                        </nav>
                        {/* End of Topbar */}

                        {/* Begin Page Content */}
                        <div className="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 className="h3 mb-2 text-gray-800">Member Order List</h1>
                            </center><br />
                            {/* Data table */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Member order list</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered align-center" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Member ID</th>
                                                    <th>QTY</th>
                                                    <th>Address</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>View</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Member ID</th>
                                                    <th>QTY</th>
                                                    <th>Address</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>View</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>

                                                {orders ? Object.keys(orders).map((keyName, i) => (
                                                    orders[keyName].status !== 'accepted' ?
                                                        <tr>
                                                            <td>{orders[keyName].member_id} </td>
                                                            <td>{orders[keyName].qty} </td>
                                                            <td>{orders[keyName].address}</td>
                                                            <td>{orders[keyName].created_at}</td>
                                                            <td>{orders[keyName].status}</td>

                                                            <td>

                                                                <Link to={"/staff/partner/orders/orderDetails/" + orders[keyName].id} class="btn btn-primary" role="button">View Details</Link>

                                                            </td>
                                                            <td>

                                                                <Link to="/staff/partner/acceptedOrder" className="btn btn-success" onClick={(e) => onClickHandler(orders[keyName].id, e)} role="button">Accept <i class="fas fa-fw fa-user-check "></i></Link>

                                                            </td>

                                                        </tr>
                                                        : ''
                                                )) :
                                                    <tr>
                                                        <td>No Data</td>
                                                        <td>No Data</td>
                                                        <td>No Data</td>
                                                        <td>No Data</td>

                                                        <td>No Data</td>

                                                    </tr>}

                                                {/* <tr>
                                                <td>Swuan Yee Lin</td>
                                                <td>YGN</td>
                                                <td>May 2022</td>
                                                <td>
                                                    <Link className="btn btn-primary ml-3" to="/staff/rider/orderList/orderDetails" role="button">View Details</Link>
                                                    <a className="btn btn-success ml-3" href="#" role="button">Accept</a>
                    
                                                </td>
                                            </tr> */}
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

        </div >
    )
}

export default PartnerOrderList