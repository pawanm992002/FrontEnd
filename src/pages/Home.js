
import React, { useEffect, useState } from 'react'
import PlacementSection from '../components/Home/PlacementSection';
import GallerySection from '../components/Home/GallerySection';
import { Box, Typography,Modal } from '@mui/material';
import Cards from '../components/Cards';
import EventsNews from '../components/Home/EventsNews';
import AboutECA from '../components/Home/AboutECA'
import PrincipalMsg from "../components/Home/PrincipalMsg"

const Home = () => {
  const events = [
    {
      text: "news 1 jd jjd kkjb l h jhgbnjk mkiugv mkiugv mkiugv nmjugvc ",
      date: new Date().toDateString(),
    },
    { text: "news 2 jd jjd kkjb", date: new Date("2023").toDateString() },
    { text: "news 3 jd jjd kkjb", date: new Date("2022").toDateString() },
  ];
  const circulars = [
    {
      text: "news 1 jd jjd kkjb l h jhgbnjk mkiugv mkiugv mkiugv nmjugvc ",
      date: new Date().toDateString(),
    },
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
  ];

  const [homeModel, setHomeModal] = useState(true)

  return (
    <>
      {
        homeModel && <Modal
          open={homeModel}
          onClose={() => setHomeModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            // bgcolor: 'background.paper',
            // border: '2px solid #000',
            // boxShadow: 24,
            p: 4,
          }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <img src='/images/principal.jpg' style={{width:'60%'}} />
          </Box>
        </Modal>
      }
      {/* ------------- Placement section  */}
      <PlacementSection />

      {/* ------------- Gallery section of the home page  */}
      <GallerySection />

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
        <section id="news">
          {/* <Scrollables /> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "var(--darkBG)",
              padding: "10px 0",
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <Typography variant='h5' className='double-line-bottom' sx={{ marginBottom: '20px' }} > Latest@ECA </Typography>
              <Box sx={{ maxWidth: "var(--maxWidth)", display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
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

    </>
  )
}

export default Home
