import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Home, Sparkles } from "lucide-react";

export function KissDay() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-red-200 relative overflow-hidden">
      {/* Floating kiss emojis and hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="text-5xl">
              {i % 3 === 0 ? "💋" : i % 3 === 1 ? "💕" : "❤️"}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl mb-6"
          >
            💋
          </motion.div>
          <h1 className="text-5xl md:text-7xl text-red-600 mb-6 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kiss Day 💋
          </h1>
          <p className="text-xl md:text-2xl text-red-500 italic">
            February 13th
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-red-300 max-w-2xl"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-4"
            >
              <Sparkles className="text-red-500" size={48} />
            </motion.div>
            <h2 className="text-3xl text-red-700 mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sealed with Love
            </h2>
          </div>

          {/* Tenor GIF */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <iframe
              src="https://tenor.com/embed/21458020"
              width="300"
              height="319"
              style={{ border: 'none', maxWidth: '100%', borderRadius: '16px' }}
              frameBorder="0"
              allowFullScreen
            />
          </motion.div>

          <div className="space-y-6 text-red-800 text-lg leading-relaxed">
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <p className="italic text-center text-xl">
                "Every kiss from you feels like the first one - magical, electric, and absolutely perfect."
              </p>
            </div>

            <p className="italic text-center">
              Your lips are my favorite destination. Every kiss tells a story of love, passion, and belonging.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg border-2 border-red-200 text-center"
              >
                <div className="text-4xl mb-2">😘</div>
                <p className="text-red-700 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Sweet Kisses</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-pink-100 to-red-100 p-6 rounded-lg border-2 border-red-200 text-center"
              >
                <div className="text-4xl mb-2">💕</div>
                <p className="text-red-700 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Loving Kisses</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg border-2 border-red-200 text-center"
              >
                <div className="text-4xl mb-2">🔥</div>
                <p className="text-red-700 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Passionate Kisses</p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border-2 border-red-200 relative overflow-hidden">
              <motion.div
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-red-300 rounded-xl"
              />
              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-center text-7xl mb-4"
                >
                  💋
                </motion.div>
                <p className="text-center text-2xl text-red-700 mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "Sending you a thousand kisses through this message!"
                </p>
                <p className="text-center text-red-600 italic">
                  Each one filled with all the love in my heart
                </p>
              </div>
            </div>

            <p className="text-center text-xl italic">
              Your kiss is the answer to every question my heart has ever asked. 💋❤️
            </p>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center gap-3 mt-8"
          >
            <Heart className="text-red-400 fill-red-400" size={24} />
            <Heart className="text-red-500 fill-red-500" size={32} />
            <Heart className="text-red-400 fill-red-400" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
