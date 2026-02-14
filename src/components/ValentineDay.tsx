import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Home } from "lucide-react";

export function ValentineDay() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 relative overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <button onClick={() => navigate(-1)} className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <ArrowLeft className="text-red-500" size={24} />
        </button>
        <button onClick={() => navigate("/")} className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <Home className="text-red-500" size={24} />
        </button>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 2 === 0 ? (
              <Heart className="text-red-300 fill-red-300" size={20 + Math.random() * 20} />
            ) : (
              <span className="text-3xl">🌹</span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          {/* Center Content */}
          <div className="text-center mb-12">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-9xl mb-6"
            >
              🎂
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl text-red-600 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Happy Valentine's Day!
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl text-pink-700 italic mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "You make every day feel like Valentine's Day, Yatri! ❤️"
            </motion.p>
          </div>

          {/* Message Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-pink-300 max-w-3xl mx-auto"
          >
            <div className="space-y-6 text-pink-800 text-lg md:text-xl leading-relaxed text-center italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              <p>
                Today is special because it's a day to celebrate us, our love, and all the beautiful moments we've shared together.
              </p>
              <p>
                From the first time we met to every laugh, every hug, every moment - you've made my life so much brighter.
              </p>
              <p className="text-2xl text-red-600 font-bold">
                You are my Valentine today and every day. 💕
              </p>
              <p>
                Thank you for being you, for loving me, and for making every moment magical.
              </p>
            </div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center gap-4 mt-8"
            >
              <span className="text-5xl">🌹</span>
              <span className="text-5xl">💖</span>
              <span className="text-5xl">🌹</span>
            </motion.div>
          </motion.div>

          {/* Bottom Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-2xl text-red-600 mt-8 mb-12 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            I love you more than words can say ❤️
          </motion.p>
        </motion.div>
      </div>

      {/* Sliding Image Gallery Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative w-full h-48 overflow-hidden border-t-4 border-pink-300 shadow-2xl bg-white"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex h-full"
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex h-full">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div
                  key={`${setIndex}-${num}`}
                  className="relative flex-shrink-0 h-full w-64"
                >
                  <img
                    src={`/memories/pic${num}.jpeg`}
                    alt={`Memory ${num}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
