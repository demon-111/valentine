import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, Home, Sparkles } from "lucide-react";

export function AcceptedProposal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          >
            <Heart className="text-pink-300 fill-pink-300" size={20 + Math.random() * 30} />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => navigate("/")}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Home className="text-pink-500" size={24} />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center max-w-3xl"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-9xl mb-8"
          >
            💕
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl text-pink-600 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            I Already Knew You Love Me! 💖
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border-4 border-pink-300 mt-8"
          >
            {/* Tenor GIF */}
            <div className="mb-8 flex justify-center">
              <iframe
                src="https://tenor.com/embed/16507300"
                width="300"
                height="344"
                style={{ border: 'none', maxWidth: '100%' }}
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <div className="space-y-6 text-pink-800 text-lg leading-relaxed">
              <p className="text-2xl italic text-center">
                Of course you said yes! How could you resist? 😄
              </p>
              <div className="bg-pink-50 p-8 rounded-xl border-2 border-pink-200 my-6">
                <p className="text-center text-3xl mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Thank you for choosing me, Yatri! ❤️
                </p>
                <p className="text-center text-xl text-pink-700">
                  You've made me the happiest person in the world!
                </p>
              </div>
              <p className="text-center text-2xl italic">
                Now and forever, we're together! 💍
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Sparkles className="text-pink-500" size={24} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
