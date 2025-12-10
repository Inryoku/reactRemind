export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  wage: string;
  shift: string;
  description: string;
  tags: string[];
  perks: string[];
  featured?: boolean;
};

export const jobList: Job[] = [
  {
    id: "shibuya-cafe-barista",
    title: "カフェスタッフ / バリスタ",
    company: "Blue Alley Coffee 渋谷店",
    location: "渋谷駅 徒歩2分",
    wage: "時給 1,300円〜1,600円",
    shift: "週3日〜・1日4h / シフト自己申告",
    description:
      "焼き立てのペストリーとスペシャルティコーヒーのお店。注文〜ドリンク提供までをお任せ。未経験でもハンドドリップ研修あり。",
    tags: ["駅チカ", "未経験歓迎", "髪色自由"],
    perks: ["まかないドリンク無料", "交通費全額支給", "社員登用あり"],
    featured: true,
  },
  {
    id: "ikebukuro-combini-night",
    title: "コンビニ夜勤スタッフ",
    company: "ファミマ 池袋西口",
    location: "池袋駅 徒歩5分",
    wage: "時給 1,500円〜 (22時以降)",
    shift: "週2日〜・1日3h / 深夜帯のみ",
    description:
      "レジ、品出し、清掃などの基本業務。深夜は落ち着いて作業ができるので、がっつり稼ぎたい学生さんに人気のシフト。",
    tags: ["夜勤", "学生歓迎", "短時間OK"],
    perks: ["昇給あり", "制服貸与", "シフト提出は1週間ごと"],
  },
  {
    id: "kanda-office-clerk",
    title: "オフィス事務アシスタント",
    company: "株式会社ミナトクリエイト",
    location: "神田駅 徒歩4分 / リモート相談可",
    wage: "時給 1,400円〜1,800円",
    shift: "週3日〜・1日5h / 平日昼のみ",
    description:
      "資料作成やデータ入力が中心。Google Workspaceが使えればOK。落ち着いた環境で事務スキルを伸ばしたい方に。",
    tags: ["平日だけ", "私服OK", "リモート相談可"],
    perks: ["交通費支給", "在宅手当あり", "PC貸与"],
  },
  {
    id: "oshare-apparel",
    title: "アパレル販売 / スタイリスト見習い",
    company: "atelier bloom 表参道",
    location: "表参道駅 徒歩1分",
    wage: "時給 1,250円〜＋インセンティブ",
    shift: "週2日〜・1日5h / 土日歓迎",
    description:
      "セレクトショップでの接客・スタイリング提案。SNS更新もお手伝い。ファッションが好きで明るい対応ができる方にぴったり。",
    tags: ["未経験歓迎", "髪色自由", "土日だけ"],
    perks: ["社員割引あり", "ネイルOK", "学生活躍中"],
    featured: true,
  },
  {
    id: "shinagawa-hotel-front",
    title: "ホテルフロント・ベルスタッフ",
    company: "HOTEL LUMIERE 品川",
    location: "品川駅 徒歩6分",
    wage: "時給 1,400円〜1,700円",
    shift: "週4日〜・1日6h / 早朝・夕方歓迎",
    description:
      "チェックイン対応、予約管理、簡単な英語対応あり。研修と先輩のOJTで安心してスタートできます。",
    tags: ["語学活かせる", "フルタイム歓迎", "接客"],
    perks: ["深夜手当あり", "まかない付き", "社割での宿泊可"],
  },
  {
    id: "kiba-warehouse-packing",
    title: "倉庫内軽作業 / ピッキング",
    company: "アーバンロジ木場センター",
    location: "木場駅 バス8分",
    wage: "時給 1,250円〜 / 週払いOK",
    shift: "週2日〜・1日4h / 時間帯選べる",
    description:
      "ネット通販商品のピッキング・梱包。シンプル作業で覚えやすいので、未経験スタートのスタッフ多数。",
    tags: ["未経験歓迎", "短期OK", "シフト自由"],
    perks: ["週払い可", "送迎バスあり", "冷暖房完備"],
  },
  {
    id: "yokohama-cook-aid",
    title: "カジュアルダイニング 調理補助",
    company: "Dining & Bar KAI 横浜",
    location: "横浜駅 東口から徒歩3分",
    wage: "時給 1,300円〜1,500円",
    shift: "週3日〜・1日5h / 夕方〜夜",
    description:
      "仕込み、盛り付け、簡単な調理補助をお願いします。料理好きな方歓迎。メニュー開発の試食会もあります。",
    tags: ["夕方から", "まかないあり", "駅チカ"],
    perks: ["絶品まかない", "髪型自由", "交通費全額支給"],
  },
];
