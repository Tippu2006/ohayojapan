/**
 * ============================================================
 *  OHAYO JAPAN 2026 — SINGLE SOURCE OF CONTENT (EDIT ME)
 * ============================================================
 *  Everything on the website is driven by this file:
 *  faculty, sponsors, timeline, schedule, events, registration
 *  links, statistics, gallery and the Japanese translations.
 *
 *  Every text field is written as { en: "...", jp: "..." } so the
 *  language switcher can translate the whole site instantly.
 * ============================================================
 */

export type L = { en: string; jp: string };

export const festival = {
  name: "OHAYOU JAPAN",
  year: "2026",
  /** Festival start — used by the countdown timer. */
  startsAt: "2026-09-16T09:00:00+05:30",
  dates: { en: "SEPTEMBER 16 – 17, 2026", jp: "2026年9月16日〜17日" },
  presenter: { en: "KL University proudly presents", jp: "KL大学が誇りを持ってお届けします" },
  collabLine: {
    en: "KL University  ×  OHAYOU JAPAN 2026",
    jp: "KL大学 × OHAYOU JAPAN 2026",
  },
  subtitle: { en: "Experience Japanese Culture", jp: "ジャパン文化を体験する" },
  tagline: {
    en: "Anime • Cosplay • Language • Dance • Music • Food • Games • Traditions",
    jp: "アニメ • コスプレ • 言語 • ダンス • 音楽 • 食 • ゲーム • 伝統",
  },
  venue: { en: "KL University Campus, Vaddeswaram", jp: "KL大学キャンパス、ヴァッデーシュワラム" },
};

/** UI strings used across pages. */
export const ui = {
  explore: { en: "EXPLORE", jp: "探索する" },
  home: { en: "Home", jp: "ホーム" },
  schedule: { en: "Schedule", jp: "スケジュール" },
  events: { en: "Events", jp: "イベント" },
  registration: { en: "Registration", jp: "登録" },
  updates: { en: "New Updates", jp: "最新情報" },
  days: { en: "Days", jp: "日" },
  hours: { en: "Hours", jp: "時間" },
  minutes: { en: "Minutes", jp: "分" },
  seconds: { en: "Seconds", jp: "秒" },
  begun: { en: "The Festival Has Begun!", jp: "祭りが始まりました！" },
  faculty: { en: "Special Thanks To", jp: "特別感謝" },
  facultyNote: {
    en: "Honoring the visionary leaders and mentors supporting OHAYOU JAPAN 2026",
    jp: "OHAYOU JAPAN 2026を支える指導陣および関係者の皆様",
  },
  collaborators: { en: "Collaborators & Sponsors", jp: "協力・スポンサー" },
  timeline: { en: "Festival Timeline", jp: "祭りの歩み" },
  memories: { en: "Memories Gallery", jp: "思い出のギャラリー" },
  memoriesNote: {
    en: "Moments of passion, art, and harmony from past chapters",
    jp: "これまでの章の輝かしい瞬間",
  },
  viewDetails: { en: "View Details", jp: "詳細を見る" },
  register: { en: "Register Now", jp: "今すぐ登録" },
  day1: { en: "DAY 1 — SEPT 16", jp: "1日目 (9/16)" },
  day2: { en: "DAY 2 — SEPT 17", jp: "2日目 (9/17)" },
  rules: { en: "Rules & Guidelines", jp: "ルールとガイドライン" },
  venue: { en: "Venue", jp: "会場" },
  time: { en: "Time", jp: "時間" },
  coordinator: { en: "Coordinator", jp: "担当者" },
  gallery: { en: "Event Gallery", jp: "ギャラリー" },
  back: { en: "Back to Events", jp: "イベント一覧に戻る" },
  music: { en: "Japanese Ambience Music", jp: "和風アンビエントBGM" },
  scheduleNote: {
    en: "Two days. One unforgettable Japanese journey.",
    jp: "二日間。忘れられないジャパンの旅。",
  },
  eventsNote: {
    en: "Explore our rich array of cultural competitions, performances & workshops",
    jp: "多彩な文化コンテスト、パフォーマンス、ワークショップ",
  },
  registrationNote: {
    en: "Choose your pass and join the celebration",
    jp: "参加パスを選んでお祭りに参加しよう",
  },
  team: { en: "Organizing Team", jp: "実行委員会" },
  teamNote: {
    en: "The dedicated student coordinators and committee bringing OHAYOU JAPAN 2026 to life",
    jp: "OHAYOU JAPAN 2026の開催に向けて尽力する学生実行委員会メンバー",
  },
};

