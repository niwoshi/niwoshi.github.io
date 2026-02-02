import { motion } from "motion/react";
import {
  Terminal,
  Cpu,
  Wifi,
  Activity,
  Cloud,
  Code2,
  Box,
} from "lucide-react";
import { SkillCard } from "./SkillCard";
import { skills, type Skill } from "../../data/dev/skills";

const iconMap = {
  Cpu: <Cpu />,
  Wifi: <Wifi />,
  Activity: <Activity />,
  Cloud: <Cloud />,
  Code2: <Code2 />,
  Box: <Box />,
};

export function SkillsSection() {
  return (
    <section className="py-20 px-4 relative bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <Terminal className="size-5" />
            <span>$ ls ./skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={iconMap[skill.icon]}
              title={skill.title}
              color={skill.color}
              skills={skill.items}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
