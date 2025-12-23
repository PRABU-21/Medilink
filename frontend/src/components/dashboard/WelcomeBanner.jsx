// Framer Motion for entrance animations
import { motion } from "framer-motion";
// Stethoscope icon from Lucide icons library
import { Stethoscope } from "lucide-react";

// Welcome Banner Component - Displays personalized greeting to user
// Props: username - the name of the logged-in user
const WelcomeBanner = ({ username }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in and move to position
      transition={{ duration: 0.3 }} // Animation duration
      className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white shadow-lg"
    >
      {/* Container for welcome message and icon */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Welcome back, {username}!</h2>
          <p className="opacity-90">Here's your health overview for today.</p>
        </div>
        {/* Animated stethoscope icon with rotation and scale effect */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0], // Wiggle animation
            scale: [1, 1.1, 1], // Pulse effect
          }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className="bg-white/20 p-4 rounded-full"
        >
          <Stethoscope size={32} className="text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;
