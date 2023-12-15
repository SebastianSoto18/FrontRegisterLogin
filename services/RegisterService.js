import axios from 'axios';

export function registerUser(username, password, email) {
    return axios.post('http://localhost:8080/api/auth/signup', {
        username,
        password,
        email
    });
}