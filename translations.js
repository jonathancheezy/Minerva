// Minerva Translation System
const translations = {
  // Common
  common: {
    en: "EN", zhTW: "繁", zhCN: "简",
    save: "Save", cancel: "Cancel", back: "Back", logout: "Logout",
    edit: "Edit", delete: "Delete", loading: "Loading..."
  },
  
  // Teacher Dashboard
  teacher_dash: {
    welcome: { en: "Welcome back", zhTW: "歡迎回來", zhCN: "欢迎回来" },
    dashboard: { en: "Dashboard", zhTW: "主頁", zhCN: "主页" },
    students: { en: "Students", zhTW: "學生", zhCN: "学生" },
    schedule: { en: "Schedule", zhTW: "時間表", zhCN: "时间表" },
    messages: { en: "Messages", zhTW: "訊息", zhCN: "信息" },
    earnings: { en: "Earnings", zhTW: "收入", zhCN: "收入" },
    this_month: { en: "This Month", zhTW: "本月", zhCN: "本月" },
    pending: { en: "Pending", zhTW: "待處理", zhCN: "待处理" },
    total_students: { en: "Total Students", zhTW: "學生總數", zhCN: "学生总数" },
    upcoming_lessons: { en: "Upcoming Lessons", zhTW: "即將來臨的課堂", zhCN: "即将来临的课堂" },
    rating: { en: "Rating", zhTW: "評分", zhCN: "评分" },
    quick_actions: { en: "Quick Actions", zhTW: "快捷操作", zhCN: "快捷操作" },
    edit_profile: { en: "Edit Profile", zhTW: "編輯個人資料", zhCN: "编辑个人资料" },
    view_earnings: { en: "View Earnings", zhTW: "查看收入", zhCN: "查看收入" },
    recent_bookings: { en: "Recent Bookings", zhTW: "最近預訂", zhCN: "最近预订" }
  },
  
  // Parent Dashboard
  parent_dash: {
    welcome: { en: "Welcome back", zhTW: "歡迎回來", zhCN: "欢迎回来" },
    dashboard: { en: "Dashboard", zhTW: "主頁", zhCN: "主页" },
    teachers: { en: "Teachers", zhTW: "導師", zhCN: "导师" },
    book_lesson: { en: "Book Lesson", zhTW: "預約課堂", zhCN: "预约课堂" },
    messages: { en: "Messages", zhTW: "訊息", zhCN: "信息" },
    active_lessons: { en: "Active Lessons", zhTW: "進行中的課堂", zhCN: "进行中的课堂" },
    completed: { en: "Completed", zhTW: "已完成", zhCN: "已完成" },
    upcoming: { en: "Upcoming", zhTW: "即將開始", zhCN: "即将开始" },
    quick_actions: { en: "Quick Actions", zhTW: "快捷操作", zhCN: "快捷操作" },
    find_teachers: { en: "Find Teachers", zhTW: "尋找導師", zhCN: "寻找导师" }
  },
  
  // Schedule Pages
  schedule: {
    my_schedule: { en: "My Schedule", zhTW: "我的時間表", zhCN: "我的时间表" },
    book_lesson: { en: "Book a Lesson", zhTW: "預約課堂", zhCN: "预约课堂" },
    add_availability: { en: "Add Availability", zhTW: "添加可用時間", zhCN: "添加可用时间" },
    lessons_this_month: { en: "Lessons This Month", zhTW: "本月課堂", zhCN: "本月课堂" },
    hours_this_week: { en: "Hours This Week", zhTW: "本週課時", zhCN: "本周课时" },
    pending_requests: { en: "Pending Requests", zhTW: "待處理請求", zhCN: "待处理请求" },
    monthly_calendar: { en: "Monthly Calendar", zhTW: "月曆", zhCN: "月历" },
    upcoming_bookings: { en: "Upcoming Bookings", zhTW: "即將預訂", zhCN: "即将预订" },
    select_teacher: { en: "Select Teacher", zhTW: "選擇導師", zhCN: "选择导师" },
    select_date: { en: "Select Date", zhTW: "選擇日期", zhCN: "选择日期" },
    select_time: { en: "Select Time", zhTW: "選擇時間", zhCN: "选择时间" },
    booking_summary: { en: "Booking Summary", zhTW: "預訂摘要", zhCN: "预订摘要" },
    confirm_booking: { en: "Confirm Booking", zhTW: "確認預訂", zhCN: "确认预订" },
    confirmed: { en: "Confirmed", zhTW: "已確認", zhCN: "已确认" },
    pending: { en: "Pending", zhTW: "待處理", zhCN: "待处理" }
  },
  
  // Profile Page
  profile: {
    edit_profile: { en: "Edit Profile", zhTW: "編輯個人資料", zhCN: "编辑个人资料" },
    basic_info: { en: "Basic Information", zhTW: "基本資料", zhCN: "基本资料" },
    full_name: { en: "Full Name", zhTW: "全名", zhCN: "全名" },
    display_name: { en: "Display Name", zhTW: "顯示名稱", zhCN: "显示名称" },
    email: { en: "Email", zhTW: "電郵", zhCN: "电邮" },
    phone: { en: "Phone Number", zhTW: "電話號碼", zhCN: "电话号码" },
    short_bio: { en: "Short Bio", zhTW: "簡短介紹", zhCN: "简短介绍" },
    teaching_details: { en: "Teaching Details", zhTW: "教學詳情", zhCN: "教学详情" },
    subjects: { en: "Subjects", zhTW: "科目", zhCN: "科目" },
    hourly_rate: { en: "Hourly Rate", zhTW: "時薪", zhCN: "时薪" },
    teaching_location: { en: "Teaching Location", zhTW: "教學地點", zhCN: "教学地点" },
    languages: { en: "Languages Spoken", zhTW: "使用語言", zhCN: "使用语言" },
    profile_settings: { en: "Profile Settings", zhTW: "個人設定", zhCN: "个人设定" },
    save_changes: { en: "Save Changes", zhTW: "儲存更改", zhCN: "储存更改" },
    verified_teacher: { en: "Verified Teacher", zhTW: "已驗證導師", zhCN: "已验证导师" }
  },
  
  // Teachers Listing
  teachers: {
    title: { en: "Our Verified Teachers", zhTW: "我們的已驗證導師", zhCN: "我们的已验证导师" },
    subtitle: { en: "Every teacher is ID-checked, background-verified, and reviewed by students.", zhTW: "每位導師均已通過身份驗證、背景審查及學生評價。", zhCN: "每位导师均已通过身份验证、背景审查及学生评价。" },
    per_hour: { en: "/hour", zhTW: "/小時", zhCN: "/小时" },
    book_lesson: { en: "Book Lesson", zhTW: "預約課堂", zhCN: "预约课堂" }
  }
};

