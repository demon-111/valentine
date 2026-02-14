import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Home, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function ProposeDay() {
  const navigate = useNavigate();
  const [showProposal, setShowProposal] = useState(false);
  const [swapButtons, setSwapButtons] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Heart className="text-pink-300 fill-pink-300" size={16 + Math.random() * 24} />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowLeft className="text-pink-500" size={24} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Home className="text-pink-500" size={24} />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mb-12"
        >
          <h1 className="text-5xl md:text-7xl text-pink-600 mb-6 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Propose Day 💍
          </h1>
          <p className="text-xl md:text-2xl text-pink-500 italic">
            February 8th
          </p>
        </motion.div>

        {!showProposal ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowProposal(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity },
              }}
              className="bg-gradient-to-br from-pink-500 to-rose-500 text-white px-16 py-10 rounded-full shadow-2xl text-3xl font-bold border-4 border-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Open the Ring Box 💝
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl w-full"
          >
            {/* Ring animation */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center border-4 border-white shadow-2xl">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="text-yellow-600" size={48} />
                  </motion.div>
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 bg-yellow-300/30 rounded-full"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border-4 border-pink-300"
            >
              <h2 className="text-4xl text-pink-700 mb-8 text-center italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Yatri, Will You Be Mine Forever? 💕
              </h2>

              {/* Tenor GIF */}
              <div className="mb-8 flex justify-center">
                <iframe
                  src="https://tenor.com/embed/15531717477912991370"
                  width="300"
                  height="300"
                  style={{ border: 'none', maxWidth: '100%' }}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

              <div className="space-y-6 text-pink-800 text-lg leading-relaxed">
                <p className="italic text-center">
                  Every day with you feels like a dream come true.
                </p>
                <p className="italic text-center">
                  You make me laugh when I want to cry, you lift me up when I'm down, and you love me in ways I never knew were possible.
                </p>
                <div className="bg-pink-50 p-8 rounded-xl border-2 border-pink-200 my-6">
                  <p className="text-center text-2xl mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                    I want to wake up next to you every morning, hold your hand through every adventure, and grow old with you.
                  </p>
                  <p className="text-center text-3xl text-pink-600 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Be mine, today and always? 💍
                  </p>
                </div>
                <p className="text-center text-xl">
                  You're my always and forever. ❤️
                </p>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                <Heart className="text-pink-400 fill-pink-400 animate-pulse" size={28} />
                <Heart className="text-pink-500 fill-pink-500 animate-pulse" size={36} />
                <Heart className="text-pink-400 fill-pink-400 animate-pulse" size={28} />
              </div>

              {/* Yes/No Buttons */}
              <div className="flex justify-center gap-6 mt-10">
                <motion.button
                  key={swapButtons ? "no-left" : "yes-left"}
                  initial={{ x: swapButtons ? 250 : 0 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onClick={() => swapButtons ? setSwapButtons(false) : navigate("/accepted-proposal")}
                  onAnimationComplete={() => {
                    if (swapButtons) {
                      setTimeout(() => navigate("/accepted-proposal"), 500);
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={swapButtons ? "bg-gray-300 text-gray-700 px-12 py-4 rounded-full text-2xl font-bold shadow-lg" : "bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-lg"}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {swapButtons ? "No" : "Yes! 💕"}
                </motion.button>
                <motion.button
                  key={swapButtons ? "yes-right" : "no-right"}
                  initial={{ x: swapButtons ? -250 : 0 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onClick={() => setSwapButtons(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={swapButtons ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-4 rounded-full text-2xl font-bold shadow-lg" : "bg-gray-300 text-gray-700 px-12 py-4 rounded-full text-2xl font-bold shadow-lg"}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {swapButtons ? "Yes! 💕" : "No"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
