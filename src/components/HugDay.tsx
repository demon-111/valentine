import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Home } from "lucide-react";

export function HugDay() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 relative overflow-hidden">
      {/* Floating hugs emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🤗
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowLeft className="text-rose-500" size={24} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Home className="text-rose-500" size={24} />
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
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl mb-6"
          >
            🤗
          </motion.div>
          <h1 className="text-5xl md:text-7xl text-rose-600 mb-6 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hug Day 🤗
          </h1>
          <p className="text-xl md:text-2xl text-rose-500 italic">
            February 12th - Today!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-rose-300 max-w-2xl"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h2 className="text-3xl text-rose-700 mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wrapped in Your Love, Baby 🤗
              </h2>
            </motion.div>
          </div>

          {/* Tenor GIF */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <iframe
                src="https://tenor.com/embed/22343397"
                width="300"
                height="300"
                style={{ border: 'none', maxWidth: '100%', borderRadius: '16px' }}
                frameBorder="0"
                allowFullScreen
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-2 bg-rose-200 rounded-2xl -z-10 blur-xl"
              />
            </div>
          </motion.div>

          <div className="space-y-6 text-rose-800 text-lg leading-relaxed">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-rose-50 p-6 rounded-xl border-2 border-rose-200 shadow-md"
            >
              <p className="italic text-center text-xl">
                "Your hugs are my safe haven, my comfort zone, and my favorite place in the entire world, baby."
              </p>
            </motion.div>

            <p className="italic text-center">
              In your arms, all my worries fade away. Your embrace tells me everything will be okay.
            </p>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl border-2 border-rose-200">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-7xl mb-4"
              >
                🫂
              </motion.div>
              <p className="text-center text-2xl text-rose-700 mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                "I'm sending you a virtual hug that wraps around you with all my love!"
              </p>
              <p className="text-center text-rose-600 italic">
                (But I can't wait to give you a real one!)
              </p>
            </div>

            <p className="text-center text-xl italic">
              Every hug from you feels like coming home. 🏡💝
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <Heart className="text-rose-400 fill-rose-400 animate-pulse" size={24} />
            <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={32} />
            <Heart className="text-rose-400 fill-rose-400 animate-pulse" size={24} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
