import axios from "axios";

// import {Token} from '../../../GlobalsVars'
const Token = localStorage?.getItem('token')

export const url = process.env.REACT_APP_BACKEND_URL;

//--------------- Create the instance for admin apis
export const AdminApiInstance = axios.create({
    baseURL : `${url}/admin`,
    headers: {
        'Authorization': `Bearer ${Token}`,
      }
});
