import axios from "axios";


// const token = 'accessToken'

const ax = axios.create({
    baseURL: 'http://localhost:8000'
})
// ;
// axios.defaults.headers = {
//     Authorization: 'Bearer ' + token
// }

export default ax;
