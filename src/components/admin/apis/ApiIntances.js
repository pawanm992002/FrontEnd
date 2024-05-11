import axios from "axios";

const Token = localStorage?.getItem('token');

export const url = process.env.REACT_APP_BACKEND_URL;

//--------------- Create the instance for admin apis
export const AdminApiInstance = axios.create({
    baseURL : `${url}/admin`,
    headers: {
        'Authorization': `Bearer ${Token}`,
      }
});


//---------------- Create a global circular
export const handleAddSectionCircular = (form)=>{
    try {
        const {data,status,statusText} = AdminApiInstance.post('/circular',form);
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.error);
    }
}