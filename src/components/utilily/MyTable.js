import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from "@mui/material";

export default function MyTable({data}) {
    const tableHeaders = Object.keys(data.length > 0 ? data[0] : {})

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {tableHeaders.length > 0 && tableHeaders?.map((header, index) => (
                                <TableCell sx={{backgroundColor: 'var(--cardBG)', color: 'var(--darkBG)'}} key={index}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 && data.map((row, i) => (
                            <TableRow key={i}>
                                {
                                    Object.values(row).map((cell,j) => (
                                        <TableCell key={j}>
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
