import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Candy, Heart, ArrowLeft, Home } from "lucide-react";

export function ChocolateDay() {
  const navigate = useNavigate();

  const chocolateMessages = [
    "You're sweeter than the sweetest chocolate! 🍫",
    "Life with you is like a box of chocolates - always delightful! 💝",
    "You melt my heart like chocolate melts on my tongue! 💕",
    "Every moment with you is a sweet treat! 🍬",
    "You're the sweetness in my life! ❤️",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 relative overflow-hidden">
      {/* Floating chocolates */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Candy className="text-amber-700" size={24 + Math.random() * 24} />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowLeft className="text-amber-700" size={24} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Home className="text-amber-700" size={24} />
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
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Candy className="text-amber-700" size={100} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl text-amber-800 mb-6" style={{ fontFamily: 'cursive' }}>
            Chocolate Day 🍫
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 italic">
            February 9th
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-amber-300 max-w-2xl"
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🍫</div>
            <h2 className="text-3xl text-amber-800 mb-4" style={{ fontFamily: 'cursive' }}>
              Sweet Messages for Baby
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {chocolateMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg border-2 border-amber-300 shadow-md"
              >
                <p className="text-amber-900 text-lg text-center" style={{ fontFamily: 'cursive' }}>
                  {message}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-amber-50 p-8 rounded-xl border-2 border-amber-200 mt-6">
            <p className="text-center text-2xl text-amber-800 mb-4" style={{ fontFamily: 'cursive' }}>
              "Life without you would be like chocolate without sweetness - absolutely unimaginable, baby!"
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Heart className="text-amber-600 fill-amber-600" size={24} />
              <Heart className="text-orange-600 fill-orange-600" size={32} />
              <Heart className="text-amber-600 fill-amber-600" size={24} />
            </div>
          </div>

          <motion.p
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center text-xl text-amber-800 mt-8 italic"
          >
            You're the sweetest thing in my life! 💝
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
