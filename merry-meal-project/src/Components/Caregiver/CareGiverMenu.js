/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import {React,useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import { useAuth } from '../Login/Auth'

const CareGiverMenu = () => {
    const [active, setActive] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
      }
  return (
    <div>{/* Sidebar */}
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* Sidebar - Brand */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/staff/caregiver/home">

<div className="sidebar-brand-text mx-3">Meals On Wheels</div>
</Link>

        {/* Divider */}
        <hr class="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className={"nav-item " + (active === 'dashboard' ? 'active' : '')}>
            <Link class="nav-link" to="/staff/caregiver/home" onClick={(e) => { setActive("dashboard"); }}>
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
        </li>

        {/* Divider */}
        <hr class="sidebar-divider"/>
        {/* Nav Item -member order */}
        <li className={"nav-item " + (active === 'acceptMember' ? 'active' : '')}>
            <Link class="nav-link" to="/staff/caregiver/acceptedMember" onClick={(e) => { setActive("acceptMember"); }} aria-expanded="true">
                <i class="fas fa-fw fa-user-check"></i>
                <span>Accept Member</span>
            </Link>
        </li>

        {/* Nav Item - request member details*/}
        <li className={"nav-item " + (active === 'requestMember' ? 'active' : '')}>
            <Link class="nav-link" to="/staff/caregiver/requestMember" onClick={(e) => { setActive("requestMember"); }} aria-expanded="true">
                <i class="fas fa-fw fa-user-plus"></i>
                <span>Request Member</span>
            </Link>
        </li>
        {/* Nav Item - sign out*/}
        <li class="nav-item">
            <a class="nav-link" onClick={handleLogout} style={{cursor:"pointer"}} aria-expanded="true">
                <i class="fas fa-fw fa-sign-out-alt"></i>
                <span>Sign out</span>
            </a>
        </li>
        {/* Divider */}
        <hr class="sidebar-divider d-none d-md-block"/>

        {/* Sidebar Toggler (Sidebar) */}
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    </ul>
    {/* End of Sidebar */}</div>
  )
}

export default CareGiverMenu