/** Helper to generate elegant initial avatars for faculty without external image dependencies */
const facultyAvatar = (name: string, role: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1c1917" />
          <stop offset="50%" stop-color="#2a0a0f" />
          <stop offset="100%" stop-color="#111111" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#C8102E" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#FFD700" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#bg)" />
      <circle cx="200" cy="170" r="140" fill="url(#glow)" />
      <circle cx="200" cy="160" r="75" fill="#F7F3E8" fill-opacity="0.08" stroke="#FFD700" stroke-opacity="0.3" stroke-width="2" />
      <path d="M120 340 Q200 240 280 340 Z" fill="#C8102E" fill-opacity="0.25" stroke="#FFD700" stroke-opacity="0.4" stroke-width="2" />
      <text x="200" y="178" font-family="Cinzel, serif" font-size="52" font-weight="bold" fill="#FFD700" text-anchor="middle" letter-spacing="2">${name
        .split(" ")
        .map((n) => n[0])
        .join("")}</text>
      <text x="200" y="320" font-family="Cinzel, serif" font-size="14" fill="#F7F3E8" fill-opacity="0.7" text-anchor="middle" letter-spacing="3">${role.toUpperCase()}</text>
    </svg>
  `)}`;

/** Faculty array with category groups and original designations. */
export const faculty: {
  name: string;
  designation: L;
  department: L;
  category: "Advisor" | "Co-Advisor" | "Convenor" | "Faculty Mentor";
  photo: string;
}[] = [
  {
    name: "Dr. M Kishore Babu",
    designation: { en: "Dean", jp: "学部長" },
    department: { en: "Management, Humanities & Sciences (MHS)", jp: "経営・人文・科学部" },
    category: "Advisor",
    photo: "/faculty/kishore_babu.png",
  },
  {
    name: "Dr. A. Srinath",
    designation: { en: "Dean", jp: "学部長" },
    department: { en: "Skill Development", jp: "スキル開発" },
    category: "Advisor",
    photo: "/faculty/srinath.png",
  },
  {
    name: "Dr. K.R.S. Prasad",
    designation: { en: "Dean", jp: "学部長" },
    department: { en: "Student Affairs", jp: "学生生活・学生問題" },
    category: "Advisor",
    photo: "/faculty/krsp.jpg",
  },
  {
    name: "Dr. P.V. Chalapathi",
    designation: { en: "Dean", jp: "部長" },
    department: { en: "Industry Relations & Placements", jp: "産業関係・就職支援部" },
    category: "Advisor",
    photo: "/faculty/chalapathi.jpg",
  },
  {
    name: "Dr. N.B.V. Prasad",
    designation: { en: "Dean", jp: "部長" },
    department: { en: "Placements & Progression", jp: "就職・進路支援部" },
    category: "Advisor",
    photo: "/faculty/prasad.jpg",
  },
  {
    name: "Dr. T.K. Rama Krishna Rao",
    designation: { en: "Principal", jp: "校長" },
    department: { en: "College of Engineering", jp: "工学部" },
    category: "Advisor",
    photo: "/faculty/ramakrishna.png",
  },
  {
    name: "Mr. P. Sai Vijay",
    designation: { en: "Director", jp: "所長" },
    department: { en: "Student Activity Center", jp: "課外活動センター" },
    category: "Advisor",
    photo: "/faculty/sai_vijay.jpg",
  },
  {
    name: "Mr. V. Maruthi Vijay",
    designation: { en: "Director (IR)", jp: "国際関係局長" },
    department: { en: "International Relations", jp: "国際関係部" },
    category: "Co-Advisor",
    photo: "/faculty/maruthi_vijay.jpg",
  },
  {
    name: "Dr. K. Aravind",
    designation: { en: "Deputy Director (IR)", jp: "国際関係副局長" },
    department: { en: "International Relations", jp: "国際関係部" },
    category: "Co-Advisor",
    photo: "/faculty/aravind.jpg",
  },
  {
    name: "Dr. Vinay Atgur",
    designation: { en: "Assistant Dean", jp: "副学部長" },
    department: { en: "Industrial Practice School", jp: "産業実習スクール" },
    category: "Co-Advisor",
    photo: "/faculty/vinay.jpg",
  },
  {
    name: "Mr. Jamindar Buddiga",
    designation: { en: "Head of Department", jp: "学科長" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Co-Advisor",
    photo: "/faculty/jamindar.jpg",
  },
  {
    name: "Mr. ANAND RAJ",
    designation: { en: "Incharge", jp: "責任者" },
    department: { en: "Japanese Placement Training", jp: "日本語就職研修" },
    category: "Convenor",
    photo: "/faculty/anand_raj.jpg",
  },
  {
    name: "Mr. Ravi Ranjan",
    designation: { en: "Japanese Faculty", jp: "日本語教員" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Faculty Mentor",
    photo: "/faculty/ravi.png",
  },
  {
    name: "Ms. Jyotika Sharma",
    designation: { en: "Japanese Faculty", jp: "日本語教員" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Faculty Mentor",
    photo: "/faculty/jyotika.jpg",
  },
  {
    name: "Mr. K Aswin Chandran",
    designation: { en: "Japanese Faculty", jp: "日本語教員" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Faculty Mentor",
    photo: "/faculty/aswin.png",
  },
  {
    name: "Mr. MD Salman",
    designation: { en: "Japanese Faculty", jp: "日本語教員" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Faculty Mentor",
    photo: "/faculty/salman.jpg",
  },
  {
    name: "Mr. IRFAN MOHAMMED",
    designation: { en: "Japanese Faculty", jp: "日本語教員" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Faculty Mentor",
    photo: "/faculty/irfan.jpg",
  },
  {
    name: "Mr. Vasim Akram",
    designation: { en: "Japanese Faculty", jp: "日本語教員" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Faculty Mentor",
    photo: "/faculty/vasim.png",
  },
  {
    name: "Ms. Neha Pathak",
    designation: { en: "Korean Faculty", jp: "韓国語教員" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Faculty Mentor",
    photo: "/faculty/neha.jpg",
  },
  {
    name: "Dr. S K ANAND",
    designation: { en: "Assistant Professor", jp: "助教" },
    department: { en: "Korean Studies", jp: "韓国研究" },
    category: "Faculty Mentor",
    photo: "/faculty/sk_anand.jpg",
  },
  {
    name: "Mr. Md Farhan Ahmad",
    designation: { en: "German Faculty", jp: "ドイツ語教員" },
    department: { en: "Department of Foreign Languages", jp: "外国語学部" },
    category: "Faculty Mentor",
    photo: "/faculty/farhan.jpg",
  },
];

/** Helper to generate elegant initial avatars for team members */
const teamAvatar = (name: string, role: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18181b" />
          <stop offset="50%" stop-color="#271f1a" />
          <stop offset="100%" stop-color="#09090b" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#FFD700" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#C8102E" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#bg)" />
      <circle cx="200" cy="170" r="140" fill="url(#glow)" />
      <circle cx="200" cy="160" r="70" fill="#F7F3E8" fill-opacity="0.06" stroke="#FFD700" stroke-opacity="0.4" stroke-width="2" />
      <path d="M120 340 Q200 240 280 340 Z" fill="#FFD700" fill-opacity="0.15" stroke="#FFD700" stroke-opacity="0.3" stroke-width="2" />
      <text x="200" y="178" font-family="Cinzel, serif" font-size="48" font-weight="bold" fill="#FFD700" text-anchor="middle" letter-spacing="2">${name
        .split(" ")
        .map((n) => n[0])
        .join("")}</text>
      <text x="200" y="320" font-family="Cinzel, serif" font-size="14" fill="#F7F3E8" fill-opacity="0.75" text-anchor="middle" letter-spacing="3">${role.toUpperCase()}</text>
    </svg>
  `)}`;

/** Organizing Team categories and member cards. */
export const team: {
  category: L;
  members: {
    name: string;
    role: L;
    department: L;
    photo: string;
  }[];
}[] = [
  {
    category: { en: "Fest Chiefs", jp: "フェスティバル幹部" },
    members: [
      {
        name: "K. V. S. S. KUSHMITH",
        role: { en: "Chief Executive", jp: "最高執行責任者" },
        department: { en: "Fest Chiefs", jp: "フェスティバル幹部" },
        photo: "/team/kushmith.png",
      },
      {
        name: "ANVI SHARMA",
        role: { en: "Chief Executive", jp: "最高執行責任者" },
        department: { en: "Fest Chiefs", jp: "フェスティバル幹部" },
        photo: "/team/anvi.jpg",
      },
      {
        name: "MUPPAVARAPU SIVARAM",
        role: { en: "Chief Secretary", jp: "最高書記官" },
        department: { en: "Fest Chiefs", jp: "フェスティバル幹部" },
        photo: teamAvatar("MUPPAVARAPU SIVARAM", "CHIEF SECRETARY"),
      },
      {
        name: "K. VENKATESH",
        role: { en: "Chief Secretary", jp: "最高書記官" },
        department: { en: "Fest Chiefs", jp: "フェスティバル幹部" },
        photo: teamAvatar("K. VENKATESH", "CHIEF SECRETARY"),
      },
    ],
  },
  {
    category: { en: "Public Relations (PR)", jp: "広報・PR部門" },
    members: [
      {
        name: "TIPPU SULTHAN SK",
        role: { en: "PR Chief", jp: "広報責任者" },
        department: { en: "PR Team", jp: "広報チーム" },
        photo: "/team/tippu.jpg",
      },
      {
        name: "HARSHITA KUMARI",
        role: { en: "PR Chief", jp: "広報責任者" },
        department: { en: "PR Team", jp: "広報チーム" },
        photo: teamAvatar("HARSHITA KUMARI", "PR CHIEF"),
      },
      {
        name: "B VARUN SAI KARTHEEK",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "PR Team", jp: "広報チーム" },
        photo: teamAvatar("B VARUN SAI KARTHEEK", "CORE"),
      },
      {
        name: "SRINIVASA GOWTHAM DEEVI",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "PR Team", jp: "広報チーム" },
        photo: teamAvatar("SRINIVASA GOWTHAM DEEVI", "CORE"),
      },
      {
        name: "VELPURI AKSHARA",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "PR Team", jp: "広報チーム" },
        photo: teamAvatar("VELPURI AKSHARA", "CORE"),
      },
      {
        name: "MD NAZMA BEGUM",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "PR Team", jp: "広報チーム" },
        photo: teamAvatar("MD NAZMA BEGUM", "CORE"),
      },
    ],
  },
  {
    category: { en: "Creative Arts & Design Team", jp: "クリエイティブアーツ・デザインチーム" },
    members: [
      {
        name: "NADAMUNI VASAVI",
        role: { en: "Designing Chief", jp: "デザイン統括" },
        department: { en: "Creative Arts & Design Team", jp: "クリエイティブアーツ・デザインチーム" },
        photo: teamAvatar("NADAMUNI VASAVI", "DESIGN CHIEF"),
      },
      {
        name: "LAKSHMI CHARAN GUDIPATI",
        role: { en: "Designing Chief", jp: "デザイン統括" },
        department: { en: "Creative Arts & Design Team", jp: "クリエイティブアーツ・デザインチーム" },
        photo: "/team/charan.jpg",
      },
      {
        name: "SUMANTHIKA KANCHARLA",
        role: { en: "Creative Arts Chief", jp: "クリエイティブアーツ統括" },
        department: { en: "Creative Arts & Design Team", jp: "クリエイティブアーツ・デザインチーム" },
        photo: "/team/sumanthika.jpg",
      },
      {
        name: "ANUHYA DRONAVALLI",
        role: { en: "Creative Arts Chief", jp: "クリエイティブアーツ統括" },
        department: { en: "Creative Arts & Design Team", jp: "クリエイティブアーツ・デザインチーム" },
        photo: teamAvatar("ANUHYA DRONAVALLI", "CREATIVE CHIEF"),
      },
    ],
  },
  {
    category: { en: "Event Management", jp: "イベント運営部門" },
    members: [
      {
        name: "SHAIK ROHAN",
        role: { en: "Chief", jp: "統括責任者" },
        department: { en: "Event Operations", jp: "イベント運営部" },
        photo: teamAvatar("SHAIK ROHAN", "CHIEF"),
      },
      {
        name: "MAHAMMAD ABDUL RAHAMAN ABID",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Event Operations", jp: "イベント運営部" },
        photo: teamAvatar("MAHAMMAD ABDUL RAHAMAN ABID", "CORE"),
      },
      {
        name: "KAGITHA BOBBY",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Event Operations", jp: "イベント運営部" },
        photo: teamAvatar("KAGITHA BOBBY", "CORE"),
      },
    ],
  },
  {
    category: { en: "Stage Management", jp: "舞台進行・演出部門" },
    members: [
      {
        name: "VIRAVALLI HARI VEERENDRA SATYA",
        role: { en: "Chief", jp: "舞台統括責任者" },
        department: { en: "Stage Division", jp: "舞台部" },
        photo: "/team/hari.jpg",
      },
      {
        name: "KOVELA ABHISHEK",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Stage Division", jp: "舞台部" },
        photo: teamAvatar("KOVELA ABHISHEK", "CORE"),
      },
      {
        name: "SAYANI AKHIL",
        role: { en: "Stage Anchor", jp: "ステージ司会・MC" },
        department: { en: "Stage Division", jp: "舞台部" },
        photo: "/team/akhil.jpg",
      },
    ],
  },
  {
    category: { en: "Hospitality", jp: "接待・おもてなし部門" },
    members: [
      {
        name: "KIRAN SAI VARSHITHA GANDEPALLI",
        role: { en: "Chief", jp: "接待統括責任者" },
        department: { en: "Hospitality Cell", jp: "接待部" },
        photo: teamAvatar("KIRAN SAI VARSHITHA GANDEPALLI", "CHIEF"),
      },
      {
        name: "NEHA SRUSTI SREE",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Hospitality Cell", jp: "接待部" },
        photo: teamAvatar("NEHA SRUSTI SREE", "CORE"),
      },
    ],
  },
  {
    category: { en: "HR & Drafting", jp: "人事・起草部門" },
    members: [
      {
        name: "J VEDA SUHAS KULKARNI",
        role: { en: "Chief", jp: "人事統括責任者" },
        department: { en: "HR & Drafting", jp: "人事部" },
        photo: teamAvatar("J VEDA SUHAS KULKARNI", "CHIEF"),
      },
      {
        name: "POLURI RAMESH",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "HR & Drafting", jp: "人事部" },
        photo: teamAvatar("POLURI RAMESH", "CORE"),
      },
    ],
  },
  {
    category: { en: "Logistics", jp: "設営・ロジスティクス部門" },
    members: [
      {
        name: "DASARI JOSEPH JAKWES",
        role: { en: "Chief", jp: "ロジスティクス責任者" },
        department: { en: "Logistics Division", jp: "設営部" },
        photo: "/team/joseph.jpg",
      },
      {
        name: "PATHAN AMEENKHAN",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Logistics Division", jp: "設営部" },
        photo: "/team/ameen_khan.jpg",
      },
      {
        name: "BHADRIRAJU SREEHITHA",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Logistics Division", jp: "設営部" },
        photo: teamAvatar("BHADRIRAJU SREEHITHA", "CORE"),
      },
      {
        name: "EESHA KODALI",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Logistics Division", jp: "設営部" },
        photo: teamAvatar("EESHA KODALI", "CORE"),
      },
    ],
  },
  {
    category: { en: "Protocol", jp: "プロトコル・案内部門" },
    members: [
      {
        name: "PASALA ABHIRAM CHOWDARY",
        role: { en: "Chief", jp: "プロトコル責任者" },
        department: { en: "Protocol Division", jp: "プロトコル部" },
        photo: "/team/abhiram.jpg",
      },
      {
        name: "KOMMINENI JAHNAVI",
        role: { en: "Chief", jp: "プロトコル責任者" },
        department: { en: "Protocol Division", jp: "プロトコル部" },
        photo: teamAvatar("KOMMINENI JAHNAVI", "CHIEF"),
      },
      {
        name: "BAAL RAM CHARAN",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Protocol Division", jp: "プロトコル部" },
        photo: "/team/balaram.jpg",
      },
      {
        name: "YEMPULURU RAJESH",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Protocol Division", jp: "プロトコル部" },
        photo: "/team/rajesh.jpg",
      },
      {
        name: "SHAIK MOHAMMAD KHAJI",
        role: { en: "Core Team", jp: "コアチーム" },
        department: { en: "Protocol Division", jp: "プロトコル部" },
        photo: teamAvatar("SHAIK MOHAMMAD KHAJI", "CORE"),
      },
    ],
  },
];

export const sponsors = [
  "JETAA INTERNATIONAL",
  "JETAA INDIA",
  "JAPAN AIRLINES",
  "CLAIR",
  "KL UNIVERSITY",
  "DEPT. OF FOREIGN LANGUAGES",
  "DEPT. OF INTERNATIONAL RELATIONS",
];

export const stats: { value: string; label: L }[] = [
  { value: "1000+", label: { en: "Visitors", jp: "来場者" } },
  { value: "30+", label: { en: "Events & Workshops", jp: "イベント・体験" } },
  { value: "50+", label: { en: "Volunteers", jp: "ボランティア" } },
  { value: "20+", label: { en: "Special Guests", jp: "特別ゲスト" } },
];

export const chapters: { year: string; title: L; dates: L; text: L }[] = [
  {
    year: "2024",
    title: { en: "First Chapter — The Dawn", jp: "第一章 — 黎明" },
    dates: { en: "November 7 – 8, 2024", jp: "2024年11月7日〜8日" },
    text: {
      en: "The first OHAYOU JAPAN opened its gates — calligraphy, language workshops, traditional arts, and a campus transformed into a vibrant sanctuary of Japanese culture.",
      jp: "最初のOHAYOU JAPANが開門。書道、言語ワークショップ、伝統芸術、そしてキャンパス全体が鮮やかなジャパン文化の聖地へと生まれ変わりました。",
    },
  },
  {
    year: "2026",
    title: { en: "The Journey Returns — Grand Festival", jp: "旅の再来 — 盛大なる大祭" },
    dates: { en: "September 16 – 17, 2026", jp: "2026年9月16日〜17日" },
    text: {
      en: "Bigger main stages, cosplay showstoppers, authentic Japanese cuisine, international diplomatic collaborators, live taiko drumming, and two full days of immersive Japanese heritage.",
      jp: "さらに大規模なメインステージ、本格的なコスプレコンテスト、本場のジャパン料理、国際協力団体、和太鼓の生演奏、そして二日間にわたる本格的なジャパン文化没入体験。",
    },
  },
];

/** Schedule — edit or expand freely. */
export const schedule: Record<
  "day1" | "day2",
  { time: string; title: L; desc: L; icon: string; venue?: L; image?: string }[]
> = {
  day1: [
    {
      time: "10:00 AM",
      venue: { en: "Main Gate", jp: "メインゲート" },
      title: { en: "Guest Arrival", jp: "ゲストの到着・受付" },
      desc: {
        en: "Arrival and grand reception of international dignitaries, Japanese delegates, and honored guests at Main Gate.",
        jp: "メインゲートにて国際外交使節、ジャパン代表団、および特別来賓の皆様のご到着と歓迎受付。",
      },
      icon: "🏛️",
      image: "/memories/guest_arrival.jpg",
    },
    {
      time: "10:30 AM",
      venue: { en: "R&D Hall", jp: "R&Dホール" },
      title: { en: "Inaugural Ceremony", jp: "開会式" },
      desc: {
        en: "Official ribbon-cutting, ceremonial lamp lighting, and inaugural address at R&D Hall.",
        jp: "R&Dホールでの公式テープカット、点灯式、およびグランドオープニング挨拶。",
      },
      icon: "⛩️",
      image: "/memories/inauguration.jpg",
    },
    {
      time: "11:15 AM",
      venue: { en: "SAC Hall", jp: "SACホール" },
      title: { en: "Cultural Workshops & Stalls", jp: "文化ワークショップ＆スタール" },
      desc: {
        en: "Interactive Japanese calligraphy (Shodo), origami art, language masterclasses, and cultural stalls at SAC Hall.",
        jp: "SACホールでの本格筆道・書道、折り紙工芸、日本語体験クラス、およびジャパン文化ブース。",
      },
      icon: "🖌️",
      image: "/memories/workshops.jpg",
    },
    {
      time: "01:30 PM",
      title: { en: "Lunch for Guests", jp: "ゲスト昼食会・交流会" },
      desc: {
        en: "Networking lunch and traditional hospitality reception for distinguished guests.",
        jp: "ご来賓の皆様のための特別昼食会とおもてなしレセプション。",
      },
      icon: "🍱",
      image: "/memories/guests_hospitality.jpg",
    },
    {
      time: "02:00 PM",
      venue: { en: "R&D Hall", jp: "R&Dホール" },
      title: { en: "Stage Performance", jp: "ステージパフォーマンス" },
      desc: {
        en: "Grand auditorium cultural performances, cosplay showcase, fusion dance, and student acts at R&D Hall.",
        jp: "R&Dホールでの文化演舞、コスプレランウェイ、印日ダンス、学生パフォーマンス。",
      },
      icon: "🎭",
      image: "/memories/activities.jpg",
    },
    {
      time: "05:30 PM",
      title: { en: "Closing Ceremony of the Day", jp: "本日の閉会式" },
      desc: {
        en: "Evening wrap-up, vote of thanks, and Day 1 closing ceremony.",
        jp: "感謝の辞、初日のまとめ、および本日の閉会式。",
      },
      icon: "🌅",
      image: "/memories/kl_wall_group.jpg",
    },
  ],
  day2: [
    {
      time: "10:00 AM",
      venue: { en: "Main Gate", jp: "メインゲート" },
      title: { en: "Guest Arrival", jp: "ゲストの到着・受付" },
      desc: {
        en: "Welcoming international delegates, Japanese guests, and faculty members at Main Gate for Day 2.",
        jp: "メインゲートにて第2日目の国際使節、ジャパンゲスト、および教員の皆様のご到着と歓迎受付。",
      },
      icon: "🏛️",
      image: "/memories/guest_arrival.jpg",
    },
    {
      time: "10:30 AM",
      venue: { en: "Peacock Hall", jp: "ピーコックホール" },
      title: { en: "Discussion with Guests", jp: "ゲストとのディスカッション・交流" },
      desc: {
        en: "Panel discussion and interactive forum on Indo-Japanese cultural & academic exchange at Peacock Hall.",
        jp: "ピーコックホールでの印日文化・学術交流に関するパネルディスカッションおよびフォーラム。",
      },
      icon: "💬",
      image: "/memories/discussion.jpg",
    },
    {
      time: "12:30 PM",
      title: { en: "Lunch for Guests", jp: "ゲスト昼食会・交流会" },
      desc: {
        en: "Networking lunch and traditional hospitality reception for distinguished guests.",
        jp: "ご来賓の皆様のための特別昼食会とおもてなしレセプション。",
      },
      icon: "🍱",
      image: "/memories/guests_hospitality.jpg",
    },
    {
      time: "01:30 PM",
      venue: { en: "Peacock Hall", jp: "ピーコックホール" },
      title: { en: "Closing & Award Ceremony", jp: "閉会式および授賞式" },
      desc: {
        en: "Official award presentation, trophy distribution, and valedictory recognition ceremony at Peacock Hall.",
        jp: "ピーコックホールでの公式授賞式、トロフィー授与、および功労者表彰。",
      },
      icon: "🏆",
      image: "/memories/memento_presentation.jpg",
    },
    {
      time: "02:30 PM",
      venue: { en: "Peacock Hall", jp: "ピーコックホール" },
      title: { en: "Anime Movie Screening", jp: "アニメ映画上映会" },
      desc: {
        en: "Special auditorium screening of featured anime movies at Peacock Hall.",
        jp: "ピーコックホールでの注目アニメ映画特別上映会。",
      },
      icon: "🎬",
      image: "/memories/anime_movie_screening.jpg",
    },
    {
      time: "05:30 PM",
      venue: { en: "Main Gate", jp: "メインゲート" },
      title: { en: "Send Off for Guests", jp: "ゲストお見送り・フィナーレ" },
      desc: {
        en: "Warm farewell and grand send-off for guests at Main Gate, concluding OHAYOU JAPAN 2026.",
        jp: "メインゲートにてご来賓の皆様の温かいお見送りとグランフィナーレ。",
      },
      icon: "🎆",
      image: "/memories/team_finale.jpg",
    },
  ],
};

export type EventItem = {
  slug: string;
  title: L;
  short: L;
  description: L;
  rules?: L[];
  venue: L;
  time: L;
  coordinator?: string;
  /** Google Form URL for this event. Editable per event! */
  form: string;
  image: string;
};

/** Events list. `form` contains editable Google Form URLs. */
export const events: EventItem[] = [
  {
    slug: "cosplay-competition",
    title: { en: "Cosplay", jp: "コスプレ" },
    short: {
      en: "Step into the spotlight as your favorite anime, gaming, or manga icon.",
      jp: "推しキャラになりきってメインステージの主役に。",
    },
    description: {
      en: "The flagship spectacle of OHAYOU JAPAN! Walk the central runway in handcrafted costumes, perform a 3-minute stage act, and showcase craft, character accuracy, and stage presence.",
      jp: "OHAYOU JAPANの目玉イベント！こだわりぬいた手作りの衣装でランウェイを歩き、3分間のパフォーマンスで完成度・再現度・表現力を披露します。",
    },
    rules: [
      {
        en: "Solo and group entries (maximum 4 participants per group).",
        jp: "ソロおよびグループ（1グループ最大4名まで）参加可能。",
      },
      {
        en: "Stage performance duration is strictly capped at 3 minutes.",
        jp: "ステージ上の演舞・表現時間は厳格に3分以内。",
      },
      {
        en: "No real weapons, sharp props, or open flames permitted.",
        jp: "本物の刃物・危険物・火気の持ち込みは禁止。",
      },
      {
        en: "Costumes must originate from official Japanese media or folklore.",
        jp: "衣装は公式のジャパンのアニメ、ゲーム、漫画、伝統に由来すること。",
      },
    ],
    venue: { en: "Yet to be announced", jp: "会場近日発表" },
    time: { en: "Yet to be announced", jp: "日時近日発表" },
    coordinator: "Dr. K. Sharma",
    form: "https://forms.gle/Pn9xnCURihvj3p4F6",
    image: "/memories/cosplay_competition.jpg",
  },
  {
    slug: "indo-japanese-dance",
    title: { en: "Indo–Japanese Fusion Dance", jp: "印日フュージョンダンス" },
    short: {
      en: "A mesmerizing choreography combining two rich artistic cultures.",
      jp: "二つの豊かな文化が美しく融合するダンスパフォーマンス。",
    },
    description: {
      en: "Teams blend traditional Indian dance styles (Bharatanatyam, Kathak, Folk) with Japanese Yosakoi, Odori, and modern J-Pop routines in a spectacular synchronized performance.",
      jp: "インドの伝統舞踊（バラタナティヤム、カタック、民謡など）とジャパンのよさこい・踊り・J-POPの振付を融合させた革新的なステージ表現。",
    },
    rules: [
      { en: "Teams must consist of 4 to 12 dancers.", jp: "チーム構成は4名〜12名。" },
      { en: "Audio track duration limit is 5 minutes.", jp: "楽曲の長さは最長5分。" },
      {
        en: "Must submit audio tracks at least 48 hours prior to event.",
        jp: "音源データは開催48時間前までに運営に提出。",
      },
    ],
    venue: { en: "Yet to be announced", jp: "会場近日発表" },
    time: { en: "Yet to be announced", jp: "日時近日発表" },
    coordinator: "Dr. G. Meena",
    form: "https://forms.gle/RM2nbEzpTCVAkJ8KA",
    image: "/memories/indo_japanese_dance.jpg",
  },
  {
    slug: "karaoke",
    title: { en: "J-Pop & Anime Karaoke", jp: "J-POP＆アニメカラオケ" },
    short: {
      en: "Unleash your vocal passion with iconic Japanese anime songs and classics.",
      jp: "名曲アニソンとJ-POPで歌声を響かせよう。",
    },
    description: {
      en: "Take the mic for legendary anime openings, city pop classics, and emotional ballads! Complete with lyrics screen, studio-grade sound system, and enthusiastic audience cheering.",
      jp: "伝説のアニメOP、シティポップの名曲、感動のバラードを熱唱！大型スクリーンの歌詞表示と高音質音響、会場の一体感を楽しもう。",
    },
    rules: [
      {
        en: "One Japanese song performance per participant.",
        jp: "参加者一人につき日本語の楽曲1曲。",
      },
      {
        en: "Backing tracks must be instrumental (no main vocals).",
        jp: "音源はバッキング（オフボーカル）のみ使用可能。",
      },
    ],
    venue: { en: "Yet to be announced", jp: "会場近日発表" },
    time: { en: "Yet to be announced", jp: "日時近日発表" },
    coordinator: "Prof. H. Sato",
    form: "https://forms.gle/RGrdq6xv17ErQ9Gs7",
    image: "/memories/karaoke_competition.jpg",
  },
  {
    slug: "origami-workshop",
    title: { en: "Master Origami Workshop", jp: "折り紙マスターワークショップ" },
    short: {
      en: "Transform humble paper into cranes, samurai helmets and lotus flowers.",
      jp: "一枚の紙から生み出される鶴、兜、美しき花々。",
    },
    description: {
      en: "A step-by-step masterclass guided by seasoned paper artists. Learn intricate folding techniques, geometric symmetry, and the spiritual history of Japanese origami paper art.",
      jp: "熟練の折り紙作家による丁寧な指導。折り目の美しさ、幾何学の調和、そして伝統的な折り紙文化の歴史を体験できます。",
    },
    rules: [
      {
        en: "Limited to 60 seats per session. Materials provided.",
        jp: "各回定員60名。専用和紙を配布します。",
      },
      {
        en: "Suitable for beginners and experienced crafters alike.",
        jp: "初心者から経験者まで幅広く歓迎。",
      },
    ],
    venue: { en: "Yet to be announced", jp: "会場近日発表" },
    time: { en: "Yet to be announced", jp: "日時近日発表" },
    coordinator: "Prof. A. Yamada",
    form: "https://forms.gle/Z76UA4MRfQdh5Ptx9",
    image: "/memories/origami_workshop.jpg",
  },
  {
    slug: "japanese-calligraphy",
    title: { en: "Shodo — Japanese Calligraphy", jp: "書道 — 筆と墨の世界" },
    short: {
      en: "Discover the Zen practice of ink, brush pressure, and kanji art.",
      jp: "墨の香りと筆の道 — 心を静める書道体験。",
    },
    description: {
      en: "Immerse yourself in traditional Japanese calligraphy (Shodo). Learn proper brush grip, stroke discipline, ink grinding, and paint your own kanji scroll to cherish.",
      jp: "伝統的な書道の世界へ。正しい筆の持ち方、運筆、墨の磨り方を学び、自分だけのオリジナル漢字掛け軸を作り上げます。",
    },
    rules: [
      {
        en: "Authentic Sumi ink and Washi paper provided on-site.",
        jp: "本格的な墨・筆・和紙は受付にてご用意。",
      },
      {
        en: "Please wear clothing suitable for handling ink.",
        jp: "墨が付着してもよい服装でお越しください。",
      },
    ],
    venue: { en: "Yet to be announced", jp: "会場近日発表" },
    time: { en: "Yet to be announced", jp: "日時近日発表" },
    coordinator: "Prof. T. Nakamura",
    form: "https://forms.gle/Z76UA4MRfQdh5Ptx9",
    image: "/memories/calligraphy_workshop.jpg",
  },
  {
    slug: "cultural-exhibition",
    title: { en: "Cultural Exhibition & Tea Ceremony", jp: "文化総合展示＆本格茶道" },
    short: {
      en: "Experience Kimono dressing, Ikebana floral art, and authentic Tea Ceremony.",
      jp: "着物の着付け、生け花、静寂に包まれた本格茶道体験。",
    },
    description: {
      en: "A continuous interactive exhibition showcasing Kimono drape styling, Ikebana floral arrangements, Edo-period print displays, and live ceremonial Matcha tea preparation.",
      jp: "着物の着付け体験、生け花展示、江戸時代の浮世絵プリント展示、そして点てたての抹茶を味わう本格的な茶道のおもてなし。",
    },
    rules: [
      { en: "Open access throughout festival hours.", jp: "開催期間中いつでも自由に見学可能。" },
      {
        en: "Photography permitted (no flash inside Tea ceremony room).",
        jp: "撮影可能（茶道室内部でのフラッシュは禁止）。",
      },
    ],
    venue: { en: "Yet to be announced", jp: "会場近日発表" },
    time: { en: "Yet to be announced", jp: "日時近日発表" },
    coordinator: "Dr. P. Anitha",
    form: "https://forms.gle/Z76UA4MRfQdh5Ptx9",
    image: "/memories/tea_ceremony.jpg",
  },
];

/** Registration cards — each links to its dedicated Google Form. */
export const registrations: { title: L; desc: L; form: string; image: string }[] = [
  {
    title: { en: "Student Body Delegation Registration", jp: "学生団体代表登録" },
    desc: {
      en: "Delegation passes for visiting colleges, language institutes, and cultural clubs.",
      jp: "他大学・語学学校・文化団体代表グループのための特別登録パス。",
    },
    form: "https://forms.gle/oqCU2kYQVjua1ECL7",
    image: "/memories/student_delegation_logo.jpg",
  },
  {
    title: { en: "Cosplay Registration", jp: "コスプレ登録" },
    desc: {
      en: "Reserve your slot on the main stage to showcase your handcrafted anime & gaming costume.",
      jp: "推しキャラになりきってメインステージランウェイにエントリー。",
    },
    form: "https://forms.gle/Pn9xnCURihvj3p4F6",
    image: "/memories/cosplay_competition.jpg",
  },
  {
    title: { en: "Indo–Japanese Fusion Dance Registration", jp: "印日フュージョンダンス登録" },
    desc: {
      en: "Register your dance group for the synchronized Indo-Japanese fusion performance.",
      jp: "印日フュージョンダンスステージへのチームエントリーはこちら。",
    },
    form: "https://forms.gle/RM2nbEzpTCVAkJ8KA",
    image: "/memories/indo_japanese_dance.jpg",
  },
  {
    title: { en: "J-Pop & Anime Karaoke Registration", jp: "J-POP＆アニメカラオケ登録" },
    desc: {
      en: "Take the mic and perform iconic Japanese anime openings, city pop, and J-Pop hits.",
      jp: "名曲アニソンとJ-POPで熱唱！ステージでのカラオケ登録はこちら。",
    },
    form: "https://forms.gle/RGrdq6xv17ErQ9Gs7",
    image: "/memories/karaoke_competition.jpg",
  },
  {
    title: { en: "Cultural Workshops Registration", jp: "文化ワークショップ登録" },
    desc: {
      en: "Reserve your seat for Japanese Calligraphy (Shodo), Origami, and Tea Ceremony masterclasses.",
      jp: "書道、折り紙、本格茶道ワークショップの事前登録。",
    },
    form: "https://forms.gle/Z76UA4MRfQdh5Ptx9",
    image: "/memories/workshops.jpg",
  },
  {
    title: { en: "Stage Activities & Showcase Registration", jp: "ステージアクティビティ登録" },
    desc: {
      en: "Register for grand auditorium cultural acts, musical performances, and talent showcases.",
      jp: "大講堂メインステージでの文化演技・音楽パフォーマンスの登録。",
    },
    form: "https://forms.gle/Dy4RAjfpCod9U5wMA",
    image: "/memories/activities.jpg",
  },
];
