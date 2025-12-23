// React core and hooks for state and lifecycle management
import { useState, useEffect } from "react";
// Framer Motion for smooth animations and transitions
import { motion } from "framer-motion";
// React Router for navigation between pages
import { Link } from "react-router-dom";
// Lucide icons for visual elements
import { Stethoscope } from "lucide-react";

// Import dashboard components for modular structure
import WelcomeBanner from "./dashboard/WelcomeBanner";
import NewsCarousel from "./dashboard/NewsCarousel";
import FeatureCard from "./dashboard/FeatureCard";
import HealthTips from "./dashboard/HealthTips";

// Main Dashboard component - Central hub for user health management
const Dashboard = () => {
  // State to store the current user's name
  const [userName, setUserName] = useState("");

  // Effect hook to load user data when component mounts
  useEffect(() => {
    // Retrieve and parse user data from localStorage
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      setUserName(user.name || "Guest");
    }
  }, []);

  // Array of feature cards displaying different dashboard functionalities
  // Each feature represents a key capability of the health platform
  const features = [
    {
      id: 1,
      title: "Know About Your Food",
      description:
        "Analyze if a food is suitable for your health conditions. Upload an image of ingredients and get personalized recommendations.",
      icon: "Utensils",
      color: "teal",
      link: "/food-analyzer",
      linkText: "Analyze Food Now",
    },
    {
      id: 2,
      title: "Health Insights",
      description:
        "View your personalized health trends and insights based on your medical history and vital signs.",
      icon: "TrendingUp",
      color: "blue",
      link: "/insights",
      linkText: "View Insights",
    },

    {
      id: 3,
      title: "Sentiment Analysis",
      description:
        "Analyze your sentiments and emotions based on your food choices. Get insights into how your diet affects your mood and well-being.",
      icon: "TrendingUp",
      color: "orange",
      link: "/sentiment-analysis",
      linkText: "Analyze Sentiment Now",
    },
  ];

  return (
    <div className="space-y-6 pt-16">
      {/* Welcome Banner */}
      <WelcomeBanner username={userName} />

      {/* News Carousel */}
      <NewsCarousel />

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
            link={feature.link}
            linkText={feature.linkText}
          />
        ))}
      </div>

      {/* Health Tips */}
      <HealthTips />
    </div>
  );
};


//nothing changed

export default Dashboard;
