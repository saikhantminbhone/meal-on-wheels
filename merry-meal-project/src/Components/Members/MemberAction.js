import axios from 'axios'



export const RegisterMember = async (userData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        const resData = await axios.post('http://localhost:8080/Meel_On_Wheels/api/member/create.php', userData, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
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

export const UpdateMember = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const resData = await axios.put('http://localhost:8080/Meel_On_Wheels/api/member/update.php', data, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
    }
}