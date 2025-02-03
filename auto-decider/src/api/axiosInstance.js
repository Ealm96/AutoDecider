import axios from "axios";

const API_KEY = process.env.CARAPI_API_TOKEN;

const axiosInstance = axios.create({
    baseURL: "https://api.edmunds.com/api/vehicle/v2",
    headers: {
        "fmt": "json",
        "api_key": API_KEY
    },
});

export default axiosInstance;