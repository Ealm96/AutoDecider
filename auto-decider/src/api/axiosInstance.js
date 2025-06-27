import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://kitsu.io/api/edge",
    timeout: 2500,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
});

// create a HTTP GET call with Axios

export default axiosInstance;