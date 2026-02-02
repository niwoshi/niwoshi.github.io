import { useState } from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  result: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  description,
  tags,
  result,
  technologies,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Circuit border light animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx="8"
          fill="none"
          stroke="url(#border-gradient)"
          strokeWidth="2"
          strokeDasharray="8 8"
          className={isHovered ? "opacity-100" : "opacity-0"}
          style={{
            transition: "opacity 0.3s",
          }}
        >
          {isHovered && (
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="16"
              dur="0.5s"
              repeatCount="indefinite"
            />
          )}
        </rect>
        <defs>
          <linearGradient
            id="border-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Corner lights that pulse */}
      <div
        className={`absolute top-0 left-0 w-2 h-2 rounded-full bg-blue-500 transition-all duration-300 ${isHovered ? "opacity-100 scale-125" : "opacity-0 scale-50"}`}
      />
      <div
        className={`absolute top-0 right-0 w-2 h-2 rounded-full bg-green-500 transition-all duration-300 delay-75 ${isHovered ? "opacity-100 scale-125" : "opacity-0 scale-50"}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-2 h-2 rounded-full bg-amber-500 transition-all duration-300 delay-150 ${isHovered ? "opacity-100 scale-125" : "opacity-0 scale-50"}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-2 h-2 rounded-full bg-blue-500 transition-all duration-300 delay-200 ${isHovered ? "opacity-100 scale-125" : "opacity-0 scale-50"}`}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 via-green-500/10 to-amber-500/10 blur-xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all h-full flex flex-col">
        {/* IC chip decoration */}
        <div className="flex items-center gap-2 mb-4">
          <motion.div
            className="w-2 h-2 rounded-full bg-blue-500"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: isHovered ? Infinity : 0,
            }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              repeat: isHovered ? Infinity : 0,
            }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-500"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              repeat: isHovered ? Infinity : 0,
            }}
          />
        </div>

        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-green-50 border border-green-200 rounded text-green-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex items-start gap-2">
            <Zap className="size-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700 font-medium">{result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
