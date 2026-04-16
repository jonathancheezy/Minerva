// Minerva Translation System
const translations = {
  common: { en: "EN", zhTW: "繁", zhCN: "简" },
  faq: { title: { en: "FAQ", zhTW: "常見問題", zhCN: "常见问题" } },
  register: { teacher_register: { en: "Teacher Registration", zhTW: "導師登記", zhCN: "导师登记" } },
  teachers: { title: { en: "Our Teachers", zhTW: "我們的導師", zhCN: "我们的导师" } }
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
