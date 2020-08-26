import axios from 'axios';

//Create new instance
const instance = axios.create({
    baseURL: 'https://vue-js-udemy-second.firebaseio.com'
})

instance.defaults.headers.common['Something'] = 'something'

export default instance