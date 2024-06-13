import logo from './logo.svg';
import './App.css';
// import main from './assets/scss/main.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Stories from './components/Stories';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Features/>
    <Stories/>
    <Footer/>
    </div>
  );
}

export default App;
