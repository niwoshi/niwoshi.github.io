import { motion } from "motion/react";
import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left side */}
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="font-mono text-sm text-gray-400">
              niwoshi © 2026
            </span>
          </div>

          {/* Center - Circuit trace to /dev */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-gray-400">技術・開発</span>
            
            {/* Animated trace line */}
            <motion.svg
              className="w-24 h-8"
              viewBox="0 0 96 32"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <motion.path
                d="M 0 16 L 96 16"
                stroke="#00d4ff"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="48"
                cy="16"
                r="3"
                fill="#00d4ff"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              />
              {/* Arrow */}
              <motion.path
                d="M 88 12 L 96 16 L 88 20"
                stroke="#00d4ff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </motion.svg>

            {/* /dev link */}
            <motion.a
              href="#"
              className="group relative flex items-center gap-2 px-4 py-2 bg-[#161b22] border-2 border-gray-800 rounded-lg hover:border-[#00d4ff] transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px #00d4ff40",
              }}
            >
              <Code className="w-4 h-4 text-[#00d4ff]" />
              <span className="font-mono text-[#00d4ff]">/dev</span>
              
              {/* Jumper pins (decorative) */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1">
                <div className="w-1 h-2 bg-gray-700 group-hover:bg-[#00d4ff] transition-colors duration-300" />
                <div className="w-1 h-2 bg-gray-700 group-hover:bg-[#00d4ff] transition-colors duration-300" />
              </div>
            </motion.a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
            <span className="text-[#00ff88]">&lt;</span>
            <span>built with React</span>
            <span className="text-[#00ff88]">/&gt;</span>
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center font-mono text-xs text-gray-600"
        >
          <p>// ハードすぎず、遊び心のあるテック感</p>
        </motion.div>
      </div>
    </footer>
  );
}
