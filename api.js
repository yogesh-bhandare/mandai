import axios from "axios";
const baseurl = "https://mandai-backend-api-production.up.railway.app/api"
// const baseurl = "http://192.168.29.7:8000/api"

const api = axios.create({
    baseURL:baseurl,
    timeout:5000,
    headers: {
        Accept: "application/json",
        "Content-Type":"application/json",
    }
})

export default api;