// Current language
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('minerva_lang', lang);
  applyTranslations();
  
  // Update URL
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
  
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const href = btn.getAttribute('href');
    if (href && href.includes('lang=' + lang)) {
      btn.classList.add('active');
    }
  });
}

function applyTranslations() {
  // Translate elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value && value[currentLang]) {
      el.textContent = value[currentLang];
    }
  });
  
  // Update page title
  const titleEl = document.querySelector('title');
  if (titleEl && titleEl.hasAttribute('data-i18n-title')) {
    const key = titleEl.getAttribute('data-i18n-title');
    const value = translations;
    const keys = key.split('.');
    let v = value;
    for (const k of keys) { v = v?.[k]; }
    if (v && v[currentLang]) {
      titleEl.textContent = v[currentLang] + ' — Minerva';
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Check URL for language
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  
  // Check localStorage
  const savedLang = localStorage.getItem('minerva_lang');
  
  // Use URL lang > saved lang > default (en)
  if (urlLang && ['en', 'zh-TW', 'zh-CN'].includes(urlLang)) {
    setLanguage(urlLang);
  } else if (savedLang && ['en', 'zh-TW', 'zh-CN'].includes(savedLang)) {
    setLanguage(savedLang);
  }
  
  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.includes('lang=')) {
        e.preventDefault();
        const lang = href.split('lang=')[1].split('&')[0];
        if (lang) {
          setLanguage(lang);
        }
      }
    });
  });
  
  // Apply translations if language already set
  if (currentLang !== 'en') {
    applyTranslations();
  }
});

