import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://kitsu.io/api/edge",
    timeout: 2500,
    headers: {
        'Accept': 'application/vnd.api+json',
        "Content-Type": 'application/vnd.api+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
});

export default axiosInstance;