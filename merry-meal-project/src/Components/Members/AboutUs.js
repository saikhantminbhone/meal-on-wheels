/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'


const AboutUs = () => {
  return (
    <div>
        <Menu />
<div className="container">
    <div className="text">
      <h3>Careers</h3>
      <p>Interested in a career that helps connect seniors and people with disabilities with the nutritious food
        they need to remain living at home? Please see the following opportunities with Metro Meals on Wheels
        and its program partners.</p>
    </div>

    <div className="text">
      <h3>Metro Meals on Wheels</h3>
      <p>We are looking for an energetic and compassionate person to connect Twin Cities seniors and people disabilities
        with the resources they need to live independently. As Metro Meals on Wheels continues to expand its outreach
        within the community, this position requires the applicant to be fluent in both English and one of the following
        languages: Somali, Hmong or Spanish.</p>
    </div>

    <div className="text">
      <h3>Partner Programs</h3>
      <p>Metro Meals on Wheels partners with its 32 neighborhood member programs for the delivery of Meals on Wheels
        throughout the Twin Cities.
        The following employment and board of directors opportunities are available at our neighborhood programs:

        Program Specialist – Roseville School District Meals on Wheels

        The Meals on Wheels Program Specialist coordinates the day-to-day operation of the Roseville Schools District
        Meals on Wheels program and supervises volunteers.</p>
    </div>



    <div className="text">
      <h3 className="text-center text-dark">Our Team</h3>
    </div>


{/* a */}
    {/*card*/}
    {/*First row*/}
    <div className="row ">
      <div className="col-sm-2 "></div>
      <div className="col-sm-3 bg-secondary">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Patrick Rowan</h5>
            <img className="card-img-top img-width" src="image/team1.jpg" alt="Card image" />
            <p className="card-text text-center">Executive Director<br/>
              patrick@meals-on-wheels.com</p>

          </div>
        </div>
      </div>
      <div className="col-sm-3 ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Mary Plasencia</h5>
            <img className="card-img-top img-width" src="image/team2.jpg" alt="Card image" />
            <p className="card-text text-center">Client Services Director<br/> mary@meals-on-wheels.com

            </p>

          </div>
        </div>
      </div>
      <div className="col-sm-3  bg-secondary">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Anita Berg</h5>
            <img className="card-img-top img-width" src="image/team3.jpg" alt="Card image" />
            <p className="card-text text-center">Member Services Director<br/>anita@meals-on-wheels.com</p>

          </div>
        </div>
      </div>

      <div className="col-sm-1"></div>
    </div> <br/><br/><br/>




    {/*second row*/}
    <div className="row ">
      <div className="col-sm-2 "></div>
      <div className="col-sm-3 bg-secondary">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Jeni Gregory</h5>
            <img className="card-img-top img-width" src="image/team4.jpeg" alt="Card image" />
            <p className="card-text text-center">Development and Communications Director <br/>jeni@meals-on<br/>-wheels.com
            </p>

          </div>
        </div>
      </div>
      <div className="col-sm-3 ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Grant Boelter</h5>
            <img className="card-img-top img-width" src="image/team5.jpg" alt="Card image" />
            <p className="card-text text-center">Marketing and Communications Manager<br/> grant@meals-on-wheels.com</p>

          </div>
        </div>
      </div>
      <div className="col-sm-3  bg-secondary">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Madisen Vukich</h5>
            <img className="card-img-top img-width" src="image/team6.jpg" alt="Card image" />
            <p className="card-text text-center">Development and Outreach Manager<br/>madisen@meals-on-wheels.com</p>

          </div>
        </div>
      </div>

      <div className="col-sm-1"></div>
    </div> <br/><br/><br/>
  </div>
<Footer />
    </div>
  )
}

export default AboutUs