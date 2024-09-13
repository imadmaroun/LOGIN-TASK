import axios from "axios";

export default async function LoginAuth(data) {
    const route = process.env.REACT_APP_API_ROUTE;
    const response = await axios.post(`${route}/auth/login`, data);
    return response;
}

