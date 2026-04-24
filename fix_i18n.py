#!/usr/bin/env python3
"""Fix missing i18n keys in i18n.js"""

with open('i18n.js', 'r') as f:
    content = f.read()

# Helper: add key to a section
def add_key(content, section, key, en_val, zhtw_val, zhen_val):
    # Find the section end
    section_start = content.find(f'{section}:{{')
    if section_start == -1:
        print(f"Section {section} not found!")
        return content
    
    # Find the end of this section (next top-level key or end of T)
    search_start = section_start + len(f'{section}:{{')
    # Look for the section's closing brace
    brace_count = 1
    pos = search_start
    while brace_count > 0 and pos < len(content):
        if content[pos] == '{':
            brace_count += 1
        elif content[pos] == '}':
            brace_count -= 1
        pos += 1
    section_end = pos - 1  # position of closing }
    
    # Build the new entry
    new_entry = f'\n      {key}:{{en:"{en_val}",zhTW:"{zhtw_val}",zhCN:"{zhen_val}"}},'
    
    # Check if key already exists in section
    section_content = content[section_start:section_end+1]
    if f'{key}:{{' in section_content:
        return content  # Already exists
    
    # Insert before the last }, of the section
    insert_pos = section_end - 1  # before the }
    # Find the last key's comma and insert after it
    last_comma = content.rfind(',', section_start, section_end)
    if last_comma != -1 and last_comma > section_start:
        content = content[:last_comma+1] + new_entry + content[last_comma+1:]
        print(f"Added {section}.{key}")
    else:
        print(f"Could not find insertion point for {section}.{key}")
    
    return content

# admin_dash missing keys
content = add_key(content, 'admin_dash', 'btn_review', 'Review', '審核', '审核')
content = add_key(content, 'admin_dash', 'btn_view', 'View', '查看', '查看')
content = add_key(content, 'admin_dash', 'heading_admin_dash', 'Admin Dashboard', '管理員儀表板', '管理员仪表板')
content = add_key(content, 'admin_dash', 'heading_recent_students', 'Recent Students', '最近學生', '最近学生')
content = add_key(content, 'admin_dash', 'status_active', 'Active', '活躍', '活跃')
content = add_key(content, 'admin_dash', 'status_completed', 'Completed', '已完成', '已完成')
content = add_key(content, 'admin_dash', 'status_new', 'New', '新', '新')
content = add_key(content, 'admin_dash', 'status_pending', 'Pending', '待處理', '待处理')
content = add_key(content, 'admin_dash', 'status_scheduled', 'Scheduled', '已預訂', '已预订')

# login missing keys (login section, not admin section)
content = add_key(content, 'login', 'no_account', "Don't have an account?", "還沒有帳戶？", "还没有帐户？")

# parent_dash missing keys
content = add_key(content, 'parent_dash', 'footer_text', '© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.', '© 2026 Minerva Learning Ltd. 香港。保留所有權利。', '© 2026 Minerva Learning Ltd. 香港。保留所有权利。')
content = add_key(content, 'parent_dash', 'heading_signup_bonus', 'Signup Bonus', '報名獎勵', '报名奖励')
content = add_key(content, 'parent_dash', 'heading_upcoming_lessons', 'Upcoming Lessons', '即將到來的課堂', '即将到来的课堂')
content = add_key(content, 'parent_dash', 'heading_your_teachers', 'Your Teachers', '您的導師', '您的导师')

# schedule missing keys
content = add_key(content, 'schedule', 'btn_book_new', 'Book New Lesson', '預訂新課堂', '预订新课堂')
content = add_key(content, 'schedule', 'btn_cancel', 'Cancel', '取消', '取消')
content = add_key(content, 'schedule', 'btn_confirm_booking', 'Confirm Booking', '確認預訂', '确认预订')
content = add_key(content, 'schedule', 'nav_next', 'Next', '下一個', '下一个')
content = add_key(content, 'schedule', 'nav_prev', 'Previous', '上一個', '上一个')
content = add_key(content, 'schedule', 'step1_select_teacher', 'Step 1: Select Teacher', '第一步：選擇導師', '第一步：选择导师')
content = add_key(content, 'schedule', 'step2_select_date', 'Step 2: Select Date', '第二步：選擇日期', '第二步：选择日期')
content = add_key(content, 'schedule', 'step3_select_time', 'Step 3: Select Time', '第三步：選擇時間', '第三步：选择时间')
content = add_key(content, 'schedule', 'tab_history', 'History', '歷史', '历史')
content = add_key(content, 'schedule', 'tab_upcoming', 'Upcoming', '即將到來', '即将到来')

# profile missing keys
content = add_key(content, 'profile', 'btn_change_photo', 'Change Photo', '更換照片', '更换照片')
content = add_key(content, 'profile', 'btn_delete_forever', 'Delete Forever', '永久刪除', '永久删除')
content = add_key(content, 'profile', 'btn_discard_leave', 'Discard & Leave', '放棄並離開', '放弃并离开')
content = add_key(content, 'profile', 'btn_keep_account', 'Keep Account', '保留帳戶', '保留帐户')
content = add_key(content, 'profile', 'btn_keep_editing', 'Keep Editing', '繼續編輯', '继续编辑')
content = add_key(content, 'profile', 'btn_save_changes', 'Save Changes', '儲存更改', '储存更改')
content = add_key(content, 'profile', 'heading_delete_account', 'Delete Account', '刪除帳戶', '删除帐户')
content = add_key(content, 'profile', 'heading_discard_changes', 'Discard Changes?', '放棄更改？', '放弃更改？')

