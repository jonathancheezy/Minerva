#!/usr/bin/env python3
"""Fix i18n.js by adding missing keys - single pass per section."""
import re

with open('i18n.js', 'r') as f:
    text = f.read()

lines = text.split('\n')

keys_to_add = {
    'admin_dash': [
        ('btn_review', 'Review', '審核', '审核'),
        ('btn_view', 'View', '查看', '查看'),
        ('heading_admin_dash', 'Admin Dashboard', '管理員儀表板', '管理员仪表板'),
        ('heading_recent_students', 'Recent Students', '最近學生', '最近学生'),
        ('status_active', 'Active', '活躍', '活跃'),
        ('status_completed', 'Completed', '已完成', '已完成'),
        ('status_new', 'New', '新', '新'),
        ('status_pending', 'Pending', '待處理', '待处理'),
        ('status_scheduled', 'Scheduled', '已預訂', '已预订'),
        ('nav_students', 'Students', '學生', '学生'),
    ],
    'login': [
        ('no_account', "Don't have an account?", "還沒有帳戶？", "还没有帐户？"),
    ],
    'parent_dash': [
        ('footer_text', '© 2026 Minerva Learning Ltd. Hong Kong. All rights reserved.', '© 2026 Minerva Learning Ltd. 香港。保留所有權利。', '© 2026 Minerva Learning Ltd. 香港。保留所有权利。'),
        ('heading_signup_bonus', 'Signup Bonus', '報名獎勵', '报名奖励'),
        ('heading_upcoming_lessons', 'Upcoming Lessons', '即將到來的課堂', '即将到来的课堂'),
        ('heading_your_teachers', 'Your Teachers', '您的導師', '您的导师'),
        ('view_all', 'View All', '查看全部', '查看全部'),
    ],
    'schedule': [
        ('btn_book_new', 'Book New Lesson', '預訂新課堂', '预订新课堂'),
        ('btn_cancel', 'Cancel', '取消', '取消'),
        ('btn_confirm_booking', 'Confirm Booking', '確認預訂', '确认预订'),
        ('nav_next', 'Next', '下一個', '下一个'),
        ('nav_prev', 'Previous', '上一個', '上一个'),
        ('step1_select_teacher', 'Step 1: Select Teacher', '第一步：選擇導師', '第一步：选择导师'),
        ('step2_select_date', 'Step 2: Select Date', '第二步：選擇日期', '第二步：选择日期'),
        ('step3_select_time', 'Step 3: Select Time', '第三步：選擇時間', '第三步：选择时间'),
        ('tab_history', 'History', '歷史', '历史'),
        ('tab_upcoming', 'Upcoming', '即將到來', '即将到来'),
        ('btn_add_slot', 'Add Time Slot', '添加時段', '添加时段'),
        ('heading_add_availability', 'Add Availability', '添加可用時間', '添加可用时间'),
        ('heading_monthly_calendar', 'Monthly Calendar', '月度日曆', '月度日历'),
        ('heading_my_schedule', 'My Schedule', '我的時間表', '我的时间表'),
        ('heading_upcoming_bookings', 'Upcoming Bookings', '即將到來的預訂', '即将到来的预订'),
        ('label_date', 'Date', '日期', '日期'),
        ('label_end_time', 'End Time', '結束時間', '结束时间'),
        ('label_repeat', 'Repeat', '重複', '重复'),
        ('label_start_time', 'Start Time', '開始時間', '开始时间'),
        ('rating', 'Rating', '評分', '评分'),
    ],
    'profile': [
        ('btn_change_photo', 'Change Photo', '更換照片', '更换照片'),
        ('btn_delete_forever', 'Delete Forever', '永久刪除', '永久删除'),
        ('btn_discard_leave', 'Discard & Leave', '放棄並離開', '放弃并离开'),
        ('btn_keep_account', 'Keep Account', '保留帳戶', '保留帐户'),
        ('btn_keep_editing', 'Keep Editing', '繼續編輯', '继续编辑'),
        ('btn_save_changes', 'Save Changes', '儲存更改', '储存更改'),
        ('heading_delete_account', 'Delete Account', '刪除帳戶', '删除帐户'),
        ('heading_discard_changes', 'Discard Changes?', '放棄更改？', '放弃更改？'),
        ('delete_account', 'Delete Account', '刪除帳戶', '删除帐户'),
    ],
    'teachers': [
        ('error_load', 'Failed to load teachers. Please try again.', '無法載入導師，請重試。', '无法载入导师，请重试。'),
        ('heading_title', 'Find Your Perfect Teacher', '尋找您的理想導師', '寻找您的理想导师'),
    ],
    'terms': [
        ('collect_for', 'Collects information for', '收集信息用于', '收集信息用于'),
        ('data_used_for', 'Data used for', '資料用於', '资料用于'),
        ('last_updated', 'Last Updated', '最後更新', '最后更新'),
        ('lessons_conducted', 'Lessons conducted', '進行的課堂', '进行的课堂'),
        ('pdpo_rights', 'Your PDPO Rights', '您的《個人資料（私隱）條例》權利', '您的《个人资料（私隐）条例》权利'),
        ('questions', 'Questions?', '有問題？', '有问题？'),
        ('sec1', 'Introduction', '簡介', '简介'),
        ('sec10_heading', 'Minerva Platform', 'Minerva 平台', 'Minerva 平台'),
        ('sec11', 'Teacher Responsibilities', '導師責任', '导师责任'),
        ('sec12', 'Platform Fees & Commission', '平台費用與佣金', '平台费用与佣金'),
        ('sec13', 'Payment Terms', '付款條款', '付款条款'),
        ('sec14', 'Dispute Resolution', '爭議解決', '争议解决'),
        ('sec14_1', 'For Parents', '給家長', '给家长'),
        ('sec14_2', 'For Teachers', '給導師', '给导师'),
        ('sec14_3', 'Evidence', '證據', '证据'),
        ('sec14_4', 'Decision', '決定', '决定'),
        ('sec14_5', 'Appeal', '上訴', '上诉'),
        ('sec14_6', 'Escalation', '升級', '升级'),
        ('sec14_7', 'Excluded Disputes', '不包括的爭議', '不包括的争议'),
        ('sec15', 'Indemnification', '賠償', '赔偿'),
        ('sec16', 'Limitation of Liability', '責任限制', '责任限制'),
        ('sec17', 'Termination', '終止', '终止'),
        ('sec18', 'Governing Law', '適用法律', '适用法律'),
        ('sec19', 'Entire Agreement', '完整協議', '完整协议'),
        ('sec2', 'Eligibility', '資格', '资格'),
        ('sec20', 'Amendments', '修訂', '修订'),
        ('sec21', 'Contact', '聯繫', '联系'),
        ('sec3', 'Services', '服務', '服务'),
        ('sec4', 'User Accounts', '用戶帳戶', '用户帐户'),
        ('sec4_1', 'Parents & Students', '家長與學生', '家长与学生'),
        ('sec4_2', 'Teachers', '導師', '导师'),
        ('sec5', 'Booking & Lessons', '預訂與課堂', '预订与课堂'),
        ('sec5_1', 'Scheduling', '預約', '预约'),
        ('sec5_2', 'Lesson Format', '課堂形式', '课堂形式'),
        ('sec5_3', 'Cancellations', '取消', '取消'),
        ('sec5_4', 'Refunds', '退款', '退款'),
        ('sec6', 'Payments & Pricing', '付款與定價', '付款与定价'),
        ('sec7', 'Minerva Verification', 'Minerva 驗證', 'Minerva 验证'),
        ('sec7_1', 'For Teachers', '給導師', '给导师'),
        ('sec7_2', 'For Parents', '給家長', '给家长'),
        ('sec8', 'Data & Privacy', '資料與私隱', '资料与隐私'),
        ('sec9', 'Minerva Guarantee', 'Minerva 保證', 'Minerva 保证'),
        ('users_must_not', 'Users must not', '用戶不得', '用户不得'),
    ],
}

