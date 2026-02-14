import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Smile, Star, Sun, Moon } from "lucide-react";

interface Reason {
  id: number;
  text: string;
  icon: any;
}

const reasons: Reason[] = [
  { id: 1, text: "Your beautiful smile that lights up my world", icon: Smile },
  { id: 2, text: "The way you understand me without words", icon: Heart },
  { id: 3, text: "Your kindness and caring heart", icon: Sparkles },
  { id: 4, text: "How you make me laugh even on tough days", icon: Star },
  { id: 5, text: "Your endless patience with my silly jokes", icon: Sun },
  { id: 6, text: "The way you support my dreams", icon: Moon },
  { id: 7, text: "Your adorable quirks and habits", icon: Heart },
  { id: 8, text: "How you make ordinary moments extraordinary", icon: Sparkles },
  { id: 9, text: "Your strength and determination", icon: Star },
  { id: 10, text: "The way you care for the people you love", icon: Heart },
  { id: 11, text: "Your beautiful eyes that I could get lost in", icon: Sparkles },
  { id: 12, text: "Simply everything about you!", icon: Heart },
];

export function ReasonsILoveYou() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardClick = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl text-pink-600 mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
          Reasons I Love You
        </h2>
        <p className="text-pink-500 text-lg italic mb-8">
          Click each card to reveal why you're so special to me 💕
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          const isFlipped = flippedCards.includes(reason.id);

          return (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                onClick={() => handleCardClick(reason.id)}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-48 cursor-pointer preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 border-4 border-white"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className="text-white mb-4" size={48} />
                  </motion.div>
                  <p className="text-white text-xl font-semibold text-center italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Reason #{reason.id}
                  </p>
                  <p className="text-white/80 text-sm mt-2">Click to reveal</p>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 backface-hidden bg-gradient-to-br from-white to-pink-50 rounded-lg shadow-lg flex items-center justify-center p-6 border-4 border-pink-300"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-pink-700 text-lg text-center leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {reason.text}
                  </p>
                  <div className="absolute bottom-2 right-2">
                    <Heart className="text-pink-400 fill-pink-400" size={20} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-2xl text-pink-600 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
          ...and countless more reasons I discover every single day! ❤️
        </p>
      </motion.div>
    </motion.section>
  );
}
