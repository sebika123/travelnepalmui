import React from 'react';
import { Container, Grid, Box, Typography, List, ListItem, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/images/travel-logo.png';


const StyledLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.primary.dark,
  },
  '&:active': {
    color: theme.palette.primary.light,
  },
}));

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
        <Box className="row">
          <Box className="footer-navigation">
            <List component="ul" className="footer-list">
              <ListItem component="li" className="footer-item">
                <StyledLink href="/" className="footer-link">Company</StyledLink>
              </ListItem>
              <ListItem component="li" className="footer-item">
                <StyledLink href="/" className="footer-link">Contact us</StyledLink>
              </ListItem>
              <ListItem component="li" className="footer-item">
                <StyledLink href="/" className="footer-link">Careers</StyledLink>
              </ListItem>
              <ListItem component="li" className="footer-item">
                <StyledLink href="/" className="footer-link">Privacy policy</StyledLink>
              </ListItem>
              <ListItem component="li" className="footer-item">
                <StyledLink href="/" className="footer-link">Terms</StyledLink>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
