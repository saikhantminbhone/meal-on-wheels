/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useState } from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import { RegisterMember } from './MemberAction'
import { useNavigate } from 'react-router-dom'

const MemberRegistration = () => {
    const navigate = useNavigate()
    const [loading,setLoading]=useState(false)
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        birthday: '',
        email: '',
        password: '',
        phonenumber: '',
        address: '',
        city: '',
        nrc: '',
        request_caregiver: '',
        reason: '',
        

    })
    
    const { firstname, lastname, birthday, email, password, phonenumber, address, city, nrc, request_caregiver, reason} = user;

    const [document, setDocument] = useState(null)



    const submitHandler =async (e) => {
        e.preventDefault();
        setLoading(true)
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
        formData.set('request_caregiver', request_caregiver)
        formData.set('document_photo', document)
        formData.set('approve', 'pending')
        formData.set('reason',reason)

        const res =await RegisterMember(formData);
        console.log(res)
        setLoading(false)
        if(res){
            navigate('/login')
        }else{
            navigate('/memberRegister')
        }

    }
    const onChange = e => {
        if (e.target.name === 'document') {

            // const reader = new FileReader();

            // reader.onload = () => {
            //     if (reader.readyState === 2) {
                    setDocument(e.target.files[0])
            //     }
            // }

            // reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }


    return (
        <div>
            <Menu />
            <div className="container">
                <div className="text">
                    <h4>Sign up to member!</h4>
                    <p>Welcome to our Meals on Wheels to help yuo bring nutrition
                        and independence to seniors and <br />people with disabilities in the Minneapolis/St.
                        Paul metro area! <br />Please fill out this form and we’ll be in touch with you soon
                        with everything you need to get started.</p>
                </div>
            </div>
            <br /><br />


            <div className="container">

                <form className="form-horizontal" onSubmit={submitHandler} role="form">
                    <h2>Registration</h2>
                    {/*fname*/}
                    <div className="form-group">
                        <label for="firstName" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write Your First Name!">First Name*</label>
                        <input type="text" id="firstName" placeholder="First Name" className="form-control" name="firstname" value={firstname} onChange={onChange} autofocus />
                    </div>
                    <br />
                    {/*lname*/}
                    <div className="form-group">
                        <label for="lastName" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write Your Last Name!">Last Name*</label>
                        <input type="text" id="lastName" placeholder="Last Name" className="form-control"name="lastname" value={lastname} onChange={onChange}/>
                    </div>
                    <br />
                    {/*email*/}
                    <div className="form-group">
                        <label for="email" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Your email address must include @/.">Email* </label>
                        <input type="email" id="email" placeholder="Email" className="form-control" name="email" value={email} onChange={onChange}/>
                    </div>
                    <br />
                    {/*password*/}
                    <div className="form-group">
                        <label for="password" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Your password must have at least 6 ">Password*</label>
                        <input type="password" id="password" placeholder="Password" className="form-control" name="password" value={password} onChange={onChange}/>
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
                        <input type="date" id="birthDate" placeholder="Date of Birth" className="form-control" name="birthday" value={birthday} onChange={onChange}/>
                    </div>
                    <br />
                    {/*nrc*/}
                    <div className="form-group">
                        <label for="nrc" data-bs-toggle="tooltip" data-bs-placement="right" title="Your NRC id">NRC*</label>
                        <input type="text" id="nrc" placeholder="National Register of Citizens" className="form-control" name="nrc" value={nrc} onChange={onChange}/>
                    </div>
                    <br />
                    {/*ph*/}
                    <div className="form-group">
                        <label for="phoneNumber" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write down your phone number">Phone number*</label>
                        <input type="text" id="phoneNumber" placeholder="Phone number" className="form-control" name="phonenumber" value={phonenumber} onChange={onChange}/>
                    </div>
                    <br />
                    {/*add*/}
                    <div className="form-group">
                        <label for="address" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write down your address">Address*</label>
                        <textarea className="form-control" id="address" placeholder="Address"  name="address" value={address} onChange={onChange}></textarea>
                    </div>
                    <br />
                    {/*city*/}
                    <div className="form-group">
                        <label for="city" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write down your city">City*</label>
                        <input type="text" id="city" placeholder="City" className="form-control"  name="city" value={city} onChange={onChange}/>
                    </div>
                    <br />

                    {/*document*/}
                    <div className="form-group">
                        <label for="document" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Write down your document">Document Images</label>
                        <input type="file" accept="iamges/*" name='document' id="dcapprove" multiple="multiple" className="form-control" onChange={onChange} />
                    </div>
                    <br />
                    {/*question*/}
                    <div className="form-group">
                        <label for="reason">Why do you want to participate in our Merry meals?</label>
                        <textarea className="form-control" id="reason" placeholder="" name="reason" value={reason} onChange={onChange}></textarea>

                    </div>
                    <br />
                    {/*radio*/}
                    <div className="form-group">
                        <label data-bs-toggle="tooltip" data-bs-placement="right" title="Choonse one">Do you need Care
                            giver?</label>
                        <div>
                            <label className="radio-inline">
                                <input className="text" type="radio" name="request_caregiver" id="yes" value={'yes'} onChange={onChange} /> Yes
                            </label>
                            <label className="radio-inline">
                                <input className="text" type="radio" name="request_caregiver" id="no" value={'no'} onChange={onChange}/> No
                            </label>
                        </div>
                    </div>

                    <br />


                    <button type="submit" className="btn btn-secondary btn-block"  disabled={loading ? true:false}>Submit</button>
                    <br /><br />

                    <div>
                        <a href="volunteer.html" className="link-success">If you want to join as volunteer, please click here!</a>
                    </div>

                </form> {/* /form */}

            </div> {/* ./container */}

            <br />
            <Footer />
        </div>
    )
}

export default MemberRegistration