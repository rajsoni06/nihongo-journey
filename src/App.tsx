
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CherryBlossomsEffect from "./components/CherryBlossomsEffect";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Index";
import LearnPage from "./pages/Learn";
import TravelPage from "./pages/Travel";
import PlacesPage from "./pages/Places";
import AreasPage from "./pages/Areas";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <CherryBlossomsEffect />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/learn" element={<LearnPage />} />
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/places" element={<PlacesPage />} />
              <Route path="/areas" element={<AreasPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
