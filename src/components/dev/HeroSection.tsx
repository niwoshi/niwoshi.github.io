import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Terminal, ChevronRight } from "lucide-react";
import { profile } from "../../data/dev/profile";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= profile.name.length) {
        setTypedText(profile.name.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      className="min-h-screen flex flex-col justify-center items-center px-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-4xl"
      >
        <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
          <Terminal className="size-5" />
          <span className="text-sm">{profile.terminalPath}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center gap-2 flex-wrap">
          <span className="text-blue-600">{typedText}</span>
          <span className="inline-block w-1 h-12 md:h-16 bg-blue-600 animate-pulse" />
          <span className="text-gray-900">{profile.suffix}</span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-left max-w-3xl mx-auto"
        >
          <div className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-green-600 mb-4"
            >
              /*
            </motion.div>
            <div className="space-y-4 pl-4 border-l-2 border-green-200">
              {profile.summary.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.3, duration: 0.6 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.6 }}
              className="text-green-600 mt-4"
            >
              */
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ChevronRight className="size-6 rotate-90 text-blue-400" />
      </motion.div>
    </motion.section>
  );
}
