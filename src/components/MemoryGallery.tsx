import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const memories = [
  "/memories/pic1.jpeg",
  "/memories/pic2.jpeg",
  "/memories/pic3.jpeg",
  "/memories/pic4.jpeg",
  "/memories/pic5.jpeg",
  "/memories/pic6.jpeg",
];

export function MemoryGallery() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl text-pink-600 mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Beautiful Memories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memories.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            className="bg-white p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-all"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="aspect-square overflow-hidden mb-3 bg-gray-100">
              <ImageWithFallback
                src={image}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center mt-2">
              <Heart className="text-pink-400 fill-pink-400" size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
