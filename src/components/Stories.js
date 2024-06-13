import React from 'react';
import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import i1 from "../assets/images/i1.jpg";
import i2 from "../assets/images/i2.webp"

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video-content" autoPlay muted loop>
          <source src="../assets/videos/video.mp4" type="video/mp4" />
          <source src="../assets/videos/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="story-heading">
        <Typography variant="h4" className="heading-secondary">We make people genuinely happy</Typography>
      </div>

      <Container className="container">
        <Grid container spacing={4} className="row">
          <Grid item xs={12} md={6} className="story">
            <Card className="story-card">
              <Box className="story-shape">
                <CardMedia
                  component="img"
                  className="story-img"
                  image={i1}
                  alt="Person on a tour"
                />
                <Box className="story-caption">Alexa</Box>
              </Box>
              <CardContent className="story-text">
                <Typography variant="h5" className="heading-tertiary">I had the best week ever with my family</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} className="story">
            <Card className="story-card">
              <Box className="story-shape">
                <CardMedia
                  component="img"
                  className="story-img"
                  image={i2}
                  alt="Person on a tour"
                />
                <Box className="story-caption">Siri</Box>
              </Box>
              <CardContent className="story-text">
                <Typography variant="h5" className="heading-tertiary">WOW! My life is completely different now</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Stories;