# Build new text by processing each section
# Strategy: for each section we want to modify, find the section's closing brace
# and insert new keys before it, all in the original text string

result = text
for sec_name, new_keys in keys_to_add.items():
    # Find the section
    sec_pattern = re.compile(r'^    ' + sec_name + r':\{', re.MULTILINE)
    m = sec_pattern.search(result)
    if not m:
        print(f"Section {sec_name} NOT FOUND!")
        continue
    
    sec_start = m.start()
    # Find the section's closing } at depth 1
    # After sec_start, we have "sec_name:{"
    # We need to find the matching }
    depth = 1
    pos = m.end()
    while depth > 0 and pos < len(result):
        if result[pos] == '{':
            depth += 1
        elif result[pos] == '}':
            depth -= 1
        pos += 1
    
    # The closing brace is at pos-1
    # We want to insert new keys just before the last key's comma, not before the }
    # Actually, easier: find the last key entry's comma
    # Look for pattern: key:{...}, followed eventually by }
    # Find all key positions between sec_start and pos
    # The last one before the closing } is what we want
    
    # Find the last key: value ending (comma at the right depth)
    # Search backwards from pos-1 for a comma at depth=1
    search_end = pos - 1
    last_comma = -1
    depth = 0
    for i in range(search_end - 1, sec_start, -1):
        c = result[i]
        if c == '}':
            depth += 1
        elif c == '{':
            if depth > 0:
                depth -= 1
            else:
                # Found a { that's not depth-bounded = section header
                break
        elif c == ',' and depth == 1:
            # Check this is at the end of a key entry (followed by \n and some indent then })
            after = result[i+1:i+5]
            if after.replace('\n','').replace(' ','').replace('\t','') == '':
                last_comma = i
                break
    
    if last_comma < 0:
        print(f"Can't find last key comma for {sec_name}")
        continue
    
    # Build the insertion text
    indent = '      '
    insert = ''
    for key, en, zhtw, zhen in new_keys:
        insert += indent + key + ':{en:"' + en + '",zhTW:"' + zhtw + '",zhCN:"' + zhen + '"},\n'
    
    result = result[:last_comma + 1] + '\n' + insert + result[last_comma + 1:]
    print(f"Added {len(new_keys)} keys to {sec_name}")

with open('i18n.js', 'w') as f:
    f.write(result)

print("\nAll done!")
