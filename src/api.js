import Axios from "axios"

let url
if (process.env.REACT_APP_ENV === 'development') {
    url = "http://localhost:4000"
} else {
    url = "https://free-space-api.herokuapp.com"
}

export default Axios.create({
    baseURL: url

})