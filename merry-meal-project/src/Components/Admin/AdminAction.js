import axios from 'axios'



export const TotalDonationAmount = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/admin/sum_donation.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}

export const TotalCashOutAmount = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/admin/sum_cashoutdonation.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}
export const TotalAmount = async () => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/admin/expense_amount.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}

//for care giver

export const GetCareGivers = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/caregiver/read.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}

export const Checkcaregiver = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/caregiver/get_caregivermember.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}

export const DeleteCareGiver = async (id) => {
    try {
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }
        console.log('id is ' + id)
        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/caregiver/delete.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        console.log(ress)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const ViewCareGiver = async (caregiver_id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/caregiver/read_single.php?id=' + caregiver_id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}


//for Rider

export const GetRiders = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/rider/read.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}

export const DeleteRider = async (id) => {
    try {
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }
        console.log('id is ' + id)
        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/rider/delete.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        console.log(ress)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const ViewRiderr = async (id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/rider/read_single.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}


//for Partner

export const GetPartners = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/partner/read.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}

export const DeletePartner = async (id) => {
    try {

        console.log('id is ' + id)
        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/partner/delete.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        console.log(ress)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const ViewPartner = async (id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/partner/read_single.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}


//for member
export const GetMembers = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/member/read.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}


export const DeleteMember = async (id) => {
    try {

        console.log('id is ' + id)
        const res = await axios.delete('http://localhost:8080/Meel_On_Wheels/api/member/delete.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        console.log(ress)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const ApproveMember = async (id) => {
    try {

        console.log('id is ' + id)
        const res = await axios.delete('http://localhost:8080/Meel_On_Wheels/api/admin/approve_member.php?member_id=' + id)
        const ress = await JSON.stringify(res.data)
        console.log(ress)
        return ress;

    } catch (error) {
        console.log(error)
    }
}


export const ViewMember = async (id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/member/read_single.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

//for donator
export const GetDonators = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/donator/read.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}

export const ViewDonator = async (id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/donator/read_single.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}


//for partner meal

export const GetMeals = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/admin/get_submitmeal.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}

export const ViewMeal = async (id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/meal/read_single.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
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

export const ApproveMeal = async (id) => {
    try {

        console.log('id is ' + id)
        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/admin/approve_meal.php?id=' + id)
        const ress = await JSON.stringify(res.data)
        console.log(ress)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

//for fundraising 
export const GetExpenseMoney = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const resData = await axios.post('http://localhost:8080/Meel_On_Wheels/api/admin/get_expense.php', data, config)
        return resData;
    } catch (err) {
        console.log(err)
    }
}

export const ExpenseAmount = async () => {
    try {

        const resData = await axios.get('http://localhost:8080/Meel_On_Wheels/api/admin/expense_amount.php')
        
        return resData;
    } catch (err) {
        console.log(err)
    }
}

//for deliver
export const GetAdminDelivery= async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/admin/get_deliverylist.php')
        const ress = await JSON.stringify(res.data)

        return ress;
    } catch (err) {
        console.log(err)
    }
}

