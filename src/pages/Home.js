
import React, { useState } from 'react'
import PlacementSection from '../components/Home/PlacementSection';
import GallerySection from '../components/Home/GallerySection';
import { Box, Typography, Modal, Button } from '@mui/material';
import EventsNews from '../components/Home/EventsNews';
import PrincipalMsg from "../components/Home/PrincipalMsg"
import Header from '../components/Layout/Header';
import Cards from "../components/Cards";
import { Facebook, LinkedIn, YouTube } from '@mui/icons-material';
import './Home.css';
// import { calc } from '@chakra-ui/react';

const Home = () => {

  const events = [
    {
      text: "news 1 jd jjd kkjb l h jhgbnjk mkiugv mkiugv mkiugv nmjugvc ",
      date: new Date().toDateString(),
      link: "hhhh"
    },
    { text: "news 2 jd jjd kkjb", date: new Date("2023").toDateString(), link: '' },
    { text: "news 3 jd jjd kkjb", date: new Date("2022").toDateString(), link: '' },
    { text: "news 2 jd jjd kkjb", date: new Date("2023").toDateString(), link: '' },
    { text: "news 3 jd jjd kkjb", date: new Date("2022").toDateString(), link: '' },
  ];
  const circulars = [
    {
      text: "news 1 jd jjd kkjb l h jhgbnjk mkiugv mkiugv mkiugv nmjugvc ",
      date: new Date().toDateString(),
    },
    { text: "news 2 jd jjd kkjb", date: new Date("2023").toDateString() },
    { text: "news 3 jd jjd kkjb", date: new Date("2023").toDateString() },
    { text: "news 2 jd jjd kkjb", date: new Date("2023").toDateString() },
    { text: "news 3 jd jjd kkjb", date: new Date("2023").toDateString() },
  ];
  const news = [
    {
      text: "news 1 jd jjd kkjb l h jhgbnjk mkiugv mkiugv mkiugv nmjugvc ",
      date: new Date().toDateString(),
    },
    { text: "news 2 jd jjd kkjb", date: new Date("2023").toDateString() },
    { text: "news 3 jd jjd kkjb", date: new Date("2023").toDateString() },
    { text: "news 2 jd jjd kkjb", date: new Date("2023").toDateString() },
    { text: "news 3 jd jjd kkjb", date: new Date("2023").toDateString() },
  ];

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
            width: ['80vw','50%'],
            left:['10%','25.9%'],
            top:['15%','3%'],
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
          }}>
            <img src='https://www.ecajmer.ac.in/images/tpo.jpg' style={{width:'100%'}} alt='ECA:Engineering College Ajmer' />
            <Button variant='contained'  sx={{width:'100%',backgroundColor:'var(--main-primary)'}} onClick={() => setHomeModal(false)} >Close</Button>
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
{/*
        <section id="aboutECA">
          <AboutECA />
        </section>

*/}
      </Box>
      <section id="news">
       {/*<Scrollables />*/} 
      </section>
{
/*
  <section id="web-portal">
  <Cards />
  </section>
*/

}

      </Box>

        {/* --------------- Achievement section: to show our college or students achievements */}
        {/* <section id="achievements">
      <Typography variant="h5">Achievements</Typography>
      <Achievement />
    </section> */}
      </main>

      {/* ------------- Placement section  */}
     

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
          {/* <section id="aboutECA">
            <AboutECA />
          </section> */}
        </Box>
        <section id="news" >
          {/* <Scrollables /> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // bgcolor:'#cbd3dd',
              padding: "20px 0",
              minHeight:'500px',
              width:"100%"
            }}
          >
            <Box sx={{width:'100%',maxWidth:"var(--maxWidth)", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Typography variant='h5' className='double-line-bottom' sx={{ marginBottom: '20px' }} > Latest@ECA </Typography>
              <Box sx={{ width: "100%", display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <EventsNews events={events} name="Events" />
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
      <div style={{position:'fixed',top:'50%',color:'white'}}>
      <div className="box"  style={{backgroundColor:'red', top:'calc( 50% - 80px)'}} ><span>Youtube</span>  <YouTube htmlColor="white" fontSize="large"/>  </div>
      <div className="box"  style={{backgroundColor:'skyblue',top:'calc( 50% - 40px)'}}><span>Linkedin</span> <LinkedIn htmlColor="white" fontSize="large"/> </div>
      <div className="box" style={{backgroundColor:'blue'}}><span>Facebook</span> <Facebook htmlColor="white" fontSize="large"/> </div>
      </div>
      <GallerySection />
    </>
  );
};

export default Home;
