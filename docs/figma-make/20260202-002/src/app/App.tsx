import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Cloud, 
  Github, 
  Twitter, 
  Instagram,
  Mail,
  ChevronRight,
  Zap,
  Wifi,
  Activity,
  Box,
  CheckCircle2,
  Lightbulb,
  Users,
  Target,
  Star,
  Folder,
  Pause,
  Play,
  ChevronLeft
} from 'lucide-react';

// ユースケースの全データプール（33件）
const ALL_USE_CASES = [
  'ハードとソフトの責務分担が曖昧なまま開発が進んでしまっている',
  '研究用途の装置を「とりあえず動く」から「安定して使える」にしたい',
  '組み込み機器の通信が不安定で原因が切り分けられない',
  '他人が書いたコードや回路を引き継いだが、誰も全体を理解していない',
  '試作段階の設計がそのまま継ぎ足されて複雑化している',
  '実験データの取得は できるが、評価・可視化の仕組みがない',
  'センサや計測機器の選定から相談したい',
  'ハードウェアとファームウェアの境界で仕様が曖昧になっている',
  '既存システムの改善を進めたいが、どこから手をつければいいか分からない',
  '組み込み開発の経験者が社内におらず、技術判断ができない',
  'プロトコルやタイミングの問題でデバイスが正常に動作しない',
  '研究室の装置を他のメンバーでも使えるようにしたい',
  '現場での実証実験に向けて、安定性を高めたい',
  '計測システムの多チャンネル化・高速化が必要になった',
  '既存の基板設計を改良したいが、回路図が読めない',
  'マイコンのファームウェアを書ける人がいない',
  '通信ログは取れるが、問題の切り分けができない',
  'アナログ回路の設計やノイズ対策が必要',
  'データ取得用のソフトウェアを短期間で作りたい',
  '技術的に詰まっていて、プロジェクトが止まっている',
  'チーム内で技術的な共通理解が取れていない',
  '外部のエンジニアに依頼したいが、要件がまとまっていない',
  '実験のたびに手動で設定を変えるのが大変',
  '既存コードの保守・改善を継続的に支援してほしい',
  'ハードウェアの試作から量産移行を見据えた設計にしたい',
  '複数のデバイスを同期させて動かしたい',
  '実験装置の操作を自動化・省力化したい',
  'リアルタイム性が求められるシステムの設計',
  '組み込みLinuxやエッジデバイスの活用',
  'クラウドとの連携を含むIoTシステム構築',
  'フィールドでの動作検証・トラブル対応',
  '短納期での試作・動作確認が必要',
  '技術選定や構成の妥当性を第三者視点で確認してほしい'
];

// 実績データの全プール（21件）
interface Work {
  title: string;
  tags: string[];
  highlight?: boolean;
}

