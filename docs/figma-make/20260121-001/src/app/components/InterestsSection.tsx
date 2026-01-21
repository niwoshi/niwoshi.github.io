import { motion } from "motion/react";
import { Wine, Tv, Bike, Waves, Music } from "lucide-react";

const interests = [
  {
    icon: Wine,
    title: "酒・味",
    description: "日本酒 / ウイスキー",
    color: "#00d4ff",
  },
  {
    icon: Tv,
    title: "配信",
    description: "VTuber",
    color: "#00ff88",
  },
  {
    icon: Bike,
    title: "自転車",
    description: "淡路島一周",
    color: "#ffb000",
  },
  {
    icon: Waves,
    title: "海",
    description: "ダイビング（柏島）",
    color: "#00d4ff",
  },
  {
    icon: Music,
    title: "音楽",
    description: "ライブ / ゲーム音楽 / 映画音楽",
    color: "#00ff88",
  },
];

export function InterestsSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-3 h-3 rounded-full bg-[#00d4ff]" />
          <div className="h-px flex-1 bg-gradient-to-r from-[#00d4ff] to-transparent" />
          <h2 className="text-3xl font-mono text-[#00d4ff]">&gt; interests</h2>
        </motion.div>

        {/* Interest cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 0 20px ${interest.color}40`,
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[var(--hover-color)] transition-all duration-300"
                style={{ "--hover-color": interest.color } as React.CSSProperties}
              >
                {/* Corner nodes */}
                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-[var(--hover-color)]"
                  style={{ "--hover-color": interest.color } as React.CSSProperties}
                />
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-[var(--hover-color)]"
                  style={{ "--hover-color": interest.color } as React.CSSProperties}
                />

                {/* Content */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg border border-gray-700 group-hover:border-[var(--hover-color)] transition-colors duration-300"
                    style={{ 
                      "--hover-color": interest.color,
                      backgroundColor: `${interest.color}10`
                    } as React.CSSProperties}
                  >
                    <interest.icon
                      className="w-6 h-6"
                      style={{ color: interest.color }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-mono mb-1" style={{ color: interest.color }}>
                      {interest.title}
                    </h3>
                    <p className="text-sm text-gray-400">{interest.description}</p>
                  </div>
                </div>

                {/* Trace line connector */}
                <svg
                  className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 32 32"
                >
                  <line
                    x1="0"
                    y1="16"
                    x2="32"
                    y2="16"
                    stroke={interest.color}
                    strokeWidth="1"
                  />
                  <circle cx="16" cy="16" r="2" fill={interest.color} />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center font-mono text-gray-400 mt-12"
        >
          <p className="text-[#00ff88]">// おすすめがあれば教えてください</p>
        </motion.div>
      </div>
    </section>
  );
}
