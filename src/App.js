
import React from 'react';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#808080',
    },
    background: {
      default: '#f4f4f4',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Footer/>
     
    </ThemeProvider>
  );
};

export default App;
