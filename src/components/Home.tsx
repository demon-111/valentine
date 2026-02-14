import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";
import { GiftUnwrap } from "./GiftUnwrap";
import { LoveMessage } from "./LoveMessage";
import { MemoryGallery } from "./MemoryGallery";
import { Timeline } from "./Timeline";
import { ReasonsILoveYou } from "./ReasonsILoveYou";
import { SurpriseSection } from "./SurpriseSection";
import { ValentineWeekNav } from "./ValentineWeekNav";

// Safe localStorage helper to prevent crashes
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('localStorage.getItem failed:', error);
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('localStorage.setItem failed:', error);
    }
  }
};

export function Home() {
  const [isUnwrapped, setIsUnwrapped] = useState(() => {
    // Comment out this line to always show unwrap on refresh:
    // return safeLocalStorage.getItem('giftUnwrapped') === 'true';
    // Or keep it to persist the unwrap state:
    return false; // Always show unwrap for now
  });
  const [showContent, setShowContent] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);

  // Show reset button when pressing Ctrl+Shift+R
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        setShowResetButton(true);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleReset = () => {
    safeLocalStorage.setItem('giftUnwrapped', 'false');
    setIsUnwrapped(false);
    setShowContent(false);
    setShowResetButton(false);
    window.location.reload();
  };

  const backgroundImages = [
    "/memories/pic1.jpeg",
    "/memories/pic2.jpeg",
    "/memories/pic3.jpeg",
    "/memories/pic4.jpeg",
    "/memories/pic5.jpeg",
    "/memories/pic6.jpeg",
    "/memories/pic7.jpeg",
  ];

  // Handle unwrap completion
  const handleUnwrapComplete = () => {
    setIsUnwrapped(true);
    safeLocalStorage.setItem('giftUnwrapped', 'true');
    setTimeout(() => setShowContent(true), 500);
  };

  // Show content immediately if already unwrapped
  useEffect(() => {
    if (isUnwrapped) {
      setShowContent(true);
    }
  }, [isUnwrapped]);

  // Floating hearts animation
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    if (showContent) {
      const interval = setInterval(() => {
        setHearts((prev) => [...prev, Date.now()]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showContent]);

  // Remove hearts after animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHearts((prev) => prev.slice(1));
    }, 4000);
    return () => clearTimeout(timeout);
  }, [hearts]);

  if (!isUnwrapped) {
    return <GiftUnwrap onUnwrapComplete={handleUnwrapComplete} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background with hearts pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 animate-gradient" />

        {/* Floating hearts background - multiple layers */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`bg-heart-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Heart
              className="text-pink-300 fill-pink-200"
              size={10 + Math.random() * 30}
              style={{ opacity: 0.15 + Math.random() * 0.2 }}
            />
          </motion.div>
        ))}

        {/* Sparkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles
              className="text-rose-300"
              size={8 + Math.random() * 15}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating hearts */}
      <AnimatePresence>
        {hearts.map((id) => (
          <motion.div
            key={id}
            initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0.7 }}
            animate={{ y: "-100vh", x: Math.random() * window.innerWidth }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "linear" }}
            className="absolute pointer-events-none"
          >
            <Heart className="text-pink-300 fill-pink-300" size={20 + Math.random() * 20} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Reset Button (hidden, shows with Ctrl+Shift+R) */}
            {showResetButton && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={handleReset}
                className="fixed bottom-6 right-6 z-50 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
              >
                Reset Unwrap
              </motion.button>
            )}

            {/* Header */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center pt-20 pb-12 px-4"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-4"
              >
                <Gift className="text-pink-500" size={48} />
              </motion.div>
              <h1 className="text-5xl md:text-7xl mb-4 text-pink-600 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                For My Love Yatri 💝
              </h1>
              <p className="text-xl text-pink-500/80 max-w-2xl mx-auto italic">
                "Every moment with you is a precious gift I treasure forever, Yatri..."
              </p>
            </motion.div>

            {/* Sections */}
            <div className="max-w-6xl mx-auto px-4 space-y-20 pb-20">
              <LoveMessage />
              <MemoryGallery />
              <Timeline />
              <ReasonsILoveYou />
              <SurpriseSection />
              <ValentineWeekNav />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
