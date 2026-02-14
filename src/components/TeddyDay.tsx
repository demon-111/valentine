import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Home } from "lucide-react";

export function TeddyDay() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-rose-100 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🧸
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
          <motion.div
            animate={{
              rotate: [0, -5, 5, 0],
              y: [0, -10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl mb-6"
          >
            🧸
          </motion.div>
          <h1 className="text-5xl md:text-7xl text-pink-600 mb-6" style={{ fontFamily: 'cursive' }}>
            Teddy Day 🧸
          </h1>
          <p className="text-xl md:text-2xl text-pink-500 italic">
            February 10th
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-pink-300 max-w-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl text-pink-700 mb-6" style={{ fontFamily: 'cursive' }}>
              A Cuddle for Baby
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
              src="https://tenor.com/embed/9177323695663858864" 
              width="300" 
              height="414" 
              style={{ border: 'none', maxWidth: '100%', borderRadius: '16px' }}
              frameBorder="0"
              allowFullScreen
            />
          </motion.div>

          <div className="space-y-6 text-pink-800 text-lg leading-relaxed">
            <div className="bg-pink-50 p-6 rounded-xl border-2 border-pink-200">
              <p className="italic text-center text-xl">
                "Just like a teddy bear brings comfort and joy, you bring warmth and happiness to my life every single day."
              </p>
            </div>

            <p className="italic text-center">
              When I hug you, I feel safe, loved, and complete. Your embrace is my favorite place in the whole world.
            </p>

            <div className="bg-pink-50 p-8 rounded-xl border-2 border-pink-200 mt-6">
              <p className="text-center text-2xl text-pink-700 mb-4" style={{ fontFamily: 'cursive' }}>
                "I wish I could give you a hug right now and never let go!"
              </p>
              <div className="text-center text-6xl">
                🧸💕🧸
              </div>
            </div>

            <p className="text-center text-xl italic">
              You're my forever cuddle buddy! 🤗
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <Heart className="text-pink-400 fill-pink-400 animate-pulse" size={24} />
            <Heart className="text-pink-500 fill-pink-500 animate-pulse" size={32} />
            <Heart className="text-pink-400 fill-pink-400 animate-pulse" size={24} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
