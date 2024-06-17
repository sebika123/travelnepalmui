
import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
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
