/* eslint-disable react/style-prop-object */
import React from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import { Link, useParams } from 'react-router-dom'
import PayPal from './PayPal'

const Payment = () => {
    let { amount } = useParams();
    return (
        <>
            <Menu />

            <div class="container">
                <div class="text">
                    <h3>Pay With PayPal</h3>
                </div>

                <PayPal amount={amount} />

<hr/>

                <div class="d-grid gap-2 col-5 mx-auto">
                    <Link class="btn btn-primary " to="/donate/payment/paymentSuccess" role="button">Done</Link>
                </div>

            </div>

            <br /><br />

            <Footer />
        </>
    )
}

export default Payment