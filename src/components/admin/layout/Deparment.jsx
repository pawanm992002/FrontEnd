import React from 'react'
import CircularCard from '../cards/CircularCard'
import { SimpleGrid } from '@chakra-ui/react'
import ProfileCard from '../cards/ProfileCard'

const Department = () => {

    const tableHeading=[
        'Profile',
        'Name',
        'Email',
        'Department',
    ]

    const dataArray = [
        {
            "_id": "1",
            "profile": "https://source.unsplash.com/random/1",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "department": "Engineering"
        },
        {
            "_id": "2",
            "profile": "https://source.unsplash.com/random/2",
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "department": "Marketing"
        },
        {
            "_id": "3",
            "profile": "https://source.unsplash.com/random/3",
            "name": "David Johnson",
            "email": "david.johnson@example.com",
            "department": "Finance"
        },
        {
            "_id": "4",
            "profile": "https://source.unsplash.com/random/4",
            "name": "Emily Brown",
            "email": "emily.brown@example.com",
            "department": "Human Resources"
        },
        {
            "_id": "5",
            "profile": "https://source.unsplash.com/random/5",
            "name": "Michael Wilson",
            "email": "michael.wilson@example.com",
            "department": "Sales"
        },
        {
            "_id": "6",
            "profile": "https://source.unsplash.com/random/6",
            "name": "Emma Taylor",
            "email": "emma.taylor@example.com",
            "department": "Operations"
        },
        {
            "_id": "7",
            "profile": "https://source.unsplash.com/random/7",
            "name": "James Martinez",
            "email": "james.martinez@example.com",
            "department": "Customer Service"
        },
        {
            "_id": "8",
            "profile": "https://source.unsplash.com/random/8",
            "name": "Olivia Anderson",
            "email": "olivia.anderson@example.com",
            "department": "Information Technology"
        },
        {
            "_id": "9",
            "profile": "https://source.unsplash.com/random/9",
            "name": "William Thomas",
            "email": "william.thomas@example.com",
            "department": "Research and Development"
        },
        {
            "_id": "10",
            "profile": "https://source.unsplash.com/random/10",
            "name": "Sophia Walker",
            "email": "sophia.walker@example.com",
            "department": "Public Relations"
        }
    ]

    const cardData = [
        {
            title: 'Achievement',
            length: '20',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            title: 'Circular',
            length: '20',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            title: 'Time Table',
            length: '20',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            title: 'Gallery',
            length: '20',
            data: [1, 2, 3, 4, 5]
        },
    ]

    const facultyData = [
        {
            title: 'Faculty Member',
            length: '15',
            data: [1, 2, 3, 4, 5, 6]
        }
    ]

    return (
        <>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
                {
                    facultyData.map((data,i) => {
                        return <ProfileCard key={i} link="departments" data={data} dataArray={dataArray} tableHeading={tableHeading}/>
                    })
                }
                {
                    cardData.map((data,i) => {
                        return <CircularCard key={i} data={data} link={'departments'} />
                    })
                }
            </SimpleGrid>
        </>
    )
}

export default Department