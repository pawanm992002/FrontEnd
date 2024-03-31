import { Box, Typography } from "@mui/material";

export default function Bank() {
    return (<Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "var(--darkBG)",
          padding: "10px 0",
        }}
      >
        <Box
          sx={{
            maxWidth: "var(--maxWidth)",
            width: '100%',
          }}
        >
            <Typography variant="h5" sx={{ background: 'var(--cardBG)', color: 'var(--darkBG)', padding: '8px 15px', margin: '8px auto', textAlign: 'center', width: '100%' }}>Student Scholarship Details</Typography>
            <Typography variant="body2">The State Bank of India is located inside the Campus.It is situated at the ground floor of the Institute New building area.</Typography>
            <Typography variant="h5" fontWeight='bold'>IFSC Code: <span style={{color:'gray', fontWeight: 'normal'}}>SBIN0017026</span> </Typography>
            <Typography variant="h5" fontWeight='bold'>Branch Code: <span style={{color:'gray', fontWeight: 'normal'}}>017026</span> </Typography>
        </Box>
    </Box>)
}