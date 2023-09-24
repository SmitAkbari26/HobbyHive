import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:8000", // Note the corrected port number.
    withCredentials: true,
});

export default Axios;
