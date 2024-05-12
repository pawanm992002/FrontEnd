import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from "@mui/material";

export default function MyTable({data,styles}) {
    const tableHeaders = Object.keys(data.length > 0 ? data[0] : {})

    return (
        <Paper sx={{ width: styles?.width?styles?.width:600 }}>
            <TableContainer sx={{ maxHeight: styles?.height || 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {tableHeaders.length > 0 && tableHeaders?.map((header, index) => (
                                <TableCell sx={{backgroundColor: 'var(--cardBG)', color: 'var(--darkBG)', border: '1px solid grey'}} key={index}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                     { data?.length <= 0 &&  <TableRow> <TableCell >
                            <Typography sx={{fontSize:'15px',color:'red'}}>No Data Found</Typography>
                        </TableCell> </TableRow>}
                        {data?.length > 0 && data?.map((row, i) => (
                            <TableRow key={i}>
                                {
                                    Object.values(row).map((cell,j) => (
                                        <TableCell width={'15px'} sx={{border:'1px solid grey'}} key={j}>
                                            {cell}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
