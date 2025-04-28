import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded Pages
const HomePage = lazy(() => import("./pages/Index"));
const LearnPage = lazy(() => import("./pages/Learn"));
const TravelPage = lazy(() => import("./pages/Travel"));
const PlacesPage = lazy(() => import("./pages/Places"));
const AreasPage = lazy(() => import("./pages/Areas"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Chatbot = lazy(() => import("./pages/Chatbot"));

// Lazy-loaded Components
const IndiansInJapan = lazy(() => import("./components/IndiansInJapan"));
const YouTuberDetails = lazy(() => import("./components/YouTuberDetails"));

// Query Client Initialization
const queryClient = new QueryClient();

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* New Routes */}
        <Route path="/indians-in-japan" element={<IndiansInJapan />} />
        <Route path="/youtubers/:id" element={<YouTuberDetails />} />

        {/* Catch-all Route (must remain last) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

// App Component
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast Notifications */}
        <Toaster />
        <Sonner />

        {/* Router Setup */}
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
              <Suspense fallback={<div>Loading...</div>}>
                <AnimatedRoutes />
              </Suspense>
            </main>

            {/* Footer */}
            <Footer />

            {/* Chatbot */}
            <Chatbot />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;