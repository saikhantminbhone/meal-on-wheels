/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useState } from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import { LoginUser } from './LoginAction'


const Login = () => {
  
  const navigate = useNavigate()
  const location = useLocation()

  const auth = useAuth();
  const redirectPath = location.state?.path || '/';

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  const submitHandler = async (e) =>{

    e.preventDefault();
  
     const res = await LoginUser(email,password)
     const user = JSON.parse(res)
     if (!user.status){
     auth.login(user)
     

    if(Object.keys(user)[0] == "admin_id"){
      navigate('/admin/dashboard')
    }else if(Object.keys(user)[0] =="rider_id"){
      navigate('/staff/rider/home')
    }else if(Object.keys(user)[0]=="caregiver_id"){
      navigate('/staff/caregiver/home')
    }else if(Object.keys(user)[0]=="partner_id"){
      navigate('/staff/partner/home')
    }else{
    navigate(redirectPath,{replace:true})
    }
  }else{
    window.alert('Incorrect email and password. Please Try Again!')
  }
}



  return (
    <div>
      <Menu />

      <br /><br />
      <form role="form" onSubmit={submitHandler} className="form-signin">
        <h3>Login Here</h3>

        <div className="form-group" style={{ padding: "20px" }}>
          <label for="EmailAddress">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" name="EmailAddress" id="EmailAddress" aria-required="true" aria-invalid="true" required />
        </div>

        <div className="form-group" style={{ padding: "20px" }}>
          <label for="EmailAddress">Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" id="password" aria-required="true" aria-invalid="true" required />
        </div>

        <div className="checkbox" style={{ padding: "20px" }}>
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>



        <button type="submit"  className="btn btn-secondary btn-block" style={{ marginLeft: "20px" }}>Submit</button><br />

       

      </form><br /><br />

      <Link to="/forgetPassword" className="link-secondary" style={{ padding: "20px" }}>Forgot Password!</Link>





      <Footer />

    </div>
  )
}

export default Login