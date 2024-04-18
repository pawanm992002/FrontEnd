import React, { useContext, useEffect } from 'react'
import CircularCard from '../cards/CircularCard'
import { SimpleGrid } from '@chakra-ui/react'
import MyContext from '../../../AuthContext'
import { useNavigate } from 'react-router-dom'

const Administration = () => {
    const ctx = MyContext()
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!ctx.isLoggedIn) {
            navigate('/')
        }
    }, [])
    
    const cardData = [
        {
            title: 'Bog Mom',
            length: '50',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            title: 'Examination Circular',
            length: '80',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            title: 'Account Section Circular',
            length: '20',
            data: [1, 2, 3]
        },
        {
            title: 'Proctor Circular',
            length: '70',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        },
        {
            title: 'Registrar Circular',
            length: '10',
            data: [1, 2, 3, 4, 5]
        }
    ]

    return (
        <>
        {console.log('pppppppppppp', ctx)}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>

                    {
                        cardData.map((data,i) => {
                            return <CircularCard link={'administration'} key={i} data={data} />
                        })
                    }
         
            </SimpleGrid>
        </>
    )
}

export default Administration
