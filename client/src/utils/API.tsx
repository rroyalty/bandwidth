import axios from "axios";

const API = {
    getUser: function(email:string) {
        return axios.get(`/api/users/${email}`);
    },
    getAllUsers: function () {
        return axios.get('/api/users/')
    },
    getNetworkingUsers: function () {
        return axios.get('/api/users/networking')
    }
}

export default API;