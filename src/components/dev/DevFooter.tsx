import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function DevFooter() {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 relative bg-gray-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-sm">
            <p>© 2026 ysmn_deus. Built with passion for engineering.</p>
          </div>

          <motion.a
            href="/me"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 border-2 border-amber-300 rounded-lg text-amber-700 hover:bg-amber-50 transition-colors font-medium"
          >
            <span>趣味・プライベート → /me</span>
            <ChevronRight className="size-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
