
import React, { useEffect, useMemo, useState } from 'react'
import PlacementSection from '../components/Home/PlacementSection';
import GallerySection from '../components/Home/GallerySection';
import { Box, Typography, Modal, Button } from '@mui/material';
import EventsNews from '../components/Home/EventsNews';
import PrincipalMsg from "../components/Home/PrincipalMsg"
import Header from '../components/Layout/Header';
import Cards from "../components/Cards";
import { Facebook, LinkedIn, YouTube } from '@mui/icons-material';
import './Home.css';
import axios from 'axios';
import toast from 'react-hot-toast';

//-------------- Create the public api instance
export const PublicApiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/public`
})

const Home = () => {
  const [studentAchievements, setStudentAchievements] = useState([]);
  const [events, setEvents] = useState([]);
  const [circulars, setCirculars] = useState([]);
  const [topImages, setTopImages] = useState([]);
  const [news, setNews] = useState([]);

  const fetchEventsData = async () => {
    try {
      const { data, status } = await PublicApiInstance.get('/event');
      if (status !== 200) toast.error(data?.message);
      else {
        setEvents(data?.result);
      }

    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
  const fetchCircularsData = async () => {
    try {
      const { data, status } = await PublicApiInstance.get('/academics/first-year-circular');
      if (status !== 200) toast.error(data?.message);
      else {
        setCirculars(data?.result);
      }

    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }

  const fetchNewsData = async () => {
    try {
      const { data, status } = await PublicApiInstance.get('/eca-press/news');
      if (status !== 200) toast.error(data?.message);
      else {
        setNews(data?.result);
      }

    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }

  // Memoize the fetchData function
  const memoizedFetchEventData = useMemo(() => fetchEventsData, []);
  const memoizedFetchNewsData = useMemo(() => fetchNewsData, []);
  const memoizedFetchCircularsData = useMemo(() => fetchCircularsData, []);

  useEffect(() => {
    memoizedFetchEventData(); // This will only be called once
  }, [memoizedFetchEventData]);

  useEffect(() => {
    memoizedFetchNewsData(); // This will only be called once
  }, [memoizedFetchNewsData]);

  useEffect(() => {
    memoizedFetchCircularsData(); // This will only be called once
  }, [memoizedFetchCircularsData]);



  useEffect(() => {

    //-----------fetch student achievements
    (async () => {
      try {
        const { data, status } = await PublicApiInstance.get('/student-corner/student-achievement');
        if (status !== 200) toast.error(data?.message);
        else {
          setStudentAchievements(data?.result);
          setTopImages(data?.result?.slice(0, 3).map(item => (item.image)))
        }

      } catch (error) {
        toast.error(error?.response?.data?.error);
      }
    })();

    (async () => {
      try {
        const { data, status } = await PublicApiInstance.get('/event');
        if (status !== 200) toast.error(data?.message);
        else {
          setEvents(data?.result);
        }
  
      } catch (error) {
        toast.error(error?.response?.data?.error);
      }
    })();

    (async () => {
      try {
        const { data, status } = await PublicApiInstance.get('/eca-press/news');
        if (status !== 200) toast.error(data?.message);
        else {
          setNews(data?.result);
        }
  
      } catch (error) {
        toast.error(error?.response?.data?.error);
      }
    })()

  }, [])


  const [homeModel, setHomeModal] = useState(true);
  return (
    <>
      {homeModel &&
        <Modal
          open={homeModel}
          onClose={() => setHomeModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            width: ['80vw', '50%'],
            left: ['10%', '25.9%'],
            top: ['15%', '3%'],
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
          }}>
            <img src='https://www.ecajmer.ac.in/images/tpo.jpg' style={{ width: '100%' }} alt='ECA:Engineering College Ajmer' />
            <Button variant='contained' sx={{ width: '100%', backgroundColor: 'var(--main-primary)' }} onClick={() => setHomeModal(false)} >Close</Button>
          </Box>
        </Modal>
      }
      <Header />

      <main>

        <Box sx={{ bgcolor: "var(--darkBG)" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
              gap: "40px",
              margin: "10px auto",
            }}
          >
            <section id="principalMessage">
              <PrincipalMsg />
            </section>
            <PlacementSection />

          </Box>


        </Box>

        {/* --------------- Achievement section: to show our college or students achievements */}
        {/* <section id="achievements">
      <Typography variant="h5">Achievements</Typography>
      <Achievement />
    </section> */}
      </main>



      {/* ------------- Gallery section of the home page  */}

      <Box sx={{ bgcolor: "var(--darkBG)" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            gap: "40px",
            margin: "10px auto",
          }}
        >
        </Box>
        <section id="news" >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // bgcolor:'#cbd3dd',
              padding: "20px 0",
              minHeight: '500px',
              width: "100%"
            }}
          >
            <Box sx={{ width: '100%', maxWidth: "var(--maxWidth)", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Typography variant='h5' className='double-line-bottom' sx={{ marginBottom: '20px' }} > Latest@ECA </Typography>
              <Box sx={{ width: "100%", display: 'flex', gap: '15px', flexWrap: ['wrap', 'no wap'], justifyContent: ['space-between', 'center'], alignItems: 'center' }}>
                <EventsNews events={ events} name="Events" />
                <EventsNews events={circulars} name="Circulars" />
                <EventsNews events={news} name="News" />
              </Box>
            </Box>
          </Box>
        </section>

        <section id="web-portal">
          <Cards />
        </section>
      </Box>
      <div style={{ position: 'fixed', top: '50%', color: 'white',cursor:'pointer' }}>
        <div className="box" style={{ backgroundColor: 'red', top: 'calc( 50% - 80px)' }} ><span>Youtube</span>  <YouTube htmlColor="white" fontSize="large" />  </div>
        <div className="box" style={{ backgroundColor: 'skyblue', top: 'calc( 50% - 40px)' }}><span>Linkedin</span> <LinkedIn htmlColor="white" fontSize="large" /> </div>
        <div className="box" style={{ backgroundColor: 'blue' }}><span>Facebook</span> <Facebook htmlColor="white" fontSize="large" /> </div>
      </div>


      <GallerySection images={topImages} />
    </>
  );
};

export default Home;
