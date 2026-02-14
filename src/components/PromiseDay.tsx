import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HandHeart, Heart, ArrowLeft, Home, Check } from "lucide-react";

export function PromiseDay() {
  const navigate = useNavigate();

  const promises = [
    "I promise to love you unconditionally, today and always",
    "I promise to support your dreams and celebrate your victories",
    "I promise to be your shoulder to lean on in tough times",
    "I promise to make you laugh every single day",
    "I promise to be honest and transparent with you",
    "I promise to grow with you and learn from our experiences",
    "I promise to cherish every moment we spend together",
    "I promise to be your best friend and partner for life",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <HandHeart className="text-purple-300" size={32 + Math.random() * 32} />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowLeft className="text-purple-500" size={24} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Home className="text-purple-500" size={24} />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <HandHeart className="text-purple-600" size={100} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl text-purple-600 mb-6" style={{ fontFamily: 'cursive' }}>
            Promise Day 🤝
          </h1>
          <p className="text-xl md:text-2xl text-purple-500 italic">
            February 11th
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-purple-300 max-w-3xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl text-purple-700 mb-4" style={{ fontFamily: 'cursive' }}>
              My Promises to You 💝
            </h2>
            <p className="text-purple-600 italic">
              These are not just words, but commitments from my heart
            </p>
          </div>

          <div className="space-y-4">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-2 border-purple-200 shadow-md flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>
                </div>
                <p className="text-purple-800 text-lg flex-1" style={{ fontFamily: 'cursive' }}>
                  {promise}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200 mt-8">
            <p className="text-center text-2xl text-purple-700 mb-4" style={{ fontFamily: 'cursive' }}>
              "I intend to keep every single one of these promises for the rest of my life."
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <Heart className="text-purple-500 fill-purple-500" size={24} />
              <Heart className="text-pink-500 fill-pink-500" size={32} />
              <Heart className="text-purple-500 fill-purple-500" size={24} />
            </div>
          </div>

          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center text-2xl text-purple-700 mt-8 italic"
          >
            Forever and always yours! 💕
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
