// Language switching functionality
const translations = {
  en: {
    // Navigation
    navAbout: "About",
    navWork: "Work",
    navContact: "Contact",
    logoRole: "Developer / Researcher",

    // Hero section (index.html)
    heroPreText: "Open for collaborations & new roles",
    heroTitle1: "Hi, I'm ",
    heroTitle2: "Building thoughtful digital experiences.",
    heroSubtitle: "I'm a developer and researcher interested in mechanistic interpretability, AI4Science, hardware design, and robotics.",
    heroTag1: "Hardware Engineering (ASIC/Verilog)",
    heroTag2: "Mechanistic Interpretability",
    heroTag3: "AI4Science",
    heroTag4: "Robotics / ROS",
    heroViewWork: "View selected work",
    heroCardName: "Amon Suzuki",
    heroCardLocation: "Based in Tokyo · Remote friendly",
    heroCardChip: "Portfolio Snapshot",
    heroCardBody1: "My research focuses on mechanistic interpretability and AI4Science — understanding how neural networks work internally and applying AI to scientific discovery. I also work on hardware design and robotics to push the boundaries of technology.",
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
    aboutDesc: "A developer and researcher passionate about mechanistic interpretability, AI4Science, hardware, and robotics.",
    aboutText1: "I'm a developer and researcher who works across mechanistic interpretability, AI4Science, hardware design, and robotics. I enjoy building systems that combine software and hardware to solve complex problems.",
    aboutText2: "Recently, I've been focusing on mechanistic interpretability and AI4Science — understanding how neural networks work internally and applying AI to scientific discovery. I also work on Spiking Neural Networks on ASIC and ROS/Autoware tools for autonomous vehicles.",
    aboutText3: "I'm currently exploring opportunities in mechanistic interpretability research, AI4Science, hardware engineering, and autonomous systems development.",

    // Biography section
    biographyLabel: "Biography",
    biographyTitle: "Career / Achievements",
    biographyDesc: "Key activities and awards",
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
    bioDate4: "March 2024",
    bioTitle4: "42 Tokyo",
    bioStatus4: "Accepted",

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
    logoRole: "開発者 / 研究者",

    // Hero section (index.html)
    heroPreText: "コラボレーション・新しい機会を歓迎します",
    heroTitle1: "こんにちは、",

    heroTitle2: "",
    heroSubtitle: "ハードウェア設計、ニューラルネットワーク、ロボティクスに興味を持つ開発者・研究者です。",
    heroTag1: "ハードウェアエンジニアリング (ASIC/Verilog)",
    heroTag2: "機械論的解釈可能性",
    heroTag3: "AI4Science",
    heroTag4: "ロボティクス / ROS",
    heroViewWork: "実績を見る",
    heroCardName: "鈴木 亜門",
    heroCardLocation: "東京拠点 · リモートワーク可",
    heroCardChip: "ポートフォリオ概要",
    heroCardBody1: "私の研究は機械論的解釈可能性とAI4Scienceに焦点を当てています。ニューラルネットワークが内部でどのように機能するかを理解し、AIを科学的発見に応用することに取り組んでいます。また、ハードウェア設計やロボティクスにも携わっています。",
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
    aboutDesc: "機械論的解釈可能性、AI4Science、ハードウェア、ロボティクスに情熱を持つ開発者・研究者。",
    aboutText1: "機械論的解釈可能性、AI4Science、ハードウェア設計、ロボティクスに取り組む開発者・研究者です。ソフトウェアとハードウェアを組み合わせて複雑な問題を解決するシステムの構築を楽しんでいます。",
    aboutText2: "最近は機械論的解釈可能性とAI4Scienceに注力しています。ニューラルネットワークの内部動作を理解し、AIを科学的発見に応用することを探求しています。また、ASIC上に実装されたスパイキングニューラルネットワークや、自動運転車両向けのROS/Autowareツールにも取り組んでいます。",
    aboutText3: "現在、機械論的解釈可能性の研究、AI4Science、ハードウェアエンジニアリング、自律システム開発の機会を探しています。",

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
    bioDate4: "2024年3月",
    bioTitle4: "42 Tokyo",
    bioStatus4: "合格",

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
    if (key in t) {
      if (el.children.length > 0) {
        // Preserve child elements (e.g., icons) by only updating direct text nodes
        let textNode = null;
        for (const node of el.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
            textNode = node;
          }
        }
        if (textNode) {
          textNode.textContent = ' ' + t[key];
        } else {
          el.appendChild(document.createTextNode(' ' + t[key]));
        }
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key in t) {
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
