import axios from 'axios'



export const RiderRegister = async (userData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const resData = await axios.post('http://localhost:8080/Meel_On_Wheels/api/rider/create.php', userData, config)
        return resData;
    } catch (err) {
        console.log(err)
    }
}

export const GetRider = async (id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/rider/read_single.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const getOrderLists = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/rider/get_allstatusorder.php')
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
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


export const AcceptOrder = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const resData = await axios.put('http://localhost:8080/Meel_On_Wheels/api/rider/accept_order.php', data, config)

        return resData;
    } catch (err) {
        console.log(err)
    }
}

export const DeliveredOrder = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const resData = await axios.put('http://localhost:8080/Meel_On_Wheels/api/rider/deliever_order.php', data, config)

        return resData;
    } catch (err) {
        console.log(err)
    }
}

export const AcceptedMemberList = async (rider) => {
    try {

        const resData = await axios.get('http://localhost:8080/Meel_On_Wheels/api/rider/get_acceptedmember.php?id=' + rider)
        const members = await JSON.stringify(resData.data)
        return members;
    } catch (err) {
        console.log(err)
    }
}

export const UpdateRider = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const resData = await axios.put('http://localhost:8080/Meel_On_Wheels/api/rider/update.php', data, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
    }
}