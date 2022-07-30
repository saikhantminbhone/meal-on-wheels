/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { Menu } from './Menu'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from './SignOut'
import { GetCareGivers, GetMembers, GetPartners, GetRiders, TotalAmount, TotalCashOutAmount, TotalDonationAmount } from './AdminAction'


export const Dashboard = () => {

    const [totalAmount, setTotalAmount] = useState('')
    const [cashOut, setCashOut] = useState('')
    const [total, setTotal] = useState('')
    const [totalcaregiver, settotalcaregiver] = useState('')
    const [totaldonator, settotaldonator] = useState('')
    const [totalrider, settotalRider] = useState('')
    const [totalpartner, settotalpartner] = useState('')
    const [totalStaff,settotalStaff] = useState('')
    const [totalmember,settotalmember] = useState('')

    const getTotal = async () => {
        const res = await TotalDonationAmount();
        const total = await JSON.parse(res)
        setTotalAmount(total.sum_donation)

    }

    const getCashOut = async () => {
        const res = await TotalCashOutAmount();
        const total = await JSON.parse(res)
        setCashOut(total.sum_donation)

    }

    const getTotalLeftAmount = async () => {
        const res = await TotalAmount()
        const total = await JSON.parse(res)
        setTotal(total.expense_amount)

    }

    const getCaregivers = (async () => {

        const res = await GetCareGivers();
        const ress = await JSON.parse(res)
        settotalcaregiver(ress.data.length)

    })

    const getpartners = (async () => {

        const res = await GetPartners();
        const ress = await JSON.parse(res)
        settotalpartner(ress.data.length)

    })

    const getriders = (async () => {

        const res = await GetRiders();
        const ress = await JSON.parse(res)
        settotalRider(ress.data.length)
        const total = totalcaregiver+totalpartner+totalrider
        settotalStaff(total)

    })

    const getmembers = (async () => {

        const res = await GetMembers();
        const ress = await JSON.parse(res)
        settotalmember(ress.data.length)

    })




    getCaregivers()
    getpartners()
    getriders()
    getTotal()
    getmembers()
    getCashOut()
    getTotalLeftAmount()



    return (
        <div id="page-top">

            <div id="wrapper">


                <Menu />


                <div id="content-wrapper" className="d-flex flex-column">


                    <div id="content">


                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>


                            <SignOut />

                        </nav>



                        <div className="container-fluid">


                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Admin Dashboard</h1>
                            </div>

                            <div className="jumbotron jumbotron-fluid">
                                <div className="container">
                                    <center>
                                        <h1 className="display-5">Welcome to our Merry Meal Charity Organization</h1>
                                    </center>
                                </div>
                            </div>


                            <div className="row">


                                <div className="col-xl-6 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Total staffs / Volunteers</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{totalStaff}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-users fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-xl-6 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Total Members</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{totalmember}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-users fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">


                                <div className="col-xl-4 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Total Donate Amount</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">${totalAmount}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-hand-holding-usd fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  {/* total expense amount card */}
                                <div className="col-xl-4 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Total Expenses Amount</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">${cashOut}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-file-invoice-dollar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* total remaining amount card */}
                                <div className="col-xl-4 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Total Remaining Amount</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">${total}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Content Row */}
                            </div>
                            {/* End of Main Content */}
                            <br /><br /><br />



                        </div>
                        {/* End of Content Wrapper */}
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
                    {/* End of Page Wrapper */}

                    {/* Scroll to Top Button*/}
                    <a className="scroll-to-top rounded" href="#page-top">
                        <i className="fas fa-angle-up"></i>
                    </a>

                    {/* Bootstrap core JavaScript*/}
                    {/* <script src="vendor/jquery/jquery.min.js"></script> */}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                    {/* <script src=" vendor/bootstrap/js/bootstrap.bundle.min.js "></script> */}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/js/bootstrap.bundle.min.js"></script>
                    {/* Core plugin JavaScript*/}
                    {/* <script src="vendor/jquery-easing/jquery.easing.min.js "></script> */}
                    {/* Custom scripts for all pages*/}
                    {/* <script src="js/sb-admin-2.min.js "></script> */}
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-sb-admin-2/4.1.4/js/sb-admin-2.min.js"></script>



                </div>
            </div>

        </div>
    )
}
