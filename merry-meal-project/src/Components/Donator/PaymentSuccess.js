import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'

const PaymentSuccess = () => {



  return (
    <div>
<Menu />

<div class="jumbotron text-center">
    <h2 class="text">THANK YOU FOR YOUR DONATION</h2>
    <hr/>
    <h4 class="text-dark" style={{height: "80px"}}>We will be sent your invoice via email as soon as possible</h4>
    <div class="container">
      <img src={window.location.origin + '/image/donate.jpg'} alt="Card image" style={{width:"50%"}}/>
    </div>
    <br/>
    
    <Link class="btn btn-secondary btn-sm" to="/" role="button">Done</Link>

  </div>
  <br/><br/>



<Footer />


    </div>
  )
}

export default PaymentSuccess