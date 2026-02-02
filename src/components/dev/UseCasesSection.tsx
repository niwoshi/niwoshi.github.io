import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, CheckCircle, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import {
  useCases,
  DISPLAY_COUNT,
  ROTATE_INTERVAL,
  getTotalPages,
  getDisplayedUseCases,
} from "../../data/dev/useCases";

export function UseCasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 自動更新（5秒ごと、ホバーで停止）
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + DISPLAY_COUNT;
        return next >= useCases.length ? 0 : next;
      });
    }, ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + DISPLAY_COUNT;
      return next >= useCases.length ? 0 : next;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - DISPLAY_COUNT;
      return next < 0 ? Math.floor((useCases.length - 1) / DISPLAY_COUNT) * DISPLAY_COUNT : next;
    });
  };

  const displayedCases = getDisplayedUseCases(currentIndex);
  const currentPage = Math.floor(currentIndex / DISPLAY_COUNT) + 1;
  const totalPages = getTotalPages();

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
            <span>$ cat ./usecases | shuf | head -{DISPLAY_COUNT}</span>
          </div>
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              こんなケースでお役に立てます
            </h2>
            <span className="text-sm text-gray-500">
              {useCases.length}件中{DISPLAY_COUNT}件を表示（自動更新）
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
                className="absolute -top-10 right-0 z-10 flex items-center gap-2 px-3 py-1 bg-blue-500 text-white text-xs rounded-full shadow-md"
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
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {displayedCases.map((text, index) => (
                  <UseCaseCard key={`${currentIndex}-${index}`} text={text} />
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
              className="flex-shrink-0 p-2 rounded-lg bg-white border-2 border-blue-300 hover:bg-blue-50 hover:border-blue-500 transition-colors"
              aria-label="前のページ"
            >
              <ChevronLeft className="size-4 text-blue-600" />
            </motion.button>

            {/* プログレスバー */}
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              {!isPaused && (
                <motion.div
                  key={`progress-${currentIndex}`}
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: ROTATE_INTERVAL / 1000, ease: "linear" }}
                />
              )}
              {isPaused && (
                <div className="h-full bg-blue-400" style={{ width: "50%" }} />
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
              className="flex-shrink-0 p-2 rounded-lg bg-white border-2 border-blue-300 hover:bg-blue-50 hover:border-blue-500 transition-colors"
              aria-label="次のページ"
            >
              <ChevronRight className="size-4 text-blue-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface UseCaseCardProps {
  text: string;
}

function UseCaseCard({ text }: UseCaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: "#10b981" }}
      />

      <div className="relative bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-md transition-all h-full min-h-[120px] flex items-center">
        <div className="flex items-start gap-3">
          <CheckCircle
            className="size-6 flex-shrink-0 mt-0.5 transition-colors"
            style={{ color: isHovered ? "#10b981" : "#9ca3af" }}
          />
          <p className="text-gray-800 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