// FAQ translations
faq: {
  // Common
  title: { en: "Frequently Asked Questions", zhTW: "常見問題", zhCN: "常见问题" },
  for_parents: { en: "For Parents & Students", zhTW: "家長/學生", zhCN: "家长/学生" },
  for_teachers: { en: "For Teachers", zhTW: "導師", zhCN: "导师" },
  general: { en: "General", zhTW: "一般問題", zhCN: "一般问题" },
  
  // Parent FAQs
  p1_q: { en: "What subjects are available on Minerva?", zhTW: "Minerva提供哪些科目？", zhCN: "Minerva提供哪些科目？" },
  p1_a: { en: "We cover all major subjects: Academic (Math, English, Science, Chinese), Music, Languages (Cantonese, Mandarin, French, Spanish), Arts, and Sports.", zhTW: "我們涵蓋所有主要科目：學術科目（數學、英語、科學、中文）、音樂、語言（粵語、普通話、法語、西班牙語）、藝術和體育。", zhCN: "我们涵盖所有主要科目：学术科目（数学、英语、科学、中文）、音乐、语言（粤语、普通话、法语、西班牙语）、艺术和体育。" },
  p2_q: { en: "How do I book a lesson?", zhTW: "如何預訂課堂？", zhCN: "如何预订课堂？" },
  p2_a: { en: "Simply browse our verified teachers, select one that matches your needs, and click Book Lesson. You'll fill in your preferred times and our team will match you with the teacher.", zhTW: "只需瀏覽我們的已驗證導師，選擇符合您需求的導師，然後點擊「預訂課堂」。填寫您首選的時間，我們的團隊將為您配對導師。", zhCN: "只需浏览我们的已验证导师，选择符合您需求的导师，然后点击「预订课堂」。填写您首选的时间，我们的团队将为您配对导师。" },
  p3_q: { en: "How does the free first lesson work?", zhTW: "免費試堂如何運作？", zhCN: "免费试堂如何运作？" },
  p3_a: { en: "When you sign up for four lessons with a teacher, your first lesson is completely free.", zhTW: "當您與導師報名四堂課時，第一堂課完全免費。", zhCN: "当您与导师报名四堂课时，第一堂课完全免费。" },
  p4_q: { en: "What is your cancellation policy?", zhTW: "取消政策是什麼？", zhCN: "取消政策是什么？" },
  p4_a: { en: "Lessons cancelled 24+ hours in advance receive a full refund. Cancellations within 24 hours receive a 50% refund.", zhTW: "課堂開始前24小時以上取消可獲全額退款。24小時內取消可獲50%退款。", zhCN: "课堂开始前24小时以上取消可获全额退款。24小时内取消可获50%退款。" },
  p5_q: { en: "What if I'm not satisfied with the teacher?", zhTW: "如果對導師不滿意怎麼辦？", zhCN: "如果对导师不满意怎么办？" },
  p5_a: { en: "You can switch teachers at any time with no penalty.", zhTW: "您可以隨時更換導師，無需罰款。", zhCN: "您可以随时更换导师，无需罚款。" },
  p6_q: { en: "How does online tutoring work?", zhTW: "網上補習如何運作？", zhCN: "网上补习如何运作？" },
  p6_a: { en: "Online lessons are conducted via video call (Zoom, Google Meet). All online lessons are covered by our escrow payment protection.", zhTW: "網上課堂通過視頻通話（Zoom、Google Meet）進行。所有網上課堂均受我們的託管付款保障。", zhCN: "网上课堂通过视频通话（Zoom、Google Meet）进行。所有网上课堂均受我们的托管付款保障。" },
  p7_q: { en: "What age groups do you serve?", zhTW: "您們服務哪些年齡組別？", zhCN: "你们服务哪些年龄组别？" },
  p7_a: { en: "We serve students from Primary 1 through to adults.", zhTW: "我們服務從小一到成人的學生。", zhCN: "我们服务从小一到成人的学生。" },
  p8_q: { en: "Can I switch teachers if needed?", zhTW: "我可以更換導師嗎？", zhCN: "我可以更换导师吗？" },
  p8_a: { en: "Absolutely. You're never locked into a single teacher.", zhTW: "當然可以。您無需鎖定單一導師。", zhCN: "当然可以。您无需锁定单一导师。" },
  
  // Teacher FAQs
  t1_q: { en: "How much can I earn as a Minerva teacher?", zhTW: "作為Minerva導師我能賺多少錢？", zhCN: "作为Minerva导师我能赚多少钱？" },
  t1_a: { en: "Most teachers charge HK$300-500/hour for academic subjects, and HK$280-450/hour for music and arts.", zhTW: "大多數導師收取學術科目每小時HK$300-500，音樂和藝術每小時HK$280-450。", zhCN: "大多数导师收取学术科目每小时HK$300-500，音乐和艺术每小时HK$280-450。" },
  t2_q: { en: "How do I get paid?", zhTW: "如何獲得報酬？", zhCN: "如何获得报酬？" },
  t2_a: { en: "Payments are processed through Stripe and released to your account within 3 business days after lesson completion.", zhTW: "款項通過Stripe處理，在課堂完成後3個工作日內發放到您的帳戶。", zhCN: "款项通过Stripe处理，在课堂完成后3个工作日内发放到您的帐户。" },
  t3_q: { en: "What if a student cancels last minute?", zhTW: "如果學生最後一刻取消怎麼辦？", zhCN: "如果学生最后一刻取消怎么办？" },
  t3_a: { en: "If a student cancels within 24 hours, they receive a 50% refund and you keep 50% of the lesson fee as compensation.", zhTW: "如果學生在24小時內取消，他們會獲得50%退款，您則保留50%作為補償。", zhCN: "如果学生在24小时内取消，他们会获得50%退款，您则保留50%作为补偿。" },
  t4_q: { en: "Do I need to bring my own materials?", zhTW: "我需要自備教材嗎？", zhCN: "我需要自备教材吗？" },
  t4_a: { en: "Many teachers use their own materials. We also provide access to a shared resource library.", zhTW: "許多導師使用自己的教材。我們也提供共享資源庫的訪問權限。", zhCN: "许多导师使用自己的教材。我们也提供共享资源库的访问权限。" },
  t5_q: { en: "How does the 0% commission for first 4 classes work?", zhTW: "首四堂0%佣金如何運作？", zhCN: "首四堂0%佣金如何运作？" },
  t5_a: { en: "Your first four completed lessons have zero commission. You keep 100% of what parents pay.", zhTW: "您的前四堂已完成課堂免佣金。您可保留家長支付的100%款項。", zhCN: "您的首四堂已完成课堂免佣金。您可保留家长支付的100%款项。" },
  t6_q: { en: "What verification process do I need to complete?", zhTW: "我需要完成哪些驗證流程？", zhCN: "我需要完成哪些验证流程？" },
  t6_a: { en: "All teachers must complete: ID verification, qualification checks, reference verification, and a short interview.", zhTW: "所有導師必須完成：身份驗證、資歷核實、推薦人核實和短期面試。", zhCN: "所有导师必须完成：身份验证、资历核实、推荐人核实和短期面试。" },
  
  // General FAQs
  g1_q: { en: "Is my data protected?", zhTW: "我的資料受到保護嗎？", zhCN: "我的资料受到保护吗？" },
  g1_a: { en: "Yes. Minerva is fully compliant with Hong Kong's Personal Data (Privacy) Ordinance (PDPO).", zhTW: "是的。Minerva完全符合香港的《個人資料（私隱）條例》（PDPO）。", zhCN: "是的。Minerva完全符合香港的《个人资料（私隐）条例》（PDPO）。" },
  g2_q: { en: "What's your refund policy?", zhTW: "退款政策是什麼？", zhCN: "退款政策是什么？" },
  g2_a: { en: "Lessons cancelled 24+ hours in advance receive full refunds. Within 24 hours, 50% refund. Refunds processed within 5 business days.", zhTW: "課堂開始前24小時以上取消可獲全額退款。24小時內取消可獲50%退款。退款在5個工作日內處理。", zhCN: "课堂开始前24小时以上取消可获全额退款。24小时内取消可获50%退款。退款在5个工作日内处理。" },
  g3_q: { en: "Where does Minerva operate?", zhTW: "Minerva在哪裡營運？", zhCN: "Minerva在哪里营运？" },
  g3_a: { en: "We currently operate in Hong Kong, covering Hong Kong Island, Kowloon, and the New Territories.", zhTW: "我們目前在香港營運，覆蓋香港島、九龍和新界。", zhCN: "我们目前在香港营运，覆盖香港岛、九龙和新界。" },
  g4_q: { en: "How do I contact support?", zhTW: "如何聯繫客戶支援？", zhCN: "如何联系客户支援？" },
  g4_a: { en: "You can reach us via email at support@minerva.hk or WhatsApp.", zhTW: "您可以通過電郵support@minerva.hk或WhatsApp聯繫我們。", zhCN: "您可以通过电邮support@minerva.hk或WhatsApp联系我们。" },
  g5_q: { en: "What makes Minerva different from other tutoring platforms?", zhTW: "Minerva與其他補習平台有何不同？", zhCN: "Minerva与其他补习平台有何不同？" },
  g5_a: { en: "We're the first platform in Asia combining verified teachers, escrow payments, virtual scheduling, and AI-powered matching.", zhTW: "我們是亞洲首個結合已驗證導師、託管付款、虛擬預約和人工智能配對的平台。", zhCN: "我们是亚洲首个结合已验证导师、托管付款、虚拟预约和人工智能配对的平台。" }
}

