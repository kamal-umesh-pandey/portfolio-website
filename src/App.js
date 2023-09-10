import './App.css';
import About from './components/About/About';
import Intro from "./components/Intro/Intro"
import ProductList from './components/ProductList/ProductList';
import { useState,useContext , useEffect} from "react";
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import { ThemeContext } from "./context";
import Navbar from './components/Navbar/Navbar';
import ProfessionalSkills from './components/Professional-Skilss/ProfessionalSkills';
import IndustrailSkills from './components/Industrial-Skilss/IndustrailSkills';

function App() {
  const [isLoading, setLoading] = useState(true);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

//SHowing loader on load start
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
//SHowing loader on load End

  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Navbar/>
      <Toggle/>
      <Intro/>
      <About/>
      <ProfessionalSkills/>
      <IndustrailSkills/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
