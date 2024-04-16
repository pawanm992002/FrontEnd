//---------------- Login the admin

import axios from "axios"
import { url } from "./ApiIntances"

export const handleAdminLogin = async (formData) => {
    console.log('form ',formData);
    try {
        const res = await axios.post(`${url}/auth/admin-login`, formData)

        const data = await res.data;

        localStorage.setItem('token',data?.token);

        return data;
    }
    catch (err) { throw new Error(err) }
}