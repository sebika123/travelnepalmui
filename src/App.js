import { ThemeProvider } from "@mui/material/styles";
import globalTheme from "./theme/theme";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />

      <div className="App">
        <Navbar />
        <Banner />
        <Features />

        <Stories />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
