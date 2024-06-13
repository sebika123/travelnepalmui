import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';


const Features = () => {
  return (
    <section className="section-features">
      <Container className="container">
        <Grid container spacing={4} className="row">
          <Grid item xs={12} sm={6} md={3} className="feature-card">
            <Box className="feature-box" textAlign="center">
              <i className="feature-box-icon icon-basic-world"></i>
              <Typography variant="h6" className="heading-tertiary">Explore the world</Typography>
              <Typography className="feature-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="feature-card">
            <Box className="feature-box" textAlign="center">
              <i className="feature-box-icon icon-basic-compass"></i>
              <Typography variant="h6" className="heading-tertiary">Meet nature</Typography>
              <Typography className="feature-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="feature-card">
            <Box className="feature-box" textAlign="center">
              <i className="feature-box-icon icon-basic-map"></i>
              <Typography variant="h6" className="heading-tertiary">Find your way</Typography>
              <Typography className="feature-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="feature-card">
            <Box className="feature-box" textAlign="center">
              <i className="feature-box-icon icon-basic-heart"></i>
              <Typography variant="h6" className="heading-tertiary">Live a healthier life</Typography>
              <Typography className="feature-box-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
