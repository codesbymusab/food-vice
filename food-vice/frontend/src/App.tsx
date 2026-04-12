import { Route, Routes } from "react-router"
import { SigninPage } from "./components/Pages/SigninPage"
import { SignupPage } from "./components/Pages/SignupPage"
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { HomePage } from "./components/Pages/Home/HomePage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { UserProfilePage } from "./components/Pages/Profile/UserProfilePage";
import { ReelsPage } from "./components/Pages/Reels/ReelsPage";
import {CommunityPage } from "./components/Pages/Community/CommunityPage";
import { CommunityDetailPage } from "./components/Pages/Community/DetailsPage/CommunityDetailPage";
import { RestaurantDeatilPage } from "./components/Pages/RestaurantDetail/RestaurantDetailPage";
import { EditProfilePage } from "./components/Pages/Profile/EditProfilePage";
import { CreateCommunityPage } from "./components/Pages/Community/CreateCommunityPage";
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
       
        <Route index path="login" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}



function App() {

  return (
    <>
      <AnimatedRoutes />
      <Header />

      
      <Routes>

       
        <Route path="home" element={<HomePage />}/>
        <Route path="profile/:id" element={<UserProfilePage />} />
        <Route path="reels" element={<ReelsPage />} />
        <Route path="community" element={<CommunityPage />} /> 
        <Route path="community/:name/:id" element={<CommunityDetailPage />} />
        <Route path="restaurant/:id" element={<RestaurantDeatilPage />} />
        <Route path="profile/:id/edit" element={<EditProfilePage/>}/>
        <Route path="community/create" element={<CreateCommunityPage />} />
      </Routes>
      <Footer />
     
    </>
    

  )
}

export default App
