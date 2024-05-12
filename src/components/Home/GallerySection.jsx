import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";

import ModalComponent from "../Modal";

const GallerySection = ({ images,achievements }) => {
  //------------- Control the modal component
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const large = useMediaQuery("(max-width:1100px)");
  const small = useMediaQuery("(max-width:800px)");
  const Xsmall = useMediaQuery("(max-width:700px)");
  const XXS = useMediaQuery("(max-width:620px)");


  return (
    <>
      <section id="Gallery" style={{ margin: "12px 0" }}>
        {/* ------------ handling the model for gallery data -------------  */}
        <ModalComponent
          open={open}
          handleClose={handleClose}
          content={
            <>
              <Box
                sx={{
                  width: large ? (small ? "100%" : "90%") : "80%",
                  margin: "auto",
                }}
              >
                <Grid
              container
              spacing={2}
              sx={{
                // display: "grid",
                // gridTemplateColumns: XXS
                //   ? "1fr"
                //   : Xsmall
                //   ? "1fr 1fr"
                //   : "1fr 1fr 1fr",
                width: "100%",
                margin: "auto",
                // gap: "5px",
              }}
            >
              {achievements?.map((val, i) => (
                <Grid
                key={i}
                item
                xs={5}
                md={4}
                // sx={{
                //   width:'445px',
                //   margin: "0px",
                // }}
              >
                <img src={val?.image} alt="gallery" width={'100%'} style={{content:'fit'}} />
              </Grid>
              ))}
            </Grid>
              </Box>
            </>
          }
        />

        <Box sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              marginBottom: "10px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" className="double-line-bottom">
              Student Achievements @ECA
            </Typography>
          </Box>

          <Container
            sx={{
              width: XXS ? "90%" : large ? (small ? "100%" : "90%") : "80%",
              margin: "auto",
              p: 0,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                // display: "grid",
                // gridTemplateColumns: XXS
                //   ? "1fr"
                //   : Xsmall
                //   ? "1fr 1fr"
                //   : "1fr 1fr 1fr",
                width: "100%",
                margin: "auto",
                // gap: "5px",
              }}
            >
              {achievements?.map((val, i) => (
               i<=4 && <Grid
                key={i}
                item
                xs={5}
                md={4}
                // sx={{
                //   width:'445px',
                //   margin: "0px",
                // }}
              >
                <img src={val?.image} alt="gallery" width={'100%'} style={{content:'fit'}} />
              </Grid>
              ))}
            </Grid>

            <Box
              sx={{ width: "fit-content", mt: 1, marginInlineStart: "auto" }}
            >
              <Button variant="outlined" onClick={handleOpen}>
                Browse All
              </Button>
            </Box>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default GallerySection;
