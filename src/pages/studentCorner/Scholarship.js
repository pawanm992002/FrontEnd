import { Typography, Box } from "@mui/material";
import MyTable from "../../components/utilily/MyTable";

export default function Scholarship() {
  const programsByAlumni = [
    { id: 1, title: "Alumni Scholarship only for B. Tech. Girl Students", desc: "Based on merit and financial status of parents of girl student whose passing year is 2024 : Total-20,000/- Rs. Willingness will be made by the sponsoring alumni and approval of principal." },
    { id: 2, title: "Alumni Scholarship only for B. Tech. Girl Students", desc: "Based on merit and financial status of parents of girl student whose passing year is 2024 : Total-20,000/- Rs. Willingness will be made by the sponsoring alumni and approval of principal." },
  ]
  const programsByOthers = [
    { id: 1, title: "Reliance Foundation Undergraduate Scholarships", link: "https://scholarships.reliancefoundation.org/UG_Scholarship.aspx" },
    { id: 2, title: "HDFC Bank Parivartan's ECSS Programme for Postgraduate Courses", link: "" },
  ]
  const programsByOrganisation = [
    { id: 1, title: "Merit Cum Means(For SC/ST Students)", link: "https://scholarships.gov.in/" },
    { id: 2, title: "Central Armed Forces(For wards of Defence persons)", link: "" },
  ]
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
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '10px 20px', borderRadius: '10px' }}>
        <Typography variant="h5" sx={{ background: 'var(--cardBG)', color: 'var(--darkBG)', padding: '8px 15px', margin: '8px auto', textAlign: 'center', width: '100%' }}>Student Scholarship Details</Typography>
        <Typography variant="body2">Aim of the Scholarship programs is to provide financial aids to the students of ECA who are intelligent, meritorious but belongs to financially weaker families. This initiative is about giving budding engineers a platform to seek the scholarship and help remove financial impediments in their growth journey.</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '10px 20px', borderRadius: '10px' }}>
        <Typography variant="h5" sx={{ background: 'var(--cardBG)', color: 'var(--darkBG)', padding: '8px 15px', margin: '8px auto', textAlign: 'center', width: '100%' }}>A. Scholarship Program Sponsored in Private by Alumni bodies</Typography>
        <MyTable data={programsByAlumni} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '10px 20px', borderRadius: '10px' }}>
        <Typography variant="h5" sx={{ background: 'var(--cardBG)', color: 'var(--darkBG)', padding: '8px 15px', margin: '8px auto', textAlign: 'center', width: '100%' }}>B. Details of Scholarship Programs offered by various Government Organizations</Typography>
        <MyTable data={programsByOrganisation} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '10px 20px', borderRadius: '10px' }}>
        <Typography variant="h5" sx={{ background: 'var(--cardBG)', color: 'var(--darkBG)', padding: '8px 15px', margin: '8px auto', textAlign: 'center', width: '100%' }}>C. Other Scholarships</Typography>
        <MyTable data={programsByOthers} />
      </Box>
    </Box>
  </Box>)
}