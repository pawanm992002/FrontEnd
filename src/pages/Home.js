
import React from 'react'
import PlacementSection from '../components/Home/PlacementSection';
import GallerySection from '../components/Home/GallerySection';
import Header from '../components/Layout/Header';

import Scrollables from "../components/Scrollables";
import Cards from "../components/Cards";
import Achievement from "../components/Home/Achievement";
import { Box, Typography } from "@mui/material";
import PrincipalMsg from "../components/Home/PrincipalMsg";
import AboutECA from "../components/Home/AboutECA";
// import Header from "../components/Layout/Header";


const Home = () => {


  return (
    <>
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

      <section id="web-portal">
        <Cards />
      </section>
    </Box>

    {/* --------------- Achievement section: to show our college or students achievements */}
    {/* <section id="achievements">
      <Typography variant="h5">Achievements</Typography>
      <Achievement />
    </section> */}
  </main>

      {/* ------------- Placement section  */}
     

      {/* ------------- Gallery section of the home page  */}
      <GallerySection />
    </>
  )
}

export default Home
