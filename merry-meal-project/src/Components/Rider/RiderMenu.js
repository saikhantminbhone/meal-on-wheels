/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'


const RiderMenu = () => {
    const [active, setActive] = useState('')

 const auth = useAuth()
 const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
      }
    return (
        <div>
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " id="accordionSidebar">

                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/staff/rider/home">

                    <div className="sidebar-brand-text mx-3">Meals On Wheels</div>
                </Link>

                {/* Divider */}
                <hr className="sidebar-divider my-0" />

                {/* Nav Item - Dashboard */}
                <li className={"nav-item " + (active === 'dashboard' ? 'active' : '')}>
                    <Link className="nav-link" to="/staff/rider/home" onClick={(e) => { setActive("dashboard"); }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Nav Item -member order */}
                <li className="nav-item">
                    <Link className="nav-link" to="/staff/rider/orderList" aria-expanded="true">
                        <i className="fas fa-fw fa-cart-plus"></i>
                        <span>Order List</span>
                    </Link>
                </li>

                {/* Nav Item - order details*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/staff/rider/deliveredOrderList" aria-expanded="true">
                        <i className="fas fa-fw fa-shopping-cart"></i>
                        <span>Delivered Order List</span>
                    </Link>
                </li>
                {/* Nav Item - sign out*/}
                <li className="nav-item">
                    <a className="nav-link" onClick={handleLogout} style={{cursor:"pointer"}} aria-expanded="true">
                        <i className="fas fa-fw fa-sign-out-alt"></i>
                        <span>Sign out</span>
                    </a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
            {/* End of Sidebar */}

        </div>
    )
}

export default RiderMenu