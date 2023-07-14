import axios from "axios";
const BASEURL = 'http://localhost:5500'

export default axios.create({
    baseURL: BASEURL
})
export const axiosPrivate = axios.create({
    baseURL: BASEURL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})