import axios from "axios";
// // import * as queryString from 'query-string';

const adminService = {

    /**
     * login
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */
    login(loginBody: any) {
        return axios.post(`/admin/login`, loginBody)
    },

};

export default adminService;
