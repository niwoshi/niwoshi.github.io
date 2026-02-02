import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Terminal, ChevronRight } from "lucide-react";
import { profile } from "../../data/dev/profile";

type Phase = "typing-name" | "typing-suffix" | "enter" | "done";

export function HeroSection() {
  const [typedName, setTypedName] = useState("");
  const [typedSuffix, setTypedSuffix] = useState("");
  const [phase, setPhase] = useState<Phase>("typing-name");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  useEffect(() => {
    let index = 0;
    let timer: ReturnType<typeof setInterval>;

    if (phase === "typing-name") {
      timer = setInterval(() => {
        if (index <= profile.name.length) {
          setTypedName(profile.name.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setPhase("typing-suffix"), 100);
        }
      }, 75);
    } else if (phase === "typing-suffix") {
      timer = setInterval(() => {
        if (index <= profile.suffix.length) {
          setTypedSuffix(profile.suffix.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => setPhase("enter"), 150);
        }
      }, 75);
    } else if (phase === "enter") {
      setTimeout(() => setPhase("done"), 600);
    }

    return () => clearInterval(timer);
  }, [phase]);

  const textColor = phase === "done" ? "text-blue-600" : "text-green-600";
  const cursorColor = phase === "done" ? "bg-blue-600" : "bg-green-600";

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
          <span className={textColor}>{typedName}</span>
          <span className={textColor}>{typedSuffix}</span>
          {phase === "enter" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-600 text-3xl md:text-5xl ml-1"
            >
              ⏎
            </motion.span>
          )}
          {phase !== "enter" && (
            <span className={`inline-block w-1 h-12 md:h-16 ${cursorColor} animate-pulse`} />
          )}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "done" ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-left max-w-3xl mx-auto"
        >
          <div className="bg-gray-50/80 border border-gray-200 rounded-lg p-6 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
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
                  transition={{ delay: 0.6 + index * 0.3, duration: 0.6 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
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
