// Minerva Translation System
const translations = {
  common: { en: "EN", zhTW: "繁", zhCN: "简", save: "Save", cancel: "Cancel", back: "Back", logout: "Logout" },
  register: {
    teacher_register: { en: "Teacher Registration", zhTW: "導師登記", zhCN: "导师登记" },
    parent_register: { en: "Parent / Student Registration", zhTW: "家長/學生登記", zhCN: "家长/学生登记" },
    join_community: { en: "Join the Minerva teaching community", zhTW: "加入Minerva教學社群", zhCN: "加入Minerva教学社群" },
    first_100: { en: "First 100 get 0 commission for first four classes.", zhTW: "首100位導師首四堂免佣！", zhCN: "首100位导师首四堂免佣！" },
    first_class_free: { en: "Sign up today and get first class free!", zhTW: "立即報名，首堂免費！", zhCN: "立即报名，首堂免费！" },
    full_name: { en: "Full Name", zhTW: "全名", zhCN: "全名" },
    email: { en: "Email", zhTW: "電郵", zhCN: "电邮" },
    password: { en: "Password", zhTW: "密碼", zhCN: "密码" },
    confirm_password: { en: "Confirm Password", zhTW: "確認密碼", zhCN: "确认密码" },
    register_btn: { en: "Register", zhTW: "登記", zhCN: "登记" },
    back_home: { en: "← Back to Home", zhTW: "← 返回主頁", zhCN: "← 返回主页" }
  },
  login: {
    teacher_login: { en: "Teacher Login", zhTW: "導師登入", zhCN: "导师登入" },
    parent_login: { en: "Parent / Student Login", zhTW: "家長/學生登入", zhCN: "家长/学生登入" },
    welcome_back: { en: "Welcome back!", zhTW: "歡迎回來！", zhCN: "欢迎回来！" },
    email: { en: "Email Address", zhTW: "電郵地址", zhCN: "电邮地址" },
    password: { en: "Password", zhTW: "密碼", zhCN: "密码" },
    login_btn: { en: "Login", zhTW: "登入", zhCN: "登入" },
    forgot: { en: "Forgot Password?", zhTW: "忘記密碼？", zhCN: "忘记密码？" },
    back_home: { en: "← Back to Home", zhTW: "← 返回主頁", zhCN: "← 返回主页" }
  },
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
    quick_actions: { en: "Quick Actions", zhTW: "快捷操作", zhCN: "快捷操作" },
    edit_profile: { en: "Edit Profile", zhTW: "編輯個人資料", zhCN: "编辑个人资料" },
    view_earnings: { en: "View Earnings", zhTW: "查看收入", zhCN: "查看收入" },
    view_all: { en: "View All", zhTW: "查看全部", zhCN: "查看全部" },
    pending: { en: "Pending", zhTW: "待處理", zhCN: "待处理" },
    total_earnings: { en: "Total Earnings", zhTW: "總收入", zhCN: "总收入" },
    hours_week: { en: "Hours This Week", zhTW: "本週課時", zhCN: "本周课时" },
    pending_requests: { en: "Pending Requests", zhTW: "待處理請求", zhCN: "待处理请求" }
  },
  parent_dash: {
    welcome: { en: "Welcome back", zhTW: "歡迎回來", zhCN: "欢迎回来" },
    dashboard: { en: "Dashboard", zhTW: "主頁", zhCN: "主页" },
    teachers: { en: "Teachers", zhTW: "導師", zhCN: "导师" },
    schedule: { en: "Schedule", zhTW: "時間表", zhCN: "时间表" },
    messages: { en: "Messages", zhTW: "訊息", zhCN: "信息" },
    active_lessons: { en: "Active Lessons", zhTW: "進行中的課堂", zhCN: "进行中的课堂" },
    completed: { en: "Completed", zhTW: "已完成", zhCN: "已完成" },
    upcoming: { en: "Upcoming", zhTW: "即將開始", zhCN: "即将开始" },
    quick_actions: { en: "Quick Actions", zhTW: "快捷操作", zhCN: "快捷操作" },
    find_teachers: { en: "Find Teachers", zhTW: "尋找導師", zhCN: "寻找导师" },
    view_schedule: { en: "View Schedule", zhTW: "查看時間表", zhCN: "查看时间表" },
    book_lesson: { en: "Book Lesson", zhTW: "預訂課堂", zhCN: "预订课堂" },
    view_all: { en: "View All", zhTW: "查看全部", zhCN: "查看全部" }
  },
  teachers: {
    title: { en: "Our Verified Teachers", zhTW: "我們的已驗證導師", zhCN: "我们的已验证导师" },
    subtitle: { en: "Every teacher is ID-checked, background-verified.", zhTW: "每位導師均已通過身份驗證、背景審查。", zhCN: "每位导师均已通过身份验证、背景审查。" },
    per_hour: { en: "/hour", zhTW: "/小時", zhCN: "/小时" },
    book_lesson: { en: "Book Lesson", zhTW: "預訂課堂", zhCN: "预约课堂" },
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
  },
  faq: {
    title: { en: "Frequently Asked Questions", zhTW: "常見問題", zhCN: "常见问题" },
    for_parents: { en: "For Parents & Students", zhTW: "家長/學生", zhCN: "家长/学生" },
    for_teachers: { en: "For Teachers", zhTW: "導師", zhCN: "导师" },
    general: { en: "General", zhTW: "一般問題", zhCN: "一般问题" }
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('minerva_lang', lang);
  applyTranslations();
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('href') && btn.getAttribute('href').includes('lang=' + lang)) {
      btn.classList.add('active');
    }
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) { value = value && value[k]; }
    if (value && value[currentLang]) {
      el.textContent = value[currentLang];
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('minerva_lang');
  if (urlLang && ['en', 'zh-TW', 'zh-CN'].includes(urlLang)) {
    setLanguage(urlLang);
  } else if (savedLang && ['en', 'zh-TW', 'zh-CN'].includes(savedLang)) {
    setLanguage(savedLang);
  }
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.includes('lang=')) {
        e.preventDefault();
        const lang = href.split('lang=')[1].split('&')[0];
        if (lang) setLanguage(lang);
      }
    });
  });
});
