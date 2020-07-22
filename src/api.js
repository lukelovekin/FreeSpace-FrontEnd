import Axios from "axios"

export default Axios.create({
    baseURL: "https://free-space-api.herokuapp.com/"
    // baseURL: "http://localhost:4000/api/"
})