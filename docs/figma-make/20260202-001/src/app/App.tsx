import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
  Target
} from 'lucide-react';

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
              <span>$ echo $USE_CASES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">こんなケースでお役に立てます</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UseCaseCard
              text="ハードとソフトの切り分けができず、開発が止まっている"
            />
            <UseCaseCard
              text="試作・実験段階で、設計がそのまま継ぎ足されてしまっている"
            />
            <UseCaseCard
              text="研究用途の装置を、安定して動く形にしたい"
            />
            <UseCaseCard
              text="既存の組み込みシステムや基板を改善したい"
            />
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
              <span>$ ls ./works --oneline</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">実績の一例</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WorkCard
              title="モーキャプ+フォースプレート同時計測"
              tags={['UDP', 'Real-time', 'Data Sync']}
            />
            <WorkCard
              title="PCAP→UDPエミュレーション"
              tags={['Wireshark', 'PCAP', 'Network']}
            />
            <WorkCard
              title="レーダーモジュール受信→FFT処理"
              tags={['DSP', 'FFT', 'Embedded']}
            />
            <WorkCard
              title="CANopen/DYNAMIXEL制御"
              tags={['CAN', 'Protocol', 'Control']}
            />
            <WorkCard
              title="デスクトップ常駐監視ツール"
              tags={['Tauri', 'Rust', 'Desktop']}
            />
            <WorkCard
              title="クラウド連携IoTシステム"
              tags={['AWS', 'IoT', 'Django']}
            />
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: '#10b981' }}
      />

      <div className="relative bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-400 hover:shadow-md transition-all">
        <div className="flex items-start gap-3">
          <CheckCircle2 
            className="size-6 flex-shrink-0 mt-0.5 transition-colors"
            style={{ color: isHovered ? '#10b981' : '#9ca3af' }}
          />
          <p className="text-gray-800 leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface WorkCardProps {
  title: string;
  tags: string[];
}

function WorkCard({ title, tags }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
        <h3 className="font-medium text-gray-900 mb-3 text-sm">{title}</h3>
        
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs bg-blue-50 border border-blue-200 rounded text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
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
