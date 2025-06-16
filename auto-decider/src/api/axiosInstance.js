import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://www.dragonball-api.com/api",
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
});

// create a HTTP GET call with Axios

export default axiosInstance;