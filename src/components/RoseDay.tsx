import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Flower2, Heart, ArrowLeft, Home } from "lucide-react";

export function RoseDay() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-rose-100 to-pink-100 relative overflow-hidden">
      {/* Falling roses animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -50,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight + 50,
              rotate: 360,
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Flower2 className="text-red-400 fill-red-400" size={24 + Math.random() * 24} />
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowLeft className="text-red-500" size={24} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Home className="text-red-500" size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Flower2 className="text-red-500 fill-red-500" size={120} />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Heart className="text-red-400 fill-red-400" size={40} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl text-red-600 mb-6 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Rose Day 🌹
          </h1>
          <p className="text-xl md:text-2xl text-red-500 mb-4 italic">
            February 7th
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-red-200 max-w-2xl mt-8"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="text-6xl mb-4">💐</div>
            </motion.div>
            <h2 className="text-3xl text-red-700 mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Bouquet of Love
            </h2>
          </div>

          {/* Tenor GIF */}
          <div className="mb-8 flex justify-center">
            <iframe
              src="https://tenor.com/embed/3346386468613198472"
              width="300"
              height="300"
              style={{ border: 'none', maxWidth: '100%', borderRadius: '16px' }}
              frameBorder="0"
              allowFullScreen
            />
          </div>

          <div className="space-y-6 text-red-800 text-lg leading-relaxed">
            <p className="italic">
              Like a rose blooms with beauty and grace, my love for you grows more beautiful with each passing day.
            </p>
            <p className="italic">
              Every petal represents a moment we've shared, every thorn a challenge we've overcome together, and every fragrance a memory that makes my heart smile.
            </p>
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200 mt-6">
              <p className="text-center text-2xl italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                "If I had a rose for every time I thought of you, I'd be walking through my garden forever, baby." 🌹
              </p>
            </div>
            <p className="text-center text-xl mt-6">
              You are my forever rose, baby. 💝
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <Heart className="text-red-400 fill-red-400" size={24} />
            <Heart className="text-red-500 fill-red-500" size={32} />
            <Heart className="text-red-400 fill-red-400" size={24} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
