import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Calendar,
  Star,
  Smile,
  Gift,
  Sparkles,
} from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: any;
  color: string;
}

const events: TimelineEvent[] = [
  {
    id: 1,
    title: "First Meeting",
    date: "26 November 2025",
    description:
      "The day our eyes met and my heart knew it had found its home. I still remember you gifted me the Batman keychain and from that day he has become my favourite superhero.",
    icon: Sparkles,
    color: "pink",
  },
  {
    id: 2,
    title: "First Hug",
    date: "27 November 2025",
    description:
      "The moment I held you close for the first time, everything felt right. Your warmth, your heartbeat against mine - it was like coming home.",
    icon: Heart,
    color: "rose",
  },
  {
    id: 3,
    title: "Our Beginning",
    date: "3 December 2025",
    description:
      "The day I proposed to you online and you said yes! This is where everything started - where we officially became 'us' and began our beautiful journey together. The day that changed my life forever.",
    icon: MapPin,
    color: "pink",
  },
  {
    id: 4,
    title: "Our Special Moment",
    date: "19 December 2025",
    description:
      "In the classroom, with our favorite song playing softly in the background, time stood still. That magical moment when our hearts spoke louder than words.",
    icon: Smile,
    color: "rose",
  },
  {
    id: 5,
    title: "Growing Together",
    date: "December 2025 - January 2026",
    description:
      "These precious months where we spent days together, getting to know each other more deeply. We fought, we laughed, we played, we sat in comfortable silence, we watched each other with adoring eyes - and through it all, we fell more in love with every passing moment.",
    icon: Star,
    color: "pink",
  },
  {
    id: 6,
    title: "Two Months of Us",
    date: "3 February 2026",
    description:
      "Our two-month anniversary - the day I proposed to you offline and made it official in person. Seeing your smile, holding your hand, and promising you my heart all over again, but this time face to face. A moment that made everything even more real and beautiful.",
    icon: Heart,
    color: "rose",
  },
  {
    id: 7,
    title: "Three Magical Days",
    date: "6-8 February 2026",
    description:
      "Three unforgettable days together that felt like a dream. We danced as a couple on stage, our hearts beating as one. At 3 AM, we took that magical night walk under the stars, talking about everything and nothing. These days showed me what forever with you would feel like.",
    icon: Star,
    color: "pink",
  },
  {
    id: 8,
    title: "Today & Forever",
    date: "February 2026",
    description:
      "Every day with you is a gift. Here's to our beautiful journey and the adventures yet to come. 💕",
    icon: Gift,
    color: "rose",
  },
];

export function Timeline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl text-pink-600 mb-4"
          style={{ fontFamily: "cursive" }}
        >
          Our Journey Together
        </h2>
        <p className="text-pink-500 text-lg italic">
          Every step of the way with you
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-300 to-pink-300" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-4 md:-ml-6 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br from-${event.color}-400 to-${event.color}-500 shadow-lg flex items-center justify-center border-4 border-white`}
                    >
                      <Icon className="text-white" size={20} />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 ml-24 md:ml-0 ${isLeft ? "md:pr-16" : "md:pl-16"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="text-pink-500" size={16} />
                        <span className="text-pink-500 text-sm">
                          {event.date}
                        </span>
                      </div>
                      <h3
                        className="text-2xl text-pink-700 mb-2"
                        style={{ fontFamily: "cursive" }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-pink-800 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
