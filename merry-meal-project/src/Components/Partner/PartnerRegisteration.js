/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import { PartnerRegister } from './PartnerAction'

const PartnerRegisteration = () => {
    const navigate = useNavigate()
    const [partner, setPartner] = useState({
        firstname: '',
        lastname: '',
        birthday: '',
        email: '',
        password: '',
        phonenumber: '',
        address: '',
        city: '',
        nrc: '',
        reason: '',

    })

    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        });
    })


    const { firstname, lastname, birthday, email, password, phonenumber, address, city, nrc, reason } = partner;
    console.log(partner)
    console.log(lat, long)
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('firstname', firstname)
        formData.set('lastname', lastname)
        formData.set('birthday', birthday)
        formData.set('email', email)
        formData.set('password', password)
        formData.set('phonenumber', phonenumber)
        formData.set('address', address)
        formData.set('city', city)
        formData.set('nrc', nrc)
        formData.set('reason', reason)
        formData.set('partner_latitude', lat)
        formData.set('partner_longitude', long)


        await PartnerRegister(formData)


        navigate('/login')

    }
    const onChange = e => {

        setPartner({ ...partner, [e.target.name]: e.target.value })

    }
    return (
        <div>
            <Menu />

            <div className="container">
                <div className="text">
                    <h4>Sign up to Partner!</h4>
                    <p>Thanks for your interest in volunteering for Meals on Wheels to help bring nutrition and<br />
                        independence to seniors and people with disabilities in the Minneapolis/St. Paul metro area!<br />
                        Please fill out this form and we’ll be in touch with you soon with everything you need to get started..
                    </p>
                </div>
            </div>
            <br /><br />


            <div className="container">

                <form className="form-horizontal" onSubmit={submitHandler} role="form">
                    <h2>Registration</h2>
                    {/*fname*/}
                    <div className="form-group" >
                        <label for="firstName" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write Your First Name!">First Name*</label>
                        <input type="text" id="firstName" placeholder="First Name" className="form-control" name="firstname" value={firstname} onChange={onChange} autofocus />
                    </div>
                    <br />
                    {/*lname*/}
                    <div className="form-group">
                        <label for="lastName" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write Your Last Name!">Last Name*</label>
                        <input type="text" id="lastName" placeholder="Last Name" className="form-control" name="lastname" value={lastname} onChange={onChange} />
                    </div>
                    <br />
                    {/*email*/}
                    <div className="form-group">
                        <label for="email" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Your email address must include @/.">Email* </label>
                        <input type="email" id="email" placeholder="Email" className="form-control" name="email" name="email" value={email} onChange={onChange} />
                    </div>
                    <br />
                    {/*password*/}
                    <div className="form-group">
                        <label for="password" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Your password must have at least 6 ">Password*</label>
                        <input type="password" id="password" placeholder="Password" className="form-control" name="password" value={password} onChange={onChange} />
                    </div>
                    <br />
                    {/*cpassword*/}
                    <div className="form-group">
                        <label for="password" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Rewrite your password">Confirm Password*</label>
                        <input type="password" id="password" placeholder="Password" className="form-control" />

                    </div>
                    <br />
                    {/*dob*/}
                    <div className="form-group">
                        <label for="birthDate" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Your Date of Birth">DOB*</label>
                        <input type="date" id="birthDate" placeholder="Date of Birth" className="form-control" name="birthday" value={birthday} onChange={onChange} />
                    </div>
                    <br />
                    {/*nrc*/}
                    <div className="form-group">
                        <label for="nrc" data-bs-toggle="tooltip" data-bs-placement="right" title="Your NRC id">NRC*</label>
                        <input type="text" id="nrc" placeholder="National Register of Citizens" className="form-control" name="nrc" value={nrc} onChange={onChange} />
                    </div>
                    <br />
                    {/*ph*/}
                    <div className="form-group">
                        <label for="phoneNumber" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write down your phone number">Phone number*</label>
                        <input type="text" id="phoneNumber" placeholder="Phone number" className="form-control" name="phonenumber" value={phonenumber} onChange={onChange} />
                    </div>
                    <br />
                    {/*add*/}
                    <div className="form-group">
                        <label for="address" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write down your address">Address*</label>
                        <textarea className="form-control" id="address" placeholder="Address" name="address" value={address} onChange={onChange}></textarea>
                    </div>
                    <br />
                    {/*city*/}
                    <div className="form-group">
                        <label for="city" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write down your city">City*</label>
                        <input type="text" id="city" placeholder="City" className="form-control" name="city" value={city} onChange={onChange} />
                    </div>
                    <br />
                    {/*question*/}
                    <div className="form-group">
                        <label for="reason">Why do you want to participate in our Merry meals?</label>
                        <textarea className="form-control" id="reason" placeholder="" name="reason" value={reason} onChange={reason} onChange={onChange}></textarea>

                    </div>
                    <br />



                    <br />


                    <button type="submit" className="btn btn-secondary btn-block">Submit</button>
                    <br /><br />

                </form> {/* /form */}

            </div> {/* ./container */}
            {/* a */}
            <br />

            <Footer />

        </div>
    )
}

export default PartnerRegisteration