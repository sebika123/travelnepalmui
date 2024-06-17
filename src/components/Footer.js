import React from 'react';
import { Container, Grid, Box, Typography,List,ListItem, Link as MuiLink } from '@mui/material';
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
        <Box  className="row">
          <Box className="footer-navigation">
            <List component="ul" className="footer-list">
              <ListItem component="li" className="footer-item">
                <MuiLink href="/" className="footer-link">Company</MuiLink>
              </ListItem>
              <ListItem component="li" className="footer-item">
                <MuiLink href="/" className="footer-link">Contact us</MuiLink>
              </ListItem>
              <ListItem component="li" className="footer-item">
                <MuiLink href="/" className="footer-link">Careers</MuiLink>
              </ListItem>
              <ListItem component="li" className="footer-item">
                <MuiLink href="/" className="footer-link">Privacy policy</MuiLink>
              </ListItem>
              <ListItem component="li" className="footer-item">
                <MuiLink href="/" className="footer-link">Terms</MuiLink>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
