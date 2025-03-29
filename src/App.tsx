import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./pages/Index"));
const LearnPage = lazy(() => import("./pages/Learn"));
const TravelPage = lazy(() => import("./pages/Travel"));
const PlacesPage = lazy(() => import("./pages/Places"));
const AreasPage = lazy(() => import("./pages/Areas"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Chatbot = lazy(() => import("./pages/Chatbot")); // Lazy load the Chatbot component

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={null}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
          <Chatbot /> {/* Chatbot added here */}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;