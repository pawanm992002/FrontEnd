import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyTable from '../../components/utilily/MyTable';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchTransportationCircular } from '../../api/studentCorner';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Transportation() {
    const [value, setValue] = useState(0);
    const [Circulars, setCirculars] = useState([]);
  
    useEffect(() => {
      (async () => {
        if (value === 0) {
          const Circulars = await fetchTransportationCircular();
          setCirculars(
            Circulars?.map((val) => {
              return {
                SR_NO: val.SR_NO,
                Title: val.Title,
                Section: val.Section,
                Notice: val.Notice,
              };
            })
          );
        }
      })();
    }, [value]);
    const members = [
        { Name: 'Dr. Pooja Tomar', Designation: 'Coordinator' },
        { Name: 'Sh. Lalit K Dusad', Designation: 'Co-Coordinator' },
        { Name: 'Dr. Shikha Agarwal', Designation: 'Co-Coordinator' },
    ]
    
    return (
        <Box
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
                    width: '100%'
                }}
            >
                <Box sx={{ padding: '10px' }}>
                    <Typography variant="h5" sx={{ background: 'var(--cardBG)', color: 'var(--darkBG)', padding: '8px 15px', margin: '8px auto', textAlign: 'center', width: '100%' }}>Student Scholarship Details</Typography>
                    <Typography variant='h6' sx={{textAlign:'center', margin: '8px auto'}}>For Any Correspondence Mail to transport@ecajmer.ac.in</Typography>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                        <Tabs sx={{ backgroundColor: 'var(--cardBG)', color: 'white' }} textColor='white' value={value} onChange={(e, newValue) => setValue(newValue)} variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="scrollable force tabs example">
                            <Tab label="Circulars" {...a11yProps(0)} />
                            <Tab label="Members" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <MyTable data={Circulars} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <MyTable data={members} />
                    </CustomTabPanel>
                </Box>
            </Box>
        </Box>
    );
}