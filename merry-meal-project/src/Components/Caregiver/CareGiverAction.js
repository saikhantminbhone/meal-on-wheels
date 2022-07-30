import axios from 'axios'


export const RegisterCareGiver = async (userData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const resData = await axios.post('http://localhost:8080/Meel_On_Wheels/api/caregiver/create.php', userData, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
    }
}

export const GetCareGiverProfile = async (caregiver_id) => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/caregiver/read_single.php?id=' + caregiver_id)
        const ress = await JSON.stringify(res.data)
        return ress;

    } catch (error) {
        console.log(error)
    }
}

export const getRequestMember = async () => {
    try {

        const res = await axios.get('http://localhost:8080/Meel_On_Wheels/api/caregiver/member.php')
        const meal = await JSON.stringify(res.data)
        return meal;

    } catch (error) {
        console.log(error)
    }
}


export const AcceptRequestMember = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const resData = await axios.put('http://localhost:8080/Meel_On_Wheels/api/caregiver/accept_member.php', data, config)

        return resData;
    } catch (err) {
        console.log(err)
    }
}

export const AcceptedMemberList = async (caregiver_id) => {
    try {

        const resData = await axios.get('http://localhost:8080/Meel_On_Wheels/api/caregiver/get_acceptedmember.php?id=' + caregiver_id)
        const members = await JSON.stringify(resData.data)
        return members;
    } catch (err) {
        console.log(err)
    }
}

export const UpdateCareGiverProfile = async (caregiverData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        console.log("caregiverdaat is7777777777777777777777777777777 " + caregiverData)
        const resData = await axios.post('http://localhost:8080/Meel_On_Wheels/api/caregiver/update.php', caregiverData, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
    }
}