# teacher_schedule missing keys
content = add_key(content, 'schedule', 'btn_add_slot', 'Add Time Slot', '添加時段', '添加时段')
content = add_key(content, 'schedule', 'heading_add_availability', 'Add Availability', '添加可用時間', '添加可用时间')
content = add_key(content, 'schedule', 'heading_monthly_calendar', 'Monthly Calendar', '月度日曆', '月度日历')
content = add_key(content, 'schedule', 'heading_my_schedule', 'My Schedule', '我的時間表', '我的时间表')
content = add_key(content, 'schedule', 'heading_upcoming_bookings', 'Upcoming Bookings', '即將到來的預訂', '即将到来的预订')
content = add_key(content, 'schedule', 'label_date', 'Date', '日期', '日期')
content = add_key(content, 'schedule', 'label_end_time', 'End Time', '結束時間', '结束时间')
content = add_key(content, 'schedule', 'label_repeat', 'Repeat', '重複', '重复')
content = add_key(content, 'schedule', 'label_start_time', 'Start Time', '開始時間', '开始时间')

# teachers missing keys
content = add_key(content, 'teachers', 'error_load', 'Failed to load teachers. Please try again.', '無法載入導師，請重試。', '无法载入导师，请重试。')
content = add_key(content, 'teachers', 'heading_title', 'Find Your Perfect Teacher', '尋找您的理想導師', '寻找您的理想导师')

# terms missing keys (comprehensive)
terms_keys = {
    'collect_for': ('Collects information for', '收集信息用于', '收集信息用于'),
    'data_used_for': ('Data used for', '資料用於', '资料用于'),
    'last_updated': ('Last Updated', '最後更新', '最后更新'),
    'lessons_conducted': ('Lessons conducted', '進行的課堂', '进行的课堂'),
    'pdpo_rights': ('Your PDPO Rights', '您的《個人資料（私隱）條例》權利', '您的《个人资料（私隐）条例》权利'),
    'questions': ('Questions?', '有問題？', '有问题？'),
    'sec1': ('Introduction', '簡介', '简介'),
    'sec10_heading': ('Minerva Platform', 'Minerva 平台', 'Minerva 平台'),
    'sec11': ('Teacher Responsibilities', '導師責任', '导师责任'),
    'sec12': ('Platform Fees & Commission', '平台費用與佣金', '平台费用与佣金'),
    'sec13': ('Payment Terms', '付款條款', '付款条款'),
    'sec14': ('Dispute Resolution', '爭議解決', '争议解决'),
    'sec14_1': ('For Parents', '給家長', '给家长'),
    'sec14_2': ('For Teachers', '給導師', '给导师'),
    'sec14_3': ('Evidence', '證據', '证据'),
    'sec14_4': ('Decision', '決定', '决定'),
    'sec14_5': ('Appeal', '上訴', '上诉'),
    'sec14_6': ('Escalation', '升級', '升级'),
    'sec14_7': ('Excluded Disputes', '不包括的爭議', '不包括的争议'),
    'sec15': ('Indemnification', '賠償', '赔偿'),
    'sec16': ('Limitation of Liability', '責任限制', '责任限制'),
    'sec17': ('Termination', '終止', '终止'),
    'sec18': ('Governing Law', '適用法律', '适用法律'),
    'sec19': ('Entire Agreement', '完整協議', '完整协议'),
    'sec2': ('Eligibility', '資格', '资格'),
    'sec20': ('Amendments', '修訂', '修订'),
    'sec21': ('Contact', '聯繫', '联系'),
    'sec3': ('Services', '服務', '服务'),
    'sec4': ('User Accounts', '用戶帳戶', '用户帐户'),
    'sec4_1': ('Parents & Students', '家長與學生', '家长与学生'),
    'sec4_2': ('Teachers', '導師', '导师'),
    'sec5': ('Booking & Lessons', '預訂與課堂', '预订与课堂'),
    'sec5_1': ('Scheduling', '預約', '预约'),
    'sec5_2': ('Lesson Format', '課堂形式', '课堂形式'),
    'sec5_3': ('Cancellations', '取消', '取消'),
    'sec5_4': ('Refunds', '退款', '退款'),
    'sec6': ('Payments & Pricing', '付款與定價', '付款与定价'),
    'sec7': ('Minerva Verification', 'Minerva 驗證', 'Minerva 验证'),
    'sec7_1': ('For Teachers', '給導師', '给导师'),
    'sec7_2': ('For Parents', '給家長', '给家长'),
    'sec8': ('Data & Privacy', '資料與私隱', '资料与隐私'),
    'sec9': ('Minerva Guarantee', 'Minerva 保證', 'Minerva 保证'),
    'users_must_not': ('Users must not', '用戶不得', '用户不得'),
}
for key, (en, zhtw, zhen) in terms_keys.items():
    content = add_key(content, 'terms', key, en, zhtw, zhen)

with open('i18n.js', 'w') as f:
    f.write(content)

print("\nDone adding all missing keys!")