// Teachers page
teachers: {
  title: { en: "Our Verified Teachers", zhTW: "我們的已驗證導師", zhCN: "我们的已验证导师" },
  subtitle: { en: "Every teacher is ID-checked, background-verified, and reviewed by students. Find your perfect match.", zhTW: "每位導師均已通過身份驗證、背景審查及學生評價。為您找到最適合的導師。", zhCN: "每位导师均已通过身份验证、背景审查及学生评价。为您找到最适合的导师。" },
  per_hour: { en: "/hour", zhTW: "/小時", zhCN: "/小时" },
  book_lesson: { en: "Book Lesson", zhTW: "預訂課堂", zhCN: "预订课堂" },
  join_waitlist: { en: "Join Waitlist", zhTW: "加入候補名單", zhCN: "加入候补名单" },
  all_subjects: { en: "All Subjects", zhTW: "所有科目", zhCN: "所有科目" },
  math: { en: "Math", zhTW: "數學", zhCN: "数学" },
  english: { en: "English", zhTW: "英語", zhCN: "英语" },
  chinese: { en: "Chinese", zhTW: "中文", zhCN: "中文" },
  physics: { en: "Physics", zhTW: "物理", zhCN: "物理" },
  chemistry: { en: "Chemistry", zhTW: "化學", zhCN: "化学" },
  music: { en: "Music", zhTW: "音樂", zhCN: "音乐" },
  no_found: { en: "No teachers found", zhTW: "找不到導師", zhCN: "找不到导师" },
  try_filters: { en: "Try adjusting your filters.", zhTW: "嘗試調整篩選條件。", zhCN: "尝试调整筛选条件。" },
  years_exp: { en: "years exp.", zhTW: "年經驗", zhCN: "年经验" },
  verified: { en: "Verified", zhTW: "已驗證", zhCN: "已验证" }
}

