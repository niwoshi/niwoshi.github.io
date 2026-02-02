import { motion } from "motion/react";
import { Terminal, Twitter, Instagram, Github } from "lucide-react";
import { LinkCard } from "./LinkCard";
import { links } from "../../data/dev/links";

const iconMap = {
  Twitter: <Twitter />,
  Instagram: <Instagram />,
  Github: <Github />,
};

export function LinksSection() {
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
            <span>$ echo $LINKS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Connect
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center">
          {links.map((link) => (
            <LinkCard
              key={link.label}
              icon={iconMap[link.icon]}
              label={link.label}
              color={link.color}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
