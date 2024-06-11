import React from 'react';
import { Box, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import travelLogo from '../../assets/images/logo.png'; 

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.grey[100],
  padding: theme.spacing(4, 0),
}));

const LogoBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(0),
  },
}));

const FooterNav = styled(Grid)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[700]}`,
  paddingTop: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    paddingTop: theme.spacing(3),
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(2),
  },
  [theme.breakpoints.down('xs')]: {
    paddingTop: theme.spacing(1),
  },
}));

const FooterList = styled(Box)(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  margin: 0,
  flexDirection: 'row',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const FooterItem = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.spacing(4),
  marginBottom: theme.spacing(0),
  '&:last-child': {
    marginRight: 0,
  },
  [theme.breakpoints.down('xs')]: {
    marginBottom: theme.spacing(2),
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[100],
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'all 0.2s',
  display: 'inline-block',
  '&:hover': {
    color: theme.palette.secondary.main,
    boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.4)',
    transform: 'rotate(5deg) scale(1.3)',
    [theme.breakpoints.down('md')]: {
      transform: 'rotate(3deg) scale(1.2)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'rotate(2deg) scale(1.1)',
    },
  },
}));

const Footer = () => (
  <FooterContainer component="footer">
    <LogoBox>
      <img src={travelLogo} alt="Full logo" style={{ width: '8rem' }} />
    </LogoBox>
    <FooterNav container justifyContent="center">
      <FooterList component="ul">
        {['Company', 'Contact us', 'Careers', 'Privacy policy', 'Terms'].map((text) => (
          <FooterItem component="li" key={text}>
            <FooterLink href="#">{text}</FooterLink>
          </FooterItem>
        ))}
      </FooterList>
    </FooterNav>
  </FooterContainer>
);

export default Footer;
