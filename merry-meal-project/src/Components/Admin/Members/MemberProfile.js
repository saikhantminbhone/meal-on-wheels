/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Menu } from '../Menu'
import '../../assets/style.main.css'
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import SignOut from '../SignOut'
import { ViewMember } from '../AdminAction'

const MemberProfile = () => {
    const{id} = useParams()
    const [members, setmembers] = useState([])

    const vieMember = async () => {
        const res = await ViewMember(id)
        const partnerFormatted = await JSON.parse(res)
        setmembers(partnerFormatted)

    }


     vieMember()

   
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

                        {/* Begin Page Content table*/}
                        <div className="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 className="h3 mb-2 text-gray-800">Member Profile Details</h1>
                            </center><br />
                            {/* profile session */}
                            <div className="row">
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="img-thumbnail default-profile-img" />
                                </div>
                                <div className="col-md-7">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">First Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.fist_name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">Last Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.last_name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">Date Of Birth</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.birthday}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">NRC</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.nrc}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.address}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">City</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                               {members.city}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">Phone Number</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.phonenumber}
                                            </div>
                                        </div>
                                        <hr />
                                        
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">Participant Reason</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.reason}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0 font-weight-bold">Need Care Giver</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {members.request_caregiver}
                                            </div>
                                        </div>
                                        <hr />
                                        <h6 className="mb-0 font-weight-bold">Document Photo</h6>
                                            <div>
                                            <img src={members.document} alt="Profile" style={{width:'100%'}} />
                                            </div>
                                        
                                        <hr />
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
        </div>
    )
}

export default MemberProfile;