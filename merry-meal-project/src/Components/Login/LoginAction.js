import axios from 'axios'


export const LoginUser = async (email, password) => {
    try{
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    console.log({ email, password })
    const res = await axios.post('http://localhost:8080/Meel_On_Wheels/api/login.php', { email, password }, config)
    const user = await JSON.stringify(res.data)
    return user;

}catch(error){
    console.log(error)
}
}