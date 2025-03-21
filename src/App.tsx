import { Toaster as RadixToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useMemo } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/Index"));
const LearnPage = lazy(() => import("./pages/Learn"));
const TravelPage = lazy(() => import("./pages/Travel"));
const PlacesPage = lazy(() => import("./pages/Places"));
const AreasPage = lazy(() => import("./pages/Areas"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RadixToaster />
        <SonnerToaster />
        <BrowserRouter>
          <>
            <Navbar />
            <main className="flex-grow min-h-screen flex flex-col">
              <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/learn" element={<LearnPage />} />
                  <Route path="/travel" element={<TravelPage />} />
                  <Route path="/places" element={<PlacesPage />} />
                  <Route path="/areas" element={<AreasPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
