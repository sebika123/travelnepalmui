import React from 'react';
import { Container, Grid, Box, Typography, Link as MuiLink } from '@mui/material';
import logo from '../assets/images/travel-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="footer-logo-box">
        <img
          src={logo}
          alt="Full logo"
          className="footer-logo"
        />
      </Box>
      <Container>
        <Grid container spacing={2} className="row">
          <Grid item xs={12} className="footer-navigation">
            <Box component="ul" className="footer-list">
              <li className="footer-item">
                <MuiLink href="#" className="footer-link">Company</MuiLink>
              </li>
              <li className="footer-item">
                <MuiLink href="#" className="footer-link">Contact us</MuiLink>
              </li>
              <li className="footer-item">
                <MuiLink href="#" className="footer-link">Careers</MuiLink>
              </li>
              <li className="footer-item">
                <MuiLink href="#" className="footer-link">Privacy policy</MuiLink>
              </li>
              <li className="footer-item">
                <MuiLink href="#" className="footer-link">Terms</MuiLink>
              </li>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
