import React from 'react';
import { Container, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import i1 from "../assets/images/i1.jpg";
import i2 from "../assets/images/i2.webp"
import videobg from "../assets/videos/video.mp4"


// const theme = createTheme({
//   components: {
//     MuiContainer: {
//       styleOverrides: {
//         root: {
//           '&.story': {
//             maxWidth: '1200px', 
//             width: '100%',
//           },
          
//         },
//       },
//     },
//   },
// });


const Stories = () => {
  return (
    <section className="section-stories">
      <Box className="bg-video">
        <video className="bg-video-content" src={videobg}  autoPlay muted loop>
   
          <video src="../assets/videos/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </Box>

      <Box className="story-heading">
        <Typography variant="h4" className="heading-secondary">We make people genuinely happy</Typography>
      </Box>

     {/* <ThemeProvider theme={theme}> */}
     <Container className="container">
        <Box  className="row">
          <Box  className="story">
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
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box item xs={12} md={10} className="story">
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
          </Box>
        </Box>
      </Container>
     {/* </ThemeProvider> */}
    </section>
  );
};

export default Stories;
