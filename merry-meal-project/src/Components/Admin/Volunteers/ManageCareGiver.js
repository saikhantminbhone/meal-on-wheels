/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from '../SignOut'
import { DeleteCareGiver, GetCareGivers } from '../AdminAction'

const ManageCareGiver = () => {

    const [caregivers,setCaregivers] = useState([])
    const [id,setID] = useState('')
    const getCaregivers = (async () => {

        const res = await GetCareGivers();
        const ress = await JSON.parse(res)
        setCaregivers(ress.data)

    })

    const onClickHandler = async (id,e) => {
        
        const res = await DeleteCareGiver(JSON.stringify(id));
        console.log(res)

    }

    // const onClickHandler = async (e) => {
    //     setId(e.target.value)
    //     const res = await AcceptRequestMember(id,auth.user.user.caregiver_id)
    //     console.log(res)
    // }


 
      useEffect(()=>{
        getCaregivers()
      })



    return (
        <div id="page-top">




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
                                <h1 className="h3 mb-2 text-gray-800">Care Giver Management Table</h1>
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
                                                    <th>Name</th>
                                                    <th>Birthday</th>
                                                    <th>Address</th>
                                                    <th>phone Number</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                <th>Name</th>
                                                    <th>Birthday</th>
                                                    <th>Address</th>
                                                    <th>phone Number</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                            {Object.keys(caregivers).map((keyName, i) => (
                                                    caregivers[keyName].fistname ?
                                                        <tr>
                                                            <td>{caregivers[keyName].fistname} {caregivers[keyName].lastname}</td>
                                                            <td>{caregivers[keyName].birthday}</td>
                                                            <td>{caregivers[keyName].address}</td>
                                                            <td>{caregivers[keyName].phno}</td>
                                                            <td>{caregivers[keyName].email}</td>
                                                            <td>
                                                                <Link to={"/admin/manageCaregiver/viewCareGiver/" + caregivers[keyName].id} className="btn btn-primary" style={{ marginLeft: "30px" }} role="button">View</Link>
                                                                <Link to="/admin/manageCaregiver" className="btn btn-danger" style={{ marginLeft: "30px", color: "black" }} value={caregivers[keyName].id} onClick={(e) => onClickHandler(caregivers[keyName].id, e)} >Delete</Link>

                                                            </td>

                                                        </tr>
                                                        : ''
                                                ) 
                                                )}

                                                {/* <tr>
                                                    <td>Swuan Yee Lin</td>
                                                    <td>20</td>
                                                    <td>Yangon</td>

                                                    <td>
                                                        <Link className="btn btn-primary" style={{ marginLeft: "30px" }} to="/admin/manageVolunteer/viewVolunteer" role="button">View</Link>
                                                        <a className="btn btn-danger" style={{ marginLeft: "30px" }} href="#" role="button">Delete</a>
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






        </div>
    )
}

export default ManageCareGiver;
