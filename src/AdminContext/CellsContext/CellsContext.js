import { createContext, useState } from "react";
import { AdminApiInstance } from "../WebTeam/WebTeamContext";

export const CellsContext = createContext();

const CellsContextProvider = ({children})=>{
    const [loading,setLoading] = useState(false);
    const [alumniCell,setAlumniCell] = useState([]);
    const [error,setError] = useState('');

    const handleAddNewAlumniCircular = async(form)=>{
        setLoading(true);
        try {
            const {data} = await AdminApiInstance.post('/cells/alumni-circular',form);
            console.log('alumni cell ',data);

            if(data?.success === false)
                setError(data?.message);
            else setAlumniCell(alumniCell.push(data?.result));
            
        } catch (error) {
            console.log('error ',error);
            setError(error?.message);
        }
        setLoading(false);
    }

    return (
        <CellsContext.Provider value={{handleAddNewAlumniCircular,error,loading,alumniCell}}>
            {children}
        </CellsContext.Provider>
    )
}

export default CellsContextProvider;