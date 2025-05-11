import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import { ThemeProvider } from "./context/ThemeContext";

const MainContent = lazy(() => import("./components/MainContent"));
const Chatbot = lazy(() => import("./components/Chatbot"));

const LoadingSpinner = () => (
  <div className="h-screen w-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

const Home = () => (
  <>
    <HeroSection />
    <FeatureSection />
    <Suspense fallback={<LoadingSpinner />}>
      <MainContent />
    </Suspense>
  </>
);

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900">
          <Navbar />
          <div className="max-w-7xl mx-auto pt-20 px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chatbot" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Chatbot />
                </Suspense>
              } />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
