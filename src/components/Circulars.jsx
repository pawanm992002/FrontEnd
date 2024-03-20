import React, { useState } from 'react'

import {Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, TablePagination} from '@mui/material'

const Circulars = () => {
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    
    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('sno');



    const data = [
        { sno: 1, date: '2024-03-19', title: 'Example 1', link: 'http://example.com' },
        { sno: 2, date: '2024-03-20', title: 'Example 2', link: 'http://example.com' },
        // Add more data as needed
    ];

  return (
    <>
       <Table>
                            <TableHead>

                                <TableRow>
                                    <TableCell sx={{ border: '1px solid black',background:'var(--main-primary)',color:'white' }} >
                                        <TableSortLabel
                                            active={orderBy === 'sno'}
                                            direction={orderBy === 'sno' ? order : 'asc'}
                                            onClick={() => handleSort('sno')}
                                        >
                                            Sno
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell sx={{ width: '30%', border: '1px solid black',background:'var(--main-primary)',color:'white' }} >
                                        <TableSortLabel
                                            active={orderBy === 'date'}
                                            direction={orderBy === 'date' ? order : 'asc'}
                                            onClick={() => handleSort('date')}
                                        >
                                            Date
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell sx={{ width: '50%', textAlign: 'center', border: '1px solid black',background:'var(--main-primary)',color:'white' }} >Title</TableCell>
                                    <TableCell sx={{width: '30%', border: '1px solid black',background:'var(--main-primary)',color:'white' ,fontSize:'15px' }}>Link</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data
                                    .sort((a, b) => (order === 'asc' ? a[orderBy] > b[orderBy] : a[orderBy] < b[orderBy] ? 1 : -1))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => (
                                        <TableRow key={row.sno}>
                                            <TableCell sx={{ borderLeft: '1px solid black' }}>{row.sno}</TableCell>
                                            <TableCell sx={{ borderLeft: '1px solid black' }}>{row.date}</TableCell>
                                            <TableCell sx={{ textAlign: 'center', borderLeft: '1px solid black' }} >{row.title}</TableCell>
                                            <TableCell sx={{ borderLeft: '1px solid black',borderRight:'1px solid black' }}>
                                                <a href={row.link} target="_blank" rel="noopener noreferrer">
                                                    {row.link}
                                                </a>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>

                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
    </>
  )
}

export default Circulars
