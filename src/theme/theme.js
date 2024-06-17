
import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
    palette: {
        primary: {
          main: '#1976d2', //primary
        },
        secondary: {
          main: '#dc004e', //secondary
        },
        background: {
          default: '#f5f5f5', // default
        },
      },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },

  },


});

export default globalTheme;
