import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Heart, Mail } from "lucide-react";

export function SurpriseSection() {
  const [showScratchCard, setShowScratchCard] = useState(false);
  const [isScratched, setIsScratched] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);

  useEffect(() => {
    if (showScratchCard && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Draw scratch-off layer
      ctx.fillStyle = "#ec4899";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add pattern
      ctx.fillStyle = "#f472b6";
      for (let i = 0; i < canvas.width; i += 20) {
        for (let j = 0; j < canvas.height; j += 20) {
          if ((i + j) % 40 === 0) {
            ctx.fillRect(i, j, 10, 10);
          }
        }
      }

      // Add text
      ctx.fillStyle = "white";
      ctx.font = "bold 24px 'Playfair Display'";
      ctx.textAlign = "center";
      ctx.fillText("Scratch Here ✨", canvas.width / 2, canvas.height / 2);
    }
  }, [showScratchCard]);

  const scratch = (
    e:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (!canvasRef.current || isScratched) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();

    // Check if enough is scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++;
    }

    if (transparent / (pixels.length / 4) > 0.5) {
      setIsScratched(true);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setShowEnvelope(true);
      }, 2000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl text-pink-600 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Special Surprise
        </h2>
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0,
                  scale: 1,
                }}
                animate={{
                  y: window.innerHeight + 20,
                  rotate: 360,
                  scale: [1, 1.5, 1],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  ease: "linear",
                }}
                className="absolute"
              >
                {i % 3 === 0 ? (
                  <Heart
                    className="text-pink-400 fill-pink-400"
                    size={16 + Math.random() * 16}
                  />
                ) : i % 3 === 1 ? (
                  <Sparkles
                    className="text-rose-400 fill-rose-400"
                    size={16 + Math.random() * 16}
                  />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-pink-500" />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto">
        {!showScratchCard ? (
          <motion.div className="flex flex-col items-center">
            <motion.button
              onClick={() => setShowScratchCard(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="bg-gradient-to-br from-pink-500 to-rose-500 text-white px-12 py-8 rounded-full shadow-2xl text-2xl font-bold flex items-center gap-4 border-4 border-white hover:shadow-pink-300 transition-shadow"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <Gift size={40} />
              Click to reveal your final surprise ✨
            </motion.button>
            <p className="text-pink-500 mt-6 italic text-lg">
              Something magical is waiting for you... 💝
            </p>
          </motion.div>
        ) : !showEnvelope ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-pink-100 to-rose-100 p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-pink-300 relative overflow-hidden"
          >
            <div className="text-center mb-8">
              <h3
                className="text-3xl md:text-4xl text-pink-700 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                💝 A Surprise Awaits You
              </h3>
              <p className="text-pink-600 italic text-lg">
                Scratch the card to reveal your surprise…
              </p>
              <p className="text-pink-600 font-semibold mt-2">💖</p>
            </div>

            <div className="relative w-full max-w-md mx-auto">
              {/* Hidden message */}
              <div className="bg-white p-8 md:p-12 rounded-xl border-4 border-pink-400 shadow-lg">
                <motion.div
                  animate={isScratched ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center mb-6"
                  >
                    <Heart className="text-pink-600 fill-pink-600" size={64} />
                  </motion.div>
                  <p
                    className="text-2xl md:text-3xl text-pink-700 font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Surprise unlocked! 🎁✨
                  </p>
                  {isScratched && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm text-pink-500 mt-6 italic"
                    >
                      Made with love 💌
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Scratch canvas */}
              {!isScratched && (
                <canvas
                  ref={canvasRef}
                  onMouseDown={() => setIsScratching(true)}
                  onMouseUp={() => setIsScratching(false)}
                  onMouseMove={(e) => isScratching && scratch(e)}
                  onTouchStart={() => setIsScratching(true)}
                  onTouchEnd={() => setIsScratching(false)}
                  onTouchMove={(e) => scratch(e)}
                  className="absolute inset-0 w-full h-full cursor-pointer rounded-xl"
                  style={{ touchAction: "none" }}
                />
              )}
            </div>

            {/* Animated sparkles around card */}
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
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Sparkles className="text-pink-400" size={20} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : !openEnvelope ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setOpenEnvelope(true)}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-br from-pink-200 to-rose-300 p-16 rounded-lg shadow-2xl border-4 border-white relative"
            >
              <Mail className="text-pink-600" size={120} />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-4 -right-4"
              >
                <Heart className="text-red-500 fill-red-500" size={40} />
              </motion.div>
            </motion.div>
            <p className="mt-6 text-pink-600 text-2xl italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Click to open your love letter 💌
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-pink-50 to-white p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-pink-300 max-w-3xl mx-auto relative"
          >
            {/* Decorative hearts */}
            <div className="absolute -top-4 -right-4">
              <Heart className="text-pink-400 fill-pink-400" size={40} />
            </div>
            <div className="absolute -bottom-4 -left-4">
              <Heart className="text-rose-400 fill-rose-400" size={36} />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-4xl text-center text-pink-700 mb-8 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                For You, My Love
              </h3>

              <div className="space-y-6 text-pink-800 text-lg leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                <p>
                  In the quiet moments of my day,<br />
                  my thoughts somehow find their way to you.<br />
                  To your smile that brightens everything,<br />
                  and the comfort I feel just knowing you're there.
                </p>

                <p>
                  With you, even ordinary days feel special,<br />
                  and simple conversations become memories<br />
                  I never want to forget.
                </p>

                <p>
                  You've brought laughter where there was stress,<br />
                  warmth where there was worry,<br />
                  and happiness in ways you probably don't even realize.
                </p>

                <p>
                  And if I had to choose my favorite place,<br />
                  it wouldn't be a city or a view —<br />
                  it would simply be<br />
                  wherever you are.
                </p>

                <p>
                  So here's to more laughs,<br />
                  more memories,<br />
                  and many beautiful moments together.
                </p>

                <p className="text-center text-2xl mt-8">
                  Because life feels a little brighter with you in it. ❤️
                </p>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <Heart className="text-pink-400 fill-pink-400" size={24} />
                </motion.div>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>
                  <Heart className="text-pink-500 fill-pink-500" size={32} />
                </motion.div>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}>
                  <Heart className="text-pink-400 fill-pink-400" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
