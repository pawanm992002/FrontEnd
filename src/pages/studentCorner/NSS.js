import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyTable from '../../components/utilily/MyTable';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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

export default function NSS() {
    const [value, setValue] = useState(0);
    const members = [
        { Name: 'Dr. Pooja Tomar', Designation: 'Coordinator' },
        { Name: 'Sh. Lalit K Dusad', Designation: 'Co-Coordinator' },
        { Name: 'Dr. Shikha Agarwal', Designation: 'Co-Coordinator' },
    ]
    const circulars = [
        { SNO: '2024WEB0232', Date: '28/02/24', Title: 'Dash Derby Result', Link: 'https://www.ecajmer.ac.in/Content/Orders/CAS/Files/2024WEB0232-28-02-24-Result_Dash_Derby_Sprint_competition_AKAM_Feb_Activity_-_Copy[1]-vpEduQ.doc' },
        { SNO: '2024WEB0224', Date: '26/02/24', Title: 'Sprint Competition Under AKAM', Link: 'https://www.ecajmer.ac.in/Content/Orders/CAS/Files/2024WEB0232-28-02-24-Result_Dash_Derby_Sprint_competition_AKAM_Feb_Activity_-_Copy[1]-vpEduQ.doc' },
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
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                        <Tabs sx={{ backgroundColor: 'var(--cardBG)', color: 'white' }} textColor='white' value={value} onChange={(e, newValue) => setValue(newValue)} variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="scrollable force tabs example">
                            <Tab label="About Us" {...a11yProps(0)} />
                            <Tab label="Members" {...a11yProps(1)} />
                            <Tab label="Circulars" {...a11yProps(2)} />
                            <Tab label="List of Students" {...a11yProps(4)} />
                            <Tab label={<Link style={{ color: 'white' }} to={'/gallery'} variant='contained'>Gallery</Link>} {...a11yProps(5)} />

                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Box>
                            <Typography variant='h5' marginY='10px'>
                            About NSS (National Service Scheme)
                            </Typography>
                            <ol style={{ display: 'flex', gap: '10px', flexDirection: 'column', paddingLeft: '15px', marginTop: '10px' }}>
                                <li>NSS is a noble experiment in academic expansion. It encapsulates the spirit of voluntary work among the students and the teachers to sustain community interaction.</li>
                                <li>It brings academic institutions closer to the society.</li>
                                <li>It shows how to combine knowledge and action to achieve the desirable results to community development.</li>
                            </ol>
                        </Box>
                        <Box>
                            <Typography variant='h5' marginY='10px'>
                            Objectives of NSS
                            </Typography>
                            <ol style={{ display: 'flex', gap: '10px', flexDirection: 'column', paddingLeft: '15px', marginTop: '10px' }}>
                                <li>To understand the community in which the volunteers work.</li>
                                <li>To understand themselves in relation to the community in which that live.</li>
                                <li>To identify the needs and problems of their community and involve themselves in the problem saving process.</li>
                                <li>To develop among themselves a sense of social and civic responsibilities.</li>
                                <li>To utilize their knowledge in finding practical solution to individual and community problems.</li>
                                <li>To develop competence required for group living and sharing of responsibilities.</li>
                                <li>To gain skills in mobilizing the community participation.</li>
                                <li>To acquire the leadership qualities and democratic attitude.</li>
                                <li>To develop capacity to meet emergencies and natural.</li>
                                <li>To practice national integration and social harmony.</li>
                            </ol>
                        </Box>
                        <Box>
                            <Typography variant='h5' marginY='10px'>
                            Motto of NSS
                            </Typography>
                            <ol style={{ display: 'flex', gap: '10px', flexDirection: 'column', paddingLeft: '15px', marginTop: '10px' }}>
                                <li>The motto of NSS is “NOT ME BUT YOU” The essence of democratic living.</li>
                                <li>Upholds the need for selfless service.</li>
                                <li>ppreciation of the other person’s point of view.</li>
                                <li>Also shows consideration for fellow human beings.</li>
                                <li>It underlines “The Welfare of the Individual is ultimately the Welfare of Society”</li>
                            </ol>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <MyTable data={members} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <MyTable data={circulars} />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        <MyTable data={members} />
                    </CustomTabPanel>
                </Box>
            </Box>
        </Box>
    );
}