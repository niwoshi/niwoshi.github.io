import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Folder, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import {
  works,
  DISPLAY_COUNT,
  ROTATE_INTERVAL,
  getTotalPages,
  getDisplayedWorks,
  type Work,
} from "../../data/dev/works";

export function WorksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 自動更新（8秒ごと、ホバーで停止）
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + DISPLAY_COUNT;
        return next >= works.length ? 0 : next;
      });
    }, ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + DISPLAY_COUNT;
      return next >= works.length ? 0 : next;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - DISPLAY_COUNT;
      return next < 0 ? Math.floor((works.length - 1) / DISPLAY_COUNT) * DISPLAY_COUNT : next;
    });
  };

  const displayedWorks = getDisplayedWorks(currentIndex);
  const currentPage = Math.floor(currentIndex / DISPLAY_COUNT) + 1;
  const totalPages = getTotalPages();

  return (
    <section className="py-20 px-4 relative">
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
            <span>$ ls ./works --oneline | shuf | head -{DISPLAY_COUNT}</span>
          </div>
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              実績の一例
            </h2>
            <span className="text-sm text-gray-500">
              {works.length}件中{DISPLAY_COUNT}件を表示（自動更新）
            </span>
          </div>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 一時停止インジケーター */}
          <AnimatePresence>
            {isPaused && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-10 right-0 z-10 flex items-center gap-2 px-3 py-1 bg-green-500 text-white text-xs rounded-full shadow-md"
              >
                <Pause className="size-3" />
                <span>一時停止中</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {displayedWorks.map((work, index) => (
                  <WorkCard
                    key={`${currentIndex}-${index}`}
                    title={work.title}
                    tags={work.tags}
                    highlight={work.highlight}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* プログレスバー + ナビゲーション */}
          <div className="mt-6 flex items-center gap-3">
            {/* 前へボタン */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="flex-shrink-0 p-2 rounded-lg bg-white border-2 border-green-300 hover:bg-green-50 hover:border-green-500 transition-colors"
              aria-label="前のページ"
            >
              <ChevronLeft className="size-4 text-green-600" />
            </motion.button>

            {/* プログレスバー */}
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              {!isPaused && (
                <motion.div
                  key={`progress-${currentIndex}`}
                  className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: ROTATE_INTERVAL / 1000, ease: "linear" }}
                />
              )}
              {isPaused && (
                <div className="h-full bg-green-400" style={{ width: "50%" }} />
              )}
            </div>

            {/* ページインジケーター */}
            <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
              {currentPage} / {totalPages}
            </span>

            {/* 次へボタン */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="flex-shrink-0 p-2 rounded-lg bg-white border-2 border-green-300 hover:bg-green-50 hover:border-green-500 transition-colors"
              aria-label="次のページ"
            >
              <ChevronRight className="size-4 text-green-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface WorkCardProps {
  title: string;
  tags: string[];
  highlight?: boolean;
}

function WorkCard({ title, tags }: WorkCardProps) {
  return (
    <div className="relative group">
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
        <div className="flex items-start gap-2 mb-3">
          <Folder className="size-4 text-blue-500 flex-shrink-0 mt-0.5" />
          <h3 className="font-medium text-gray-900 text-sm leading-tight">
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-blue-50 border border-blue-200 rounded text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
