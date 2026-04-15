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