const ALL_WORKS: Work[] = [
  {
    title: 'エッジコンピューティング基盤構築（2足歩行ロボット）',
    tags: ['Jetson', 'Robotics', 'Dynamixel', 'RapidResponse'],
    highlight: true
  },
  {
    title: 'モーションキャプチャ＋フォースプレート同時計測',
    tags: ['Motion Capture', 'Force Plate', 'UDP', 'Data Sync'],
    highlight: true
  },
  {
    title: 'レーダーデータ受信・FFT処理ファームウェア',
    tags: ['STM32', 'DSP', 'FFT', 'Embedded'],
    highlight: true
  },
  {
    title: '規格外大出力アンプのディスクリート回路設計',
    tags: ['Analog', 'Discrete', 'High Power'],
    highlight: true
  },
  {
    title: 'AI自動航行実証実験向け船舶ネットワーク構築',
    tags: ['Marine', 'Network', 'Autonomous', 'FieldTest'],
    highlight: true
  },
  {
    title: 'ロボット向けモータ・周辺デバイス制御',
    tags: ['Robotics', 'Motor Control', 'Embedded']
  },
  {
    title: 'エンコーダ素子を用いた位置・速度計測システム',
    tags: ['Encoder', 'Position', 'Velocity', 'Embedded']
  },
  {
    title: '多チャンネルエンコーダ計測システム（改良・継続）',
    tags: ['Multi-channel', 'Measurement', 'Embedded']
  },
  {
    title: 'ロードセル／力覚センサ計測システム',
    tags: ['Load Cell', 'Force Sensor', 'Measurement']
  },
  {
    title: 'EMG・生体信号計測システム',
    tags: ['EMG', 'Bio-signal', 'Analog', 'Research']
  },
  {
    title: '組み込み通信トラブルシューティング',
    tags: ['UART', 'RS422', 'USB', 'Debugging']
  },
  {
    title: 'CAN / CANopen ベース制御システム',
    tags: ['CAN', 'CANopen', 'Motor Control']
  },
  {
    title: 'GPS・LED等デジタルデバイス制御',
    tags: ['Digital', 'Embedded', 'Device Control']
  },
  {
    title: '実験・研究向けアナログフロントエンド設計',
    tags: ['Analog Frontend', 'Measurement', 'Research']
  },
  {
    title: 'AIS（船舶信号）受信・マッピング',
    tags: ['AIS', 'Marine', 'Mapping', 'Data Visualization']
  },
  {
    title: '物流・輸送時の加速度計測システム',
    tags: ['Logistics', 'Acceleration', 'Measurement']
  },
  {
    title: 'PCAPデータを用いた通信エミュレーション',
    tags: ['PCAP', 'UDP', 'Network Testing']
  },
  {
    title: '実験用通信プロトコルの検証・評価',
    tags: ['Serial', 'Protocol', 'Performance Testing']
  },
  {
    title: '実験データ取得・可視化支援ソフトウェア',
    tags: ['Data Acquisition', 'Visualization', 'Research']
  },
  {
    title: 'デスクトップ常駐型の開発・監視ツール',
    tags: ['Desktop Tool', 'Monitoring', 'Tauri']
  },
  {
    title: '短期間での試作・動作確認対応',
    tags: ['RapidResponse', 'Prototyping']
  }
];

