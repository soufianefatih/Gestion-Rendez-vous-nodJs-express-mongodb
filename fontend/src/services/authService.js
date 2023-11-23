import axios from 'axios';
const APP_URL = "http://localhost:5000/api/users/";

axios.defaults.headers = {
    'Content-Type': 'application/json',
    "Authorization": window.localStorage.getItem("token") ?? ''
}

export function login(data) {
    return axios.post(APP_URL + 'login',data);
}

export function register(name, email, password, role) {
    return axios.post(APP_URL + 'register',{name: name, email: email, password: password, role: role});
}