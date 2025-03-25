import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Flower() {
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    setTimeout(() => setGrown(true), 1000); // Delayed growth effect
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-green-400 p-5">
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6 text-center">
        To My Beautiful Wife
      </h1>
      <p className="text-lg md:text-xl text-gray-800 text-center max-w-2xl mb-8">
        Like a flower blooming in the gentle embrace of the sun, your love fills my world with beauty and warmth. Every moment with you is a garden of joy, and I cherish you endlessly.
      </p>
      <div className="relative w-40 h-60 flex items-end justify-center">
        {/* Stem */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: grown ? 150 : 0 }}
          transition={{ duration: 3 }}
          className="w-2 bg-green-600 absolute bottom-0"
        />
        {/* Flower */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: grown ? 1 : 0 }}
          transition={{ duration: 2, delay: 3 }}
          className="absolute bottom-40 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-xl"
        >
          <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
}
