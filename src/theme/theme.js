import { createTheme } from '@mui/material/styles';
import { moveInLeft, moveInBottom } from './customTheme/animation';
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
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            '@keyframes moveInLeft': moveInLeft,
            '@keyframes moveInBottom': moveInBottom,
          },
        },
      },
    },
  },
});

export default theme;
