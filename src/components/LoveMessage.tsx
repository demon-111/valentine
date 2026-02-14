import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";

export function LoveMessage() {
  const message =
    "Baby,\n\nI am so lucky to have you ,Every moment that we shared toghether, every laugh every little fights all these make me fall in love with you more.You are the my sunshine who came into my life and lighted it up\n\n The First time i saw you in person i was stunned you were looking so adorable and at that time i knew you are the one.The love of the life.\n\nI love you so much Yatruuu.💕";

  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);

  const handleOpenLetter = () => {
    setShowEnvelope(false);
    setTimeout(() => setIsTyping(true), 500);
  };

  useEffect(() => {
    if (isTyping && displayedText.length < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(message.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, displayedText, message]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="text-center mb-8">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <h2
            className="text-4xl md:text-5xl text-pink-600 mb-4"
            style={{ fontFamily: "cursive" }}
          >
            Scroll Down 💕
          </h2>
          <div className="text-5xl">👇</div>
        </motion.div>
      </div>

      {showEnvelope ? (
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleOpenLetter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-br from-pink-200 to-rose-300 p-12 rounded-lg shadow-2xl border-4 border-white"
          >
            <Mail className="text-pink-600" size={80} />
          </motion.div>
          <p className="mt-6 text-pink-600 text-xl italic">
            Click to open the letter 💌
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-pink-50 to-white p-8 md:p-12 rounded-lg shadow-xl border-4 border-pink-200 max-w-3xl mx-auto relative"
        >
          {/* Paper texture effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px)",
              }}
            />
          </div>

          <div className="relative">
            <pre
              className="text-pink-800 whitespace-pre-wrap font-sans text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "cursive" }}
            >
              {displayedText}
              {isTyping && displayedText.length < message.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-1 h-6 bg-pink-600 ml-1"
                />
              )}
            </pre>
          </div>

          {/* Decorative hearts */}
          <div className="absolute -top-4 -right-4">
            <Heart className="text-pink-400 fill-pink-400" size={32} />
          </div>
          <div className="absolute -bottom-4 -left-4">
            <Heart className="text-rose-400 fill-rose-400" size={28} />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
