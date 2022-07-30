/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'


const PartnerMenu = () => {
    const [active, setActive] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-100" id="accordionSidebar">


                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/staff/partner/home">

                    <div className="sidebar-brand-text mx-3">Meals On Wheels</div>
                </Link>


                <hr className="sidebar-divider my-0" />


                <li className="nav-item active">
                    <Link className="nav-link" to="/staff/partner/home">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>


                <hr className="sidebar-divider" />

                <li className="nav-item">
                    <Link className="nav-link" to="/staff/partner/manageMeal" aria-expanded="true">
                        <i className="fas fa-fw fa-calendar"></i>
                        <span>Plan and preparation</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/staff/partner/addMeal" aria-expanded="true">
                        <i className="fas fa-fw fa-plus"></i>
                        <span>Add new meal</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/staff/partner/orders" aria-expanded="true">
                    <i className="fas fa-fw fa-calendar"></i>
                        <span>Order List</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/staff/partner/acceptedOrder" aria-expanded="true">
                        <i className="fas fa-fw fa-plus"></i>
                        <span>Accepted Order</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link" onClick={handleLogout} style={{ cursor: "pointer" }} aria-expanded="true">
                        <i className="fas fa-fw fa-sign-out-alt"></i>
                        <span>Sign out</span>
                    </a>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />


                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        </>

    )
}

export default PartnerMenu