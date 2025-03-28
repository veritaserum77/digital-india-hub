
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DigitalGoodTemplate from "./pages/DigitalGoodTemplate";
import NotFound from "./pages/NotFound";

// List of all digital goods for route generation
const digitalGoods = [
  "digilocker", "upi", "umang", "api-setu", "e-courts", "sidh", "e-office", 
  "aarogya-setu", "esanjeevani", "poshan-tracker", "cowin", "diksha", "gem", 
  "e-hospital", "ncd-platform", "aadhaar", "abdm", "bharatnet", "pm-wani", 
  "cert-in", "digiyatra", "swayam", "ndl", "parivahan", "fastag", 
  "vahan-sarathi", "passport", "enam", "kisan-suvidha", "rapdrp"
];

const App = () => {
  // Create QueryClient inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dynamic routes for all digital goods */}
            {digitalGoods.map((good) => (
              <Route key={good} path={`/${good}`} element={<DigitalGoodTemplate />} />
            ))}
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