export default function App() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'ysmn_deus';
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  // カルーセル用のstate
  const [useCaseIndex, setUseCaseIndex] = useState(0);
  const [workIndex, setWorkIndex] = useState(0);
  const [isUseCasePaused, setIsUseCasePaused] = useState(false);
  const [isWorkPaused, setIsWorkPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');

  // ユースケースの自動更新（5秒ごと）
  useEffect(() => {
    if (isUseCasePaused) return;
    
    const interval = setInterval(() => {
      setSlideDirection('left');
      setUseCaseIndex((prev) => {
        const next = prev + 4;
        return next >= ALL_USE_CASES.length ? 0 : next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isUseCasePaused]);

  // 実績の自動更新（8秒ごと）
  useEffect(() => {
    if (isWorkPaused) return;
    
    const interval = setInterval(() => {
      setSlideDirection('left');
      setWorkIndex((prev) => {
        const next = prev + 6;
        return next >= ALL_WORKS.length ? 0 : next;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [isWorkPaused]);

  // 表示するアイテムを取得
  const getDisplayedUseCases = () => {
    const displayed: string[] = [];
    for (let i = 0; i < 4; i++) {
      const index = (useCaseIndex + i) % ALL_USE_CASES.length;
      displayed.push(ALL_USE_CASES[index]);
    }
    return displayed;
  };

  const getDisplayedWorks = () => {
    const displayed: Work[] = [];
    for (let i = 0; i < 6; i++) {
      const index = (workIndex + i) % ALL_WORKS.length;
      displayed.push(ALL_WORKS[index]);
    }
    return displayed;
  };

  // ナビゲーション関数
  const goToNextUseCases = () => {
    setSlideDirection('left');
    setUseCaseIndex((prev) => {
      const next = prev + 4;
      return next >= ALL_USE_CASES.length ? 0 : next;
    });
  };

  const goToPrevUseCases = () => {
    setSlideDirection('right');
    setUseCaseIndex((prev) => {
      const next = prev - 4;
      return next < 0 ? Math.floor(ALL_USE_CASES.length / 4) * 4 : next;
    });
  };

  const goToNextWorks = () => {
    setSlideDirection('left');
    setWorkIndex((prev) => {
      const next = prev + 6;
      return next >= ALL_WORKS.length ? 0 : next;
    });
  };

  const goToPrevWorks = () => {
    setSlideDirection('right');
    setWorkIndex((prev) => {
      const next = prev - 6;
      return next < 0 ? Math.floor(ALL_WORKS.length / 6) * 6 : next;
    });
  };

  const displayedUseCases = getDisplayedUseCases();
  const displayedWorks = getDisplayedWorks();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono relative overflow-x-hidden">
      {/* Circuit Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1766203551890-2664b619042b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNpcmN1aXQlMjBib2FyZCUyMHBjYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NjY5MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 100, 200, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 100, 200, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Hero Section */}
      <motion.section 
        style={{ opacity }}
        className="min-h-screen flex flex-col justify-center items-center px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl"
        >
          <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
            <Terminal className="size-5" />
            <span className="text-sm">~/dev</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center gap-2 flex-wrap">
            <span className="text-blue-600">{typedText}</span>
            <span className="inline-block w-1 h-12 md:h-16 bg-blue-600 animate-pulse" />
            <span className="text-gray-900">--dev</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 text-left max-w-3xl mx-auto text-gray-600"
          >
            <p className="text-base md:text-lg leading-relaxed">
              <span className="text-green-600">//</span> 2017年頃より、研究・開発現場向けのシステムを中心に、電子回路設計から組み込みファームウェア、データ取得・評価用ソフトウェアまで一気通貫で支援してきました。
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              <span className="text-green-600">//</span> 特定の技術領域に閉じず、ハードウェアとソフトウェアの境界で発生しがちな「技術的に詰まって前に進めない」状況を整理し、動く形に落とし込むことを主な役割としています。
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              <span className="text-green-600">//</span> 近年は AI を前提とした開発スタイルを取り入れつつ、設計判断や全体構成の整理、人間の理解が必要な部分に注力する形で開発を行っています。
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronRight className="size-6 rotate-90 text-blue-400" />
        </motion.div>
      </motion.section>

      {/* 対応領域セクション */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">対応領域</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CapabilityCard
              icon={<Cpu />}
              title="ハードウェア＋組み込みを跨ぐシステム開発"
              color="#2563eb"
              items={[
                'マイコン周辺回路を含む電子回路設計',
                '組み込みマイコン（STM32 / ESP32 など）のファームウェア開発',
                'センサ・計測系デバイスとのインタフェース設計',
                '実験用途から小規模運用までを想定した構成検討'
              ]}
            />
            <CapabilityCard
              icon={<Activity />}
              title="研究・実験向け計測システム"
              color="#10b981"
              items={[
                'ロードセル、エンコーダ、EMG 等の計測回路・信号処理',
                '多チャンネル・同期計測システム',
                'モーションキャプチャやフォースプレート等とのデータ連携',
                'データ取得・ログ・評価用ソフトウェア'
              ]}
            />
            <CapabilityCard
              icon={<Code2 />}
              title="ソフトウェア・データ処理"
              color="#f59e0b"
              items={[
                '組み込みデータの処理・可視化・評価用ツール作成',
                '実験・検証を支援する小規模ソフトウェア',
                '既存コードやシステムの読み解き・改善'
              ]}
            />
          </div>
        </div>
      </section>

      {/* スタンス・役割セクション */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">スタンス・役割</h2>
          </motion.div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              <StanceItem
                icon={<Lightbulb />}
                text="要件が曖昧な状態から、技術的に成立する形へ整理する"
                color="#2563eb"
              />
              <StanceItem
                icon={<Box />}
                text="ハードウェア／ファームウェア／ソフトウェアを跨ぐ問題の切り分け"
                color="#10b981"
              />
              <StanceItem
                icon={<Target />}
                text="チームや個人が詰まっている技術課題の解消"
                color="#f59e0b"
              />
              <StanceItem
                icon={<Users />}
                text="単発の実装だけでなく、継続的な技術支援・開発支援"
                color="#3b82f6"
              />
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                「全部を一人で完結させる」こと自体を目的にはせず、AIを含むツールを活用しながら、全体設計や判断が必要な部分に集中することを重視しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* こんなケースでお役に立てますセクション */}
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
              <span>$ cat ./usecases | shuf | head -4</span>
            </div>
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">こんなケースでお役に立てます</h2>
              <span className="text-sm text-gray-500">
                {ALL_USE_CASES.length}件中{displayedUseCases.length}件を表示（自動更新）
              </span>
            </div>
          </motion.div>

          <div 
            className="relative"
            onMouseEnter={() => setIsUseCasePaused(true)}
            onMouseLeave={() => setIsUseCasePaused(false)}
          >
            {/* 一時停止インジケーター */}
            <AnimatePresence>
              {isUseCasePaused && (
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
                  key={useCaseIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ 
                    type: 'tween',
                    duration: 0.5,
                    ease: 'easeInOut'
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {displayedUseCases.map((text, index) => (
                    <UseCaseCard
                      key={`${useCaseIndex}-${index}`}
                      text={text}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* プログレスバー */}
            <div className="mt-6 flex items-center gap-3">
              {/* 前へボタン */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrevUseCases}
                className="flex-shrink-0 p-2 rounded-lg bg-white border-2 border-blue-300 hover:bg-blue-50 hover:border-blue-500 transition-colors group"
                aria-label="前のページ"
              >
                <ChevronLeft className="size-4 text-blue-600" />
              </motion.button>

              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                {!isUseCasePaused && (
                  <motion.div
                    key={`progress-${useCaseIndex}`}
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                  />
                )}
                {isUseCasePaused && (
                  <div className="h-full bg-blue-400" style={{ width: '50%' }} />
                )}
              </div>

              <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                {Math.floor(useCaseIndex / 4) + 1} / {Math.ceil(ALL_USE_CASES.length / 4)}
              </span>

              {/* 次へボタン */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNextUseCases}
                className="flex-shrink-0 p-2 rounded-lg bg-white border-2 border-blue-300 hover:bg-blue-50 hover:border-blue-500 transition-colors group"
                aria-label="次のページ"
              >
                <ChevronRight className="size-4 text-blue-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* 実績の一例セクション */}
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
              <span>$ ls ./works --oneline | shuf | head -6</span>
            </div>
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">実績の一例</h2>
              <span className="text-sm text-gray-500">
                {ALL_WORKS.length}件中{displayedWorks.length}件を表示（自動更新）
              </span>
            </div>
          </motion.div>

          <div 
            className="relative"
            onMouseEnter={() => setIsWorkPaused(true)}
            onMouseLeave={() => setIsWorkPaused(false)}
          >
            {/* 一時停止インジケーター */}
            <AnimatePresence>
              {isWorkPaused && (
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
                  key={workIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ 
                    type: 'tween',
                    duration: 0.5,
                    ease: 'easeInOut'
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {displayedWorks.map((work, index) => (
                    <WorkCard
                      key={`${workIndex}-${index}`}
                      title={work.title}
                      tags={work.tags}
                      highlight={work.highlight}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* プログレスバー */}
            <div className="mt-6 flex items-center gap-3">
              {/* 前へボタン */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrevWorks}
                className="flex-shrink-0 p-2 rounded-lg bg-white border-2 border-green-300 hover:bg-green-50 hover:border-green-500 transition-colors group"
                aria-label="前のページ"
              >
                <ChevronLeft className="size-4 text-green-600" />
              </motion.button>

              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                {!isWorkPaused && (
                  <motion.div
                    key={`work-progress-${workIndex}`}
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 8, ease: 'linear' }}
                  />
                )}
                {isWorkPaused && (
                  <div className="h-full bg-green-400" style={{ width: '50%' }} />
                )}
              </div>

              <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
                {Math.floor(workIndex / 6) + 1} / {Math.ceil(ALL_WORKS.length / 6)}
              </span>

              {/* 次へボタン */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNextWorks}
                className="flex-shrink-0 p-2 rounded-lg bg-white border-2 border-green-300 hover:bg-green-50 hover:border-green-500 transition-colors group"
                aria-label="次のページ"
              >
                <ChevronRight className="size-4 text-green-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Connect</h2>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center">
            <LinkCard icon={<Twitter />} label="Twitter" color="#3b82f6" />
            <LinkCard icon={<Instagram />} label="Instagram" color="#f59e0b" />
            <LinkCard icon={<Github />} label="GitHub" color="#10b981" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">お仕事のご相談・お問い合わせ</h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              組込み開発からクラウド連携まで、<br />
              横断的な技術課題の解決をお手伝いします。
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg overflow-hidden transition-all shadow-lg hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <Mail className="size-5 relative z-10" />
              <span className="text-lg relative z-10 font-medium">&gt; submit_inquiry</span>
              <ChevronRight className="size-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  items: string[];
}

function CapabilityCard({ icon, title, color, items }: CapabilityCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: color }}
      />
      
      <div 
        className="relative bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all h-full"
        style={{
          borderColor: isHovered ? color : '#e5e7eb',
        }}
      >
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 rounded-tl" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 rounded-tr" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 rounded-bl" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 rounded-br" style={{ borderColor: color }} />

        <div className="flex flex-col gap-4">
          <div 
            className="p-3 rounded-lg self-start"
            style={{ backgroundColor: `${color}15` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
          
          <h3 className="font-bold leading-tight" style={{ color }}>{title}</h3>
          
          <ul className="space-y-3">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-sm text-gray-700 flex items-start gap-2"
              >
                <span className="text-xs mt-0.5" style={{ color }}>▸</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

interface StanceItemProps {
  icon: React.ReactNode;
  text: string;
  color: string;
}

function StanceItem({ icon, text, color }: StanceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      <div 
        className="p-2 rounded-lg flex-shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        <div style={{ color }} className="size-5">
          {icon}
        </div>
      </div>
      <p className="text-gray-800 leading-relaxed pt-1">{text}</p>
    </motion.div>
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
        style={{ backgroundColor: '#10b981' }}
      />

      <div className="relative bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-md transition-all h-full min-h-[120px] flex items-center">
        <div className="flex items-start gap-3">
          <CheckCircle2 
            className="size-6 flex-shrink-0 mt-0.5 transition-colors"
            style={{ color: isHovered ? '#10b981' : '#9ca3af' }}
          />
          <p className="text-gray-800 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

interface WorkCardProps {
  title: string;
  tags: string[];
  highlight?: boolean;
}

function WorkCard({ title, tags, highlight }: WorkCardProps) {
  return (
    <div className="relative group">
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
        <div className="flex items-start gap-2 mb-3">
          <Folder className="size-4 text-blue-500 flex-shrink-0 mt-0.5" />
          <h3 className="font-medium text-gray-900 text-sm leading-tight">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map(tag => (
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

interface LinkCardProps {
  icon: React.ReactNode;
  label: string;
  color: string;
}

function LinkCard({ icon, label, color }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: color }}
      />

      {/* Connector pins */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <div 
          className="w-1.5 h-1.5 rounded-full transition-colors"
          style={{ backgroundColor: isHovered ? color : '#d1d5db' }}
        />
        <div 
          className="w-1.5 h-1.5 rounded-full transition-colors"
          style={{ backgroundColor: isHovered ? color : '#d1d5db' }}
        />
      </div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <div 
          className="w-1.5 h-1.5 rounded-full transition-colors"
          style={{ backgroundColor: isHovered ? color : '#d1d5db' }}
        />
        <div 
          className="w-1.5 h-1.5 rounded-full transition-colors"
          style={{ backgroundColor: isHovered ? color : '#d1d5db' }}
        />
      </div>

      <div 
        className="flex items-center gap-3 px-6 py-4 bg-white border-2 rounded-lg hover:shadow-md transition-all min-w-[180px]"
        style={{
          borderColor: isHovered ? color : '#e5e7eb',
        }}
      >
        <div style={{ color }}>{icon}</div>
        <span className="font-medium text-gray-900">{label}</span>
      </div>
    </motion.a>
  );
}