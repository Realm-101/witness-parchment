import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Covenant from "./pages/Covenant";
import Assessment from "./pages/Assessment";
import Verdict from "./pages/Verdict";
import Dialogues from "./pages/Dialogues";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/covenant" element={<Covenant />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/verdict" element={<Verdict />} />
            <Route path="/dialogues" element={<Dialogues />} />
            <Route path="/archive" element={<Archive />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
