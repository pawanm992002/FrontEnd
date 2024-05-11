import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';

import { Route,Routes } from 'react-router-dom';



import Admin from './Admin'
import Faculty from './FacultyPageRoutes'
import HODPageRoutes from './HODPageRoutes';
import Error from '../pages/Error';



const ChakraUIPages = () => {
    return (
        <>

            <ChakraProvider>
                <Routes>

                <Route path="/admin/*" element={<Admin />} />
                <Route path="/faculty/*" element={<Faculty />} />
                <Route path="/hod/*" element={<HODPageRoutes />} />
                
              <Route
                path="*"
                element={ <Error />           }
              />
                </Routes>

            </ChakraProvider>

        </>
    )
}

export default ChakraUIPages
