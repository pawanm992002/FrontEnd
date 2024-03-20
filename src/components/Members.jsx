import React from 'react'

import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'


const Members = ({ members }) => {

  return (
    <>
      <Table>
        <TableHead>

            
            <TableRow>
            <TableCell sx={{ border: '1px solid black', background: 'var(--main-primary)', color: 'white', borderLeft: '1px solid black', fontSize: '15px' }} >
              S.No.
            </TableCell>

            <TableCell sx={{ width: '50%', textAlign: 'center', border: '1px solid black', background: 'var(--main-primary)', color: 'white', borderLeft: '1px solid black', fontSize: '15px' }} >Name</TableCell>
            <TableCell sx={{ border: '1px solid black', background: 'var(--main-primary)', color: 'white', borderLeft: '1px solid black', borderRight: '1px solid black', fontSize: '15px' }}>Designation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            members?.map((item, i) => (<TableRow key={item} >
              <TableCell sx={{ border: '1px solid black' }}>{i + 1}</TableCell>

              <TableCell sx={{ textAlign: 'center', border: '1px solid black' }} >{item?.name}</TableCell>

              <TableCell sx={{ border: '1px solid black' }}>{item?.designation}
              </TableCell>
              
            </TableRow>

            ))
          }
        </TableBody>

      </Table>
    </>
  )
}

export default Members
