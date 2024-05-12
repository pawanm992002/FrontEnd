import axios from "axios";

export const url = process.env.REACT_APP_BACKEND_URL;

const Token = localStorage?.getItem('token');


//--------------- Create the instance for admin apis
export const FacultyApiInstance = axios.create({
    baseURL : `${url}/faculty`,
    headers: {
        'authorization': `Bearer ${Token}`,
      }
});

