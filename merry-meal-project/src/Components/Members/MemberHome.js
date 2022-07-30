/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'


const MemberHome = () => {
    return (
    <div>

<Menu />
        

        
          {/*Home*/}
  <div className="text">
    <h1>Serving the Community on meal at a time</h1>
  </div>


  {/* Carousel */}
  <div id="demo" className="carousel slide" data-bs-ride="carousel">

    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>

    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="image/mow1.jpg" alt="Los Angeles" className="d-block" />
      </div>
      <div className="carousel-item">
        <img src="image/mow2.jpg" alt="Chicago" className="d-block" />
      </div>
      <div className="carousel-item">
        <img src="image/mow3.jpg" alt="New York" className="d-block" />
      </div>
    </div>

    {/* Left and right controls/icons */}
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>

  {/*Card*/}
  
  <div className="container">
    <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Donate</h5>
            <p className="card-text">Your donation makes a difference!</p>
            <a href="#" className="btn btn-secondary">Donate Now</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Get Meals</h5>
            <p className="card-text">Complete your order right here!</p>
            <a href="#" className="btn btn-success">Order</a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Volunteer</h5>
            <p className="card-text">Lend a hand and make an impact!</p>
            <a href="#" className="btn btn-info">Learn How</a>
          </div>
        </div>
      </div>
      <div className="col-sm-1"></div>
    </div>
  </div> 

  <div className="text">
    <h2 className="text-center bg-dark">Meals on Wheels programs deliver <br/>more than 1 million meals <br/>each year to our
      neighbors.</h2>
  </div>



  <div class="card-deck container mb-5">
  <div class="card">

    <div class="card-body">
          <h5 class="card-title">NATIONAL VOLUNTEER WEEK: DEANNA </h5>
          <img class="card-img-top" src="image/mow4.jpg" alt="Card image" style={{width:"100%"}}/>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
  </div>
  <div class="card">
   
    <div class="card-body">
          <h5 class="card-title">WEEKEND AT THE DINER</h5>
          <img class="card-img-top" src="image/mow5.jpg" alt="Card image" style={{width:"100%"}}/>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
  </div>
  <div class="card">
   
    <div class="card-body">
          <h5 class="card-title">NATIONAL VOLUNTEER WEEK: EFRAIN LOPEZ</h5>
          <img class="card-img-top" src="image/mow6.jpg" alt="Card image" style={{width:"100%"}}/>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
  </div>
</div>




  {/*video*/ }
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        {/* <div className="embed-responsive embed-responsive-16by9"> */}
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/oTsIQx1LnEY" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        {/* </div> */}
      </div>

      <div className="col-sm-6">
        <h2>Get to know the New Meals on Wheels</h2>
        <p>Meals on Wheels offers meal options, flexibility, and friendly faces to deliver you the meals you need!</p>
        <a href="https://www.youtube.com/watch?v=oTsIQx1LnEY" className="btn btn-warning">Watch Video</a>
      </div>
    </div>
  </div>
  <br/><br/>

  <Footer />

  </div >

  )
}

export default MemberHome