/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'

const Volunteer = () => {
  return (
     
    <div>
        <Menu />
{/* View Meal */}
  <div>
    <img src="image/volu1.jpg" alt="Los Angeles" className="d-block img-width" />
  </div>
  <br/><br/>


  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        {/* <div className="embed-responsive embed-responsive-16by9"> */}
        <img src="image/volun1.jpg" alt="Los Angeles" className="d-block img-width" />
        {/* </div> */}
      </div>

      <div className="col-sm-6">
        <h2>Deliver Nutrition and Independence</h2>
        <p>Looking for volunteer opportunities in the Minneapolis/St. Paul metro area that make a big
          difference in the lives of your neighbors? Look no further than volunteering with Meals on
          Wheels. Deliver meals over the lunch hour or sign up for a shift in our kitchen and know you
          are doing your part to bring nutritious food and a social connection to your neighbors.</p>
      </div>
    </div>
  </div>
  <br/><br/>

  {/*card*/}
  {/*First row*/}
  <div className="row ">
    <div className="col-sm-2 "></div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">

          <img className="card-img-top volunteer-img" src="image/volu2.jpg" alt="Card image" /><br/>
          <h5 className="card-title text-center">Deliver Meals</h5>
          <p className="card-text text-center">Dedicate your lunch hour to making your neighbors’ day by delivering meals.
          </p>

        </div>
      </div>
    </div>
    <div className="col-sm-3 ">
      <div className="card">
        <div className="card-body">

          <img className="card-img-top volunteer-img" src="image/volu3.jpg" alt="Card image" /><br/>
          <h5 className="card-title text-center">Volunteer at the Kitchen</h5>
          <p className="card-text text-center">Help with the packaging and preparation of meals for your neighbors by
            picking up a 2-hour shift at our kitchen.

          </p>

        </div>
      </div>
    </div>
    <div className="col-sm-3 ">
      <div className="card">
        <div className="card-body">

          <img className="card-img-top volunteer-img" src="image/volu4.jpg" alt="Card image"  />
          <h5 className="card-title text-center">Participate in an Event</h5>
          <p className="card-text text-center">Check out our events calendar for events supporting Meals on Wheels.</p>

        </div>
      </div>
    </div>

    <div className="col-sm-1"></div>
  </div> <br/><br/><br/>

  {/*second row*/}
  <div className="row ">
    <div className="col-sm-2 "></div>
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">

          <img className="card-img-top volunteer-img" src="image/volu5.jpg" alt="Card image" /><br/>
          <h5 className="card-title text-center">Sign Up to Volunteer</h5>
          <p className="card-text text-center">Ready to get started as a volunteer? Simply complete a short form to help us
            get you to the right place.</p>

        </div>
      </div>
    </div>
    <div className="col-sm-3 ">
      <div className="card">
        <div className="card-body">

          <img className="card-img-top volunteer-img" src="image/volu6.jpg" alt="Card image" /><br/>
          <h5 className="card-title text-center">Other Ways to Get Involved</h5>
          <p className="card-text text-center">Make placemats, decorate bags or make birthday cards for meal recipients. Or
            host a fundraiser to support Meals on Wheels.

          </p>

        </div>
      </div>
    </div>
    <div className="col-sm-3 ">
      <div className="card">
        <div className="card-body">

          <img className="card-img-top volunteer-img" src="image/volu7.svg" alt="Card image" />
          <h5 className="card-title text-center">Sign Up for Our Newsletter</h5>
          <p className="card-text text-center">Get updates on events, volunteer opportunities and other Meals on Wheels
            news.</p>

        </div>
      </div>
    </div>

    <div className="col-sm-1"></div>
  </div> <br/><br/><br/>

  {/*text*/}
  <div className="container ">
    <div className="row">

      <div className="col-sm-6">
        <h2>Bringing more than just a meal</h2>
        <p>“I think it’s important to me that when my meal’s delivered I
          have that social contact, that connection with the person who’s
          delivering the food. And if I was in trouble, they would know.”</p>

      </div>
      <div className="col-sm-6">
        {/* <div className="embed-responsive embed-responsive-16by9"> */}
        <img src="image/volu7.jpg" alt="Los Angeles" className="d-block img-width" />
        {/* </div> */}
      </div>


    </div>
  </div>
  <br/><br/><br/>
  

  <Footer />
    </div>
    
  )
    
}

export default Volunteer