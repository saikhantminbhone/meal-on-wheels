/* eslint-disable jsx-a11y/aria-role */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GetMeals } from '../Admin/AdminAction'
import '../assets/style.main.css'
import '../assets/style.partner.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'
import { DeleteMeal, GetAllMeals, SubmitMeal } from './PartnerAction'
import PartnerMenu from './PartnerMenu'

const PartnerManageMeal = () => {
    const auth = useAuth()
    const [meals, setmeals] = useState([])
    const [id, setID] = useState('')
    const getmeals = (async () => {

        const res = await GetAllMeals();
        const ress = await JSON.parse(res)
        setmeals(ress.data)

    })

    const deleteHandler = async (id, e) => {

        console.log("hi form delete handler" + id)
        const res = await DeleteMeal(id);
        console.log(res)

    }
    const submitHandler = async (id, e) => {

        const data = { id: id, status: 'submited' }
        const formattedData = JSON.stringify(data)
        const res = await SubmitMeal(formattedData);
        console.log(res)
    }

    useEffect(() => {
        getmeals()
    }, [])
    // getmeals()

    return (
        <div id="page-top">
            <div id="wrapper">
                <PartnerMenu />
                <div id="content-wrapper" className="d-flex flex-column">

                    {/*Main Content */}
                    <div id="content">

                        {/*Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/*Sidebar Toggle (Topbar) */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            {/*Topbar Navbar */}
                            <ul className="navbar-nav ml-auto">
                                {/*Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <Link class="nav-link" to="/staff/partner/profile" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{auth.user.user.firstname} {auth.user.user.lastname}</span>
                                        <img class="img-profile rounded-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png " />
                                    </Link>
                                </li>
                            </ul>

                        </nav>
                        {/*End of Topbar */}


                        <div className="container-fluid">

                            {/*Page Heading */}
                            <center>
                                <h1 className="h3 mb-2 text-gray-800">Plan and Preparation Meals</h1>
                            </center><br />
                            {/*Data table */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Plan and preparation meals</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Meal Name</th>
                                                    <th>Meal Type</th>
                                                    <th>Ingredients</th>
                                                    <th>Description</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Meal Name</th>
                                                    <th>Meal Type</th>
                                                    <th>Ingredients</th>
                                                    <th>Description</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {meals ? Object.keys(meals).map((keyName, i) => (
                                                    <tr>
                                                        <td>{meals[keyName].name}</td>
                                                        <td>{meals[keyName].meal_type}</td>
                                                        <td>{meals[keyName].ingredients}</td>
                                                        <td>{meals[keyName].description}</td>
                                                        <td>{meals[keyName].date}</td>
                                                        <td>{meals[keyName].status}</td>


                                                        <td>
                                                            {meals[keyName].status !== "submited" ? <button className="btn btn-success" style={{ marginLeft: "30px", color: "black" }} value={meals[keyName].id} onClick={(e) => submitHandler(meals[keyName].id, e)} ><span className="fas fa-check"></span>&nbsp;Submit</button> : ''}
                                                            <button className="btn btn-danger" style={{ marginLeft: "30px", color: "black" }} value={meals[keyName].id} onClick={(e) => deleteHandler(meals[keyName].id, e)} ><span className="fas fa-ban"></span>&nbsp;Delete</button>
                                                        </td>

                                                    </tr>
                                                )) : <tr>
                                                    <td>No Data</td>
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
                        {/*/.container-fluid */}




                        <br /><br /><br />
                    </div>
                    {/*End of Content Wrapper */}
                    {/*Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Meals On Wheels 2022</span>
                            </div>
                        </div>
                    </footer>
                    {/*End of Footer */}

                </div>
                {/*End of Page Wrapper */}

                {/*Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

            </div>
        </div>
    )
}

export default PartnerManageMeal