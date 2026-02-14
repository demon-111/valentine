import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, Sparkles, Heart, Lock } from "lucide-react";

interface RibbonProps {
  position:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "center-horizontal"
    | "center-vertical";
  onRemove: () => void;
}

function Ribbon({ position, onRemove }: RibbonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>("/ribbon1.png");

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "top-0 left-0 right-0 h-[25vh] cursor-pointer";
      case "bottom":
        return "bottom-0 left-0 right-0 h-[25vh] cursor-pointer";
      case "left":
        return "top-0 left-0 bottom-0 w-[25vw] cursor-pointer";
      case "right":
        return "top-0 right-0 bottom-0 w-[25vw] cursor-pointer";
      case "center-horizontal":
        return "top-[25vh] bottom-[25vh] left-0 right-0 h-[50vh] cursor-pointer";
      case "center-vertical":
        return "left-[25vw] right-[25vw] top-0 bottom-0 w-[50vw] cursor-pointer";
    }
  };

  const getExitAnimation = () => {
    switch (position) {
      case "top":
        return { y: "-100%", opacity: 0 };
      case "right":
        return { x: "100%", opacity: 0 };
      case "bottom":
        return { y: "100%", opacity: 0 };
      case "left":
        return { x: "-100%", opacity: 0 };
      case "center-horizontal":
        return { scaleY: 0, opacity: 0 };
      case "center-vertical":
        return { scaleX: 0, opacity: 0 };
    }
  };

  const isVertical =
    position === "left" ||
    position === "right" ||
    position === "center-vertical";
  const isCenter =
    position === "center-horizontal" || position === "center-vertical";

  return (
    <motion.div
      exit={getExitAnimation()}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`absolute ${getPositionClasses()} bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 shadow-2xl ${isCenter ? "z-40" : "z-30"}`}
      onClick={onRemove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      style={isCenter ? { transformOrigin: "center" } : {}}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Ribbon pattern with multiple stripes */}
        <div
          className={`absolute inset-0 ${isVertical ? "flex flex-col" : "flex flex-row"}`}
        >
          <div className="flex-1 bg-gradient-to-br from-pink-400 to-rose-400" />
          <div className="flex-1 bg-gradient-to-br from-rose-500 to-pink-500" />
          <div className="flex-1 bg-gradient-to-br from-pink-400 to-rose-400" />
        </div>
        {/* Optional custom ribbon image overlay (falls back if not found) */}
        {imgSrc && (
          <img
            src={imgSrc}
            alt="ribbon"
            onError={() => {
              if (imgSrc === "/ribbon1.png") setImgSrc("/images/ribbon1.png");
              else setImgSrc(null);
            }}
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-5`}
            style={
              isVertical
                ? { transform: "rotate(90deg)", transformOrigin: "center" }
                : {}
            }
          />
        )}

        {/* Shine overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-${isVertical ? "r" : "b"} from-transparent via-white/30 to-transparent`}
        />

        {/* Glitter effect */}
        <motion.div
          animate={{
            opacity: isHovered ? [0.6, 1, 0.6] : 0.4,
            scale: isHovered ? [1, 1.3, 1] : 1,
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="relative z-10"
        >
          <Sparkles className="text-white" size={isCenter ? 48 : 40} />
        </motion.div>

        {/* Click hint on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm"
          >
            <div className="text-center">
              <p
                className="text-white text-lg md:text-xl font-bold mb-2"
                style={{ fontFamily: "cursive" }}
              >
                Click to unwrap! 🎀
              </p>
              <Sparkles className="text-white mx-auto" size={24} />
            </div>
          </motion.div>
        )}

        {/* Animated shine effect */}
        <motion.div
          animate={{
            x: isVertical ? 0 : ["-200%", "200%"],
            y: isVertical ? ["-200%", "200%"] : 0,
          }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
          className={`absolute inset-0 bg-gradient-to-${isVertical ? "b" : "r"} from-transparent via-white/50 to-transparent w-1/3 h-full`}
          style={{ filter: "blur(20px)" }}
        />
      </div>
    </motion.div>
  );
}

interface GiftUnwrapProps {
  onUnwrapComplete: () => void;
}

export function GiftUnwrap({ onUnwrapComplete }: GiftUnwrapProps) {
  const [removedRibbons, setRemovedRibbons] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const ribbons = [
    "top",
    "bottom",
    "left",
    "right",
    "center-horizontal",
    "center-vertical",
  ] as const;

  const handleRibbonRemove = (position: string) => {
    setRemovedRibbons((prev) => [...prev, position]);

    if (removedRibbons.length === ribbons.length - 1) {
      setTimeout(() => {
        setShowPassword(true);
      }, 800);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "0312") {
      setError(false);
      setTimeout(() => {
        onUnwrapComplete();
      }, 600);
    } else {
      setError(true);
      setPassword("");
    }
  };

  const errorMessages = [
    "Hmm… close, but not quite 😋 Try again!",
    "Your boyfriend is disappointed but still loves you 😂 Try again!",
    "Memory check failed… try again, love!",
    "That's not it, but you're still my favorite person."
  ];

  const hints = [
    "Think about the most special day of our love story 💞",
    "The day when you and me became 'us'… 😊",
    "Remember when I said those three magical words? 💕"
  ];

  const handleHintClick = () => {
    setShowHint(true);
    if (hintLevel < hints.length - 1) {
      setHintLevel(prev => prev + 1);
    }
  };

  const remainingRibbons = ribbons.filter((r) => !removedRibbons.includes(r));

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles
              className="text-pink-300"
              size={12 + Math.random() * 20}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Gift content - shows when ribbons are removed */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">
          {!showPassword ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: remainingRibbons.length < 3 ? 1 : 0 }}
              className="text-center max-w-2xl"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <Gift className="text-pink-500 mx-auto" size={100} />
              </motion.div>
              <h1
                className="text-3xl md:text-5xl lg:text-6xl text-pink-600 mb-6 px-4"
                style={{ fontFamily: "cursive" }}
              >
                A little gift for the one who makes my world brighter 💝
              </h1>
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl md:text-2xl text-pink-500 italic"
              >
                {remainingRibbons.length > 0
                  ? `Click the ribbons to unwrap! (${remainingRibbons.length} remaining)`
                  : "Opening your gift..."}
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-pink-300 max-w-md w-full mx-4"
            >
              <div className="text-center mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <Lock className="text-pink-500" size={60} />
                </motion.div>
                <h2
                  className="text-3xl md:text-4xl text-pink-600 mb-3"
                  style={{ fontFamily: "cursive" }}
                >
                  🔐 A tiny love challenge awaits you!
                </h2>
                <p className="text-pink-500 italic text-lg">
                  Only someone who truly knows us can unlock this.
                </p>
                <p className="text-pink-600 font-semibold mt-2">
                  Enter the secret password to continue 💖
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    placeholder="Enter password"
                    className="w-full px-6 py-4 text-center text-2xl border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                    style={{ fontFamily: "cursive" }}
                    autoFocus
                  />
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-2 text-center font-medium"
                      >
                        {errorMessages[Math.floor(Math.random() * errorMessages.length)]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {showHint && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="mt-3 p-3 bg-pink-50 border-2 border-pink-200 rounded-lg"
                      >
                        <p className="text-pink-600 text-sm font-medium">
                          💡 Hint: {hints[hintLevel]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
                  style={{ fontFamily: "cursive" }}
                >
                  Unlock Gift 🎁
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleHintClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-3 bg-pink-100 text-pink-600 py-3 rounded-lg text-base font-semibold border-2 border-pink-300 hover:bg-pink-200 transition-colors"
                >
                  {hintLevel === 0 ? "🫣 Stuck? Click me!" : hintLevel === hints.length - 1 ? "💡 Final hint given!" : "💡 Need another hint?"}
                </motion.button>
              </form>

              <div className="flex justify-center gap-2 mt-6">
                <Heart className="text-pink-400 fill-pink-400" size={20} />
                <Heart className="text-pink-500 fill-pink-500" size={24} />
                <Heart className="text-pink-400 fill-pink-400" size={20} />
              </div>
            </motion.div>
          )}
        </div>

        {/* Ribbons - Complete full screen coverage */}
        <AnimatePresence>
          {ribbons.map(
            (position) =>
              !removedRibbons.includes(position) && (
                <Ribbon
                  key={position}
                  position={position}
                  onRemove={() => handleRibbonRemove(position)}
                />
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
