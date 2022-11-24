// import http from "./http-common";
import axios from "axios";
// localhost: 8080 / api / auth / signin
const backUrl = 'https://api-solar.onrender.com';
export const Service = {
    getTicket: () => {
        return axios.get(backUrl + `/api/tickets`);
    },
    getRole: () => {
        return axios.get(backUrl + `/api/roles`);
    }
}

export default Service;