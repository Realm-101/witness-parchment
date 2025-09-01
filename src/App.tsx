import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AdminRoute from "@/components/auth/AdminRoute";
import Layout from "@/components/layout/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Covenant from "./pages/Covenant";
import Assessment from "./pages/Assessment";
import Verdict from "./pages/Verdict";
import Dialogues from "./pages/Dialogues";
import Archive from "./pages/Archive";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBlogList from "./pages/AdminBlogList";
import AdminBlogEditor from "./pages/AdminBlogEditor";
import AdminUsers from "./pages/AdminUsers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes with layout */}
            <Route path="/" element={<Layout><Landing /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/covenant" element={<Layout><Covenant /></Layout>} />
            <Route path="/assessment" element={<Layout><Assessment /></Layout>} />
            <Route path="/verdict" element={<Layout><Verdict /></Layout>} />
            <Route path="/dialogues" element={<Layout><Dialogues /></Layout>} />
            <Route path="/archive" element={<Layout><Archive /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
            
            {/* Admin routes without main layout */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            <Route path="/admin/users" element={<AdminRoute><AdminUsers /></AdminRoute>} />
            <Route path="/admin/blog" element={<AdminRoute><AdminBlogList /></AdminRoute>} />
            <Route path="/admin/blog/new" element={<AdminRoute><AdminBlogEditor /></AdminRoute>} />
            <Route path="/admin/blog/edit/:id" element={<AdminRoute><AdminBlogEditor /></AdminRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
