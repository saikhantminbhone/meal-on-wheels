import axios from 'axios'


export const PartnerRegister = async (userData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const resData = await axios.post('http://localhost:8080/Meel_On_Wheels/api/partner/create.php', userData, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
    }
}


export const PartnerAddNewMeal = async (userData, partner_id) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        console.log("hekllo " + partner_id)
        const resData = await axios.post(`http://localhost:8080/Meel_On_Wheels/api/meal/create.php?partner_id=${partner_id}`, userData, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
    }
}



export const GetAllMeals = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/partner/get_meal.php')
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}


export const SubmitMeal = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const resData = await axios.put('http://localhost:8080/Meel_On_Wheels/api/partner/submit_meal.php', data, config)

        return resData;
    } catch (err) {
        console.log(err)
    }
}

export const DeleteMeal = async (id) => {
    try {

        console.log('id is ' + id)
        const res = await axios.delete('http://localhost:8080/Meel_On_Wheels/api/meal/delete.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        console.log(ress)
        return ress;

    } catch (error) {
        console.log(error)
    }
}


export const GetPartner = async (id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/partner/read_single.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const UpdatePartner = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const resData = await axios.put('http://localhost:8080/Meel_On_Wheels/api/partner/update.php', data, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
    }
}


export const getOrderDetails = async (id) => {
    try {
        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/rider/get_orderdetails.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}


export const getOrderLists = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/order/read.php')
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const getAcceptedOrderLists = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/rider/get_partneracceptedorder.php')
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const AcceptOrder = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const resData = await axios.put('http://localhost:8080/Meel_On_Wheels/api/partner/accept_order.php', data, config)

        return resData;
    } catch (err) {
        console.log(err)
    }
}