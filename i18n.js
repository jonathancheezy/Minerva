// Minerva i18n — All Translation Keys
(function(){
  const T = {
    // ── Landing page (flat keys) ──
    badge:{en:"Hong Kong Pilot — Coming Q3 2026",zhTW:"香港先導計劃 — 2026年第三季度推出",zhCN:"香港先导计划 — 2026年第三季度推出"},
    hero_title:{en:'Learn from the <span class="highlight">best</span>,<br>backed by trust.',zhTW:'跟隨<span class="highlight">最好</span>的老師學習，<br>信任背書。',zhCN:'跟随<span class="highlight">最好</span>的老师学习，<br>信任背书。'},
    hero_subtitle:{en:"Minerva is the first AI-powered learning marketplace in Asia with verified teachers, escrow payments, and online scheduling — so you can focus on learning, not worrying.",zhTW:"Minerva是亞洲首個人工智能驅動的學習市場，擁有已驗證導師、託管付款和在線預約系統——讓您專注於學習，而不是擔憂。",zhCN:"Minerva是亚洲首个人工智能驱动的学习市场，拥有已验证导师、托管付款和在线预约系统——让您专注于学习，而不是担忧。"},
    btn_register_teacher:{en:"Register as Teacher →",zhTW:"註冊成為導師 →",zhCN:"注册成为导师 →"},
    btn_register_parent:{en:"Register as Parent/Student →",zhTW:"註冊成為家長/學生 →",zhCN:"注册成为家长/学生 →"},
    trust_verified:{en:"Background Verified",zhTW:"身份驗證",zhCN:"身份验证"},
    trust_escrow:{en:"Escrow Protected",zhTW:"託管保障",zhCN:"托管保障"},
    trust_privacy:{en:"HK Data Privacy",zhTW:"香港資料私隱",zhCN:"香港资料私隐"},
    stat1_value:{en:"Free Trial",zhTW:"免費試堂",zhCN:"免费试堂"},
    stat1_label:{en:"For New Sign Ups",zhTW:"新用戶專享",zhCN:"新用户专享"},
    stat2_value:{en:"Lower Fees",zhTW:"更低費用",zhCN:"更低费用"},
    stat2_label:{en:"Better Paid Teachers",zhTW:"導師獲得更好報酬",zhCN:"导师获得更好报酬"},
    stat3_value:{en:"Self Screen",zhTW:"自行挑選",zhCN:"自行挑选"},
    stat3_label:{en:"Interview Before Selection",zhTW:"選擇前先面試",zhCN:"选择前先面试"},
    problem_label:{en:"The Problem",zhTW:"問題所在",zhCN:"问题所在"},
    problem_title:{en:"Academic and homework supervision needs in Hong Kong",zhTW:"香港的學業和功課督導需求",zhCN:"香港的学业和功课督导需求"},
    problem_subtitle:{en:"Parents and teachers face trust gaps, prepayment risks, and scheduling chaos — with no systematic protection.",zhTW:"家長和導師面臨信任鴻溝、預付款風險和預約混亂——沒有系統性保障。",zhCN:"家长和导师面临信任鸿沟、预付款风险和预约混乱——没有系统性保障。"},
    parents_title:{en:"For Parents",zhTW:"家長專區",zhCN:"家长专区"},
    p1_title:{en:"Trust",zhTW:"信任",zhCN:"信任"},
    p1_desc:{en:"No way to verify if kids are safe around strangers. ID checks and background verification rare.",zhTW:"無法驗證孩子是否安全。身份檢查和背景驗證很少見。",zhCN:"无法验证孩子是否安全。身份检查和背景验证很罕见。"},
    p2_title:{en:"Quality",zhTW:"質量",zhCN:"质量"},
    p2_desc:{en:"Unable to assess teacher prior to engagement and on an ongoing basis.",zhTW:"無法在聘用前和持續評估導師質量。",zhCN:"无法在聘用前和持续评估导师质量。"},
    p3_title:{en:"Prepayment Risk",zhTW:"預付款風險",zhCN:"预付款风险"},
    p3_desc:{en:"Prepayment offers no escrow protection.",zhTW:"預付款沒有託管保障。",zhCN:"预付款没有托管保障。"},
    p4_title:{en:"Scheduling",zhTW:"預約",zhCN:"预约"},
    p4_desc:{en:"Coordinating schedules can be painful. No aggregated view of lessons.",zhTW:"協調時間表可能很痛苦。沒有整合的課堂視圖。",zhCN:"协调时间表可能很痛苦。没有整合的课堂视图。"},
    p5_title:{en:"Progress",zhTW:"進度",zhCN:"进度"},
    p5_desc:{en:"No systematic way of tracking students' progress. Results uncertain.",zhTW:"沒有系統性的方法追蹤學生進度。成果不確定。",zhCN:"没有系统性的方法追踪学生进度。成果不确定。"},
    teachers_title:{en:"For Teachers",zhTW:"導師專區",zhCN:"导师专区"},
    t1_title:{en:"Fair Pay",zhTW:"公平報酬",zhCN:"公平报酬"},
    t1_desc:{en:"Agencies take exorbitant commission for just making an introduction.",zhTW:"中介機構僅僅介紹就收取過高佣金。",zhCN:"中介机构仅仅介绍就收取过高佣金。"},
    t2_title:{en:"Student Flow",zhTW:"學生流量",zhCN:"学生流量"},
    t2_desc:{en:"Marketing and finding students is their burden. No platform to get discovered.",zhTW:"營銷和尋找學生是他們的負擔。沒有平台可以讓導師被發現。",zhCN:"营销和寻找学生是他们的负担。没有平台可以让导师被发现。"},
    t3_title:{en:"No-Show Risk",zhTW:"缺席風險",zhCN:"缺席风险"},
    t3_desc:{en:"No protection from last-minute cancellations. Lost time = lost income.",zhTW:"沒有預防最後一刻取消的保障。損失時間=損失收入。",zhCN:"没有预防最后一刻取消的保障。损失时间=损失收入。"},
    t4_title:{en:"Scheduling",zhTW:"預約",zhCN:"预约"},
    t4_desc:{en:"Manual coordination with parents. Double-booking, confusion.",zhTW:"手動與家長協調。雙重預約、混亂。",zhCN:"手动与家长协调。双重预约、混乱。"},
    t5_title:{en:"Branding",zhTW:"品牌建立",zhCN:"品牌建立"},
    t5_desc:{en:"Able to build their personal brand easily.",zhTW:"能夠輕鬆建立個人品牌。",zhCN:"能够轻松建立个人品牌。"},
    features_label:{en:"Why Minerva",zhTW:"為什麼選擇Minerva",zhCN:"为什么选择Minerva"},
    features_title:{en:"Built different. Built for trust.",zhTW:"與眾不同。為信任而生。",zhCN:"与众不同。为信任而生。"},
    features_subtitle:{en:"We solved the trust problem that every parent and teacher faces in Hong Kong.",zhTW:"我們解決了每個香港家長和導師面臨的信任問題。",zhCN:"我们解决了每个香港家长和导师面临的信任问题。"},
    f1_title:{en:"Verified Teachers",zhTW:"已驗證導師",zhCN:"已验证导师"},
    f1_desc:{en:"Every teacher is ID-checked, background-verified, and reference-checked before joining Minerva.",zhTW:"每位導師在加入Minerva前都會經過身份驗證、背景驗證和推薦人驗證。",zhCN:"每位导师在加入Minerva前都会经过身份验证、背景验证和推荐人验证。"},
    f2_title:{en:"Escrow Payments",zhTW:"託管付款",zhCN:"托管付款"},
    f2_desc:{en:"Your payment is held safely until the lesson is complete. No risk of losing money.",zhTW:"您的付款在課堂完成前安全保管。不會有損失金錢的風險。",zhCN:"您的付款在课堂完成前安全保管。不会有损失金钱的风险。"},
    f3_title:{en:"Progress Tracking",zhTW:"進度追蹤",zhCN:"进度追踪"},
    f3_desc:{en:"AI-powered dashboard shows learning progress, skill gaps, and predicted outcomes.",zhTW:"人工智能儀表板顯示學習進度、技能差距和預測成果。",zhCN:"人工智能仪表板显示学习进度、技能差距和预测成果。"},
    f4_title:{en:"Virtual Scheduling",zhTW:"虛擬預約",zhCN:"虚拟预约"},
    f4_desc:{en:"Parents book lessons by selecting from a teacher's live calendar. All classes viewable in one place.",zhTW:"家長通過選擇導師的即時日曆預訂課堂。所有課堂一目了然。",zhCN:"家长通过选择导师的即时日历预订课堂。所有课堂一目了然。"},
    f5_title:{en:"Algo Matching",zhTW:"智能配對",zhCN:"智能配对"},
    f5_desc:{en:"We recommend the best fit based on your learning goals and style.",zhTW:"根據您的學習目標和風格推薦最佳配合。",zhCN:"根据您的学习目标和风格推荐最佳配合。"},
    f6_title:{en:"No-Show Risk",zhTW:"缺席保障",zhCN:"缺席保障"},
    f6_desc:{en:"Both parents and teachers are protected from last minute cancellations.",zhTW:"家長和導師都受到最後一刻取消的保障。",zhCN:"家长和导师都受到最后一刻取消的保障。"},
    how_label:{en:"How It Works",zhTW:"如何運作",zhCN:"如何运作"},
    how_title:{en:"From search to first lesson in 3 steps",zhTW:"從搜索到第一堂課，只需3步",zhCN:"从搜索到第一堂课，只需3步"},
    step1_title:{en:"Search & Book",zhTW:"搜索與預訂",zhCN:"搜索与预订"},
    step1_desc:{en:"Browse verified teachers, read reviews, and book a lesson that fits your schedule.",zhTW:"瀏覽已驗證導師、閱讀評論並預訂適合您時間表的課堂。",zhCN:"浏览已验证导师、阅读评论并预订适合您时间表的课堂。"},
    step2_title:{en:"Schedule & Confirm",zhTW:"預約與確認",zhCN:"预约与确认"},
    step2_desc:{en:"Coordinate a time that works for both parties. Automated reminders sent to both.",zhTW:"協調雙方合适的時間。自動提醒將發送給雙方。",zhCN:"协调双方合适的时间。自动提醒将发送给双方。"},
    step3_title:{en:"Learn & Track",zhTW:"學習與追蹤",zhCN:"学习与追踪"},
    step3_desc:{en:"Conduct lessons on Minerva. Track progress via your parent or teacher dashboard.",zhTW:"在Minerva上進行課堂。通過家長或導師儀表板追蹤進度。",zhCN:"在Minerva上进行课堂。通过家长或导师仪表板追踪进度。"},
    waitlist_title:{en:"Join the Waitlist",zhTW:"加入候補名單",zhCN:"加入候补名单"},
    waitlist_subtitle:{en:"Be first to know when Minerva launches in your area.",zhTW:"第一時間了解Minerva在您所在地區的推出時間。",zhCN:"第一时间了解Minerva在您所在地区的推出时间。"},
    waitlist_teachers:{en:"Register as Teacher",zhTW:"註冊成為導師",zhCN:"注册成为导师"},
    waitlist_parents:{en:"Register as Parent/Student",zhTW:"註冊成為家長/學生",zhCN:"注册成为家长/学生"},
    success_msg:{en:"Thank you! We'll be in touch soon.",zhTW:"謝謝您！我們將盡快與您聯繫。",zhCN:"谢谢您！我们将尽快与您联系。"},
    email_placeholder:{en:"Enter your email",zhTW:"輸入您的電郵",zhCN:"输入您的电邮"},
    btn_submit:{en:"Subscribe →",zhTW:"訂閱 →",zhCN:"订阅 →"},
    opt_student:{en:"Student",zhTW:"學生",zhCN:"学生"},
    opt_teacher:{en:"Teacher",zhTW:"導師",zhCN:"导师"},

    // ── Admin ──
    admin:{
      title:{en:"Admin Portal",zhTW:"管理員門戶",zhCN:"管理员门户"},
      subtitle:{en:"Login to manage teachers and students",zhTW:"登入以管理導師和學生",zhCN:"登录以管理导师和学生"},
      email:{en:"Email Address",zhTW:"電郵地址",zhCN:"电邮地址"},
      email_placeholder:{en:"admin@minerva.hk",zhTW:"admin@minerva.hk",zhCN:"admin@minerva.hk"},
      password:{en:"Password",zhTW:"密碼",zhCN:"密码"},
      password_placeholder:{en:"Enter your password",zhTW:"輸入您的密碼",zhCN:"输入您的密码"},
      login_btn:{en:"Login",zhTW:"登入",zhCN:"登录"},
      error_msg:{en:"Incorrect email or password. Please try again.",zhTW:"電郵地址或密碼不正確，請重試。",zhCN:"电邮地址或密码不正确，请重试。"},
      success_title:{en:"✅ Login successful!",zhTW:"✅ 登入成功！",zhCN:"✅ 登录成功！"},
      redirect_msg:{en:"Redirecting to admin dashboard...",zhTW:"正在跳轉至管理員儀表板...",zhCN:"正在跳转至管理员仪表板..."},
      back_link:{en:"← Back to Home",zhTW:"← 返回主頁",zhCN:"← 返回主页"},
      copyright:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有权利。"}
    },

    // ── Admin Dashboard ──
    admin_dash:{
      title:{en:"Admin Dashboard",zhTW:"管理員儀表板",zhCN:"管理员仪表板"},
      total_teachers:{en:"Total Teachers",zhTW:"導師總數",zhCN:"导师总数"},
      total_students:{en:"Total Students",zhTW:"學生總數",zhCN:"学生总数"},
      pending_review:{en:"Pending Review",zhTW:"待處理審核",zhCN:"待处理审核"},
      tab_all_teachers:{en:"All Teachers",zhTW:"所有導師",zhCN:"所有导师"},
      tab_pending:{en:"Pending Approval",zhTW:"待批准",zhCN:"待批准"},
      tab_students:{en:"All Students",zhTW:"所有學生",zhCN:"所有学生"},
      tab_lessons:{en:"Recent Lessons",zhTW:"最近的課堂",zhCN:"最近的课堂"},
      teachers:{en:"Teachers",zhTW:"導師",zhCN:"导师"},
      search_teachers:{en:"Search teachers...",zhTW:"搜尋導師...",zhCN:"搜寻导师..."},
      col_name:{en:"Name",zhTW:"姓名",zhCN:"姓名"},
      col_subject:{en:"Subject",zhTW:"科目",zhCN:"科目"},
      col_students:{en:"Students",zhTW:"學生",zhCN:"学生"},
      col_rating:{en:"Rating",zhTW:"評分",zhCN:"评分"},
      col_status:{en:"Status",zhTW:"狀態",zhCN:"状态"},
      col_actions:{en:"Actions",zhTW:"操作",zhCN:"操作"},
      view:{en:"View",zhTW:"查看",zhCN:"查看"},
      nav_dashboard:{en:"Dashboard",zhTW:"儀表板",zhCN:"仪表板"},
      nav_teachers:{en:"Teachers",zhTW:"導師",zhCN:"导师"},
      nav_students:{en:"Students",zhTW:"學生",zhCN:"学生"}
    },

    // ── Login ──
    login:{
      footer_text:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有权利。"},
      email:{en:"Email Address",zhTW:"電郵地址",zhCN:"电邮地址"},
      password:{en:"Password",zhTW:"密碼",zhCN:"密码"},
      login_btn:{en:"Login",zhTW:"登入",zhCN:"登录"},
      welcome_teacher:{en:"Teacher? Log in here",zhTW:"導師？在此登入",zhCN:"导师？在此登录"},
      subtitle_teacher:{en:"Access your teacher dashboard",zhTW:"進入您的導師儀表板",zhCN:"进入您的导师仪表板"},
      welcome_back:{en:"Welcome back!",zhTW:"歡迎回來！",zhCN:"欢迎回来！"},
      teacher_login:{en:"Teacher Login",zhTW:"導師登入",zhCN:"导师登录"},
      parent_login:{en:"Parent Login",zhTW:"家長登入",zhCN:"家长登录"},
      back_link:{en:"← Back to Home",zhTW:"← 返回主頁",zhCN:"← 返回主页"},
      home_link:{en:"← Back to Home",zhTW:"← 返回主頁",zhCN:"← 返回主页"},
      forgot_password:{en:"Forgot Password?",zhTW:"忘記密碼？",zhCN:"忘记密码？"},
      register_link:{en:"No account? Register →",zhTW:"還沒有帳戶？登記 →",zhCN:"还没有帐户？登记 →"},
      login_subtitle_teacher:{en:"Login to access your teacher dashboard",zhTW:"登入以訪問您的導師儀表板",zhCN:"登录以访问您的导师仪表板"},
      login_subtitle_parent:{en:"Login to access your parent dashboard",zhTW:"登入以訪問您的家長儀表板",zhCN:"登录以访问您的家长仪表板"},
      success_title:{en:"✅ Login successful!",zhTW:"✅ 登入成功！",zhCN:"✅ 登录成功！"},
      "Email Address":{en:"Email Address",zhTW:"電郵地址",zhCN:"电邮地址"},
      "Login":{en:"Login",zhTW:"登入",zhCN:"登录"},
      "Password":{en:"Password",zhTW:"密碼",zhCN:"密码"}
    },

    // ── Register ──
      footer_text:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有权利。"},
    register:{
      email:{en:"Email Address",zhTW:"電郵地址",zhCN:"电邮地址"},
      password:{en:"Password",zhTW:"密碼",zhCN:"密码"},
      "Email Address":{en:"Email Address",zhTW:"電郵地址",zhCN:"电邮地址"},
      "Password":{en:"Password",zhTW:"密碼",zhCN:"密码"},
      "Full Name":{en:"Full Name",zhTW:"全名",zhCN:"全名"},
      "Confirm Password":{en:"Confirm Password",zhTW:"確認密碼",zhCN:"确认密码"},
      "Phone Number":{en:"Phone Number",zhTW:"電話號碼",zhCN:"电话号码"},
      full_name:{en:"Full Name",zhTW:"全名",zhCN:"全名"},
      btn_register:{en:"Register",zhTW:"登記",zhCN:"登记"},
      register_btn:{en:"Register",zhTW:"登記",zhCN:"登记"},
      teacher_register:{en:"Teacher Registration",zhTW:"導師登記",zhCN:"导师登记"},
      parent_register:{en:"Parent Registration",zhTW:"家長登記",zhCN:"家长登记"},
      join_community:{en:"Join Minerva",zhTW:"加入Minerva",zhCN:"加入Minerva"},
      link_terms:{en:"I agree to the Terms & Conditions",zhTW:"我同意條款及細則",zhCN:"我同意条款及细则"},
      home_link:{en:"← Back to Home",zhTW:"← 返回主頁",zhCN:"← 返回主页"},
      first_class_free:{en:"First class FREE when you sign up for 4 lessons",zhTW:"報名4堂課，首堂免費",zhCN:"报名4堂课，首堂免费"},
      find_teacher:{en:"Find a Teacher",zhTW:"尋找導師",zhCN:"寻找导师"},
      footer_text:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有权利。"},
      success_title:{en:"✅ Registration successful!",zhTW:"✅ 登記成功！",zhCN:"✅ 登记成功！"},
      first_100:{en:"Join the first 100 teachers — 0% commission",zhTW:"加入首批100位導師 — 0%佣金",zhCN:"加入首批100位导师 — 0%佣金"},
      login_link:{en:"Already have an account? Login →",zhTW:"已有帳戶？登入 →",zhCN:"已有帐户？登录 →"},
      phone:{en:"Phone Number",zhTW:"電話號碼",zhCN:"电话号码"}
    },

    // ── Parent Dashboard ──
    parent_dash:{
      welcome:{en:"Welcome back!",zhTW:"歡迎回來！",zhCN:"欢迎回来！"},
      dashboard:{en:"Dashboard",zhTW:"主頁",zhCN:"主页"},
      book_lesson:{en:"Book Lesson",zhTW:"預訂課堂",zhCN:"预约课堂"},
      schedule:{en:"Schedule",zhTW:"時間表",zhCN:"时间表"},
      teachers:{en:"Teachers",zhTW:"導師",zhCN:"导师"},
      messages:{en:"Messages",zhTW:"訊息",zhCN:"讯息"},
      learning_progress:{en:"Learning Progress",zhTW:"學習進度",zhCN:"学习进度"},
      view_all:{en:"View All",zhTW:"查看全部",zhCN:"查看全部"}
    },

      footer_text:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有权利。"},
    // ── Parent Schedule ──
    schedule:{
      book_lesson:{en:"Book Lesson",zhTW:"預訂課堂",zhCN:"预约课堂"},
      book_new:{en:"Book New Lesson",zhTW:"預訂新課堂",zhCN:"预订新课堂"},
      booking_summary:{en:"Booking Summary",zhTW:"預訂摘要",zhCN:"预订摘要"},
      confirm_booking:{en:"Confirm Booking",zhTW:"確認預訂",zhCN:"确认预订"},
      select_date:{en:"Select Date",zhTW:"選擇日期",zhCN:"选择日期"},
      select_time:{en:"Select Time",zhTW:"選擇時間",zhCN:"选择时间"},
      select_teacher:{en:"Select Teacher",zhTW:"選擇導師",zhCN:"选择导师"},
      upcoming_tab:{en:"Upcoming",zhTW:"即將到来",zhCN:"即将到来"},
      upcoming_lessons_title:{en:"Upcoming Lessons",zhTW:"即將到來的課堂",zhCN:"即将到来的课堂"},
      past_lessons_title:{en:"Past Lessons",zhTW:"過去的課堂",zhCN:"过去的课堂"},
      add_availability:{en:"Add Availability",zhTW:"添加可用時間",zhCN:"添加可用时间"},
      confirmed:{en:"Confirmed",zhTW:"已確認",zhCN:"已确认"},
      pending:{en:"Pending",zhTW:"待處理",zhCN:"待处理"},
      pending_requests:{en:"Pending Requests",zhTW:"待處理請求",zhCN:"待处理请求"},
      upcoming_bookings:{en:"Upcoming Bookings",zhTW:"即將到來的預訂",zhCN:"即将到来的预订"},
      upcoming_bookings_title:{en:"Upcoming Bookings",zhTW:"即將到來的預訂",zhCN:"即将到来的预订"},
      hours_week:{en:"Hours/Week",zhTW:"小時/週",zhCN:"小时/周"},
      lessons_month:{en:"Lessons/Month",zhTW:"課堂/月",zhCN:"课堂/月"},
      monthly_calendar:{en:"Monthly Calendar",zhTW:"月度日曆",zhCN:"月度日历"},
      my_schedule:{en:"My Schedule",zhTW:"我的時間表",zhCN:"我的时间表"},
      rating:{en:"Rating",zhTW:"評分",zhCN:"评分"}
    },

    // ── Teacher Dashboard ──
    teacher_dash:{
      welcome:{en:"Welcome back!",zhTW:"歡迎回來！",zhCN:"欢迎回来！"},
      dashboard:{en:"Dashboard",zhTW:"主頁",zhCN:"主页"},
      total_students:{en:"Total Students",zhTW:"學生總數",zhCN:"学生总数"},
      total_earnings:{en:"Total Earnings",zhTW:"總收入",zhCN:"总收入"},
      upcoming_lessons:{en:"Upcoming Lessons",zhTW:"即將到來的課堂",zhCN:"即将到来的课堂"},
      upcoming_lessons_title:{en:"Upcoming Lessons",zhTW:"即將到來的課堂",zhCN:"即将到来的课堂"},
      this_month:{en:"This Month",zhTW:"本月",zhCN:"本月"},
      this_month_title:{en:"This Month",zhTW:"本月",zhCN:"本月"},
      pending:{en:"Pending",zhTW:"待處理",zhCN:"待处理"},
      confirmed:{en:"Confirmed",zhTW:"已確認",zhCN:"已确认"},
      rating:{en:"Rating",zhTW:"評分",zhCN:"评分"},
      quick_actions:{en:"Quick Actions",zhTW:"快速操作",zhCN:"快速操作"},
      edit_profile:{en:"Edit Profile",zhTW:"編輯個人資料",zhCN:"编辑个人资料"},
      schedule:{en:"Schedule",zhTW:"時間表",zhCN:"时间表"},
      messages:{en:"Messages",zhTW:"訊息",zhCN:"讯息"},
      students:{en:"Students",zhTW:"學生",zhCN:"学生"},
      view_all:{en:"View All",zhTW:"查看全部",zhCN:"查看全部"},
      view_earnings:{en:"View Earnings",zhTW:"查看收入",zhCN:"查看收入"}
    },
      footer_text:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有权利。"},

    // ── Teacher Profile ──
    profile:{
      edit_profile:{en:"Edit Profile",zhTW:"編輯個人資料",zhCN:"编辑个人资料"},
      profile_settings:{en:"Profile Settings",zhTW:"個人資料設置",zhCN:"个人资料设置"},
      basic_info:{en:"Basic Info",zhTW:"基本資料",zhCN:"基本资料"},
      full_name:{en:"Full Name",zhTW:"全名",zhCN:"全名"},
      display_name:{en:"Display Name",zhTW:"顯示名稱",zhCN:"显示名称"},
      email:{en:"Email",zhTW:"電郵",zhCN:"电邮"},
      phone:{en:"Phone",zhTW:"電話",zhCN:"电话"},
      short_bio:{en:"Short Bio",zhTW:"個人簡介",zhCN:"个人简介"},
      teaching_details:{en:"Teaching Details",zhTW:"教學詳情",zhCN:"教学详情"},
      subjects:{en:"Subjects",zhTW:"科目",zhCN:"科目"},
      teaching_levels:{en:"Teaching Levels",zhTW:"教學年級",zhCN:"教学年级"},
      teaching_location:{en:"Teaching Location",zhTW:"教學地點",zhCN:"教学地点"},
      languages:{en:"Languages",zhTW:"語言",zhCN:"语言"},
      experience:{en:"Experience",zhTW:"經驗",zhCN:"经验"},
      hourly_rate:{en:"Hourly Rate (HK$)",zhTW:"時薪 (HK$)",zhCN:"时薪 (HK$)"},
      first_lesson_discount:{en:"First Lesson Discount",zhTW:"首堂折扣",zhCN:"首堂折扣"},
      payout_schedule:{en:"Payout Schedule",zhTW:"付款時間表",zhCN:"付款时间表"},
      bank_name:{en:"Bank Name",zhTW:"銀行名稱",zhCN:"银行名称"},
      bank_account:{en:"Bank Account",zhTW:"銀行帳戶",zhCN:"银行帐户"},
      account_holder:{en:"Account Holder",zhTW:"帳戶持有人",zhCN:"帐户持有人"},
      save_changes:{en:"Save Changes",zhTW:"儲存更改",zhCN:"储存更改"},
      cancel:{en:"Cancel",zhTW:"取消",zhCN:"取消"},
      delete_account:{en:"Delete Account",zhTW:"刪除帳戶",zhCN:"删除帐户"}
    },

    // ── FAQ ──
    faq:{
      title:{en:"Frequently Asked Questions",zhTW:"常見問題",zhCN:"常见问题"},
      subtitle:{en:"Everything you need to know about Minerva",zhTW:"您需要了解的關於Minerva的一切",zhCN:"您需要了解的关于Minerva的一切"},
      for_parents:{en:"For Parents & Students",zhTW:"家長/學生",zhCN:"家长/学生"},
      for_teachers:{en:"For Teachers",zhTW:"導師",zhCN:"导师"},
      general:{en:"General",zhTW:"一般問題",zhCN:"一般问题"},
      back_link:{en:"← Back to Home",zhTW:"← 返回主頁",zhCN:"← 返回主页"},
      footer_text:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有权利。"},
      terms_link:{en:"Terms & Conditions",zhTW:"條款及細則",zhCN:"条款及细则"},
      p1_q:{en:"What subjects are available on Minerva?",zhTW:"Minerva提供哪些科目？",zhCN:"Minerva提供哪些科目？"},
      p1_a:{en:"We cover all major subjects: Academic (Math, English, Science, Chinese), Music, Languages (Cantonese, Mandarin, French, Spanish), Arts, and Sports.",zhTW:"我們涵蓋所有主要科目：學術科目（數學、英語、科學、中文）、音樂、語言（粵語、普通話、法語、西班牙語）、藝術和體育。",zhCN:"我们涵盖所有主要科目：学术科目（数学、英语、科学、中文）、音乐、语言（粤语、普通话、法语、西班牙语）、艺术和体育。"},
      p2_q:{en:"How do I book a lesson?",zhTW:"如何預訂課堂？",zhCN:"如何预订课堂？"},
      p2_a:{en:"Simply browse our verified teachers, select one that matches your needs, and click Book Lesson.",zhTW:"只需瀏覽我們的已驗證導師，選擇符合您需求的導師，然後點擊預訂課堂。",zhCN:"只需浏览我们的已验证导师，选择符合您需求的导师，然后点击预订课堂。"},
      p3_q:{en:"How does the free first lesson work?",zhTW:"免費試堂如何運作？",zhCN:"免费试堂如何运作？"},
      p3_a:{en:"When you sign up for four lessons with a teacher, your first lesson is completely free.",zhTW:"當您與導師報名四堂課時，第一堂課完全免費。",zhCN:"当您与导师报名四堂课时，第一堂课完全免费。"},
      p4_q:{en:"What is your cancellation policy?",zhTW:"取消政策是什麼？",zhCN:"取消政策是什么？"},
      p4_a:{en:"Lessons cancelled 24+ hours in advance receive a full refund. Cancellations within 24 hours receive a 50% refund.",zhTW:"課堂開始前24小時以上取消可獲全額退款。24小時內取消可獲50%退款。",zhCN:"课堂开始前24小时以上取消可获全额退款。24小时内取消可获50%退款。"},
      p5_q:{en:"What if I'm not satisfied with the teacher?",zhTW:"如果對導師不滿意怎麼辦？",zhCN:"如果对导师不满意怎么办？"},
      p5_a:{en:"You can switch teachers at any time with no penalty.",zhTW:"您可以隨時更換導師，無需罰款。",zhCN:"您可以随时更换导师，无需罚款。"},
      p6_q:{en:"How does online tutoring work?",zhTW:"網上補習如何運作？",zhCN:"网上补习如何运作？"},
      p6_a:{en:"Online lessons are conducted via video call (Zoom, Google Meet). All online lessons are covered by our escrow payment protection.",zhTW:"網上課堂通過視頻通話（Zoom、Google Meet）進行。所有網上課堂均受我們的託管付款保障。",zhCN:"网上课堂通过视频通话（Zoom、Google Meet）进行。所有网上课堂均受我们的托管付款保障。"},
      p7_q:{en:"What age groups do you serve?",zhTW:"您們服務哪些年齡組別？",zhCN:"你们服务哪些年龄组别？"},
      p7_a:{en:"We serve students from Primary 1 through to adults.",zhTW:"我們服務從小一到成人的學生。",zhCN:"我们服务从小一到成人的学生。"},
      p8_q:{en:"Can I switch teachers if needed?",zhTW:"我可以更換導師嗎？",zhCN:"我可以更换导师吗？"},
      p8_a:{en:"Absolutely. You're never locked into a single teacher.",zhTW:"當然可以。您無需鎖定單一導師。",zhCN:"当然可以。您无需锁定单一导师。"},
      t1_q:{en:"How much can I earn as a Minerva teacher?",zhTW:"作為Minerva導師我能賺多少錢？",zhCN:"作为Minerva导师我能赚多少钱？"},
      t1_a:{en:"You set your own rates based on your experience and specialization. Most teachers on Minerva charge HK$300-500/hour for academic subjects, and HK$280-450/hour for music and arts. Your earnings are direct — no hidden deductions beyond our transparent commission structure.",zhTW:"您根據自己的經驗和專業設定費用。Minerva上的大多數導師收取學術科目每小時HK$300-500，音樂和藝術每小時HK$280-450。您的收入直接結算——除了透明的佣金結構外，沒有隱藏扣款。",zhCN:"您根据自己的经验和专业设定费用。Minerva上的大多数导师收取学术科目每小时HK$300-500，音乐和艺术每小时HK$280-450。您的收入直接结算——除了透明的佣金结构外，没有隐藏扣款。"},
      t2_q:{en:"How do I get paid?",zhTW:"如何獲得報酬？",zhCN:"如何获得报酬？"},
      t2_a:{en:"Payments are processed through Stripe and released to your account within 3 business days after lesson completion. All payments are held securely in escrow until both you and the student confirm the lesson went ahead.",zhTW:"款項通過Stripe處理，在課堂完成後3個工作日內發放到您的帳戶。所有款項在您和學生確認課堂完成前都安全保存在託管中。",zhCN:"款项通过Stripe处理，在课堂完成后3个工作日内发放到您的帐户。所有款项在您和学生确认课堂完成前都安全保存在托管中。"},
      t3_a:{en:"If a student cancels within 24 hours, they receive a 50% refund and you keep 50% of the lesson fee as compensation.",zhTW:"如果學生在24小時內取消，他們會獲得50%退款，您則保留50%作為補償。",zhCN:"如果学生在24小时内取消，他们会获得50%退款，您则保留50%作为补偿。"},
      t3_q:{en:"What if a student cancels last minute?",zhTW:"如果學生最後一刻取消怎麼辦？",zhCN:"如果学生最后一刻取消怎么办？"},
      t4_q:{en:"Do I need to bring my own materials?",zhTW:"我需要自備教材嗎？",zhCN:"我需要自备教材吗？"},
      t4_a:{en:"Many teachers use their own materials. We also provide access to a shared resource library.",zhTW:"許多導師使用自己的教材。我們也提供共享資源庫的訪問權限。",zhCN:"许多导师使用自己的教材。我们也提供共享资源库的访问权限。"},
      t5_q:{en:"How does the 0% commission for first 4 classes work?",zhTW:"首四堂0%佣金如何運作？",zhCN:"首四堂0%佣金如何运作？"},
      t5_a:{en:"Your first four completed lessons have zero commission. You keep 100% of what parents pay.",zhTW:"您的前四堂已完成課堂免佣金。您可保留家長支付的100%款項。",zhCN:"您的首四堂已完成课堂免佣金。您可保留家长支付的100%款项。"},
      t6_q:{en:"What verification process do I need to complete?",zhTW:"我需要完成哪些驗證流程？",zhCN:"我需要完成哪些验证流程？"},
      t6_a:{en:"All teachers must complete: ID verification, qualification checks, reference verification, and a short interview.",zhTW:"所有導師必須完成：身份驗證、資歷核實、推薦人核實和短期面試。",zhCN:"所有导师必须完成：身份验证、资历核实、推荐人核实和短期面试。"},
      g1_q:{en:"Is my data protected?",zhTW:"我的資料受到保護嗎？",zhCN:"我的资料受到保护吗？"},
      g1_a:{en:"Yes. Minerva is fully compliant with Hong Kong's Personal Data (Privacy) Ordinance (PDPO).",zhTW:"是的。Minerva完全符合香港的《個人資料（私隱）條例》（PDPO）。",zhCN:"是的。Minerva完全符合香港的《个人资料（私隐）条例》（PDPO）。"},
      g2_q:{en:"What's your refund policy?",zhTW:"退款政策是什麼？",zhCN:"退款政策是什么？"},
      g2_a:{en:"Lessons cancelled 24+ hours in advance receive full refunds. Within 24 hours, 50% refund. Refunds processed within 5 business days.",zhTW:"課堂開始前24小時以上取消可獲全額退款。24小時內取消可獲50%退款。退款在5個工作日內處理。",zhCN:"课堂开始前24小时以上取消可获全额退款。24小时内取消可获50%退款。退款在5个工作日内处理。"},
      g3_q:{en:"Where does Minerva operate?",zhTW:"Minerva在哪裡營運？",zhCN:"Minerva在哪里营运？"},
      g3_a:{en:"We currently operate in Hong Kong, covering Hong Kong Island, Kowloon, and the New Territories.",zhTW:"我們目前在香港營運，覆蓋香港島、九龍和新界。",zhCN:"我们目前在香港营运，覆盖香港岛、九龙和新界。"},
      g4_q:{en:"How do I contact support?",zhTW:"如何聯繫客戶支援？",zhCN:"如何联系客户支援？"},
      g4_a:{en:"You can reach us via email at support@minerva.hk or WhatsApp.",zhTW:"您可以通過電郵support@minerva.hk或WhatsApp聯繫我們。",zhCN:"您可以通过电邮support@minerva.hk或WhatsApp联系我们。"},
      g5_q:{en:"What makes Minerva different from other tutoring platforms?",zhTW:"Minerva與其他補習平台有何不同？",zhCN:"Minerva与其他补习平台有何不同？"},
      g5_a:{en:"We're the first platform in Asia combining verified teachers, escrow payments, virtual scheduling, and AI-powered matching.",zhTW:"我們是亞洲首個結合已驗證導師、託管付款、虛擬預約和人工智能配對的平台。",zhCN:"我们是亚洲首个结合已验证导师、托管付款、虚拟预约和人工智能配对的平台。"},
      footer_question:{en:"Still have questions?",zhTW:"還有其他問題？",zhCN:"还有其他问题？"},
      contact_tagline:{en:"Our team is here to help you find the perfect learning solution.",zhTW:"我們的團隊隨時為您提供幫助，為您找到完美的學習方案。",zhCN:"我们的团队随时为您提供帮助，为您找到完美的学习方案。"},
      contact_support:{en:"Contact Support",zhTW:"聯絡支援",zhCN:"联络支援"},
      btn_for_parents:{en:"For Parents & Students",zhTW:"家長 / 學生",zhCN:"家长 / 学生"},
      btn_for_teachers:{en:"For Teachers",zhTW:"導師",zhCN:"导师"},
      btn_general:{en:"General",zhTW:"一般問題",zhCN:"一般问题"},
      link_contact:{en:"Contact Support",zhTW:"聯絡支援",zhCN:"联络支援"},
    },

    // ── Teachers ──
    teachers:{
      title:{en:"Our Teachers",zhTW:"我們的導師",zhCN:"我们的导师"},
      subtitle:{en:"Browse and book lessons with Hong Kong's top verified teachers",zhTW:"瀏覽並預訂香港頂尖已驗證導師的課堂",zhCN:"浏览并预订香港顶尖已验证导师的课堂"},
      back_link:{en:"← Back to Home",zhTW:"← 返回主頁",zhCN:"← 返回主页"},
      all_subjects:{en:"All Subjects",zhTW:"所有科目",zhCN:"所有科目"},
      try_filters:{en:"Try adjusting your filters",zhTW:"嘗試調整您的篩選條件",zhCN:"尝试调整您的筛选条件"},
      no_found:{en:"No teachers found",zhTW:"找不到導師",zhCN:"找不到导师"},
      footer_text:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。"}
    },


    // ── Privacy ──
    privacy:{
      title:{en:"Privacy Policy",zhTW:"隱私政策",zhCN:"隐私政策"},
      back_link:{en:"← Back to Minerva",zhTW:"← 返回Minerva",zhCN:"← 返回Minerva"},
      last_updated:{en:"Last updated: April 2026",zhTW:"最後更新：2026年4月",zhCN:"最后更新：2026年4月"},
      copyright:{en:"© 2026 Minerva Learning Ltd. All rights reserved. Registered in Hong Kong.",zhTW:"© 2026 Minerva Learning Ltd. 保留所有權利。於香港註冊。",zhCN:"© 2026 Minerva Learning Ltd. 保留所有权利。于香港注册。"},
      sec1_title:{en:"1. Information We Collect",zhTW:"1. 我們收集的資訊",zhCN:"1. 我们收集的信息"},
      sec2_title:{en:"2. Purpose of Collection",zhTW:"2. 收集目的",zhCN:"2. 收集目的"},
      sec3_title:{en:"3. Data Transfer & Sharing",zhTW:"3. 資料轉讓與共享",zhCN:"3. 资料转让与共享"},
      sec4_title:{en:"4. Cookies",zhTW:"4. Cookie 使用",zhCN:"4. Cookie 使用"},
      sec5_title:{en:"5. Data Retention",zhTW:"5. 資料保留",zhCN:"5. 资料保留"},
      sec6_title:{en:"6. Data Security",zhTW:"6. 資料安全",zhCN:"6. 资料安全"},
      sec7_title:{en:"7. Access & Correction Rights",zhTW:"7. 查閱及更正權利",zhCN:"7. 查阅及更正权利"},
      sec8_title:{en:"8. Changes to This Policy",zhTW:"8. 政策變更",zhCN:"8. 政策变更"},
      sec9_title:{en:"9. Contact Us",zhTW:"9. 聯絡我們",zhCN:"9. 联络我们"},
      p1:{en:"Minerva Learning Ltd. ('Minerva', 'we', 'us', or 'our') is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and protect information about users of our platform in accordance with the Personal Data (Privacy) Ordinance (Cap. 486) of Hong Kong ('PDPO').",zhTW:"Minerva Learning Ltd.（「Minerva」、「我們」或「我們的」）致力於保護您的個人資料。本隱私政策說明我們如何根據香港《個人資料（私隱）條例》（第486章）（「PDPO」）收集、使用、披露及保護平台用戶的資訊。",zhCN:"Minerva Learning Ltd.（「Minerva」、「我们」或「我们的」）致力于保护您的个人资料。本隐私政策说明我们如何根据香港《个人资料（私隐）条例》（第486章）（「PDPO」）收集、使用、披露及保护平台用户的信息。"},
      p2:{en:"We collect information you provide directly, including: name, email address, phone number, payment information, academic or teaching qualifications, background check data, and any other information you voluntarily submit during registration or use of our platform.",zhTW:"我們收集您直接提供的資訊，包括：姓名、電郵地址、電話號碼、付款資訊、學術或教學資歷背景調查資料，以及您在註冊或使用平台時自願提交的任何其他資訊。",zhCN:"我们收集您直接提供的信息，包括：姓名、电邮地址、电话号码、付款信息、学术或教学资历背景调查资料，以及您在注册或使用平台时自愿提交的任何其他信息。"},
      p3:{en:"We use your personal data to: provide and maintain our services; process payments through our escrow system; verify teacher qualifications; match students with suitable teachers; communicate with you about lessons and platform updates; and comply with legal obligations.",zhTW:"我們使用您的個人資料以：提供及維護我們的服務；通過託管系統處理付款；驗證導師資歷；為學生配對合適的導師；就課堂及平台更新與您溝通；以及遵守法律義務。",zhCN:"我们使用您的个人资料以：提供及维护我们的服务；通过托管系统处理付款；验证导师资历；为学生配对合适的导师；就课堂及平台更新与您沟通；以及遵守法律义务。"},
      p4:{en:"We do not sell your personal data. We may share your information with: teachers (relevant profile information only); service providers who process payments (Stripe) and verify qualifications; and law enforcement or regulators when required by law. All third parties are bound by confidentiality obligations.",zhTW:"我們不會出售您的個人資料。我們可能與以下人士共享您的資訊：導師（僅限相關個人資料）；處理付款（Stripe）及驗證資歷的服務提供商；以及法律或監管機構要求時的執法機關。所有第三方均受保密義務約束。",zhCN:"我们不会出售您的个人资料。我们可能与以下人士共享您的信息：导师（仅限相关个人资料）；处理付款（Stripe）及验证资历的服务提供商；以及法律或监管机构要求时的执法机关。所有第三方均受保密义务约束。"},
      p5:{en:"Our platform uses cookies to maintain session state and remember your language preference. We do not use tracking cookies or third-party advertising cookies. You may disable cookies through your browser settings, though this may affect some platform functionality.",zhTW:"我們的平台使用 cookie 來維護會話狀態及記住您的語言偏好。我們不使用追蹤 cookie 或第三方廣告 cookie。您可以通過瀏覽器設置禁用 cookie，但這可能影響平台的某些功能。",zhCN:"我们的平台使用 cookie 来维护会话状态及记住您的语言偏好。我们不使用追踪 cookie 或第三方广告 cookie。您可以通过浏览器设置禁用 cookie，但这可能影响平台的某些功能。"},
      p6:{en:"We retain your personal data for as long as your account is active or as needed to provide services. Account data may be retained for up to 7 years after account closure for legal compliance purposes. You may request deletion of your data at any time, subject to legal retention requirements.",zhTW:"我們會在您的帳戶活躍期間或提供服務所需時間內保留您的個人資料。帳戶資料可能在帳戶關閉後保留最多7年以符合法律合規要求。您可隨時要求刪除您的資料，惟須受法律保留要求所限。",zhCN:"我们会在您的帐户活跃期间或提供服务所需时间内保留您的个人资料。帐户资料可能在帐户关闭后保留最多7年以符合法律合规要求。您可随时要求删除您的资料，惟须受法律保留要求所限。"},
      p7:{en:"We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Payment data is processed via Stripe and Minerva does not store your full credit card details on our servers.",zhTW:"我們實施適當的技術及組織措施，以保護您的個人資料免受未經授權的訪問、更改、披露或銷毀。付款資料通過 Stripe 處理，Minerva 不會在我們的伺服器上儲存完整的信用卡資料。",zhCN:"我们实施适当的技术及组织措施，以保护您的个人资料免受未经授权的访问、更改、披露或销毁。付款资料通过 Stripe 处理，Minerva 不会在我们的服务器上存储完整的信用卡资料。"},
      p8:{en:"Under the PDPO, you have the right to request access to and correction of your personal data. To exercise these rights, please contact us at privacy@minerva.hk. We will respond to your request within 40 days as required by the PDPO.",zhTW:"根據 PDPO，您有權要求查閱及更正您的個人資料。如要行使這些權利，請通過 privacy@minerva.hk 聯絡我們。我們將按 PDPO 要求在40天內回覆您的請求。",zhCN:"根据 PDPO，您有权要求查阅及更正您的个人资料。如要行使这些权利，请通过 privacy@minerva.hk 联络我们。我们将按 PDPO 要求在40天内回复您的请求。"},
      p9:{en:"We may update this Privacy Policy from time to time. Any material changes will be communicated via email or a prominent notice on our platform. Continued use of our services after changes constitutes acceptance of the updated policy.",zhTW:"我們可能不時更新本隱私政策。任何重大變更將通過電郵或在我們平台上發布顯眼通知的方式告知。在收到變更通知後繼續使用我們的服務，即表示您接受更新後的政策的約束。",zhCN:"我们可能不时更新本隐私政策。任何重大变更将通过电邮或在我们平台上发布显眼通知的方式告知。在收到变更通知后继续使用我们的服务，即表示您接受更新后的政策的约束。"},
      p10:{en:"If you have questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer at privacy@minerva.hk.",zhTW:"如您對本隱私政策或我們的資料處理方式有任何疑問或疑慮，請通過 privacy@minerva.hk 聯絡我們的資料保護主任。",zhCN:"如您对本隐私政策或我们的资料处理方式有任何疑问或疑虑，请通过 privacy@minerva.hk 联络我们的资料保护主任。"},
    },


    // ── Terms ──
    terms:{
      title:{en:"Terms & Conditions",zhTW:"條款及細則",zhCN:"条款及细则"},
      back_link:{en:"← Back",zhTW:"← 返回",zhCN:"← 返回"},
      copyright:{en:"© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.",zhTW:"© 2026 Minerva Learning Ltd. 香港。保留所有權利。",zhCN:"© 2026 Minerva Learning Ltd. 香港。保留所有权利。"},
      p1:{en:"These Terms and Conditions ('Terms') govern your use of the Minerva platform and services operated by Minerva Learning Ltd. ('Minerva', 'we', 'us', or 'our'). By accessing or using our platform, you agree to be bound by these Terms.",zhTW:"這些條款及細則（「條款」）規管您對Minerva平台及Minerva Learning Ltd.（「Minerva」、「我們」或「我們的」）營運的服務的使用。訪問或使用我們的平台，即表示您同意受這些條款約束。",zhCN:"这些条款及细则（「条款」）规管您对Minerva平台及Minerva Learning Ltd.（「Minerva」、「我们」或「我们的」）营运的服务的使用。访问或使用我们的平台，即表示您同意受这些条款约束。"},
      p2:{en:"Minerva provides an online marketplace connecting parents and students ('Learners') with independent teachers ('Teachers'). Our platform facilitates lesson booking, scheduling, and payment processing through our escrow system.",zhTW:"Minerva提供一個連接家長和學生（「學習者」）與獨立導師（「導師」）的網上市場。我們的平台通過託管系統促進課堂預訂、預約和付款處理。",zhCN:"Minerva提供一个连接家长和学生（「学习者」）与独立导师（「导师」）的在线市场。我们的平台通过托管系统促进课堂预订、预约和付款处理。"},
      p3:{en:"To use Minerva, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials.",zhTW:"要使用Minerva，您必須註冊一個帳戶。您同意在註冊期間提供準確、最新和完整的資訊，並更新這些資訊以保持其準確性。您有責任維護帳戶憑證的機密性。",zhCN:"要使用Minerva，您必须注册一个帐户。您同意在注册期间提供准确、最新和完整的信息，并更新这些信息以保持其准确性。您有责任维护帐户凭证的机密性。"},
      p4:{en:"Minerva performs background checks on all teachers. However, you acknowledge that Minerva does not guarantee the accuracy of teacher qualifications or the quality of teaching. Any contracts or arrangements for lessons are solely between the Learner and the Teacher.",zhTW:"Minerva對所有導師進行背景調查。然而，您承認Minerva不保證導師資歷的準確性或教學質量。課堂的任何合約或安排僅在學習者和導師之間進行。",zhCN:"Minerva对所有导师进行背景调查。然而，您承认Minerva不保证导师资历的准确性或教学质量。课堂的任何合约或安排仅在学习者和导师之间进行。"},
      p5:{en:"Payments for lessons are processed through Minerva's escrow system. Funds are held in escrow until the lesson is confirmed as completed. Minerva deducts a commission fee (currently 15% for standard teachers) from the lesson fee.",zhTW:"課堂付款通過Minerva的託管系統處理。資金在課堂確認完成前保存在託管中。Minerva從課堂費用中扣除佣金費用（目前標準導師為15%）。",zhCN:"课堂付款通过Minerva的托管系统处理。资金在课堂确认完成前保存在托管中。Minerva从课堂费用中扣除佣金费用（目前标准导师为15%）。"},
      p6:{en:"Teachers are independent contractors, not employees of Minerva. Teachers are solely responsible for their own tax obligations, insurance, and legal compliance in their jurisdiction.",zhTW:"導師是獨立承包商，不是Minerva的員工。導師全權負責其所在司法管轄區的納稅義務、保險和法律合規。",zhCN:"导师是独立承包商，不是Minerva的员工。导师全权负责其所在司法管辖区的纳税义务、保险和法律合规。"},
      p7:{en:"Teachers agree not to conduct off-platform communication or transactions with Learners introduced through Minerva for a period of 12 months following their first introduction. Violation may result in account suspension and legal action.",zhTW:"導師同意不在通過Minerva首次介紹後的12個月內與學習者進行平台外交流或交易。違規可能導致帳戶暫停和法律行動。",zhCN:"导师同意不在通过Minerva首次介绍后的12个月内与学习者进行平台外交流或交易。违规可能导致帐户暂停和法律行动。"},
      p8:{en:"Cancellation more than 24 hours before a scheduled lesson will result in a full refund. Cancellations within 24 hours will result in a 50% refund, with the remaining 50% paid to the Teacher as compensation.",zhTW:"在預定課堂前24小時以上取消將獲得全額退款。24小時內取消將獲得50%退款，剩餘50%支付給導師作為補償。",zhCN:"在预定课堂前24小时以上取消将获得全额退款。24小时内取消将获得50%退款，剩余50%支付给导师作为补偿。"},
      p9:{en:"Minerva provides a dispute resolution process for lessons that are not delivered as agreed. Refunds may be issued from the escrow system at Minerva's discretion after investigation.",zhTW:"Minerva為未按約定交付的課堂提供爭議解決程序。在調查後，Minerva可酌情從託管系統發出退款。",zhCN:"Minerva为未按约定交付的课堂提供争议解决程序。在调查后，Minerva可酌情从托管系统发出退款。"},
      p10:{en:"Minerva is not liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our platform or services.",zhTW:"Minerva不對因使用我們的平台或服務而引起的任何間接、偶然、特殊、後果性或懲罰性損害賠償承擔責任。",zhCN:"Minerva不对因使用我们的平台或服务而引起的任何间接、偶然、特殊、后果性或惩罚性损害赔偿承担责任。"},
      sec10:{en:"Minerva reserves the right to modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the modified Terms.",zhTW:"Minerva保留隨時修改這些條款的權利。在更改後繼續使用平台即表示接受修改後的條款。",zhCN:"Minerva保留随时修改这些条款的权利。在更改后继续使用平台即表示接受修改后的条款。"},
      p11:{en:"These Terms are governed by the laws of Hong Kong. Any disputes shall be resolved in the courts of Hong Kong.",zhTW:"這些條款受香港法律管轄。任何爭議應在香港法院解決。",zhCN:"这些条款受香港法律管辖。任何争议应在香港法院解决。"},
      p12:{en:"By using Minerva, you agree to our collection and use of personal data in accordance with our Privacy Policy.",zhTW:"使用Minerva，即表示您同意根據我們的隱私政策收集和使用您的個人資料。",zhCN:"使用Minerva，即表示您同意根据我们的隐私政策收集和使用您的个人资料。"},
      p13:{en:"Minerva reserves the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.",zhTW:"Minerva保留暫停或終止違反這些條款或從事欺詐活動的帳戶的權利。",zhCN:"Minerva保留暂停或终止违反这些条款或从事欺诈活动的帐户的权利。"},
      p14:{en:"Teachers must complete our verification process including ID verification, qualification checks, and reference checks before offering lessons on the platform.",zhTW:"導師必須完成我們的驗證流程，包括身份驗證、資歷核實和推薦人核實，然後才能在平台上提供課堂。",zhCN:"导师必须完成我们的验证流程，包括身份验证、资历核实和推荐人核实，然后才能在平台上提供课堂。"},
      p15:{en:"All lessons conducted through Minerva are covered by our escrow payment protection. This means your payment is held securely until the lesson is completed.",zhTW:"通過Minerva進行的所有課堂均受我們的託管付款保障。這意味著您的付款在課堂完成前安全保管。",zhCN:"通过Minerva进行的所有课堂均受我们的托管付款保障。这意味着您的付款在课堂完成前安全保管。"},
      p16:{en:"Parents and students agree to treat all teachers with respect. Abusive behavior may result in account termination.",zhTW:"家長和學生同意尊重所有導師。虐待行為可能導致帳戶終止。",zhCN:"家长和学生同意尊重所有导师。虐待行为可能导致帐户终止。"},
      p17:{en:"Minerva promotes equal opportunities for all teachers regardless of race, religion, gender, or nationality.",zhTW:"Minerva促進所有導師的平等機會，無論種族、宗教、性別或國籍。",zhCN:"Minerva促进所有导师的平等机会，无论种族、宗教、性别或国籍。"},
      p18:{en:"For questions about these Terms, please contact us at support@minerva.hk",zhTW:"如對這些條款有任何疑問，請通過 support@minerva.hk 聯繫我們",zhCN:"如对这些条款有任何疑问，请通过 support@minerva.hk 联系我们"},
      p19:{en:"Last updated: January 2026",zhTW:"最後更新：2026年1月",zhCN:"最后更新：2026年1月"},
      p20:{en:"Minerva acts as a intermediary platform and is not responsible for the actions of teachers or students outside of platform transactions.",zhTW:"Minerva作為中間平台，對導師或學生在平台交易之外的行為不承擔責任。",zhCN:"Minerva作为中间平台，对导师或学生在平台交易之外的行为不承担责任。"},
      p21:{en:"The first lesson is free when you commit to four or more lessons with the same teacher.",zhTW:"當您與同一導師報名四堂或以上時，第一堂課免費。",zhCN:"当您与同一导师报名四堂或以上时，第一堂课免费。"},
      p22:{en:"Teachers offering their first four lessons on Minerva do so with 0% commission.",zhTW:"導師在Minerva上提供首四堂課的佣金為0%。",zhCN:"导师在Minerva上提供首四堂课的佣金为0%。"},
      p23:{en:"All teachers on Minerva are verified through a comprehensive process including government ID check, criminal record check, and reference verification.",zhTW:"Minerva上的所有導師都通過全面流程驗證，包括政府身份證檢查、犯罪記錄檢查和推薦人驗證。",zhCN:"Minerva上的所有导师都通过全面流程验证，包括政府身份证检查、犯罪记录检查和推荐人验证。"},
      p24:{en:"Minerva is committed to protecting the personal data of all users in accordance with Hong Kong's Personal Data (Privacy) Ordinance.",zhTW:"Minerva致力於按照香港的《個人資料（私隱）條例》保護所有用戶的個人資料。",zhCN:"Minerva致力于按照香港的《个人资料（私隐）条例》保护所有用户的个人资料。"},
      p25:{en:"Teachers must maintain accurate availability calendars and promptly update their schedules to reflect any changes.",zhTW:"導師必須維護準確的可用日曆，並及時更新他們的時間表以反映任何更改。",zhCN:"导师必须维护准确的可用日历，并及时更新他们的时间表以反映任何更改。"},
      p26:{en:"Payment disputes must be raised within 48 hours of the scheduled lesson time.",zhTW:"付款爭議必須在預定課堂時間後48小時內提出。",zhCN:"付款争议必须在预定课堂时间后48小时内提出。"},
      p27:{en:"Minerva reserves the right to change commission rates with 30 days notice to teachers.",zhTW:"Minerva保留以30天通知更改佣金率的權利。",zhCN:"Minerva保留以30天通知更改佣金率的权利。"},
      p28:{en:"Teachers are prohibited from sharing personal contact information on the platform.",zhTW:"導師不得在平台上分享個人聯繫資訊。",zhCN:"导师不得在平台上分享个人联系信息。"},
      p29:{en:"By completing registration, you confirm that you are at least 18 years of age.",zhTW:"完成註冊即表示您確認您已年滿18歲。",zhCN:"完成注册即表示您确认您已年满18岁。"},
      p30:{en:"These Terms constitute the entire agreement between you and Minerva regarding your use of the platform.",zhTW:"這些條款構成您與Minerva之間關於您使用平台的完整協議。",zhCN:"这些条款构成您与Minerva之间关于您使用平台的完整协议。"}
    }
  };

  let lang = 'en';

  window.T = T;

  window.setLang = function(l) {
    lang = l;
    localStorage.setItem('minerva_lang', lang);
    const url = new URL(location.href);
    // Normalize: zh-TW → zhTW, zh-CN → zhCN
    const normalized = l.replace('-','');
    url.searchParams.set('lang', l);
    history.replaceState({}, '', url);
    apply();
  };

  window.getLang = function() { return lang; };

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      let v = T;
      const k = el.getAttribute('data-i18n');
      if (!k) return;
      k.split('.').forEach(function(x) { v = v && v[x]; });
      if (v && v[lang]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = v[lang];
        } else {
          el.textContent = v[lang];
        }
      }
    });
    // Update language toggle active states
    document.querySelectorAll('.lang-btn').forEach(function(b) {
      const href = b.getAttribute('href');
      if (href) {
        const isActive = href.includes('lang=' + lang) ||
                         (lang === 'en' && href.includes('lang=en')) ||
                         (lang === 'zhTW' && (href.includes('lang=zh-TW') || href.includes('lang=zhTW'))) ||
                         (lang === 'zhCN' && (href.includes('lang=zh-CN') || href.includes('lang=zhCN')));
        b.classList.toggle('active', isActive);
      }
    });
  }

  // Init on page load
  function init() {
    const p = new URLSearchParams(location.search);
    const u = p.get('lang');
    const s = localStorage.getItem('minerva_lang');
    if (u) {
      // Normalize URL param: zh-TW → zhTW, zh-CN → zhCN
      const norm = u.replace('-','');
      if (['en','zhTW','zhCN'].includes(norm)) setLang(norm);
      else if (['en','zhTW','zhCN'].includes(u)) setLang(u);
    } else if (s && ['en','zhTW','zhCN'].includes(s)) {
      setLang(s);
    }
    // Set up language toggle click handlers (one-time)
    document.querySelectorAll('.lang-btn').forEach(function(b) {
      b.addEventListener('click', function(e) {
        const href = b.getAttribute('href');
        if (!href) return;
        const langMatch = href.match(/lang=([^&]+)/);
        if (langMatch) {
          e.preventDefault();
          setLang(langMatch[1]);
        }
      });
    });
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
