import React from 'react'
import './assets/style.member.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './Login/Auth'

const Menu = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }


  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Marry Meals</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  to="/viewMeal"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                > Get Meals </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/viewVolunteer"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                > Volunteers </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                > Donate </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                > About Us </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                > Contact Us </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/foodPolicy"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                > Food Policy </NavLink>
              </li>
            </ul>



            {!auth.user ? (
              <>
                <ul className="navbar-nav">
                  <NavLink
                    to="/memberRegister"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  > Become Member </NavLink>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  > Login </NavLink>
                </ul>

                <div className="dropdown">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
                    Register
                  </button>
                  <ul className="dropdown-menu">
                    <h4 className="dropdown-header">Volunteer</h4>
                    <li><Link className="dropdown-item" to="/riderRegister">- Rider</Link></li>
                    <li><Link className="dropdown-item" to="/caregiverRegister">- Care Giver</Link></li>
                    <div className="dropdown-divider"></div>
                    <li><Link className="dropdown-item" to="/partnerRegister">Partner</Link></li>
                    <li><Link className="dropdown-item" to="/donate">Donator</Link></li>
                  </ul>
                </div>
              </>
            ) : (

              <ul className="navbar-nav">
                <li><NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                > Profile </NavLink></li>
                <li><a className="nav-link" onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</a></li>
              </ul>


            )}


          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu