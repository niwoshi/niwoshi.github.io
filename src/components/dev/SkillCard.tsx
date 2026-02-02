import { useState } from "react";
import { motion } from "motion/react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: string[];
  description?: string;
}

export function SkillCard({ icon, title, color, skills, description }: SkillCardProps) {
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
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: color }}
      />

      <div
        className="relative bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all"
        style={{
          borderColor: isHovered ? color : "#e5e7eb",
        }}
      >
        {/* Corner decorations */}
        <div
          className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 rounded-tl"
          style={{ borderColor: color }}
        />
        <div
          className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 rounded-tr"
          style={{ borderColor: color }}
        />
        <div
          className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 rounded-bl"
          style={{ borderColor: color }}
        />
        <div
          className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 rounded-br"
          style={{ borderColor: color }}
        />

        <div className="flex items-start gap-4">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${color}15` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold mb-2" style={{ color }}>
              {title}
            </h3>

            {description && (
              <p className="text-sm text-gray-500 mb-3">{description}</p>
            )}

            <motion.div
              className="flex flex-wrap gap-2"
              animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-2 py-1 text-xs bg-gray-50 border border-gray-200 rounded text-gray-700 hover:bg-blue-50 transition-all cursor-default"
                  style={{
                    borderColor: isHovered ? `${color}40` : "#e5e7eb",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isHovered
                      ? `${color}40`
                      : "#e5e7eb";
                    e.currentTarget.style.color = "#374151";
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
