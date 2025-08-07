import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b
                  from-blue-200 to-blue-400 gap-6">
      
      {/* quyosh */}
      <motion.div
        className="w-20 h-20 rounded-full bg-yellow-400 shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />

      {/* bulut */}
      <motion.div
        className="w-32 h-20 bg-white rounded-full shadow-md relative"
        animate={{ x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} >
        <div className="absolute w-16 h-16 bg-white rounded-full -left-4 top-2 shadow-md"></div>
        <div className="absolute w-16 h-16 bg-white rounded-full -right-4 top-2 shadow-md"></div>
      </motion.div>

      {/* Matn */}
      <p className="text-white text-lg font-medium tracking-wide animate-pulse">
        Loading weather data...
      </p>
    </div>
  );
};

export default Loading;
