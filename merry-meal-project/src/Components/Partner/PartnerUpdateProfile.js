import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import PartnerMenu from './PartnerMenu'
import '../assets/style.partner.css'
import { useAuth } from '../Login/Auth'
import { UpdatePartner } from './PartnerAction'

const PartnerUpdateProfile = () => {
    const auth = useAuth()
    const navigate = useNavigate();

    const [partner, setpartner] = useState({
        id: auth.user.user.partner_id,
        firstname: auth.user.user.firstname,
        lastname: auth.user.user.lastname,
        birthday: auth.user.user.birthday,
        email: auth.user.user.email,
        password: auth.user.user.password,
        phonenumber: auth.user.user.phonenumber,
        lat: auth.user.user.partner_latitude,
        long: auth.user.user.partner_longitude,
        address: auth.user.user.address,
        city: auth.user.user.city,
        nrc: auth.user.user.nrc,
        available_date: auth.user.user.available_date

    })

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            id: partner.id, firstname: partner.firstname, lastname: partner.lastname,
            birthday: partner.birthday, email: partner.email, password: partner.password,
            phonenumber: partner.phonenumber, address: partner.address, partner_latitude: partner.lat, partner_longitude: partner.long, city: partner.city, nrc: partner.nrc, available_date: partner.available_date
        }
        const partnerData = JSON.stringify(data)
        console.log(partnerData)
        const res = await UpdatePartner(partnerData)

        navigate('/staff/partner/profile')

    }
    const onChange = e => {

        setpartner({ ...partner, [e.target.name]: e.target.value })

    }

    return (
        <div id="page-top">
            <div id="wrapper">
                <partnerMenu />
                {/* Content Wrapper */}
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        {/* Topbar */}
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* Sidebar Toggle (Topbar) */}
                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>

                            {/* Topbar Navbar */}
                            <ul class="navbar-nav ml-auto">
                                {/* Nav Item - User Information */}
                                <li class="nav-item dropdown no-arrow">
                                    <Link class="nav-link" to="/staff/partner/profile" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{auth.user.user.firstname} {auth.user.user.lastname}</span>
                                        <img class="img-profile rounded-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png " />
                                    </Link>
                                </li>

                            </ul>


                        </nav>
                        {/* End of Topbar */}

                        {/* Begin Page Content */}

                        {/* Begin Page Content table*/}
                        <div class="container-fluid">

                            {/* Page Heading */}
                            <center>
                                <h1 class="h3 mb-2 text-gray-800">Profile Details</h1>
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
                                    }} /> <br />
                                    <Link class="font-weight-bold justify-center" to="/staff/partner/profile/updateProfile" style={{ verticalAlign: "middle", paddingLeft: "70px" }} >Edit Profile</Link>
                                </div>
                                <div class="col-md-7">
                                    <form onSubmit={submitHandler}>
                                        <div class="">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">First Name</h6>
                                                </div>
                                                <input type="text" id="fname" placeholder="First Name" name="firstname" value={partner.firstname} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Last Name</h6>
                                                </div>
                                                <input type="text" id="lname" placeholder="Last Name" name="lastname" value={partner.lastname} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Date Of Birth</h6>
                                                </div>
                                                <input type="text" id="dob" placeholder="Date Of Birth" name="birthday" value={partner.birthday} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">NRC</h6>
                                                </div>
                                                <input type="text" id="nrc" placeholder="NRC" name="nrc" value={partner.nrc} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Address</h6>
                                                </div>
                                                <input type="text" id="address" placeholder="Address" name="address" value={partner.address} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">City</h6>
                                                </div>
                                                <input type="text" id="city" placeholder="City" name="city" value={partner.city} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Email</h6>
                                                </div>
                                                <input type="text" id="email" placeholder="Email" name="email" value={partner.email} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Password</h6>
                                                </div>
                                                <input type="text" id="pwd" placeholder="Password" name="password" value={partner.password} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Phone Number</h6>
                                                </div>
                                                <input type="text" id="phnumber" placeholder="Phone Number" name="phonenumber" value={partner.phonenumber} onChange={onChange} />
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0 font-weight-bold">Availability</h6>
                                                </div>
                                                <div>
                                                    <label className="radio-inline">
                                                        <input className="text" type="radio"  id="yes" name="available_date" value={'weekday'} checked={partner.available_date === 'weekday' ? true:false} onChange={onChange} /> WeekDay
                                                    </label>
                                                    <label className="radio-inline">
                                                        <input className="text" type="radio" id="no" style={{ marginLeft: "30px" }} name="available_date" value={'weekend'} checked={partner.available_date === 'weekend' ?  true:false} onChange={onChange} /> WeekEnd
                                                    </label>
                                                </div>
                                            </div>



                                            <hr />


                                            {/* <Link to="/staff/partner/profile" ></Link> */}
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

                        {/* Footer */}
                        <footer class="sticky-footer bg-white">
                            <div class="container my-auto">
                                <div class="copyright text-center my-auto">
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
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>

            </div>
        </div>
    )
}

export default PartnerUpdateProfile