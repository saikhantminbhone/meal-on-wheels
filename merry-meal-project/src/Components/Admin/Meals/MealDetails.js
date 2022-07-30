/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from '../SignOut'
import { ViewMeal } from '../AdminAction'


const MealDetails = () => {
    const{id} = useParams()
    const [meals, setmeals] = useState([])

    const viewMeal = async () => {
        const res = await ViewMeal(id)
        const partnerFormatted = await JSON.parse(res)
        setmeals(partnerFormatted)

    }


     viewMeal()

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
                        <h1 className="h3 mb-2 text-gray-800">Meal Details</h1>
                    </center><br/>
                    {/* profile session */}
                    <div className="row">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-3">
                            <img src={meals.meal_image} alt="Profile" className="img-thumbnail meal-img" /><br/><br/>
                           
                        </div>
                        <div className="col-md-7">
                            <div className="">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0 font-weight-bold">Meal Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {meals.name}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0 font-weight-bold">Ingredients</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                       {meals.ingredients}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0 font-weight-bold">Description</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                       {meals.description}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0 font-weight-bold">Meal Type</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {meals.meal_type}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0 font-weight-bold">Day</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                       {meals.date}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0 font-weight-bold">Status</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                       {meals.status}
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}

                </div>
                {/* End of Main Content */}

                {/* End of Main Content */}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
    </div>
  )
}

export default MealDetails