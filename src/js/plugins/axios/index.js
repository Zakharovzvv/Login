import axios from 'axios';
import API_ENV from "../../config/api.config";
import interseptors from "./interseptors";

const instance = axios.create({
    baseURL: API_ENV.apiURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

interseptors(instance);
export default instance;
