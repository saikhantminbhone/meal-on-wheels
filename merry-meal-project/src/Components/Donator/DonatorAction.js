import axios from 'axios'



export const CreateDonate = async (data) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        console.log('data'+data)
        const resData = await axios.post('http://localhost:8080/Meel_On_Wheels/api/donator/create.php', data, config)
        console.log(resData)
        return resData;
    } catch (err) {
        console.log(err)
    }
}