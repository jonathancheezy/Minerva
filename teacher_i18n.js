var _t = {teacher_dash:{dashboard:{en:"Dashboard","zh-TW":"主頁","zh-CN":"主頁"},students:{en:"Students","zh-TW":"學生","zh-CN":"学生"},schedule:{en:"Schedule","zh-TW":"時間表","zh-CN":"时间表"},messages:{en:"Messages","zh-TW":"訊息","zh-CN":"消息"}},reviews:{title:{en:"Reviews","zh-TW":"評價","zh-CN":"评价"}},earnings:{title:{en:"Earnings","zh-TW":"收入","zh-CN":"收入"}}};
function applyI18n(lang) {
  if (!_t) return;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var k = el.getAttribute('data-i18n');
    if (!k) return;
    var v = _t;
    k.split('.').forEach(function(x) { v = v && v[x]; });
    if (v && v[lang]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = v[lang];
      } else {
        el.textContent = v[lang];
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    var href = b.getAttribute('href') || '';
    var isActive = href.includes('lang=' + lang) ||
      (lang === 'en' && (href.includes('lang=en') || href === 'teacher_dashboard.html' || href === 'teacher_dashboard.html?'));
    b.classList.toggle('active', isActive);
  });
}

// Auto-init like i18n.js
function initTeacherI18n() {
  var urlParams = new URLSearchParams(window.location.search);
  var langParam = urlParams.get('lang');
  var lang = langParam || 'en';
  if (lang !== 'en' && lang !== 'zh-TW' && lang !== 'zh-CN') lang = 'en';
  applyI18n(lang);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTeacherI18n);
} else {
  initTeacherI18n();
}