// Terms page
terms: {
  title: { en: "Terms & Conditions", zhTW: "條款及細則", zhCN: "条款及细则" },
  s1: { en: "1. Introduction", zhTW: "1. 簡介", zhCN: "1. 简介" },
  s2: { en: "2. Teacher Registration", zhTW: "2. 導師登記", zhCN: "2. 导师登记" },
  s3: { en: "3. Parent/Student Registration", zhTW: "3. 家長/學生登記", zhCN: "3. 家长/学生登记" },
  s4: { en: "4. Escrow Payment System", zhTW: "4. 託管付款系統", zhCN: "4. 托管付款系统" },
  s5: { en: "5. Lesson Scheduling", zhTW: "5. 課堂預訂", zhCN: "5. 课堂预订" },
  s6: { en: "6. Cancellation & Refund", zhTW: "6. 取消及退款", zhCN: "6. 取消及退款" },
  s7: { en: "7. Dispute Resolution", zhTW: "7. 爭議解決", zhCN: "7. 争议解决" },
  s8: { en: "8. Platform Availability", zhTW: "8. 平台可用性", zhCN: "8. 平台可用性" },
  s9: { en: "9. Limitation of Liability", zhTW: "9. 責任限制", zhCN: "9. 责任限制" },
  s10: { en: "10. Privacy & Data Protection", zhTW: "10. 私隱及資料保護", zhCN: "10. 隐私及资料保护" }
}

