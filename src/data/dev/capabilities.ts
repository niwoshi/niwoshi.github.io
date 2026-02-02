export interface Capability {
  icon: "Cpu" | "Activity" | "Code2";
  title: string;
  color: string;
  items: string[];
}

export const capabilities: Capability[] = [
  {
    icon: "Cpu",
    title: "ハードウェア＋組み込みを跨ぐシステム開発",
    color: "#2563eb",
    items: [
      "マイコン周辺回路を含む電子回路設計",
      "組み込みマイコン（STM32 / ESP32 など）のファームウェア開発",
      "センサ・計測系デバイスとのインタフェース設計",
      "実験用途から小規模運用までを想定した構成検討",
    ],
  },
  {
    icon: "Activity",
    title: "研究・実験向け計測システム",
    color: "#10b981",
    items: [
      "ロードセル、エンコーダ、EMG 等の計測回路・信号処理",
      "多チャンネル・同期計測システム",
      "モーションキャプチャやフォースプレート等とのデータ連携",
      "データ取得・ログ・評価用ソフトウェア",
    ],
  },
  {
    icon: "Code2",
    title: "ソフトウェア・データ処理",
    color: "#f59e0b",
    items: [
      "組み込みデータの処理・可視化・評価用ツール作成",
      "実験・検証を支援する小規模ソフトウェア",
      "既存コードやシステムの読み解き・改善",
    ],
  },
];
