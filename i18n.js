// Minerva i18n Core
(function(){
  const T = {
    register:{teacher_register:{en:"Teacher Registration",zhTW:"導師登記",zhCN:"导师登记"},parent_register:{en:"Parent Registration",zhTW:"家長登記",zhCN:"家长登记"},join_community:{en:"Join Minerva",zhTW:"加入Minerva",zhCN:"加入Minerva"},full_name:{en:"Full Name",zhTW:"全名",zhCN:"全名"},email:{en:"Email",zhTW:"電郵",zhCN:"电邮"},password:{en:"Password",zhTW:"密碼",zhCN:"密码"},register_btn:{en:"Register",zhTW:"登記",zhCN:"登记"}},
    login:{teacher_login:{en:"Teacher Login",zhTW:"導師登入",zhCN:"导师登入"},parent_login:{en:"Parent Login",zhTW:"家長登入",zhCN:"家长登入"},welcome_back:{en:"Welcome back!",zhTW:"歡迎回來！",zhCN:"欢迎回来！"}},
    teachers:{title:{en:"Our Teachers",zhTW:"我們的導師",zhCN:"我们的导师"},book_lesson:{en:"Book Lesson",zhTW:"預訂課堂",zhCN:"预约课堂"}},
    dash:{welcome:{en:"Welcome",zhTW:"歡迎",zhCN:"欢迎"},dashboard:{en:"Dashboard",zhTW:"主頁",zhCN:"主页"}}
  };
  let lang='en';
  window.setLang=function(l){lang=l;apply()};
  function apply(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      let v=T;const k=el.getAttribute('data-i18n');
      k.split('.').forEach(x=>v=v&&v[x]);
      if(v&&v[lang])el.textContent=v[lang];
    });
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.classList.toggle('active',b.getAttribute('href')&&b.getAttribute('href').includes('lang='+lang));
    });
  }
  document.addEventListener('DOMContentLoaded',function(){
    const p=new URLSearchParams(location.search);
    const u=p.get('lang'),s=localStorage.getItem('minerva_lang');
    if(u&&['en','zh-TW','zh-CN'].includes(u))setLang(u);
    else if(s&&['en','zh-TW','zh-CN'].includes(s))setLang(s);
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.addEventListener('click',e=>{
        const h=b.getAttribute('href');
        if(h&&h.includes('lang=')){e.preventDefault();setLang(h.split('lang=')[1].split('&')[0]);}
      });
    });
  });
})();
