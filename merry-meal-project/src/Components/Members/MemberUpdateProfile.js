import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/style.member.css'
import Footer from '../Footer'
import { useAuth } from '../Login/Auth'
import Menu from '../Menu'
import { UpdateMember } from './MemberAction'

const MemberUpdateProfile = () => {
    const auth = useAuth()
    const navigate = useNavigate();

    const [member, setmember] = useState({
        id: auth.user.user.member_id,
        caregiver_id: auth.user.user.caregiver_id,
        firstname: auth.user.user.firstname,
        lastname: auth.user.user.lastname,
        birthday: auth.user.user.birthday,
        email: auth.user.user.email,
        password: auth.user.user.password,
        phonenumber: auth.user.user.phonenumber,
        address: auth.user.user.address,
        city: auth.user.user.city,
        nrc: auth.user.user.nrc,
        request_caregiver: auth.user.user.request_caregiver,
    })
    console.log('reason' + auth.user.user.document)


    const submitHandler = async (e) => {
        e.preventDefault();
        const data = { member_id: member.id, caregiver_id: member.caregiver_id, firstname: member.firstname, lastname: member.lastname, birthday: member.birthday, email: member.email, password: member.password, phonenumber: member.phonenumber, address: member.address, city: member.city, nrc: member.nrc, request_caregiver: member.request_caregiver }
        const memberData = JSON.stringify(member)
        console.log(memberData)
        const res = await UpdateMember(memberData)
        console.log(res)
        navigate('/profile')

    }
    const onChange = e => {

        setmember({ ...member, [e.target.name]: e.target.value })

    }

    return (
        <div id="page-top">

            <Menu />

            {/* a */}
            {/* Page Wrapper */}
            <div id="wrapper">

                {/* Content Wrapper */}
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">


                        {/* Begin Page Content */}

                        {/* Begin Page Content table*/}
                        <div class="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 class="h3 mb-2 text-gray-800">Member Profile Details</h1>
                            </center><br />
                            {/* profile session */}
                            <div class="row">
                                <div class="col-md-1">

                                </div>
                                <div class="col-md-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" class="img-thumbnail" style={{
                                        verticalAlign: "middle",
                                        width: "60%",
                                        borderRadius: "50%"
                                    }} />
                                </div>
                                <div class="col-md-7">
                                    <form onSubmit={submitHandler}>
                                        <div class="">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">First Name</h6>
                                                </div>
                                                <input type="text" id="fname" placeholder="First Name" name="firstname" value={member.firstname} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Last Name</h6>
                                                </div>
                                                <input type="text" id="lname" placeholder="Last Name" name="lastname" value={member.lastname} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Date Of Birth</h6>
                                                </div>
                                                <input type="text" id="dob" placeholder="Date Of Birth" name="birthday" value={member.birthday} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">NRC</h6>
                                                </div>
                                                <input type="text" id="nrc" placeholder="NRC" name="nrc" value={member.nrc} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Address</h6>
                                                </div>
                                                <input type="text" id="address" placeholder="Address" name="address" value={member.address} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">City</h6>
                                                </div>
                                                <input type="text" id="city" placeholder="City" name="city" value={member.city} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Email</h6>
                                                </div>
                                                <input type="text" id="email" placeholder="Email" name="email" value={member.email} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Password</h6>
                                                </div>
                                                <input type="text" id="pwd" placeholder="Password" name="password" value={member.password} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Phone Number</h6>
                                                </div>
                                                <input type="text" id="phnumber" placeholder="Phone Number" name="phonenumber" value={member.phonenumber} onChange={onChange} />
                                            </div>
                                            <hr />



                                            {/* <Link to="/staff/member/profile" ></Link> */}
                                            <button class="btn btn-success" type="submit" role="button">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* /.container-fluid */}

                        </div>
                        {/* End of Main Content */}

                        {/* End of Main Content */}
                        <br />

                        <Footer />

                    </div>
                    {/* End of Content Wrapper */}

                </div>
                {/* End of Page Wrapper */}

                {/* Scroll to Top Button*/}
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>
            </div>
        </div>
    )
}

export default MemberUpdateProfile