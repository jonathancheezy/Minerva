#!/bin/bash
# Daily Minerva site audit — runs at 8am HKT (0:00 UTC)
cd /home/jonat/.openclaw/workspace/minerva-git

REPORT="/home/jonat/.openclaw/workspace/memory/audit-$(date +%Y-%m-%d).txt"
echo "=== Minerva Daily Audit: $(date '+%Y-%m-%d %H:%M UTC') ===" > "$REPORT"
echo "" >> "$REPORT"

# 1. Check all pages for orphan JS before DOCTYPE
echo "--- ORPHAN JS CHECK ---" >> "$REPORT"
ISSUES=0
for f in *.html; do
  FIRST=$(head -1 "$f")
  SECOND=$(head -2 "$f" | tail -1)
  if [[ "$FIRST" != "<!DOCTYPE"* ]] || [[ "$SECOND" == *"<script"* ]]; then
    echo "ISSUE: $f" >> "$REPORT"
    ISSUES=$((ISSUES+1))
  fi
done
if [[ $ISSUES -eq 0 ]]; then
  echo "PASS: No orphan JS found" >> "$REPORT"
fi

# 2. Quick check for missing mobile-menu-btn on pages that need it
echo "" >> "$REPORT"
echo "--- MOBILE MENU CHECK ---" >> "$REPORT"
for f in admin_dashboard.html earnings.html faq.html messages.html parent_dashboard.html parent_schedule.html reviews.html student_dashboard.html teacher_dashboard.html teacher_profile.html teacher_schedule.html; do
  if ! grep -q "mobile-menu-btn" "$f" 2>/dev/null; then
    echo "MISSING hamburger: $f" >> "$REPORT"
  fi
done
echo "Check complete" >> "$REPORT"

echo "" >> "$REPORT"
echo "Audit saved to: $REPORT"
