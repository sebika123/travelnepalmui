import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Stories from './components/Stories';
import Footer from './components/Footer';
import { Box } from '@mui/material';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Box component="i" className="feature-box-icon icon-basic-world"></Box>
    <Features/>
    <Stories/>
    <Footer/>
    </div>
  );
}

export default App;
