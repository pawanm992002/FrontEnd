//---------------- Here we create users all apis stuff
import axios from 'axios'

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

export const getDepartmentsNotices = async(dept_name)=>{
    try {
        
        const res = await axios.get(`${url}/department-notice/${dept_name}`);
        const data = await res.json();

        console.log('fetch dept ',data);

    } catch (error) { throw new Error(error)  }
}