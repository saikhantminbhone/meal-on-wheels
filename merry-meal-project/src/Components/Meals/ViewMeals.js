/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import '../assets/style.member.css'
import Footer from '../Footer'
import Menu from '../Menu'
import { Link } from 'react-router-dom'
import { getMeals } from './OrderAction'


const ViewMeals = () => {
  const [meals, setMeals] = useState([])



  const getALLMeals = (async () => {

    const res = await getMeals();
    const allMeals = await JSON.parse(res)
    setMeals(allMeals.data)

  })

  useEffect(() => {
    getALLMeals()
  }, [])

  console.log("meals are" + meals)



  return (
    <div>
      <Menu />

      <div className="container">
        <div className="text">
          <h3>About the Meals</h3>
          <p>Meals on Wheels meals are made fresh, without preservatives in local kitchens.
            The majority of the meals served by our 32 member programs come from the
            Kitchen of Opportunities, which we operate in partnership with Open Arms of Minnesota.</p>
        </div>

        <div className="text">
          <h3>Two great delivery options</h3>
          <p>Daily: Our daily menu offers something different every day of the month and rotates frequently.
            Meals are delivered ready-to-eat at lunchtime by a friendly volunteer.</p>

          <p>Weekly Frozen: Choose from more than 30 delicious options on our Weekly Frozen menu. In many
            areas, you can choose which meals you would like to try when you order. Meals come with easy
            reheating instructions, and can be delivered on a day that works best for you.</p>
        </div>

        <div className="text">
          <h3>We work with your diet</h3>
          <p>If you need it, chances are we have it. We offer gluten-free, lactose-free, vegetarian and
            vegan options while also accommodating most medical diets. All meals are heart-healthy and diabetic friendly.
            Renal, mechanical soft and pureed meals are also available.</p>
        </div>


        {/*Order*/}
        <div className="text">
          <h3>Order now</h3>
          <p>Ready to give Meals on Wheels a try? Get started here..</p>
        </div>
        <Link to="/viewMeal/order" className="btn btn-secondary">Click here to Order!</Link> <br />
      </div>




      <div className="text">
        <h3 className="text-center text-dark">CHECK OUT OUR AVAILABLE MENU</h3>
      </div>

      <div className="text">
        <h4 className="text-center text-dark">We offer meals served hot daily, as well as convenient weekly <br />
          frozen meal deliveries. The meals pictured here reflect the menu served by <br />Meals on Wheels programs – menus
          may vary by area.</h4>
      </div>


      {/*card*/}
      {/*First row*/}
      <div className="col-6 col-md-9 container">
        <div className='row'>
         

            {Object.keys(meals).map((keyName,i)=>(
              meals[keyName].status === "approved" ?
               <div className="col-sm-12 col-md-6 col-lg-4 my-3 ">
              <div class="card" style={{ width: " 18rem;" }}>
              <img class="card-img-top" src={meals[keyName].meal_image} alt="Card image cap" />
              <div class="card-body">
                <p class="card-title"> Meal Name - {meals[keyName].name}</p>
                <p class="card-title"> Meal Type - {meals[keyName].meal_type}</p>

                <p class="card-text">Description - {meals[keyName].description}</p>
              </div>
            </div>
            </div>
              : null
            ))}

          
        </div>
      </div> <br /><br /><br />




      {/*second row*/}

      {/*View more*/}
      <div className="text-center">
        <a href="#demo" className="btn btn-success" data-bs-toggle="collapse">View More Meals</a>
        {/* <a href="#demo" className="btn btn-success" data-bs-toggle="collapse">Vegan Option</a> */}
      </div> <br /><br />

      <div id="demo" className="collapse">
        {/*first row*/}
        <div className="row ">
          <div className="col-sm-2 "></div>
          <div className="col-sm-3 bg-secondary">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Ginger Soy Fish</h5>
                <img className="card-img-top img-width" src="image/meal10.jpg" alt="Card image" />
                <p className="card-text text-center">Ginger soy fish served over brown rice <br />with an Asian vegetable
                  blend,<br /> apple cause and<br /> a cookie.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Baked Mahi Mahi</h5>
                <img className="card-img-top img-width" src="image/meal11.jpg" alt="Card image" />
                <p className="card-text text-center">Baked Mahi Mahi fish served on egg noodles and <br /> smoothered in a spinach
                  cream sauce. Served with Italian <br />vegetables and pudding.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3  bg-secondary">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hmong Sweet Pork</h5>
                <img className="card-img-top img-width" src="image/meal12.jpg" alt="Card image" />
                <p className="card-text text-center">Hmong sweet pork braised in sweet soy sauce on brown rice.<br /> Served with
                  broccoli, apple sauce and<br />a fortune cookie.</p>

              </div>
            </div>
          </div>

          <div className="col-sm-1"></div>
        </div> <br /><br /><br />

        {/*second row*/}
        <div className="row ">
          <div className="col-sm-2 "></div>
          <div className="col-sm-3 bg-secondary">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Arroz Con Pollo</h5>
                <img className="card-img-top img-width" src="image/meal13.jpg" alt="Card image" />
                <p className="card-text text-center">Mexican-style chicken and rice <br />served with a California vegetable blend
                  and<br /> a cookie.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vietnamese-Style Chicken</h5>
                <img className="card-img-top img-width" src="image/meal14.jpg" alt="Card image" />
                <p className="card-text text-center">Vietnamese-style Chicken in a ginger-lime marinade served over brown rice.
                  Comes with green <br />beans, applesauce and a dessert.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3  bg-secondary">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Peanut Butter Blueberry Oatmeal</h5>
                <img className="card-img-top img-width" src="image/meal15.jpg" alt="Card image" />
                <p className="card-text text-center">Sweet-and-savory oatmeal served alongside scrambled eggs, <br />a fruit cup
                  and pudding.</p>

              </div>
            </div>
          </div>

          <div className="col-sm-1"></div>
        </div> <br /><br /><br />



        {/*third row*/}
        <div className="row ">
          <div className="col-sm-2 "></div>
          <div className="col-sm-3 bg-secondary">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Latin-Inspired Pork</h5>
                <img className="card-img-top img-width" src="image/meal17.jpg" alt="Card image" />
                <p className="card-text text-center">Latin-inspired pork with a green chimichurri sauce, served with black beans
                  and rice, sweet corn, fruit cup and a cookie.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cuban Beef</h5>
                <img className="card-img-top img-width" src="image/meal16.jpg" alt="Card image" />
                <p className="card-text text-center">Cuban beef with black beans and rice,<br /> corn, fruit cup and<br /> a cookie.
                </p>

              </div>
            </div>
          </div>
          <div className="col-sm-3  bg-secondary">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hmong-Style Chicken</h5>
                <img className="card-img-top img-width" src="image/meal18.jpg" alt="Card image" />
                <p className="card-text text-center">Deliciously-spiced Hmong-style chicken drumsticks served with mustard
                  greens, brown rice and a pudding cup.</p>

              </div>
            </div>
          </div>

          <div className="col-sm-1"></div>
        </div> <br /><br /><br />


        {/*Fourth row*/}
        <div className="row ">
          <div className="col-sm-2 "></div>
          <div className="col-sm-3 bg-secondary">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Beef Chili</h5>
                <img className="card-img-top img-width" src="image/meal20.jpg" alt="Card image" />
                <p className="card-text text-center">Served with sliced carrots, a corn muffin and applesauce.<br /> Corn muffin
                  contains gluten.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Baked Ham</h5>
                <img className="card-img-top img-width" src="image/meal21.jpg" alt="Card image" />
                <p className="card-text text-center">Baked ham brushed with a mustard-apple glaze, served with green peas,
                  scalloped potatoes, fruit cup and dinner roll.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3  bg-secondary">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lentil Soup</h5>
                <img className="card-img-top img-width" src="image/meal22.jpg" alt="Card image" />
                <p className="card-text text-center">Savory lentil soup served with white rice and carrots,<br /> along with a
                  fruit cup <br />and a cookie.</p>

              </div>
            </div>
          </div>

          <div className="col-sm-1"></div>
        </div> <br /><br /><br />
      </div>
      <Footer />
    </div>
  )
}

export default ViewMeals