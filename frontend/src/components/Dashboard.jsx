// Dashboard component - Main landing page after user login
// Displays health features, news, and personalized welcome message
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";

// Import dashboard sub-components
import WelcomeBanner from "./dashboard/WelcomeBanner";
import NewsCarousel from "./dashboard/NewsCarousel";
import FeatureCard from "./dashboard/FeatureCard";
import HealthTips from "./dashboard/HealthTips";

const Dashboard = () => {
  // State to store the logged-in user's name
  const [userName, setUserName] = useState("");

  // Effect to retrieve user information from localStorage on component mount
  useEffect(() => {
    // Get user data from localStorage
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      setUserName(user.name || "Guest");
    }
  }, []);

  // Features data - Configuration for the dashboard feature cards
  // Each feature represents a major functionality of the Medilink app
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

  // Render the dashboard layout with all components
  return (
    <div className="space-y-6 pt-16">
      {/* Welcome Banner - Displays personalized greeting */}
      <WelcomeBanner username={userName} />

      {/* News Carousel - Shows latest health news and updates */}
      <NewsCarousel />

      {/* Features Section - Grid of available features */}
      {/* Responsive grid: 1 column on mobile, 2 columns on medium+ screens */}
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
