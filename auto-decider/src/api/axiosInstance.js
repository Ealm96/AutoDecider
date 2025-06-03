import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&sold_in_us=1",
});

export default axiosInstance;