// Login pages
login: {
  teacher_login: { en: "Teacher Login", zhTW: "導師登入", zhCN: "导师登入" },
  parent_login: { en: "Parent / Student Login", zhTW: "家長/學生登入", zhCN: "家长/学生登入" },
  welcome_back: { en: "Welcome back!", zhTW: "歡迎回來！", zhCN: "欢迎回来！" },
  welcome_back_teacher: { en: "Welcome back, teacher!", zhTW: "歡迎回來，導師！", zhCN: "欢迎回来，导师！" },
  welcome_back_parent: { en: "Welcome back!", zhTW: "歡迎回來！", zhCN: "欢迎回来！" },
  login_subtitle_teacher: { en: "Login to manage your students and schedule.", zhTW: "登入以管理您的學生和時間表。", zhCN: "登入以管理您的学生和时间表。" },
  login_subtitle_parent: { en: "Login to manage your lessons and track progress.", zhTW: "登入以管理您的課堂和追蹤進度。", zhCN: "登入以管理您的课堂和追踪进度。" },
  email: { en: "Email Address", zhTW: "電郵地址", zhCN: "电邮地址" },
  password: { en: "Password", zhTW: "密碼", zhCN: "密码" },
  login_btn: { en: "Login", zhTW: "登入", zhCN: "登入" },
  forgot: { en: "Forgot Password?", zhTW: "忘記密碼？", zhCN: "忘记密码？" },
  back_home: { en: "← Back to Home", zhTW: "← 返回主頁", zhCN: "← 返回主页" }
}

// Registration pages
register: {
  teacher_register: { en: "Teacher Registration", zhTW: "導師登記", zhCN: "导师登记" },
  parent_register: { en: "Parent / Student Registration", zhTW: "家長/學生登記", zhCN: "家长/学生登记" },
  join_community: { en: "Join the Minerva teaching community", zhTW: "加入Minerva教學社群", zhCN: "加入Minerva教学社群" },
  first_100: { en: "First 100 get 0 commission levied for first four classes.", zhTW: "首100位導師首四堂免佣！", zhCN: "首100位导师首四堂免佣！" },
  first_class_free: { en: "Sign up today and get first class free!", zhTW: "立即報名，首堂免費！", zhCN: "立即报名，首堂免费！" },
  full_name: { en: "Full Name", zhTW: "全名", zhCN: "全名" },
  email: { en: "Email", zhTW: "電郵", zhCN: "电邮" },
  password: { en: "Password", zhTW: "密碼", zhCN: "密码" },
  confirm_password: { en: "Confirm Password", zhTW: "確認密碼", zhCN: "确认密码" },
  register_btn: { en: "Register", zhTW: "登記", zhCN: "登记" },
  back_home: { en: "← Back to Home", zhTW: "← 返回主頁", zhCN: "← 返回主页" }
}

