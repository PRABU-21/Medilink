// React hooks for state and lifecycle management
import { useState, useEffect } from "react";
// React Router components for routing and navigation
import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
// Framer Motion for smooth animations
import { motion } from "framer-motion";
// Lucide icon library imports for UI elements
import {
  Menu,
  X,
  Home,
  Users,
  Calendar,
  Settings,
  Bell,
  LogOut,
  Heart,
  User,
} from "lucide-react";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiWorldhealthorganization } from "react-icons/si";
import { IoFastFoodOutline } from "react-icons/io5";
import GoogleTranslate from "./food-analyzer/GoogleTranslate";

// Layout Component - Main application layout wrapper with sidebar and navigation
// Handles responsive design and provides consistent structure across all pages
const Layout = ({ onLogout }) => {
  const navigate = useNavigate();
  // State to track sidebar open/closed status
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // State to detect mobile vs desktop view
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  // State to control Google Translate widget visibility
  const [showTranslator, setShowTranslator] = useState(true);

  // Effect to handle responsive sidebar behavior based on screen size
  // Effect to handle responsive sidebar behavior based on screen size
  useEffect(() => {
    const checkScreenSize = () => {
      // Update mobile flag based on viewport width
      setIsMobile(window.innerWidth < 768);
      // Auto-close sidebar on mobile, auto-open on desktop
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkScreenSize();
    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Effect to control translator visibility on route change
  // Prevents multiple Google Translate widget instances
  useEffect(() => {
    // Hide translator and show it only after a short delay
    // This prevents multiple instances from being created
    setShowTranslator(false);
    const timer = setTimeout(() => {
      setShowTranslator(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Handler function for user logout
  const handleLogout = () => {
    onLogout();
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const sidebarItems = [
    { title: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    {
      title: "Food Analyzer",
      icon: <IoFastFoodOutline size={20} />,
      path: "/food-analyzer",
    },
    {
      title: "Health Insights",
      icon: <SiWorldhealthorganization size={20} />,
      path: "/health-insights",
    },
    {
      title: "Sentiment Analysis",
      icon: <DiGoogleAnalytics size={20} />,
      path: "/sentiment-analysis",
    },
    { title: "Profile", icon: <User size={20} />, path: "/profile" },
    // { title: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.div
        className={`fixed md:relative z-20 bg-white shadow-lg h-full ${
          isSidebarOpen ? "w-64" : "w-0 md:w-16"
        } transition-all duration-300 overflow-hidden`}
        animate={{
          width: isSidebarOpen
            ? isMobile
              ? "250px"
              : "250px"
            : isMobile
            ? "0px"
            : "64px",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center"
              >
                <span className="h-8 w-8 bg-teal-600 rounded-md flex items-center justify-center">
                  <Heart size={20} className="text-white" />
                </span>
                <span className="ml-2 text-xl font-semibold text-gray-800">
                  MediCare
                </span>
              </motion.div>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`${
                isMobile ? "" : "hidden md:block"
              } p-1 rounded-md hover:bg-gray-100`}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <nav>
              {sidebarItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center px-4 py-3 ${
                    location.pathname === item.path
                      ? "bg-teal-50 text-teal-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center justify-center">
                    {item.icon}
                  </span>
                  {isSidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="ml-3"
                    >
                      {item.title}
                    </motion.span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Only show translator when sidebar is open and showTranslator is true */}
            {isSidebarOpen && showTranslator && (
              <div className="mt-4 px-4">
                <GoogleTranslate />
              </div>
            )}
          </div>
          <div className="border-t p-4">
            <button
              onClick={handleLogout}
              className={`flex items-center ${
                isSidebarOpen ? "w-full px-4" : "justify-center w-full"
              } py-2 text-gray-600 hover:bg-gray-100 rounded-md`}
            >
              <LogOut size={20} />
              {isSidebarOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="ml-3"
                >
                  Logout
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b px-4 py-3 flex items-center justify-between fixed w-full z-10">
          <div className="flex items-center">
            {isMobile && (
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="mr-4 p-1 rounded-md hover:bg-gray-100"
              >
                <Menu size={20} />
              </button>
            )}
            <h1 className="text-xl font-semibold text-gray-800">
              {sidebarItems.find((item) => item.path === location.pathname)
                ?.title || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-1 rounded-full hover:bg-gray-100">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={handleProfileClick}
              className="h-8 w-8 bg-teal-100 rounded-full flex items-center justify-center hover:bg-teal-200 transition-colors"
            >
              <User size={16} className="text-teal-600" />
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto px-2 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Layout;
