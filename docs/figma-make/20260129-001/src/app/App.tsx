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
  Box
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
          className="text-center space-y-6 max-w-4xl"
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

          <div className="space-y-2 text-gray-600">
            <p className="text-lg md:text-xl">// Embedded × Cloud × Tooling</p>
            <p className="text-base md:text-lg">// ハード〜クラウド〜UIまで、横断型の実装・検証</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-8"
          >
            <div className="inline-block px-6 py-3 border-2 border-blue-200 rounded-lg bg-blue-50/70 backdrop-blur shadow-sm">
              <p className="text-amber-700 font-medium">「現場で動く」ことを最優先に</p>
            </div>
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

      {/* Skills Section */}
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
              <span>$ ls ./skills</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Skills</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              icon={<Cpu />}
              title="Embedded / Hardware"
              color="#2563eb"
              skills={['回路設計', 'ファームウェア', 'UART/SPI/I2C', 'DMA', 'ADC/DAC']}
            />
            <SkillCard
              icon={<Wifi />}
              title="Protocol / Data"
              color="#10b981"
              skills={['UDP', 'CAN/CANopen', 'Wireshark', 'PCAP', 'Serial通信']}
            />
            <SkillCard
              icon={<Activity />}
              title="DSP / Processing"
              color="#f59e0b"
              skills={['FFT/RFFT', 'フレーム処理', 'リアルタイムロギング', '信号処理']}
            />
            <SkillCard
              icon={<Cloud />}
              title="Backend / Frontend"
              color="#3b82f6"
              skills={['Django', 'Next.js', 'Remix', 'AWS', 'Supabase']}
            />
            <SkillCard
              icon={<Code2 />}
              title="Dev / Quality"
              color="#059669"
              skills={['CMake', 'CLion', 'GoogleTest', 'Git', 'Docker']}
            />
            <SkillCard
              icon={<Box />}
              title="Tools & Others"
              color="#d97706"
              skills={['Tauri', 'Rust', 'Python', 'C/C++', 'TypeScript']}
            />
          </div>
        </div>
      </section>

      {/* Works Section */}
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
              <span>$ cat ./works --summary</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="モーキャプ+フォースプレート同時計測"
              description="リアルタイムデータ統合・同期システム"
              tags={['UDP', 'Real-time', 'Data Sync']}
              result="ミリ秒単位での高精度同期を実現"
            />
            <ProjectCard
              title="PCAP→UDPエミュレーション"
              description="記録データの再生・デバッグ環境構築"
              tags={['Wireshark', 'PCAP', 'Network']}
              result="開発効率3倍向上"
            />
            <ProjectCard
              title="レーダーモジュール受信→FFT処理"
              description="センサーデータのリアルタイム解析"
              tags={['DSP', 'FFT', 'Embedded']}
              result="99%の検出精度達成"
            />
            <ProjectCard
              title="CANopen/DYNAMIXEL制御"
              description="産業用通信プロトコル実装"
              tags={['CAN', 'Protocol', 'Control']}
              result="安定稼働1000時間達成"
            />
            <ProjectCard
              title="デスクトップ常駐監視ツール"
              description="システムモニタリング＆アラート"
              tags={['Tauri', 'Rust', 'Desktop']}
              result="メモリ使用量50%削減"
            />
            <ProjectCard
              title="クラウド連携IoTシステム"
              description="デバイス〜クラウド間データパイプライン"
              tags={['AWS', 'IoT', 'Django']}
              result="100台超のデバイス管理"
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

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: string[];
}

function SkillCard({ icon, title, color, skills }: SkillCardProps) {
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
        className="relative bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all"
        style={{
          borderColor: isHovered ? color : '#e5e7eb',
        }}
      >
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 rounded-tl" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 rounded-tr" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 rounded-bl" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 rounded-br" style={{ borderColor: color }} />

        <div className="flex items-start gap-4">
          <div 
            className="p-3 rounded-lg"
            style={{ backgroundColor: `${color}15` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold mb-3" style={{ color }}>{title}</h3>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-2 py-1 text-xs bg-gray-50 border border-gray-200 rounded text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  style={{
                    borderColor: isHovered ? `${color}40` : '#e5e7eb',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isHovered ? `${color}40` : '#e5e7eb';
                    e.currentTarget.style.color = '#374151';
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  result: string;
}

function ProjectCard({ title, description, tags, result }: ProjectCardProps) {
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
      {/* Circuit border light animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          rx="8"
          fill="none"
          stroke="url(#border-gradient)"
          strokeWidth="2"
          strokeDasharray="8 8"
          className={isHovered ? 'opacity-100' : 'opacity-0'}
          style={{
            transition: 'opacity 0.3s',
          }}
        >
          {isHovered && (
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="16"
              dur="0.5s"
              repeatCount="indefinite"
            />
          )}
        </rect>
        <defs>
          <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Corner lights that pulse */}
      <div className={`absolute top-0 left-0 w-2 h-2 rounded-full bg-blue-500 transition-all duration-300 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />
      <div className={`absolute top-0 right-0 w-2 h-2 rounded-full bg-green-500 transition-all duration-300 delay-75 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 rounded-full bg-amber-500 transition-all duration-300 delay-150 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />
      <div className={`absolute bottom-0 right-0 w-2 h-2 rounded-full bg-blue-500 transition-all duration-300 delay-200 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 via-green-500/10 to-amber-500/10 blur-xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all h-full flex flex-col">
        {/* IC chip decoration */}
        <div className="flex items-center gap-2 mb-4">
          <motion.div 
            className="w-2 h-2 rounded-full bg-blue-500"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: isHovered ? Infinity : 0,
            }}
          />
          <motion.div 
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              repeat: isHovered ? Infinity : 0,
            }}
          />
          <motion.div 
            className="w-2 h-2 rounded-full bg-amber-500"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              repeat: isHovered ? Infinity : 0,
            }}
          />
        </div>

        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-green-50 border border-green-200 rounded text-green-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex items-start gap-2">
            <Zap className="size-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700 font-medium">{result}</p>
          </div>
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