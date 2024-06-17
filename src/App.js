
import { ThemeProvider, createTheme } from '@mui/material/styles';
import globalTheme from './theme/theme';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Stories from './components/Stories';
import Footer from './components/Footer';

const storiesTheme = createTheme({
  typography: {
    fontFamily: 'Courier New, monospace',
    body1: {
      fontSize: '0.875rem',
      fontWeight: 300,
    },
   
  },
});

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
        <div className="App">
    <Navbar/>
    <Banner/>
    <Features/>
    <ThemeProvider theme={storiesTheme}>
    <Stories/>
    </ThemeProvider>
          <Footer />
      
    </div>
     </ThemeProvider>
  
  );
}

export default App;
