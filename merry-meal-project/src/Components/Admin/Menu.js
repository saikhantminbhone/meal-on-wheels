/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import '../assets/js/demo/datatables-demo'
import { useAuth } from '../Login/Auth'

export const Menu = () => {
    const [active, setActive] = useState('')
   
    return (
        <>

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin/dashboard">

                    <div className="sidebar-brand-text mx-3">Meals On Wheels</div>
                </Link>


                <hr className="sidebar-divider my-0" />


                <li className={"nav-item " + (active === 'dashboard' ? 'active' : '')}>
                    <Link className="nav-link" to="/admin/dashboard" onClick={(e) => { setActive("dashboard"); }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>


                <hr className="sidebar-divider" />


                <div className="sidebar-heading">
                    Management
                </div>

                <li className={"nav-item " + (active === 'userManagement' ? 'active' : '')}>
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>User Management</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Manage user:</h6>
                            <Link className="collapse-item" onClick={(e) => { setActive("userManagement"); }} to="/admin/manageRider">View Rider</Link>
                            <Link className="collapse-item" onClick={(e) => { setActive("userManagement"); }} to="/admin/manageCaregiver">View Care Giver</Link>
                            <Link className="collapse-item" onClick={(e) => { setActive("userManagement"); }} to="/admin/managePartner">View Partner</Link>
                            <Link className="collapse-item" onClick={(e) => { setActive("userManagement"); }} to="/admin/manageMember">View Member</Link>
                            <Link className="collapse-item" onClick={(e) => { setActive("userManagement"); }} to="/admin/manageDonator">View Donator</Link>
                        </div>
                    </div>
                </li>


                <li className={"nav-item " + (active === 'mealManagement' ? 'active' : '')}>
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-users"></i>
                        <span>Partners</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">View meals</h6>
                            <Link className="collapse-item" onClick={(e) => { setActive("mealManagement"); }} to="/admin/manageMeal">Check Meals</Link>
                        </div>
                    </div>
                </li>


                <hr className="sidebar-divider" />


                <div className="sidebar-heading">
                    Funds and Volunteers
                </div>


                <li className={"nav-item " + (active === 'managefundraising' ? 'active' : '')}>
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-donate"></i>
                        <span>Donators</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">View Fund:</h6>
                            <Link className="collapse-item" onClick={(e) => { setActive("managefundraising"); }} to="/admin/manageFundraising">Fundraising</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#volunteer" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-hand-holding-heart"></i>
                        <span>Volunteers</span>
                    </a>
                    <div id="volunteer" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Volunteer Status:</h6>
                            <Link className="collapse-item" to="/admin/manageDelivery">Delivery Status</Link>
                            <Link className="collapse-item" to="/admin/checkCaregiver">Check Care Givers</Link>
                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />


                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>

        </>
    )
}
