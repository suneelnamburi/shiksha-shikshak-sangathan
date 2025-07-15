
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpSchool from "./pages/SignUpSchool";
import SchoolProfile from "./pages/SchoolProfile";
import PostJob from "./pages/PostJob";
import TestCredentialsPage from "./pages/TestCredentials";
import TeacherProfile from "./pages/TeacherProfile";
import TeacherDashboard from "./pages/TeacherDashboard";
import SchoolDashboard from "./pages/SchoolDashboard";
import InstructionDashboard from "./pages/InstructionDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ApplyNow from "./pages/ApplyNow";
import Subscribe from "./pages/Subscribe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup-school" element={<SignUpSchool />} />
            <Route path="/school-profile" element={<SchoolProfile />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/test-credentials" element={<TestCredentialsPage />} />
            <Route path="/teacher-profile" element={<TeacherProfile />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/school-dashboard" element={<SchoolDashboard />} />
            <Route path="/instruction-dashboard" element={<InstructionDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/apply-now/:jobId?" element={<ApplyNow />} />
            <Route path="/subscribe" element={<Subscribe />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
