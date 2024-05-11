import axios from "axios";

const Token = localStorage?.getItem('token');

export const url = process.env.REACT_APP_BACKEND_URL;

//--------------- Create the instance for admin apis
export const FacultyApiInstance = axios.create({
    baseURL : `${url}/faculty`,
    headers: {
        'authorization': `Bearer ${Token}`,
      }
});


// //---------------- Create a global circular
// export const handleAddSectionCircular = (form)=>{
//     try {
//         const {data,status,statusText} = AdminApiInstance.post('/circular',form);
//         console.log('data ',data,status,statusText);
//         return data;
//     } catch (error) {
//         console.log('error ',error,error?.message,error?.response,error?.response?.message);
//         throw new Error(error?.response?.message);
//     }
// }