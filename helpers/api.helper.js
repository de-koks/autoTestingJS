import axios from "axios";
import { BASE_URL } from "../config/endpoints.js";

const sendRequest = async (url, data = null, method = "get") => {
    try {
        const response = await axios({
            method,
            url: `${BASE_URL}${url}`,
            headers: {},
            data
        })
        return {
            status: response.status,
            data: response.data
        };
    } catch (error) {
        return {
            status: error.response.status
        };
    }
};

export { sendRequest };