import axios from "axios";

const baseurl = "https://mandai-backend-api-production.up.railway.app/api"

const api = axios.create({
    baseURL:baseurl,
    timeout:5000,
    headers: {
        Accept: "application/json",
        "Content-Type":"application/json",
    }
})

export default api;
