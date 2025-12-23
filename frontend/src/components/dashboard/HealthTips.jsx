// Animation library for smooth transitions
import { motion } from "framer-motion";
// React Router for navigation links
import { Link } from "react-router-dom";
// Icon components from Lucide library
import { Award, ThumbsUp, Plus, ArrowRight } from "lucide-react";

// HealthTips Component - Displays health recommendations and tips for users
const HealthTips = () => {
  // Array of health tips with metadata for display
  // TODO: In production, this should come from backend API
  const healthTips = [
    {
      id: 1,
      title: "Stay Hydrated",
      description:
        "Aim to drink at least 8 glasses of water daily to maintain optimal hydration and support your overall health.",
      icon: <ThumbsUp size={18} />,
      color: "blue",
    },
    {
      id: 2,
      title: "Take Regular Breaks",
      description:
        "If you work at a desk, follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.",
      icon: <ThumbsUp size={18} />,
      color: "green",
    },
  ];

  return (
    // Main container with fade-in animation from bottom
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and below
      animate={{ opacity: 1, y: 0 }} // Final state: visible and in position
      transition={{ duration: 0.3 }} // Animation timing
      className="card p-6 hover:shadow-lg transition-shadow bg-white rounded-lg"
    >
      {/* Header Section with title and icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* Animated award icon with pulse and rotation effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1], // Pulsing animation
              rotate: [0, 10, 0], // Gentle rotation
            }}
            transition={{ duration: 3, repeat: Infinity }} // Infinite loop
            className="bg-amber-100 text-amber-600 p-2 rounded-lg"
          >
            <Award size={18} />
          </motion.div>
          <h3 className="text-lg font-semibold ml-3">Health Tips For You</h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ></motion.div>
      </div>
      {/* Tips List - Maps through healthTips array and renders each tip */}
      <div className="space-y-4">
        {healthTips.map((tip) => (
          // Individual tip card with hover effect
          <motion.div
            key={tip.id}
            whileHover={{ scale: 1.02 }}
            className={`bg-gradient-to-r from-${tip.color}-50 to-${tip.color}-100 p-4 rounded-lg border border-${tip.color}-200 relative overflow-hidden`}
          >
            {/* Background Decorative Circle */}
            <div
              className={`absolute top-0 right-0 w-16 h-16 rounded-full bg-${tip.color}-200/40 -mr-6 -mt-6 z-0`}
            ></div>

            {/* Tip Content */}
            <div className="relative z-10 flex items-start">
              <motion.div
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className={`text-${tip.color}-600 mr-3 mt-1`}
              >
                {tip.icon}
              </motion.div>
              <div>
                <h4 className={`font-medium text-${tip.color}-800`}>
                  {tip.title}
                </h4>
                <p className={`text-sm text-${tip.color}-700 mt-1`}>
                  {tip.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-2 text-xs bg-${tip.color}-200 text-${tip.color}-700 px-3 py-1 rounded-full flex items-center w-max`}
                >
                  <Plus size={12} className="mr-1" /> Add to daily goals
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HealthTips;