// Dashboard translations
teacher_dash: {
  welcome: { en: "Welcome back", zhTW: "歡迎回來", zhCN: "欢迎回来" },
  dashboard: { en: "Dashboard", zhTW: "主頁", zhCN: "主页" },
  students: { en: "Students", zhTW: "學生", zhCN: "学生" },
  schedule: { en: "Schedule", zhTW: "時間表", zhCN: "时间表" },
  messages: { en: "Messages", zhTW: "訊息", zhCN: "信息" },
  total_students: { en: "Total Students", zhTW: "學生總數", zhCN: "学生总数" },
  upcoming_lessons: { en: "Upcoming Lessons", zhTW: "即將來臨的課堂", zhCN: "即将来临的课堂" },
  this_month: { en: "This Month", zhTW: "本月", zhCN: "本月" },
  rating: { en: "Rating", zhTW: "評分", zhCN: "评分" },
  this_month_title: { en: "This Month", zhTW: "本月", zhCN: "本月" },
  upcoming_lessons_title: { en: "Upcoming Lessons", zhTW: "即將來臨的課堂", zhCN: "即将来临的课堂" },
  quick_actions: { en: "Quick Actions", zhTW: "快捷操作", zhCN: "快捷操作" },
  edit_profile: { en: "Edit Profile", zhTW: "編輯個人資料", zhCN: "编辑个人资料" },
  view_earnings: { en: "View Earnings", zhTW: "查看收入", zhCN: "查看收入" },
  view_all: { en: "View All", zhTW: "查看全部", zhCN: "查看全部" },
  pending: { en: "Pending", zhTW: "待處理", zhCN: "待处理" },
  total_earnings: { en: "Total Earnings", zhTW: "總收入", zhCN: "总收入" },
  hours_week: { en: "Hours This Week", zhTW: "本週課時", zhCN: "本周课时" },
  pending_requests: { en: "Pending Requests", zhTW: "待處理請求", zhCN: "待处理请求" }
}

parent_dash: {
  welcome: { en: "Welcome back", zhTW: "歡迎回來", zhCN: "欢迎回来" },
  dashboard: { en: "Dashboard", zhTW: "主頁", zhCN: "主页" },
  teachers: { en: "Teachers", zhTW: "導師", zhCN: "导师" },
  schedule: { en: "Schedule", zhTW: "時間表", zhCN: "时间表" },
  messages: { en: "Messages", zhTW: "訊息", zhCN: "信息" },
  active_lessons: { en: "Active Lessons", zhTW: "進行中的課堂", zhCN: "进行中的课堂" },
  completed: { en: "Completed", zhTW: "已完成", zhCN: "已完成" },
  upcoming: { en: "Upcoming", zhTW: "即將開始", zhCN: "即将开始" },
  active_lessons_title: { en: "Active Lessons", zhTW: "進行中的課堂", zhCN: "进行中的课堂" },
  quick_actions: { en: "Quick Actions", zhTW: "快捷操作", zhCN: "快捷操作" },
  find_teachers: { en: "Find Teachers", zhTW: "尋找導師", zhCN: "寻找导师" },
  view_schedule: { en: "View Schedule", zhTW: "查看時間表", zhCN: "查看时间表" },
  book_lesson: { en: "Book Lesson", zhTW: "預訂課堂", zhCN: "预订课堂" },
  view_all: { en: "View All", zhTW: "查看全部", zhCN: "查看全部" }
}

