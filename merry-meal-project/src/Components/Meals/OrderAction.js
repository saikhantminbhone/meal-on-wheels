import axios from 'axios'


export const getMeals = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/meal/read.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}




export const OrderMeal = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const res = await axios.post('http://localhost:8080/Meel_On_Wheels/api/order/create.php', data, config)
        const user = await JSON.stringify(res.data)
        return user;

    } catch (error) {
        console.log(error)
    }
}

export const SelectMeal = async (type) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/member/get_mealwithdate.php?meal_type=' + type)
        const ress = await JSON.stringify(res.data)

        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const GetDistance = async (id) => {
    try {
        
        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/order/get_order.php?meal_id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

