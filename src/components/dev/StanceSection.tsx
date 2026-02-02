import { motion } from "motion/react";
import { Terminal, Target } from "lucide-react";
import { stance } from "../../data/dev/stance";

export function StanceSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <Terminal className="size-5" />
            <span>$ cat ./stance.md</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {stance.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-300 hover:shadow-lg transition-all"
        >
          <ul className="space-y-4 mb-6">
            {stance.points.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <Target className="size-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{point}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-200 pt-6"
          >
            <p className="text-gray-500 text-sm leading-relaxed">
              {stance.note}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
