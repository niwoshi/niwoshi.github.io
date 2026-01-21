import { motion } from "motion/react";
import { Wine, Tv, Bike, Waves, Music, Cpu } from "lucide-react";
import { useState } from "react";

const interests = [
  {
    icon: Wine,
    title: "酒",
    description: "日本酒 / ウイスキー",
    keywords: ["日本酒", "ウイスキー", "ワイン", "焼酎", "ジン"],
    color: "#00d4ff",
  },
  {
    icon: Tv,
    title: "アニメ・配信文化",
    description: "アニメ鑑賞 / VTuber",
    keywords: ["アニメ", "VTuber", "ASMR"],
    color: "#00ff88",
  },
  {
    icon: Bike,
    title: "自転車",
    description: "淡路島一周",
    keywords: ["淡路島一周", "Zwift", "丹波"],
    color: "#ffb000",
  },
  {
    icon: Waves,
    title: "海",
    description: "ダイビング / 釣り",
    keywords: ["釣り", "水中写真", "アクアリウム"],
    color: "#00d4ff",
  },
  {
    icon: Music,
    title: "音楽",
    description: "ライブ / 音楽鑑賞",
    keywords: ["VTuberライブ", "ゲーム音楽", "映画音楽"],
    color: "#00ff88",
  },
  {
    icon: Cpu,
    title: "ガジェット",
    description: "自作PC / キーボード",
    keywords: ["自作PC", "キーボード", "マイクロフォーサーズ"],
    color: "#ffb000",
  },
];

interface InterestCardProps {
  interest: typeof interests[0];
  index: number;
}

function InterestCard({ interest, index }: InterestCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate radial positions for keywords
  const getKeywordPosition = (keywordIndex: number, total: number) => {
    const angle = (keywordIndex / total) * 2 * Math.PI - Math.PI / 2;
    const radius = 80; // Distance from center
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 0 20px ${interest.color}40`,
      }}
      className="relative group"
      style={{ zIndex: isExpanded ? 50 : 1 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      onTap={() => setIsExpanded(!isExpanded)}
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

      {/* Expanded keywords - positioned in the center of the card */}
      {interest.keywords.length > 0 && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Connection lines - one SVG for all lines */}
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            {interest.keywords.map((keyword, keywordIndex) => {
              const pos = getKeywordPosition(keywordIndex, interest.keywords.length);
              return (
                <motion.line
                  key={`line-${keyword}`}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${pos.x}px)`}
                  y2={`calc(50% + ${pos.y}px)`}
                  stroke={interest.color}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isExpanded
                      ? { pathLength: 1, opacity: 0.8 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: isExpanded ? keywordIndex * 0.05 : 0,
                  }}
                />
              );
            })}
          </svg>

          {/* Keywords */}
          {interest.keywords.map((keyword, keywordIndex) => {
            const pos = getKeywordPosition(keywordIndex, interest.keywords.length);
            return (
              <motion.div
                key={keyword}
                className="absolute pointer-events-auto"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={
                  isExpanded
                    ? { opacity: 1, scale: 1, x: pos.x, y: pos.y }
                    : { opacity: 0, scale: 0, x: 0, y: 0 }
                }
                transition={{
                  duration: 0.3,
                  delay: isExpanded ? keywordIndex * 0.05 : 0,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                {/* Keyword chip */}
                <div
                  className="relative px-3 py-1.5 rounded-lg font-mono text-sm border-2 whitespace-nowrap shadow-lg"
                  style={{
                    backgroundColor: "#161b22",
                    borderColor: interest.color,
                    color: interest.color,
                    boxShadow: `0 0 15px ${interest.color}60`,
                  }}
                >
                  {keyword}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

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
            <InterestCard key={interest.title} interest={interest} index={index} />
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