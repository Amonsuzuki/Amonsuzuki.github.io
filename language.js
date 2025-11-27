// Language switching functionality
const translations = {
  en: {
    // Navigation
    navAbout: "About",
    navWork: "Work",
    navContact: "Contact",
    navDownloadCV: "Download CV",
    logoRole: "Developer / Researcher",

    // Hero section (index.html)
    heroPreText: "Open for collaborations & new roles",
    heroTitle1: "Hi, I'm ",
    heroTitle2: "Building thoughtful digital experiences.",
    heroSubtitle: "I'm a developer and researcher interested in hardware design, neural networks, and robotics.",
    heroTag1: "Hardware Engineering (ASIC/Verilog)",
    heroTag2: "Machine Learning",
    heroTag3: "Robotics / ROS",
    heroViewWork: "View selected work",
    heroCardName: "Amon Suzuki",
    heroCardLocation: "Based in Tokyo · Remote friendly",
    heroCardChip: "Portfolio Snapshot",
    heroCardBody1: "I enjoy working on hardware design, neural networks, and robotics. I care about building innovative solutions that push the boundaries of technology and create real-world impact.",
    heroCardBody2: "Outside of work, you'll find me exploring new technologies, contributing to open source, or working on research projects.",
    statExperience: "Experience",
    statRecentFocus: "Recent focus",
    statTimeZone: "Time zone",
    heroCardFooterText: "Currently accepting selected freelance / side projects.",
    heroCardEmail: "Email",
    heroCardGitHub: "GitHub",

    // Footer
    footerText: "Crafted with care.",
    footerBackTop: "Back to top",
    footerBackHome: "Back to home",
    footerImprint: "Imprint",
    footerPrivacy: "Privacy",

    // About page
    aboutLabel: "About",
    aboutTitle: "A short introduction",
    aboutDesc: "A developer and researcher passionate about hardware, AI, and robotics.",
    aboutText1: "I'm a developer and researcher who works across hardware design, machine learning, and robotics. I enjoy building systems that combine software and hardware to solve complex problems.",
    aboutText2: "Recently, I've been working on Spiking Neural Networks implemented on ASIC and ROS/Autoware tools for autonomous vehicles. I enjoy working on projects that push technological boundaries.",
    aboutText3: "I'm currently exploring opportunities in hardware engineering, machine learning research, and autonomous systems development.",

    // Biography section
    biographyLabel: "Biography",
    biographyTitle: "経歴 / Achievements",
    biographyDesc: "主な活動・受賞歴",
    bioDate1: "July 2025",
    bioTitle1: "NICT Quantum Camp Exploratory Talent Development Course",
    bioStatus1: "Selected",
    bioDate2: "August 2025",
    bioTitle2: "Security Camp 2025 National Conference L2 Seminar: Experience the semiconductor design workflow from high-level languages to physical layout and order your own MyLSI!",
    bioStatus2: "Completed",
    bioDate3Sep: "September 2025",
    bioTitle3Sep: "Autonomous Driving AI Challenge Qualifiers",
    bioStatus3Sep: "1st Place Overall",
    bioDate3: "October 2025",
    bioTitle3: "Autonomous Driving AI Challenge Finals",
    bioStatus3: "Grand Prize · Japan Automobile Manufacturers Association Chairman's Award",

    // Work page
    workLabel: "Work",
    workTitle: "Selected projects",
    workDesc: "A selection of my recent projects showcasing hardware design, machine learning, and software development.",
    project1Pill: "2025 · Personal",
    project1Title: "Reward-implemented Spiking Neural Network",
    project1Desc: "SNN that learns through STDP and Reward Feedback, designed for ASIC implementation with integrated on-chip memory using Tiny Tapeout.",
    project1Meta: "Verilog · ASIC · Neural Networks",
    project1Role: "Role: Hardware Design & Research",
    project1View: "View",
    project2Pill: "2025 · Personal",
    project2Title: "CosenseGraph",
    project2Desc: "A 3D visualization tool for Cosense (formerly Scrapbox) that displays page relationships as an interactive node graph with LLM-powered clustering.",
    project2Meta: "TypeScript · OpenAI API · 3D Visualization",
    project2Role: "Role: Full Stack Development",
    project2View: "View",
    project3Pill: "2025 · Tools",
    project3Title: "MCAP Reader for Autoware",
    project3Desc: "A ROS bag analyzer adapted for MCAP files, enabling trajectory analysis and sensor data visualization for autonomous vehicles.",
    project3Meta: "Python · ROS · Autoware",
    project3Role: "Role: Development & Analysis",
    project3View: "View",

    // Contact page
    contactLabel: "Contact",
    contactTitle: "Say hello",
    contactDesc: "Whether you're interested in working together, have a question, or just want to share an idea, feel free to get in touch.",
    contactText1: "The fastest way to reach me is by email, but I'm also occasionally active on GitHub and LinkedIn. Short introductions are welcome.",
    contactText2: "If you already have a project in mind, it helps to include your timeline, rough scope, and any links to references or existing work.",
    contactMeta: "Preferred contact hours: weekday evenings (GMT+9), but I'll reply as soon as I can.",
    contactResume: "Resume / CV",
    formName: "Name",
    formNamePlaceholder: "Who's reaching out?",
    formEmail: "Email",
    formEmailPlaceholder: "Where can I reply?",
    formMessage: "Message",
    formMessagePlaceholder: "Tell me a bit about what you have in mind.",
    formHint: "This form is only a visual example. Connect it to your backend or a service like Formspree / Netlify Forms.",
    formSubmit: "Send message",
    formSpam: "No spam. I'll only use your details to reply."
  },
  ja: {
    // Navigation
    navAbout: "自己紹介",
    navWork: "実績",
    navContact: "お問い合わせ",
    navDownloadCV: "履歴書をダウンロード",
    logoRole: "開発者 / 研究者",

    // Hero section (index.html)
    heroPreText: "コラボレーション・新しい機会を歓迎します",
    heroTitle1: "こんにちは、",
    heroTitle2: "思慮深いデジタル体験を構築しています。",
    heroSubtitle: "ハードウェア設計、ニューラルネットワーク、ロボティクスに興味を持つ開発者・研究者です。",
    heroTag1: "ハードウェアエンジニアリング (ASIC/Verilog)",
    heroTag2: "機械学習",
    heroTag3: "ロボティクス / ROS",
    heroViewWork: "実績を見る",
    heroCardName: "鈴木 亜門",
    heroCardLocation: "東京拠点 · リモートワーク可",
    heroCardChip: "ポートフォリオ概要",
    heroCardBody1: "ハードウェア設計、ニューラルネットワーク、ロボティクスに取り組むことを楽しんでいます。技術の限界を押し広げ、現実世界にインパクトを与える革新的なソリューションの構築を大切にしています。",
    heroCardBody2: "仕事以外では、新しい技術の探求、オープンソースへの貢献、研究プロジェクトに取り組んでいます。",
    statExperience: "経験",
    statRecentFocus: "最近の注力分野",
    statTimeZone: "タイムゾーン",
    heroCardFooterText: "現在、フリーランス・サイドプロジェクトを選定中です。",
    heroCardEmail: "メール",
    heroCardGitHub: "GitHub",

    // Footer
    footerText: "心を込めて制作しました。",
    footerBackTop: "トップへ戻る",
    footerBackHome: "ホームへ戻る",
    footerImprint: "サイト情報",
    footerPrivacy: "プライバシー",

    // About page
    aboutLabel: "自己紹介",
    aboutTitle: "簡単な自己紹介",
    aboutDesc: "ハードウェア、AI、ロボティクスに情熱を持つ開発者・研究者。",
    aboutText1: "ハードウェア設計、機械学習、ロボティクスに取り組む開発者・研究者です。ソフトウェアとハードウェアを組み合わせて複雑な問題を解決するシステムの構築を楽しんでいます。",
    aboutText2: "最近はASIC上に実装されたスパイキングニューラルネットワークや、自動運転車両向けのROS/Autowareツールに取り組んでいます。技術の限界を押し広げるプロジェクトに取り組むことを楽しんでいます。",
    aboutText3: "現在、ハードウェアエンジニアリング、機械学習研究、自律システム開発の機会を探しています。",

    // Biography section
    biographyLabel: "経歴",
    biographyTitle: "経歴 / 実績",
    biographyDesc: "主な活動・受賞歴",
    bioDate1: "2025年7月",
    bioTitle1: "NICT Quantum Camp 探索型人材育成コース",
    bioStatus1: "採択",
    bioDate2: "2025年8月",
    bioTitle2: "セキュリティ・キャンプ2025全国大会 L2「高位言語から物理レイアウトまで半導体設計ワークフローを経験して MyLSI を発注しよう！」ゼミ",
    bioStatus2: "修了",
    bioDate3Sep: "2025年9月",
    bioTitle3Sep: "自動運転AIチャレンジ予選",
    bioStatus3Sep: "総合1位通過",
    bioDate3: "2025年10月",
    bioTitle3: "自動運転AIチャレンジ決勝",
    bioStatus3: "総合優勝　日本自動車工業会会長賞",

    // Work page
    workLabel: "実績",
    workTitle: "主なプロジェクト",
    workDesc: "ハードウェア設計、機械学習、ソフトウェア開発の最近のプロジェクトをご紹介します。",
    project1Pill: "2025 · 個人",
    project1Title: "報酬機構付きスパイキングニューラルネットワーク",
    project1Desc: "STDPと報酬フィードバックによって学習するSNN。Tiny Tapeoutを使用した統合オンチップメモリを備えたASIC実装向けに設計。",
    project1Meta: "Verilog · ASIC · ニューラルネットワーク",
    project1Role: "担当: ハードウェア設計 & 研究",
    project1View: "詳細を見る",
    project2Pill: "2025 · 個人",
    project2Title: "CosenseGraph",
    project2Desc: "Cosense（旧Scrapbox）用の3D可視化ツール。ページ関係をLLMを活用したクラスタリングによるインタラクティブなノードグラフとして表示。",
    project2Meta: "TypeScript · OpenAI API · 3D可視化",
    project2Role: "担当: フルスタック開発",
    project2View: "詳細を見る",
    project3Pill: "2025 · ツール",
    project3Title: "MCAP Reader for Autoware",
    project3Desc: "MCAPファイル用に適応されたROS bagアナライザー。自動運転車両の軌道分析とセンサーデータの可視化を実現。",
    project3Meta: "Python · ROS · Autoware",
    project3Role: "担当: 開発 & 分析",
    project3View: "詳細を見る",

    // Contact page
    contactLabel: "お問い合わせ",
    contactTitle: "ご連絡ください",
    contactDesc: "一緒にお仕事したい方、ご質問がある方、アイデアを共有したい方、お気軽にご連絡ください。",
    contactText1: "最も早い連絡方法はメールですが、GitHubやLinkedInでも時々活動しています。簡単な自己紹介でも大歓迎です。",
    contactText2: "すでにプロジェクトのアイデアがある場合は、タイムライン、大まかな範囲、参考リンクや既存の作品を含めていただけると助かります。",
    contactMeta: "ご連絡可能時間: 平日夜（GMT+9）ですが、できるだけ早く返信します。",
    contactResume: "履歴書 / CV",
    formName: "お名前",
    formNamePlaceholder: "お名前を入力してください",
    formEmail: "メールアドレス",
    formEmailPlaceholder: "返信先のメールアドレス",
    formMessage: "メッセージ",
    formMessagePlaceholder: "お気軽にメッセージをお書きください。",
    formHint: "このフォームは見本です。Formspree / Netlify Formsなどのサービスに接続してください。",
    formSubmit: "メッセージを送信",
    formSpam: "スパムはありません。返信のためにのみ情報を使用します。"
  }
};

// Get stored language or default to English
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Set language and store preference
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  applyTranslations(lang);
  updateLanguageButton(lang);
}

// Toggle between languages
function toggleLanguage() {
  const currentLang = getCurrentLanguage();
  const newLang = currentLang === 'en' ? 'ja' : 'en';
  setLanguage(newLang);
}

// Update button text to show current language
function updateLanguageButton(lang) {
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? '日本語' : 'English';
    langBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Japanese' : 'Switch to English');
  }
}

// Apply translations to elements with data-i18n attribute
function applyTranslations(lang) {
  const t = translations[lang];
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'ja';
}

// Initialize language on page load
function initLanguage() {
  const lang = getCurrentLanguage();
  applyTranslations(lang);
  updateLanguageButton(lang);
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initLanguage);