// Schedule pages
schedule: {
  my_schedule: { en: "My Schedule", zhTW: "我的時間表", zhCN: "我的时间表" },
  book_lesson: { en: "Book a Lesson", zhTW: "預訂課堂", zhCN: "预订课堂" },
  add_availability: { en: "Add Availability", zhTW: "添加可用時間", zhCN: "添加可用时间" },
  lessons_month: { en: "Lessons This Month", zhTW: "本月課堂", zhCN: "本月课堂" },
  hours_week: { en: "Hours This Week", zhTW: "本週課時", zhCN: "本周课时" },
  pending_requests: { en: "Pending Requests", zhTW: "待處理請求", zhCN: "待处理请求" },
  rating: { en: "Rating", zhTW: "評分", zhCN: "评分" },
  monthly_calendar: { en: "Monthly Calendar", zhTW: "月曆", zhCN: "月历" },
  upcoming_bookings: { en: "Upcoming Bookings", zhTW: "即將預訂", zhCN: "即将预订" },
  upcoming_bookings_title: { en: "Upcoming Bookings", zhTW: "即將預訂", zhCN: "即将预订" },
  select_teacher: { en: "Select Teacher", zhTW: "選擇導師", zhCN: "选择导师" },
  select_date: { en: "Select Date", zhTW: "選擇日期", zhCN: "选择日期" },
  select_time: { en: "Select Time", zhTW: "選擇時間", zhCN: "选择时间" },
  booking_summary: { en: "Booking Summary", zhTW: "預訂摘要", zhCN: "预订摘要" },
  confirm_booking: { en: "Confirm Booking", zhTW: "確認預訂", zhCN: "确认预订" },
  confirmed: { en: "Confirmed", zhTW: "已確認", zhCN: "已确认" },
  pending: { en: "Pending", zhTW: "待處理", zhCN: "待处理" },
  book_new: { en: "Book New", zhTW: "新預訂", zhCN: "新预订" },
  upcoming_tab: { en: "Upcoming", zhTW: "即將來臨", zhCN: "即将来临" },
  history_tab: { en: "History", zhTW: "歷史", zhCN: "历史" },
  upcoming_lessons_title: { en: "Upcoming Lessons", zhTW: "即將來臨的課堂", zhCN: "即将来临的课堂" },
  past_lessons_title: { en: "Past Lessons", zhTW: "過往課堂", zhCN: "过往课堂" }
}

// Profile page
profile: {
  edit_profile: { en: "Edit Profile", zhTW: "編輯個人資料", zhCN: "编辑个人资料" },
  basic_info: { en: "Basic Information", zhTW: "基本資料", zhCN: "基本资料" },
  full_name: { en: "Full Name", zhTW: "全名", zhCN: "全名" },
  display_name: { en: "Display Name", zhTW: "顯示名稱", zhCN: "显示名称" },
  email: { en: "Email", zhTW: "電郵", zhCN: "电邮" },
  phone: { en: "Phone Number", zhTW: "電話號碼", zhCN: "电话号码" },
  short_bio: { en: "Short Bio", zhTW: "簡短介紹", zhCN: "简短介绍" },
  teaching_details: { en: "Teaching Details", zhTW: "教學詳情", zhCN: "教学详情" },
  subjects: { en: "Subjects", zhTW: "科目", zhCN: "科目" },
  teaching_levels: { en: "Teaching Levels", zhTW: "教學程度", zhCN: "教学程度" },
  hourly_rate: { en: "Hourly Rate", zhTW: "時薪", zhCN: "时薪" },
  first_lesson_discount: { en: "First Lesson Discount", zhTW: "首課優惠", zhCN: "首课优惠" },
  teaching_location: { en: "Teaching Location", zhTW: "教學地點", zhCN: "教学地点" },
  languages: { en: "Languages Spoken", zhTW: "使用語言", zhCN: "使用语言" },
  experience: { en: "Teaching Experience", zhTW: "教學經驗", zhCN: "教学经验" },
  profile_settings: { en: "Profile Settings", zhTW: "個人設定", zhCN: "个人设定" },
  visibility: { en: "Profile Visibility", zhTW: "個人資料可見度", zhCN: "个人资料可见度" },
  accept_students: { en: "Accept New Students", zhTW: "接受新學生", zhCN: "接受新学生" },
  save_changes: { en: "Save Changes", zhTW: "儲存更改", zhCN: "储存更改" },
  verified_teacher: { en: "Verified Teacher", zhTW: "已驗證導師", zhCN: "已验证导师" },
  bank_name: { en: "Bank Name", zhTW: "銀行名稱", zhCN: "银行名称" },
  bank_account: { en: "Bank Account Number", zhTW: "銀行帳戶號碼", zhCN: "银行帐户号码" },
  account_holder: { en: "Account Holder Name", zhTW: "帳戶持有人姓名", zhCN: "帐户持有人姓名" },
  payout_schedule: { en: "Payout Schedule", zhTW: "付款時間表", zhCN: "付款时间表" }
}
