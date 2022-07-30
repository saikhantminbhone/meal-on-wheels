/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import { GetDonators, GetExpenseMoney } from '../AdminAction'
import { Menu } from '../Menu'
import SignOut from '../SignOut'

const ExpenseFundraising = () => {
    const navigate = useNavigate()
    const [donators, setdonators] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cashout_amount, setccashout_amount] = useState('')


    const getdonators = (async () => {
        const res = await GetDonators();
        const ress = await JSON.parse(res)
        setdonators(ress.data)

    })

   


    const submitHandler = (e) => {
        e.preventDefault();
        const data = { name: name, cashout_description: description, cashout_amount: cashout_amount }
        const format = JSON.stringify(data)
        const res = GetExpenseMoney(format)

        if(res){
            setName('')
            setccashout_amount('')
            setDescription('')
        }
        
    }

    getdonators()




    return (
        <div id="page-top">
            {/*Page Wrapper */}
            <div id="wrapper">

                <Menu />

                {/*Content Wrapper */}
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
                            <SignOut />

                        </nav>
                        {/*End of Topbar */}
                        {/*Begin Page Content */}
                        <div className="container-fluid">
                            {/*Begin Page Content table */}

                            <center>
                                <h1 className="h3 mb-2 text-gray-800">Expense from the fund raised</h1>
                            </center><br />
                            {/*Data table*/}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Expense Table</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Amount</th>
                                                    <th>Description</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Amount</th>
                                                    <th>Description</th>
                                                    <th>Date</th>

                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {Object.keys(donators).map((keyName, i) => (
                                                    !donators[keyName].email && donators[keyName].cashout_description ?
                                                        <tr>
                                                            <td>{donators[keyName].name}</td>
                                                            <td>{donators[keyName].cashout_amount}</td>
                                                            <td>{donators[keyName].cashout_description}</td>
                                                            <td>{donators[keyName].cashout_date}</td>


                                                        </tr> : ''
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div><br />
                            <hr className="my-6" />
                            {/*/page content table */}

                            <br />
                            <center>
                                <h1 className="h3 mb-2 text-gray-800">Add expense amount</h1>
                            </center><br />
                            <form onSubmit={submitHandler}>
                                <div className="mb-6">
                                    <label for="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div><br />
                                <div className="mb-6">
                                    <label for="exampleInputEmail1" className="form-label">Description</label>
                                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div><br />
                                <div className="mb-6">
                                    <label for="exampleInputEmail1" className="form-label">Amount</label>
                                    <input type="text" value={cashout_amount} onChange={(e) => setccashout_amount(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                        {/*/.container-fluid */}

                    </div>
                    {/*End of table Content */}

                    {/*End of Main Content */}
                    <br />

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
                {/*End of Content Wrapper */}

            </div>
            {/*End of Page Wrapper */}

            {/*Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

        </div>
    )
}

export default ExpenseFundraising