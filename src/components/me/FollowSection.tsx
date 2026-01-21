import { motion } from "motion/react";
import { Twitter, Instagram, Star } from "lucide-react";

const socialLinks = [
  {
    icon: Twitter,
    label: "近況・雑談",
    platform: "X",
    color: "#00d4ff",
    href: "https://x.com/ysmn_deus",
  },
  {
    icon: Instagram,
    label: "写真",
    platform: "Instagram",
    color: "#00ff88",
    href: "https://www.instagram.com/ysmn_deus/",
  },
  {
    icon: Star,
    label: "ファンクラブ",
    platform: "hololive fc",
    color: "#ffb000",
    href: "https://hololive-fc.hololivepro.com/h/profiles/radnpzpv",
  },
];

export function FollowSection() {
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
          <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
          <div className="h-px flex-1 bg-gradient-to-r from-[#00ff88] to-transparent" />
          <h2 className="text-3xl font-mono text-[#00ff88]">$ follow --links</h2>
        </motion.div>

        {/* Social links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.platform}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 30px ${social.color}40`,
              }}
              className="group relative"
            >
              {/* IC/Chip-like design */}
              <div className="relative bg-[#161b22] border-2 border-gray-800 rounded-lg p-6 hover:border-[var(--hover-color)] transition-all duration-300"
                style={{ "--hover-color": social.color } as React.CSSProperties}
              >
                {/* Chip pins (decorative) */}
                <div className="absolute -left-1 top-8 flex flex-col gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-1 bg-gray-700 group-hover:bg-[var(--hover-color)] transition-colors duration-300"
                      style={{ "--hover-color": social.color } as React.CSSProperties}
                    />
                  ))}
                </div>
                <div className="absolute -right-1 top-8 flex flex-col gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-1 bg-gray-700 group-hover:bg-[var(--hover-color)] transition-colors duration-300"
                      style={{ "--hover-color": social.color } as React.CSSProperties}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="flex items-center gap-6">
                  <div
                    className="p-4 rounded-lg border-2 border-gray-700 group-hover:border-[var(--hover-color)] transition-all duration-300"
                    style={{ 
                      "--hover-color": social.color,
                      backgroundColor: `${social.color}15`
                    } as React.CSSProperties}
                  >
                    <social.icon
                      className="w-8 h-8"
                      style={{ color: social.color }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-mono mb-1" style={{ color: social.color }}>
                      [{social.platform}]
                    </div>
                    <p className="text-gray-400">{social.label}</p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="text-gray-500 group-hover:text-[var(--hover-color)] transition-colors duration-300"
                    style={{ "--hover-color": social.color } as React.CSSProperties}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
