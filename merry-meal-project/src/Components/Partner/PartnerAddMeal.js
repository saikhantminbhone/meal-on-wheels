import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/style.main.css'
import '../assets/vendor/fontawesome-free/css/all.min.css'
import PartnerMenu from './PartnerMenu'
import '../assets/style.partner.css'
import { useAuth } from '../Login/Auth'
import { PartnerAddNewMeal } from './PartnerAction'

const PartnerAddMeal = () => {
    const [loading, setLoading] = useState(false)
    const auth = useAuth();
    console.log("partner id is " + auth.user.user.partner_id)

    const navigate = useNavigate()
    const [meal, setMeal] = useState({
        name: '',
        ingredients: '',
        description: '',
        meal_type: '',
        date: '',


    })
    const [MealImage, setMealImage] = useState()


    const { name, ingredients, description, meal_type, date } = meal;




    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.set('name', name)
        formData.set('ingredients', ingredients)
        formData.set('description', description)
        formData.set('meal_type', meal_type)
        formData.set('meal_photo', MealImage)
        formData.set('date', date)
        formData.set('status', 'created')

        const res = await PartnerAddNewMeal(formData, auth.user.user.partner_id)
        setLoading(false)
        if (res) {
            navigate('/staff/partner/manageMeal')
        }

    }
    const onChange = e => {

        if (e.target.name === 'mealImage') {

            // const reader = new FileReader();

            // reader.onload = () => {
            //     if (reader.readyState === 2) {
            setMealImage(e.target.files[0])
            //     }
            // }

            // reader.readAsDataURL(e.target.files[0])

        } else {
            setMeal({ ...meal, [e.target.name]: e.target.value })
        }
    }

    return (
        <div id="page-top">
            <div id="wrapper">

                <PartnerMenu />

                {/* Content Wrapper */}
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* Main Content */}
                    <div id="content">

                        {/* Topbar */}
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* Sidebar Toggle (Topbar) */}
                            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>

                            {/* Topbar Navbar */}
                            <ul class="navbar-nav ml-auto">
                                {/* Nav Item - User Information */}
                                <li class="nav-item dropdown no-arrow">
                                    <Link class="nav-link" to="/staff/partner/profile" role="button" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">{auth.user.user.firstname} {auth.user.user.lastname}</span>
                                        <img class="img-profile rounded-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png " />
                                    </Link>
                                </li>
                            </ul>

                        </nav>
                        {/* End of Topbar */}

                        {/* Begin Page Content */}
                        <div class="container-fluid">
                            <div class="container-fluid px-1 py-5 mx-auto">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                                        <h3>Add New Meal</h3>
                                        <div class="partner-card">
                                            <h5 class="text-center mb-4">Meal Form</h5>
                                            <form class="form-card" onSubmit={submitHandler}>
                                                <div class="row justify-content-between text-left">
                                                    <div class="form-group col-sm-12 flex-column d-flex"><input type="text" placeholder="Enter meal name" name="name" value={name} onChange={onChange} /> </div>
                                                </div>
                                                <div class="row justify-content-between text-left">
                                                    <div class="form-group col-sm-12 flex-column d-flex"><input type="text" placeholder="Ingredient Name" name="ingredients" value={ingredients} onChange={onChange} /> </div>
                                                </div>
                                                <div class="row justify-content-between text-left">
                                                    <div class="form-group col-sm-12 flex-column d-flex"><input type="text" placeholder="Description" name="description" value={description} onChange={onChange} /> </div>
                                                </div>
                                                <div class="row justify-content-between text-left">
                                                    <div class="form-group col-sm-12 flex-column d-flex"><input type="text" placeholder="Please enter only normal_meal or vegetable" name="meal_type" value={meal_type} onChange={onChange} /> </div>
                                                </div>


                                                <div class="form-check justify-between">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" name="date" value="weekday" onChange={onChange} id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Monday - Friday
                                                    </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" name="date" value="weekend" onChange={onChange} id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Saturday and Sunday
                                                    </label>
                                                </div><br />

                                                {/* <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                                                    Select days
                                                </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Monday</a>
                                                <a class="dropdown-item" href="#">Tuesday</a>
                                                <a class="dropdown-item" href="#">Wednesday</a>
                                                <a class="dropdown-item" href="#">Thursday</a>
                                                <a class="dropdown-item" href="#">Friday</a>
                                                <a class="dropdown-item" href="#">Saturday</a>
                                                <a class="dropdown-item" href="#">Sunday</a>
                                            </div> 
                                        </div><br/> */}
                                                <div className="row justify-content-between text-left">
                                                    <label for="document" data-bs-toggle="tooltip" data-bs-placement="right"
                                                        title="Write down your document">Meal Images</label>
                                                    <input type="file" accept="iamges/*" name='document' id="dcapprove" className="form-control" name="mealImage" onChange={onChange} />
                                                </div>




                                                <div class="row justify-content-end">
                                                    <div class="form-group col-sm-3"> <button type="submit" class="btn-block btn-danger" disabled={loading ? true : false}>Cancel</button> </div>
                                                    <div class="form-group col-sm-3"> <button type="submit" class="btn-block btn-primary" disabled={loading ? true : false}>{loading ? <div class="spinner-border text-danger" role="status">
                                                        <span class="sr-only">Loading...</span>
                                                    </div> : 'Add'}</button> </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End of Main Content */}
                        <br /><br /><br />
                    </div>
                    {/* End of Content Wrapper */}
                    {/* Footer */}
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Meals On Wheels 2022</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}

                </div>
                {/* End of Page Wrapper */}

                {/* Scroll to Top Button*/}
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>

            </div>
        </div>
    )
}

export default PartnerAddMeal