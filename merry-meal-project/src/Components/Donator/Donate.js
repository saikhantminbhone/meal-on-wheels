/* eslint-disable react/style-prop-object */
import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import { CreateDonate } from './DonatorAction'

export const Donate = () => {

  const [value, setValue] = useState('0')

  const navigate = useNavigate()
  const [donator, setDonator] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',


  })


  const { firstname, lastname, email, phonenumber} = donator;

  console.log(donator)


  const submitHandler =async (e) => {
    e.preventDefault();
    const data = {firstname:firstname,lastname:lastname,email:email,phonenumber:phonenumber,amount:value}
    const jsondata = JSON.stringify(data)
    const res =await CreateDonate(jsondata)


    navigate('/donate/payment/' + value)

  }
  const onChange = e => {

    setDonator({ ...donator, [e.target.name]: e.target.value })

  }



  return (
    <div>
      <Menu />

      {/*Text*/}
      <div className="container">
        <div className="text">
          <h3>donator Today!</h3>
          <p>Too many of our aging neighbors will spend the holidays at home and alone.
            donator a little (or a lot) to ensure that our homebound seniors receive the nutrition,
            friendly chats, and social connections they need to thrive at home. Your generosity
            will be felt by many older adults who need us now, more than ever.</p>
        </div>
        <hr />
        <div className="text">
          <h3>Select Your ammount</h3>

          <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" onClick={() => setValue(10)} className="btn btn-secondary">$10</button>
              <button type="button" onClick={() => setValue(30)} className="btn btn-secondary">$30</button>
              <button type="button" onClick={() => setValue(50)} className="btn btn-secondary">$50</button>
              <button type="button" onClick={() => setValue(100)} className="btn btn-secondary">$100</button>
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon">$</div>
              </div>
              <input type="text" onChange={(e) => { setValue(e.target.value) }} value={value} className="form-control" placeholder="Other" aria-label="Input group example"
                aria-describedby="btnGroupAddon" />
            </div>
          </div>
        </div>
        <hr />

        <div className="container">
          <h3 className="text-dark" style={{ height: "80px" }}>Your Information</h3>
        </div>
        <form onSubmit={submitHandler}>
          <div className="container">


            <div className="row">

              <div className="form-group row">
                <label for="fname" className="col-sm-2 col-form-label">Fist Name:</label>
                <div className="col-sm-10">
                  <input type="text" id="fname" placeholder="First Name" name="firstname" value={firstname} onChange={onChange} />
                </div>

              </div>
              <div className="form-group row">
                <label for="lname" className="col-sm-2 col-form-label">Last Name:</label>
                <div className="col-sm-10">
                  <input type="text" id="lname" placeholder="Last Name" name="lastname" value={lastname} onChange={onChange} />
                </div>
              </div>
              <div className="form-group row">
                <label for="email" className="col-sm-2 col-form-label">Email:</label>
                <div className="col-sm-10">
                  <input type="text" id="email" placeholder="Email" name="email" value={email} onChange={onChange} />
                </div>
              </div>
              <div className="form-group row">
                <label for="contact" className="col-sm-2 col-form-label">Contact:</label>
                <div className="col-sm-10">
                  <input type="text" id="contact" placeholder="Contact" name="phonenumber" value={phonenumber} onChange={onChange} />
                </div>
              </div>

            </div>
            <button type="submit" className="col-md-5 btn btn-secondary btn-block">Submit</button>
            <br /><br />
          </div>
        </form>
      </div> <br />

      <Footer />
    </div>
  )
}


