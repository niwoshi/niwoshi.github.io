import { motion } from "motion/react";
import { Terminal, Mail, ChevronRight } from "lucide-react";
import { contactFormUrl } from "../../data/dev/links";

export function ContactSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
            <Terminal className="size-5" />
            <span>$ ./contact --form</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            お仕事のご相談・お問い合わせ
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            組込み開発からクラウド連携まで、
            <br />
            横断的な技術課題の解決をお手伝いします。
          </p>

          <motion.a
            href={contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg overflow-hidden transition-all shadow-lg hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <Mail className="size-5 relative z-10" />
            <span className="text-lg relative z-10 font-medium">
              &gt; submit_inquiry
            </span>
            <ChevronRight className="size-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
