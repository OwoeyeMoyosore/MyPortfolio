import { lazy, Suspense, useEffect } from "react";
import "./App.css";
// import NavBar from "./components/Navbar";
// import MainContent from "./components/mainContent";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./custom/loader/main";

const NavBar = lazy(() => import("./components/Navbar"));
const MainContent = lazy(() => import("./components/mainContent"));

// function MyComponent() {
//     return (
//         <React.Suspense fallback={<div>Loading...</div>}>
//             <OtherComponent /> // Only loaded when user scrolls down
//         </React.Suspense>
//     );
// }

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Suspense fallback={<Loader/>}>
      <div>
        <NavBar />
        <MainContent />
      </div>
    </Suspense>
  );
}

export default App;
