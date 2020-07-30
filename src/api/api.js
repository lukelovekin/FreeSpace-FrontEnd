import Axios from "axios"

// move to env file
// setting up environment
let url
if (process.env.REACT_APP_ENV === 'development') {
    url = "http://localhost:4000"
} else {
    url = "https://free-space-api.herokuapp.com"
}

//this allows you to leave out the first part of the url everytime you do an "axios" 
export default Axios.create({
    baseURL: url

})