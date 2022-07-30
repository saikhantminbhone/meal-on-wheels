/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import {Link} from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <div>
        <Menu />


        <div class="jumbotron text-center">
    <h1 class="display-3">We're received your order!</h1>
    <hr/>
    <div class="container">
      <img src={window.location.origin +'/image/orderbg.png'} alt="Card image" style={{width:"50%"}}/>
    </div>
    <br/>
    <Link class="btn btn-secondary btn-sm" to="/" role="button">Done</Link>

  </div>
  <br/><br/>



        <Footer />

    </div>
  )
}

export default OrderSuccess