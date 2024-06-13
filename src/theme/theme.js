import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242', 
    },
    secondary: {
      main: '#FF4081', 
    },
  },
  typography: {
    h6: {
      fontSize: '1.25rem',
    },
  },
});

export default theme;
