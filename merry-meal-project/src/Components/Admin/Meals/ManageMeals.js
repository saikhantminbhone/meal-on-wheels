/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from '../SignOut'
import { ApproveMeal, DeleteMeal, GetMeals } from '../AdminAction'

const ManageMeals = () => {
    const [meals, setmeals] = useState([])
    const [id, setID] = useState('')
    const getmeals = (async () => {

        const res = await GetMeals();
        const ress = await JSON.parse(res)
        setmeals(ress.data)

    })
    getmeals()

    const deleteHandler = async (id, e) => {

        console.log("hi form delete handler" + id)
        const res = await DeleteMeal(id);
        console.log(res)

    }
    const approveHandler = async (id, e) => {
        console.log("hi form approve handler" + id)
        const res = await ApproveMeal(id);
        console.log(res)
    }
    return (
        <div id="page-top">
            {/* Page Wrapper */}
            <div id="wrapper">

                {/* a */}

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
                                <h1 className="h3 mb-2 text-gray-800">Our Meals Management</h1>
                            </center><br />
                            {/* Data table */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Meals Management Table</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Meal Name </th>
                                                    <th>Meal Type</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>View</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Meal Name </th>
                                                    <th>Meal Type</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>View</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {meals ? Object.keys(meals).map((keyName, i) => (
                                                    <tr>
                                                        <td>{meals[keyName].name}</td>
                                                        <td>{meals[keyName].meal_type}</td>
                                                        <td>{meals[keyName].date}</td>
                                                        <td>{meals[keyName].status}</td>

                                                        <td>
                                                            <Link to={"/admin/manageMeal/mealDetails/" + meals[keyName].id} className="btn btn-primary" style={{ marginLeft: "30px" }} role="button">View</Link>


                                                        </td>
                                                        <td>
                                                            {meals[keyName].status !== "approved" ? <Link to="/admin/manageMeal" className="btn btn-success" style={{ marginLeft: "30px", color: "black" }} value={meals[keyName].id} onClick={(e) => approveHandler(meals[keyName].id, e)} ><span className="fas fa-check"></span>&nbsp;Approve</Link> : ''}
                                                            <Link to="/admin/manageMeal" className="btn btn-danger" style={{ marginLeft: "30px", color: "black" }} value={meals[keyName].id} onClick={(e) => deleteHandler(meals[keyName].id, e)} ><span className="fas fa-ban"></span>&nbsp;Reject</Link>
                                                        </td>

                                                    </tr>
                                                )): <tr>
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

export default ManageMeals