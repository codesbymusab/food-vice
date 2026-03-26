import { Route, Routes } from "react-router"
import { SigninPage } from "./components/Pages/SigninPage"
import { SignupPage } from "./components/Pages/SignupPage"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("slideInRight");

  useEffect(() => {
    if (location !== displayLocation) {
      
      if (displayLocation.pathname === "/login" && location.pathname === "/signup") {

        setTransitionStage("slideOutLeft");
      } else if (displayLocation.pathname === "/signup" && location.pathname === "/login") {
        setTransitionStage("slideOutRight");
      }
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`page ${transitionStage}`}
      onAnimationEnd={() => {

        setDisplayLocation(location);


      }}
    >
      <Routes>
        <Route path="login" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}



function App() {

  return (


    <AnimatedRoutes />

  )
}

export default App
