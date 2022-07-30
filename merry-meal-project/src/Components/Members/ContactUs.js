/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'

const ContactUs = () => {
  return (
    <div>
        <Menu />
        {/* a */}
<div className="container">
        <div className="text">
            <h4>Contact Us</h4>
            <p>Meals on Wheels is the association of 32 neighborhood meal delivery sites that serve the Minneapolis/St.
                Paul metro area. You can get in touch with us in a variety of ways: <br/><br/>

                – If you’re looking to start meal service, sign up here. Please note that we serve the Minneapolis/St.
                <br/><br/>
                Paul metro area. If you are interested in receiving meals and do not live in Minnesota, please visit
                mealsonwheelsamerica.org to determine which meal program serves you.<br/><br/>

                – If you want to volunteer, sign up here. Please note that volunteer opportunities are limited to the
                Minneapolis/St. Paul metro area.<br/><br/>

                You can also reach us by phone at 612.623.3363 and by mail at Metro Meals on Wheels, 1200 Washington
                Ave. S., Suite 380, Minneapolis, MN 55415.<br/><br/>

                For other inquiries, complete this form and we’ll be in touch with you.</p>
        </div>
    </div>
    <br/><br/>


    <div className="container">

        <form className="form-horizontal" role="form">
            <h2>Contact us</h2>
           {/*fname*/}
            <div className="form-group">
                <label for="firstName" data-bs-toggle="tooltip" data-bs-placement="right"
                    title="Write Your First Name!">First Name*</label>
                <input type="text" id="firstName" placeholder="First Name" className="form-control" autofocus/>
            </div>
            <br/>
           {/*lname*/}
            <div className="form-group">
                <label for="lastName" data-bs-toggle="tooltip" data-bs-placement="right"
                    title="Write Your Last Name!">Last Name*</label>
                <input type="text" id="lastName" placeholder="Last Name" className="form-control"/>
            </div>
            <br/>
           {/*email*/}
            <div className="form-group">
                <label for="email" data-bs-toggle="tooltip" data-bs-placement="right"
                    title="Your email address must include @/.">Email* </label>
                <input type="email" id="email" placeholder="Email" className="form-control" name="email"/>
            </div>
            <br/>
           {/*ph*/}
            <div className="form-group">
                <label for="phoneNumber" data-bs-toggle="tooltip" data-bs-placement="right"
                    title="Write down your phone number">Phone number*</label>
                <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" className="form-control"/>
            </div>
            <br/>
           {/*question*/}
            <div className="form-group">
                <label for="reason">Questions or Comments!</label>
                <textarea className="form-control" id="reason" placeholder=""></textarea>

            </div>
            <br/>

            <button type="submit" className="btn btn-secondary btn-block">Submit</button>
            <br/><br/>
        </form>{/* /form */}

    </div>{/* ./container */}
    <br/><br/>
    <Footer />
    </div>
  )
}

export default ContactUs