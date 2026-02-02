import { motion } from "motion/react";
import { Terminal, Cpu, Activity, Code2 } from "lucide-react";
import { CapabilityCard } from "./CapabilityCard";
import { capabilities } from "../../data/dev/capabilities";

const iconMap = {
  Cpu: <Cpu />,
  Activity: <Activity />,
  Code2: <Code2 />,
};

export function CapabilitiesSection() {
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
            <span>$ ls ./capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            対応領域
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              icon={iconMap[capability.icon]}
              title={capability.title}
              color={capability.color}
              items={capability.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
