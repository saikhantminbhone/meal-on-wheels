import React from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'

export const Foodpolicy = () => {
    return (
        <div>
            <Menu />
            <div class="container">

                <h3 style={{ padding: "40px 0px 10px 100px;" }}>FOOD SAFETY POLICY</h3>
                <h2 style={{ marginLeft: "100px;" }}>Excellence ensured - ISO:22000 and HACCP cerified</h2>
                <p style={{ marginLeft: "100px;" }}>At MTR, quality is a way of life. Hazard Analysis and Critical
                    Control Point or HACCP, developed by the Codex Alimentarius
                    Commission, is a global food safety standard. We have successfully
                    met the stringent requirements for this certification.</p>

                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-6">
                        <p>Our facilities are equipped with the latest systems. We adhere
                            to international standards across all operations: from sourcing
                            the finest ingredients to processing and packing using cutting-edge
                            technology. Each MTR product carries this assurance of quality and meets
                            the high expectations our consumers have from us.</p>
                    </div>
                    <div class="col-sm-5">
                        <img class="card-img-top" src="image/Safety Policy.jpg" alt="Card image" />
                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
