#!/bin/bash
# Minerva Daily Audit - v3 (fixed nav CSS hash with Python)
# Run: 0 0 * * * /home/jonat/.openclaw/workspace/minerva-git/daily-audit.sh

LOG="/home/jonat/.openclaw/workspace/memory/audit-$(date +%Y-%m-%d).txt"
cd /home/jonat/.openclaw/workspace/minerva-git

echo "=== Minerva Daily Audit: $(date -u +%Y-%m-%d) $(date -u +%H:%M) UTC ===" > "$LOG"
echo "" >> "$LOG"

PAGES="teacher_dashboard.html teacher_schedule.html student_dashboard.html messages.html reviews.html earnings.html admin_dashboard.html parent_dashboard.html parent_schedule.html teacher_login.html teacher_profile.html"

echo "--- ORPHAN JS CHECK ---" >> "$LOG"
for page in $PAGES; do
    [ -f "$page" ] || continue
    before=$(awk '/<!DOCTYPE/{exit} /<script/{print; exit}' "$page" | grep -c "<script>")
    if [ "$before" -gt 0 ]; then
        echo "FAIL: $page - orphan JS found" >> "$LOG"
    else
        echo "PASS: $page - no orphan JS" >> "$LOG"
    fi
done
echo "" >> "$LOG"

echo "--- EMPTY DATA-I18N CHECK ---" >> "$LOG"
for page in $PAGES; do
    [ -f "$page" ] || continue
    empty=$(grep -c 'data-i18n=""' "$page" 2>/dev/null)
    if [ "$empty" -gt 0 ]; then
        echo "FAIL: $page - has $empty empty data-i18n" >> "$LOG"
    else
        echo "PASS: $page - no empty data-i18n" >> "$LOG"
    fi
done
echo "" >> "$LOG"

echo "--- HAMBURGER SELF-LINK CHECK ---" >> "$LOG"
for page in $PAGES; do
    [ -f "$page" ] || continue
    basename="${page%.html}"
    
    if [ "$basename" = "teacher_dashboard" ]; then
        has_active=$(grep -c 'href="#" class="active"' "$page" 2>/dev/null)
        [ "$has_active" -gt 0 ] && echo "PASS: $page - Dashboard active link correct" >> "$LOG" || echo "FAIL: $page - Dashboard active link missing" >> "$LOG"
    elif [ "$basename" = "student_dashboard" ]; then
        has_students=$(grep -c 'href="student_dashboard.html"' "$page" 2>/dev/null)
        [ "$has_students" -eq 0 ] && echo "PASS: $page - no self-referencing link" >> "$LOG" || echo "FAIL: $page - has self-referencing Students link" >> "$LOG"
    else
        self_link=$(grep -c "href=\"${page}\"" "$page" 2>/dev/null)
        [ "$self_link" -eq 0 ] && echo "PASS: $page - no self-referencing link" >> "$LOG" || echo "FAIL: $page - has self-referencing link in hamburger" >> "$LOG"
    fi
done
echo "" >> "$LOG"

echo "--- VIEWPORT META CHECK ---" >> "$LOG"
for page in $PAGES; do
    [ -f "$page" ] || continue
    has=$(grep -c 'name="viewport"' "$page" 2>/dev/null)
    [ "$has" -gt 0 ] && echo "PASS: $page - has viewport meta" >> "$LOG" || echo "FAIL: $page - missing viewport meta" >> "$LOG"
done
echo "" >> "$LOG"

echo "--- NAV CSS CONSISTENCY CHECK (Python hash) ---" >> "$LOG"
nav_hash=$(python3 -c "
import hashlib
with open('messages.html', 'rb') as f:
    src = f.read()
start = src.find(b'/* Nav */')
end = src.find(b'/* Main Content */')
print(hashlib.sha256(src[start:end]).hexdigest()[:8])
")
echo "Reference nav CSS hash (messages.html): $nav_hash" >> "$LOG"

for page in teacher_dashboard.html teacher_schedule.html student_dashboard.html reviews.html earnings.html; do
    [ -f "$page" ] || continue
    page_hash=$(python3 -c "
import hashlib
with open('$page', 'rb') as f:
    src = f.read()
start = src.find(b'/* Nav */')
end = src.find(b'/* Main Content */')
print(hashlib.sha256(src[start:end]).hexdigest()[:8])
" 2>/dev/null)
    
    if [ "$page_hash" = "$nav_hash" ]; then
        echo "PASS: $page - nav CSS matches reference" >> "$LOG"
    else
        echo "WARN: $page - nav CSS differs from reference (hash: $page_hash vs $nav_hash)" >> "$LOG"
    fi
done
echo "" >> "$LOG"

echo "--- COMPLETE ---" >> "$LOG"

# Copy to latest
cp "$LOG" /home/jonat/.openclaw/workspace/memory/audit-latest.txt

# Print summary
echo "Audit complete. Summary:"
grep "^FAIL:\|^WARN:" "$LOG" | head -20 || echo "No failures"
echo ""
echo "Full report: $LOG"
