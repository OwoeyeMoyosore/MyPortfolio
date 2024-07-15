import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import MainContent from "./components/mainContent";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <NavBar />
      <MainContent />
    
    </div>
  );
}

export default App;
