import { useState } from "react";
import { motion } from "motion/react";

interface LinkCardProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  href: string;
}

export function LinkCard({ icon, label, color, href }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: color }}
      />

      {/* Connector pins */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <div
          className="w-1.5 h-1.5 rounded-full transition-colors"
          style={{ backgroundColor: isHovered ? color : "#d1d5db" }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full transition-colors"
          style={{ backgroundColor: isHovered ? color : "#d1d5db" }}
        />
      </div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <div
          className="w-1.5 h-1.5 rounded-full transition-colors"
          style={{ backgroundColor: isHovered ? color : "#d1d5db" }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full transition-colors"
          style={{ backgroundColor: isHovered ? color : "#d1d5db" }}
        />
      </div>

      <div
        className="flex items-center gap-3 px-6 py-4 bg-white border-2 rounded-lg hover:shadow-md transition-all min-w-[180px]"
        style={{
          borderColor: isHovered ? color : "#e5e7eb",
        }}
      >
        <div style={{ color }}>{icon}</div>
        <span className="font-medium text-gray-900">{label}</span>
      </div>
    </motion.a>
  );
}
