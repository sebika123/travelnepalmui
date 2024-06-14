import React from 'react';
import { Button, Container,Box } from '@mui/material';


const Banner = () => {
  return (
    <main>
      <Box className="banner">
        <Container className="container">
          <div className="text-area">
            <section className="text-area_content">
              <h2>Welcome to Nepal.</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum minus quis dolores voluptates et nisi numquam commodi
                amet facere perferendis minima, maiores voluptatem tenetur
                inventore fugiat voluptatibus nemo! Iusto, eligendi!
              </p>
              <Button variant="contained" className="explore-button">
                Explore..
              </Button>
            </section>
          </div>
        </Container>
      </Box>
    </main>
  );
};

export default Banner;
