import { motion } from "motion/react";

const timeline = [
  {
    status: "now",
    label: "現在",
    items: [
      "日本酒、ワインを開拓中。ウイスキーは勉強しなおし（ブラインドで遊んだり）",
      "トレイルランニングの大会運営に参加",
    ],
    color: "#00d4ff",
  },
  {
    status: "recent",
    label: "最近",
    items: [
      "2025年11月に淡路島一周",
      "2026年1月 横浜Kアリーナの3期生ライブ参戦",
    ],
    color: "#00ff88",
  },
  {
    status: "next",
    label: "次回",
    items: [
      "2026年3月 hololive SUPER EXPOに参加したい",
      "ワインをもうちょっと勉強したい",
    ],
    color: "#ffb000", 
  },
];

export function RecentSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-3 h-3 rounded-full bg-[#ffb000]" />
          <div className="h-px flex-1 bg-gradient-to-r from-[#ffb000] to-transparent" />
          <h2 className="text-3xl font-mono text-[#ffb000]">// recent updates</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Circuit trace line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#00ff88] to-[#ffb000]" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.status}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Node */}
                <div className="absolute left-5 top-2 w-6 h-6 rounded-full border-4 border-[#0d1117] bg-[var(--node-color)] z-10"
                  style={{ "--node-color": item.color } as React.CSSProperties}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                    animate={{
                      boxShadow: [
                        `0 0 0 0 ${item.color}00`,
                        `0 0 0 8px ${item.color}00`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Horizontal trace */}
                <svg
                  className="absolute left-8 top-4 w-12 h-2"
                  viewBox="0 0 48 8"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="48"
                    y2="4"
                    stroke={item.color}
                    strokeWidth="2"
                  />
                </svg>

                {/* Content */}
                <div className="bg-[#161b22] border border-gray-800 rounded-lg p-6 hover:border-[var(--hover-color)] transition-all duration-300 group"
                  style={{ "--hover-color": item.color } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-mono px-3 py-1 rounded border text-sm"
                      style={{
                        color: item.color,
                        borderColor: item.color,
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      {item.status}
                    </span>
                    <span className="text-gray-400">{item.label}</span>
                  </div>

                  <ul className="space-y-2">
                    {item.items.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
