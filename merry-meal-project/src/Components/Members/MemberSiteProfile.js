import React, { useState } from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import {Link} from 'react-router-dom'
import { ViewMember } from './MemberAction'
import { useAuth } from '../Login/Auth'

const MemberSiteProfile = () => {
    const auth = useAuth()
    const [members, setmembers] = useState([])

    const vieMember = async () => {
        const res = await ViewMember(auth.user.user.member_id)
        const Formatted = await JSON.parse(res)
       
        setmembers(Formatted)

    }


     vieMember()

   
    return (
        <div id="page-top">
             <Menu />
            {/* Page Wrapper */}
          
               
                {/* a */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        {/* Topbar */}
                        
                        {/* End of Topbar */}

                        {/* Begin Page Content */}

                        {/* Begin Page Content table*/}
                        <div className="container-fluid">

                            {/* Page Heading */}
                            <br/>
                            <center>
                                <h1 className="h3 mb-2 text-gray-800">Member Profile Details</h1>
                            </center><br />
                            {/* profile session */}
                            <div className="row">
                                <div className="col-md-1">

                                </div>
                                <div class="col-md-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" class="img-thumbnail" style={{
                                        verticalAlign: "middle",
                                        width: "60%",
                                        borderRadius: "50%"
                                    }} /> <br />
                                    <Link class="font-weight-bold justify-center" to="/profile/updateProfile" style={{ verticalAlign: "middle", paddingLeft: "70px" }} >Edit Profile</Link>
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
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            {/* /.container-fluid */}

                        </div>
                        {/* End of Main Content */}

                        {/* End of Main Content */}
                        <br />

                        {/* Footer */}
                       <Footer />
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

export default MemberSiteProfile