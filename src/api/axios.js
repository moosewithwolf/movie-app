import 'dotenv/config';
import axios from 'axios'


//https://developer.themoviedb.org/reference/discover-movie
const instance  = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: process.env.API_KEY,
        language: "en-CA",
    }
})

export default instance;