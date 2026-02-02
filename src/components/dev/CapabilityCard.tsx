import { useState } from "react";
import { motion } from "motion/react";

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  items: string[];
}

export function CapabilityCard({ icon, title, color, items }: CapabilityCardProps) {
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
        className="relative bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all h-full"
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
            className="p-3 rounded-lg flex-shrink-0"
            style={{ backgroundColor: `${color}15` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold mb-4 text-lg" style={{ color }}>
              {title}
            </h3>

            <ul className="space-y-2">
              {items.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
