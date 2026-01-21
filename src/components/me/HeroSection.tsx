import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function HeroSection() {
  const [showCursor, setShowCursor] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="font-mono text-sm text-[#00ff88]">~/me</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-mono mb-4 tracking-tight">
            ysmn_deus
            <span
              className={`inline-block w-1 h-12 md:h-20 ml-2 bg-[#00d4ff] ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.1s" }}
            />
          </h1>

          <div className="space-y-2 font-mono text-base md:text-lg text-gray-400">
            <p className="text-[#00d4ff]">
              // 気になることをいろいろ試しつつ、長く楽しむのが好きです。
            </p>
            <p className="text-[#00ff88]">
              // ひとつに絞るより、生活の中に"好き"を増やしていってます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
