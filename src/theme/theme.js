import { createTheme } from '@mui/material/styles';
import { keyframes } from 'styled-components';


const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;


const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#FF4081',
    },
  },
  button:{
    marginTop:"30px",

  },
  typography: {
    h6: {
      fontSize: '1.25rem',
    },
  },
  animations: {
    moveInLeft,
    moveInBottom,
  },
});

export default theme;
