/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import { Link, useNavigate } from 'react-router-dom'
import { GetDistance, OrderMeal, SelectMeal } from './OrderAction'
import { useAuth } from '../Login/Auth'
import { get } from 'jquery'

const Order = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const [street, setStreet] = useState();
    const [township, setTownship] = useState();
    const [meal_type, setMeal_type] = useState();
    const [mealID, setMealID] = useState()
    const [city, setCity] = useState()
    const [postal, setPostal] = useState()
    const [distance, setDistance] = useState()
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    const address = [street + ' , ' + township + ' , ' + city + ' , ' + postal]




    let mealType = ''
    let meal_id = ''
    const submitMealType = async (e) => {
        mealType = e.currentTarget.value
        await setMeal_type(mealType)
        console.log('type' + mealType)
        if (meal_type === "normal_meal") {
            const res = await SelectMeal(meal_type)
            const ress = JSON.parse(res)
            meal_id = ress.meal_id
            await setMealID(meal_id)
            console.log('meal_id' + meal_id)
         


        } else {
            const res = await SelectMeal(mealType)
            const ress = JSON.parse(res)
            meal_id = ress.meal_id
            await setMealID(meal_id)
            console.log('meal_id' + meal_id)
         
        }
        

    }

    const getdistance = async () => {
        const res = await GetDistance(mealID)
        const ress = JSON.parse(res)
        console.log('distance'+ress.distance_result)
        setDistance(ress.distance_result)
    }

    console.log(distance)



    const locationCo = ()=>{
        navigator.geolocation.getCurrentPosition(function (position) {

            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        });
        

    }
    locationCo()
    console.log('distance'+distance)



    // submitMealType()

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('meal ID is' + mealID)
        console.log('meal type is' + meal_type)
        const formData = new FormData();
        formData.set('meal_id', mealID)
        formData.set('qty', 1)
        formData.set('address', address)
        formData.set('meal_type', meal_type)
        formData.set('order_latitude', lat)
        formData.set('order_longitude', long)
        formData.set('status', 'ordered')
        formData.set('member_id', auth.user.user.member_id)

        const res = await OrderMeal(formData)
        console.log('res is ' + res)
        await getdistance()


    }



    return (
        <div>
            <Menu />
            {/* a */}

            <div class="text">
                <h1>Order Now</h1>
            </div>


            {/*radio*/}

            <div class="container">
                <h4 class="text-dark" style={{ height: "80px" }}>Enter your information to get order</h4>
                <div class="row">

                    <div class="col-sm-2">
                        <label data-bs-placement="right" title="Choonse one">SELECT YOUR MEAL!</label>
                    </div>
                    <div class="col-sm-2 ">
                        <label class="radio-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="meal" value="normal_meal" onChange={submitMealType} /> Normal Meal
                        </label>
                    </div>
                    <div class="col-sm-2 ">
                        <label class="radio-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="vegan" value="vegetable" onChange={submitMealType} /> Vegetable
                        </label>
                    </div>
                    <div class="col-sm-6 ">
                        <img src={window.location.origin + '/image/orderbg.png'} alt="Card image" class="img-width" />
                    </div>


                </div>
            </div>
            <br /><br /><br />



            {/*Address information*/}
            <div class="container">
                <h3 class="text-dark" style={{ height: "80px" }}>Address information</h3>
            </div>
            <form>
                <div class="container">


                    <div class="row">
                        <div class="col-sm-4 ">
                            <form >
                                <div class="mb-3">
                                    <label for="Township">Street Address:</label> <input type="text" id="streetAddress"
                                        class="form-control" placeholder="Street address" name="address" onChange={(e) => setStreet(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="Township">TownShip:</label> <input type="text" id="town" class="form-control"
                                        placeholder="Township" onChange={(e) => setTownship(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="Township">City:</label> <input type="text" id="city" class="form-control"
                                        placeholder="City" onChange={(e) => setCity(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="Township">Postal:</label> <input type="text" id="postal" class="form-control"
                                        placeholder="Postal" onChange={(e) => setPostal(e.target.value)} />
                                </div>
                                {/* Button trigger modal */}
                                <button onClick={submitHandler} class="btn btn-secondary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Order</button>
                            </form>

                            {/* Modal */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            {distance <= 10 ? <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Street Address</th>
                                                        <th>Township</th>
                                                        <th>City</th>
                                                        <th>Postal</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{street}</td>
                                                        <td>{township}</td>
                                                        <td>{city}</td>
                                                        <td>{postal}</td>
                                                    </tr>
                                                </tbody>
                                            </table> : <div><h3>Sorry your distance is too far away from partner Location. </h3> 
                                                           <h3>We can only send with frozen. </h3> </div> }

                                        </div>
                                        <div class="modal-footer">

                                            {distance > 10 ?
                                                <Link to="/viewMeal/order/orderSuccess">
                                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
                                                </Link>
                                                :
                                                <Link to="/">
                                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Return Home</button>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-sm-8 ">
                            <div class="map-responsive">
                                <p>This Map is automatically located your current location</p>
                                <iframe
                                    src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=' + { lat } + ',' + { long }}
                                    width="600" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>

                            </div>
                        </div>
                    </div>
                </div>

            </form>

            <Footer />


        </div>
    )
}

export default Order