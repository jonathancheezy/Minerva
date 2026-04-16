// Minerva Translation System
const translations = {
  common: { en: "EN", zhTW: "繁", zhCN: "简" },
  faq: { title: { en: "FAQ", zhTW: "常見問題", zhCN: "常见问题" }, for_parents: { en: "For Parents", zhTW: "家長", zhCN: "家长" }, for_teachers: { en: "For Teachers", zhTW: "導師", zhCN: "导师" } },
  teachers: { title: { en: "Our Teachers", zhTW: "我們的導師", zhCN: "我们的导师" }, per_hour: { en: "/hr", zhTW: "/小時", zhCN: "/小时" }, book_lesson: { en: "Book", zhTW: "預訂", zhCN: "预订" } },
  register: { teacher_register: { en: "Teacher Registration", zhTW: "導師登記", zhCN: "导师登记" }, join_community: { en: "Join Minerva", zhTW: "加入Minerva", zhCN: "加入Minerva" }, full_name: { en: "Full Name", zhTW: "全名", zhCN: "全名" }, email: { en: "Email", zhTW: "電郵", zhCN: "电邮" }, password: { en: "Password", zhTW: "密碼", zhCN: "密码" }, register_btn: { en: "Register", zhTW: "登記", zhCN: "登记" } },
  teacher_dash: { welcome: { en: "Welcome", zhTW: "歡迎", zhCN: "欢迎" }, dashboard: { en: "Dashboard", zhTW: "主頁", zhCN: "主页" } },
  parent_dash: { welcome: { en: "Welcome", zhTW: "歡迎", zhCN: "欢迎" }, dashboard: { en: "Dashboard", zhTW: "主頁", zhCN: "主页" } }
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
