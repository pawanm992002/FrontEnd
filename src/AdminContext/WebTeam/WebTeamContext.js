import axios from "axios";

const { createContext, useState } = require("react");

export const WebTeamContext = createContext();

export const Token = localStorage?.getItem('token');

export const url = process.env.REACT_APP_BACKEND_URL;

export const AdminApiInstance = axios.create({
    baseURL: `${url}/admin`,
    headers: {
        'Authorization': `Bearer ${Token}`,
    }
});

export const PublicApiIntance = axios.create({
    baseURL:`${url}/public`
})


const WebTeamProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [webTeams, setWebTeams] = useState([]);


    const handleFetchWebTeamMembers = async () => { //fetch all the web teams
        setLoading(true);
        try {
            const { data } = await PublicApiIntance.get('/web-team/');
            console.log('web team ', data?.results);
            setWebTeams(data?.results);
            return data?.results;
        } catch (error) {
            console.log('error ', error?.message);
            setError(error?.message)
        }
        setLoading(false);
    }


    const handleAddWebTeamMembers = async (form) => { //function to create a new web team
        console.log(form);
        setLoading(true);
        try {
            const { data } = await AdminApiInstance.post('/web-team', form);

            setWebTeams(data?.results);
        } catch (error) {
            console.log('error ', error);
            setError(error)
        }
        setLoading(false);
    }

    const handleDeleteWebTeamMembers = async (id) => { //function to create a new web team

        setLoading(true);
        try {
            const { data } = await AdminApiInstance.delete(`/web-team/${id}`);

            console.log('web team data ', data)

            //---------removing the data
            if (data?.success === false)
                setError(data?.message);
            else setWebTeams({ ...webTeams?.filter(team => team?._id !== id) });


        } catch (error) {
            console.log('error ', error.message);
            setError(error?.message);
        }
        setLoading(false);
    }

    return (
        <WebTeamContext.Provider value={{ handleAddWebTeamMembers,handleFetchWebTeamMembers, webTeams, loading, error, handleDeleteWebTeamMembers }}>
            {children}
        </WebTeamContext.Provider>
    )
}

export default WebTeamProvider;