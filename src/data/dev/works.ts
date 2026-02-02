// 実績データの全プール（29件）
// UI: 6件ずつ表示、8秒ごとに自動スライド
// 並び順: インパクト重視→クラウド/モダン技術→制御系→計測系→データ/通信

export interface Work {
  title: string;
  tags: string[];
  highlight?: boolean;
}

export const works: Work[] = [
  // === ページ1: ハイライト（インパクト重視）===
  {
    title: 'AI自動航行実証実験向け船舶ネットワーク構築',
    tags: ['Marine', 'Network', 'Autonomous', 'FieldTest'],
    highlight: true,
  },
  {
    title: 'エッジコンピューティング基盤構築（2足歩行ロボット）',
    tags: ['Jetson', 'Robotics', 'Dynamixel', 'RapidResponse'],
    highlight: true,
  },
  {
    title: 'モーションキャプチャ＋フォースプレート同時計測',
    tags: ['Motion Capture', 'Force Plate', 'UDP', 'Data Sync'],
    highlight: true,
  },
  {
    title: '規格外大出力アンプのディスクリート回路設計',
    tags: ['Analog', 'Discrete', 'High Power'],
    highlight: true,
  },
  {
    title: 'センサデータ受信・FFT処理ファームウェア',
    tags: ['DSP', 'FFT', 'Embedded'],
    highlight: true,
  },
  {
    title: '水上ロボット制御システム',
    tags: ['Motor Control', 'Marine', 'C++'],
  },

  // === ページ2: クラウド・モダン技術 ===
  {
    title: 'AWS CDK を用いたサーバーレス基盤構築',
    tags: ['AWS CDK', 'Lambda', 'CloudFormation', 'IaC'],
  },
  {
    title: 'AWS Amplify でのフルスタックアプリ開発',
    tags: ['Amplify', 'React', 'GraphQL', 'Cognito'],
  },
  {
    title: '計測データ可視化クラウドUI',
    tags: ['TypeScript', 'React', 'Cloud', 'Visualization'],
  },
  {
    title: 'Rust 製デスクトップエージェント開発',
    tags: ['Rust', 'Desktop', 'Agent', 'Cross-platform'],
  },
  {
    title: 'AWS コスト最適化ツール開発',
    tags: ['AWS', 'Python', 'Cost Optimization'],
  },
  {
    title: 'デスクトップ常駐型の開発・監視ツール',
    tags: ['Desktop Tool', 'Monitoring', 'Tauri'],
  },

  // === ページ3: ロボット・モーター制御 ===
  {
    title: 'ロボット向けモータ・周辺デバイス制御',
    tags: ['Robotics', 'Motor Control', 'Embedded'],
  },
  {
    title: 'CAN / CANopen ベース制御システム',
    tags: ['CAN', 'CANopen', 'Motor Control'],
  },
  {
    title: 'GPS・LED等デジタルデバイス制御',
    tags: ['Digital', 'Embedded', 'Device Control'],
  },
  {
    title: 'STM32 F722 ファームウェア開発',
    tags: ['STM32', 'Embedded', 'C', 'Firmware'],
  },
  {
    title: 'Raspberry Pi / TinkerBoard を用いたシステム開発',
    tags: ['Raspberry Pi', 'SBC', 'Linux', 'Embedded'],
  },
  {
    title: '組み込み通信トラブルシューティング',
    tags: ['UART', 'RS422', 'USB', 'Debugging'],
  },

  // === ページ4: 計測・センサ ===
  {
    title: 'PSoC6 多チャンネルエンコーダ計測システム',
    tags: ['PSoC6', 'Multi-channel', 'Encoder', 'Embedded', 'C'],
  },
  {
    title: 'エンコーダ素子を用いた位置・速度計測システム',
    tags: ['Encoder', 'Position', 'Velocity', 'Embedded'],
  },
  {
    title: 'ロードセル／力覚センサ計測システム',
    tags: ['Load Cell', 'Force Sensor', 'Measurement'],
  },
  {
    title: 'マルチセンサーロギングシステム',
    tags: ['Multi-sensor', 'Logging', 'C++', 'Data Acquisition'],
  },
  {
    title: '物流・輸送時の加速度計測システム',
    tags: ['Logistics', 'Acceleration', 'Measurement'],
  },
  {
    title: '実験・研究向けアナログフロントエンド設計',
    tags: ['Analog Frontend', 'Measurement', 'Research'],
  },

  // === ページ5: データ・通信・その他 ===
  {
    title: 'AIS（船舶信号）受信・マッピング',
    tags: ['AIS', 'Marine', 'Mapping', 'Data Visualization'],
  },
  {
    title: 'PCAPデータを用いた通信エミュレーション',
    tags: ['PCAP', 'UDP', 'Network Testing'],
  },
  {
    title: '実験用通信プロトコルの検証・評価',
    tags: ['Serial', 'Protocol', 'Performance Testing'],
  },
  {
    title: '実験データ取得・可視化支援ソフトウェア',
    tags: ['Data Acquisition', 'Visualization', 'Research'],
  },
  {
    title: '短期間での試作・動作確認対応',
    tags: ['RapidResponse', 'Prototyping'],
  },
];

// 表示件数
export const DISPLAY_COUNT = 6;

// 自動更新間隔（ミリ秒）
export const ROTATE_INTERVAL = 8000;

// 総ページ数を計算
export const getTotalPages = () => Math.ceil(works.length / DISPLAY_COUNT);

// 指定インデックスから表示するアイテムを取得
export const getDisplayedWorks = (startIndex: number): Work[] => {
  const displayed: Work[] = [];
  for (let i = 0; i < DISPLAY_COUNT; i++) {
    const index = (startIndex + i) % works.length;
    displayed.push(works[index]);
  }
  return displayed;
};
