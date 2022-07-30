import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from '../SignOut'
import { ApproveMember, DeleteMember, GetMembers } from '../AdminAction'


const ManageMember = () => {

    const [members, setmembers] = useState([])
    const [id, setID] = useState('')
    const getmembers = (async () => {

        const res = await GetMembers();
        const ress = await JSON.parse(res)
        setmembers(ress.data)

    })

    const deleteHandler = async (id,e) => {

        console.log("hi form delete handler" + id)
        const res = await DeleteMember(id);
        console.log(res)

    }
    const approveHandler = async (id,e) => {

        console.log("hi form approve handler" + id)
        const res = await ApproveMember(id);
        console.log(res)
    }

    // const onClickHandler = async (e) => {
    //     setId(e.target.value)
    //     const res = await AcceptRequestMember(id,auth.user.user.caregiver_id)
    //     console.log(res)
    // }


    
        useEffect(()=>{
            getmembers()
        })
   

    return (
        <div id="page-top">


            {/* Page Wrapper */}
            <div id="wrapper">

                <Menu />
                {/* a */}

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
                                <h1 className="h3 mb-2 text-gray-800">All Member Management Table</h1>
                            </center><br />
                            {/* Data table */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Member Management Table</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Member Name</th>
                                                    <th>Birthday</th>
                                                    <th>Address</th>
                                                    <th>email</th>
                                                    <th>Status</th>
                                                    <th>View</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                <th>Member Name</th>
                                                    <th>Birthday</th>
                                                    <th>Address</th>
                                                    <th>email</th>
                                                    <th>Status</th>
                                                    <th>View</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {Object.keys(members).map((keyName, i) => (
                                                    <tr>
                                                        <td>{members[keyName].fist_name} {members[keyName].last_name}</td>
                                                        <td>{members[keyName].birthday}</td>
                                                        <td>{members[keyName].address}</td>
                                                        <td>{members[keyName].email}</td>
                                                        <td>{members[keyName].approve}</td>
                                                        <td>
                                                            <Link to={"/admin/manageMember/viewMember/" + members[keyName].id} className="btn btn-primary" style={{ marginLeft: "30px" }} role="button">View</Link>
                                                            

                                                        </td>
                                                        <td>
                                                        {members[keyName].approve !=="accepted" ?<Link to="/admin/manageMember" className="btn btn-success" style={{ marginLeft: "30px", color: "black" }} value={members[keyName].id} onClick={(e)=>approveHandler(members[keyName].id,e)} ><span className="fas fa-check"></span>&nbsp;Approve</Link>:''}
                                                        <Link to="/admin/manageMember" className="btn btn-danger" style={{ marginLeft: "30px", color: "black" }} value={members[keyName].id} onClick={(e)=>deleteHandler(members[keyName].id,e)} ><span className="fas fa-ban"></span>&nbsp;Reject</Link>
                                                        </td>

                                                    </tr>
                                                ))}
                                    
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

export default ManageMember