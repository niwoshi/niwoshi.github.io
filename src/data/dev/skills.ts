export interface Skill {
  icon: "Cpu" | "Wifi" | "Activity" | "Cloud" | "Code2" | "Box";
  title: string;
  color: string;
  items: string[];
  description?: string;
}

export const skills: Skill[] = [
  {
    icon: "Cpu",
    title: "Embedded / Hardware",
    color: "#2563eb",
    items: ["回路設計", "ファームウェア", "UART/SPI/I2C", "DMA", "ADC/DAC"],
    description: "センサー・アクチュエータ制御からデータ収集まで、ハードウェアに近い領域での実装",
  },
  {
    icon: "Wifi",
    title: "Protocol / Data",
    color: "#10b981",
    items: ["UDP", "CAN/CANopen", "Wireshark", "PCAP", "Serial通信"],
    description: "各種通信プロトコルの実装・デバッグ、パケット解析",
  },
  {
    icon: "Activity",
    title: "DSP / Processing",
    color: "#f59e0b",
    items: ["FFT/RFFT", "フレーム処理", "リアルタイムロギング", "信号処理"],
    description: "リアルタイム信号処理、周波数解析、データ可視化",
  },
  {
    icon: "Cloud",
    title: "Backend / Frontend",
    color: "#3b82f6",
    items: ["Django", "Next.js", "Remix", "AWS", "Supabase"],
    description: "Webアプリ開発、API設計、クラウドインフラ構築",
  },
  {
    icon: "Code2",
    title: "Dev / Quality",
    color: "#059669",
    items: ["CMake", "CLion", "GoogleTest", "Git", "Docker"],
    description: "ビルド環境構築、テスト自動化、CI/CD",
  },
  {
    icon: "Box",
    title: "Tools & Others",
    color: "#d97706",
    items: ["Tauri", "Rust", "Python", "C/C++", "TypeScript"],
    description: "デスクトップアプリ開発、各種言語での実装",
  },
];
