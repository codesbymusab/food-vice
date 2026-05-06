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
import { CommunitiesPage } from "./components/Pages/Community/CommunitiesPage";
import { ThreadDetailPage } from "./components/Pages/Community/Threads/ThreadDetailPage";
import { RestaurantDetailPage } from "./components/Pages/RestaurantDetail/RestaurantDetailPage";
import { CreateCommunityPage } from "./components/Pages/Community/CreateCommunityPage";
import ExplorePage from "./components/Pages/Explore/ExplorePage";
import { CommunityDetailPage } from "./components/Pages/Community/CommunityDetailPage";
import { CreateThreadPage } from "./components/Pages/Community/Threads/CreateThreadPage";
import { PublicRoute } from "./components/PublicRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { OfflineScreen } from "./components/Shared/Feedback";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("slideInRight");

  useEffect(() => {
    if (location !== displayLocation) {
      if (displayLocation.pathname === "/auth/login" && location.pathname === "/auth/signup") {
        setTransitionStage("slideOutLeft");
      } else if (displayLocation.pathname === "/auth/signup" && location.pathname === "/auth/login") {
        setTransitionStage("slideOutRight");
      }
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`page ${transitionStage}`}
      onAnimationEnd={() => setDisplayLocation(location)}
    >
      <Routes location={displayLocation}>
        
        <Route index element={<SigninPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
  
      </Routes>
    </div>
  );
}

function MainLayout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes location={location}>
        
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile/:id" element={<UserProfilePage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/community" element={<CommunitiesPage />} />
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        <Route path="/community/:id/:threadId" element={<ThreadDetailPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDeatilPage />} />
      
        
        <Route path="/restaurant/:id" element={<RestaurantDetailPage key={location.pathname}  />} />
        <Route path="/community/create" element={<CreateCommunityPage />} />
        <Route path="/community/:id/create-thread" element={<CreateThreadPage />} />

      </Routes>
      <Footer />
    </>

  )
}

function App() {
  const [isOnline, setIsOnline] = useState(() => typeof navigator !== "undefined" ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return <OfflineScreen />;
  }

  return (

    <Routes >

      

      <Route element={<PublicRoute />}>
        <Route path="/auth/*" element={<AnimatedRoutes />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/*" element={<MainLayout />} />
      </Route>

    </Routes>

  )
}

export default App
