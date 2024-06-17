import React from "react";
import { Container, Box, Typography } from "@mui/material";
// import icon1 from "../assets/fonts/linea-basic-10.svg"

const Features = () => {
  return (
    <section className="section-features">
      <Container className="container">
        <Box  className="row">
          <Box className="feature-card">
            <Box className="feature-box" textAlign="center">
              <Box
                component="i"
                className="feature-box-icon icon-basic-world"
              ></Box>
              <Typography variant="h6" className="heading-tertiary">
                Explore the world
              </Typography>
              <Typography className="feature-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </Typography>
            </Box>
          </Box>
          <Box className="feature-card">
            <Box className="feature-box" textAlign="center">
              <i className="feature-box-icon icon-basic-compass"></i>
              <Typography variant="h6" className="heading-tertiary">
                Meet nature
              </Typography>
              <Typography className="feature-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </Typography>
            </Box>
          </Box>
          <Box item xs={12} sm={6} md={3} className="feature-card">
            <Box className="feature-box" textAlign="center">
              <i className="feature-box-icon icon-basic-map"></i>
              <Typography variant="h6" className="heading-tertiary">
                Find your way
              </Typography>
              <Typography className="feature-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </Typography>
            </Box>
          </Box>
          <Box item xs={12} sm={6} md={3} className="feature-card">
            <Box className="feature-box" textAlign="center">
              <i className="feature-box-icon icon-basic-heart"></i>
              <Typography variant="h6" className="heading-tertiary">
                Live a healthier life
              </Typography>
              <Typography className="feature-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Features;
