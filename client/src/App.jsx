import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useTheme } from "./ThemeContext.jsx";
import SendOTP from "./pages/SendOTP";
import VerifyOTP from "./pages/VerifyOTP";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Router>
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full bg-gray-800 text-white dark:bg-yellow-400 dark:text-black shadow"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/send-otp" element={<SendOTP />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />

        
        {/* Protected Routes */}
        <Route path="/profile" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />
      
      </Routes>
    </Router>
  );
}
