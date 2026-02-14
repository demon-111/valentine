import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, Gift, Candy, Flower2, MessageCircleHeart, HandHeart, Sparkles } from "lucide-react";

interface DayCard {
  path: string;
  title: string;
  date: string;
  icon: any;
  color: string;
}

const valentineDays: DayCard[] = [
  { path: "/rose-day", title: "Rose Day", date: "Feb 7", icon: Flower2, color: "from-red-400 to-rose-400" },
  { path: "/propose-day", title: "Propose Day", date: "Feb 8", icon: Heart, color: "from-pink-400 to-rose-400" },
  { path: "/chocolate-day", title: "Chocolate Day", date: "Feb 9", icon: Candy, color: "from-amber-700 to-orange-600" },
  { path: "/teddy-day", title: "Teddy Day", date: "Feb 10", icon: Gift, color: "from-pink-300 to-rose-300" },
  { path: "/promise-day", title: "Promise Day", date: "Feb 11", icon: HandHeart, color: "from-purple-400 to-pink-400" },
  { path: "/hug-day", title: "Hug Day", date: "Feb 12", icon: Heart, color: "from-rose-400 to-pink-400" },
  { path: "/kiss-day", title: "Kiss Day", date: "Feb 13", icon: MessageCircleHeart, color: "from-red-500 to-rose-500" },
  { path: "/valentine-day", title: "Valentine's Day", date: "Feb 14", icon: Sparkles, color: "from-pink-500 to-red-500" },
];

export function ValentineWeekNav() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl text-pink-600 mb-4" style={{ fontFamily: 'cursive' }}>
          Valentine's Week Journey
        </h2>
        <p className="text-pink-500 text-lg italic">
          8 days of love, 8 special celebrations 💕
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {valentineDays.map((day, index) => {
          const Icon = day.icon;
          
          return (
            <motion.div
              key={day.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => navigate(day.path)}
              className={`bg-gradient-to-br ${day.color} p-6 rounded-xl shadow-lg cursor-pointer border-4 border-white transform transition-all hover:shadow-2xl`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/30 p-4 rounded-full mb-4 backdrop-blur-sm">
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'cursive' }}>
                  {day.title}
                </h3>
                <p className="text-white/90 text-sm">{day.date}</p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-3"
                >
                  <Heart className="text-white fill-white" size={20} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}