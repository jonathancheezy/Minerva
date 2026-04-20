#!/bin/bash
# Minerva Daily Audit - Expanded v2
# Run: 0 0 * * * /home/jonat/.openclaw/workspace/minerva-git/daily-audit.sh

LOG="/home/jonat/.openclaw/workspace/memory/audit-$(date +%Y-%m-%d).txt"
cd /home/jonat/.openclaw/workspace/minerva-git

echo "=== Minerva Daily Audit: $(date -u +%Y-%m-%d) $(date -u +%H:%M) UTC ===" > "$LOG"
echo "" >> "$LOG"

# Pages to check
PAGES="teacher_dashboard.html teacher_schedule.html student_dashboard.html messages.html reviews.html earnings.html admin_dashboard.html parent_dashboard.html parent_schedule.html teacher_login.html teacher_profile.html"

echo "--- ORPHAN JS CHECK ---" >> "$LOG"
for page in $PAGES; do
    if [ -f "$page" ]; then
        # Check for <script> before <!DOCTYPE
        before_doctype=$(awk '/<!DOCTYPE/{exit} /<script/{print FILENAME": line "NR": "<script> before DOCTYPE"; exit}' "$page" 2>/dev/null)
        if [ -n "$before_doctype" ]; then
            echo "FAIL: $before_doctype" >> "$LOG"
        else
            echo "PASS: $page - no orphan JS" >> "$LOG"
        fi
    fi
done
echo "" >> "$LOG"

echo "--- EMPTY DATA-I18N CHECK ---" >> "$LOG"
for page in $PAGES; do
    if [ -f "$page" ]; then
        empty=$(grep -n 'data-i18n=""' "$page" 2>/dev/null | head -3)
        if [ -n "$empty" ]; then
            echo "FAIL: $page has empty data-i18n: $empty" >> "$LOG"
        else
            echo "PASS: $page - no empty data-i18n" >> "$LOG"
        fi
    fi
done
echo "" >> "$LOG"

echo "--- HAMBURGER SELF-LINK CHECK ---" >> "$LOG"
for page in $PAGES; do
    if [ -f "$page" ]; then
        # Find the page name without extension
        basename="${page%.html}"
        
        # Check if hamburger has self-referencing link
        # For teacher_dashboard, Dashboard should be href="#"
        # For other pages, page shouldn't link to itself
        
        if [ "$basename" = "teacher_dashboard" ]; then
            # Should have Dashboard as href="#" (active)
            has_active=$(grep -c 'href="#" class="active"' "$page" 2>/dev/null)
            if [ "$has_active" -gt 0 ]; then
                echo "PASS: $page - Dashboard active link correct" >> "$LOG"
            else
                echo "FAIL: $page - Dashboard active link missing" >> "$LOG"
            fi
        elif [ "$basename" = "student_dashboard" ]; then
            # Should NOT have Students link
            has_students=$(grep -c 'href="student_dashboard.html"' "$page" 2>/dev/null)
            if [ "$has_students" -gt 0 ]; then
                echo "FAIL: $page - has self-referencing Students link" >> "$LOG"
            else
                echo "PASS: $page - no self-referencing link" >> "$LOG"
            fi
        else
            # Check for self-link in hamburger
            self_link=$(grep -c "href=\"${page}\"" "$page" 2>/dev/null)
            if [ "$self_link" -gt 0 ]; then
                echo "FAIL: $page - has self-referencing link in hamburger" >> "$LOG"
            else
                echo "PASS: $page - no self-referencing link" >> "$LOG"
            fi
        fi
    fi
done
echo "" >> "$LOG"

echo "--- VIEWPORT META CHECK ---" >> "$LOG"
for page in $PAGES; do
    if [ -f "$page" ]; then
        has_viewport=$(grep -c 'name="viewport"' "$page" 2>/dev/null)
        if [ "$has_viewport" -gt 0 ]; then
            echo "PASS: $page - has viewport meta" >> "$LOG"
        else
            echo "FAIL: $page - missing viewport meta" >> "$LOG"
        fi
    fi
done
echo "" >> "$LOG"

echo "--- CSS VAR DEFINITION CHECK ---" >> "$LOG"
# Check teacher pages for CSS var usage without :root definition
TEACHER_PAGES="teacher_dashboard.html teacher_schedule.html student_dashboard.html messages.html reviews.html earnings.html"

check_css_vars() {
    local page=$1
    local defined_vars=$(grep -A20 ':root {' "$page" 2>/dev/null | grep -oE '--[a-zA-Z0-9-]+' | sort -u)
    local used_vars=$(grep -oE 'var\(--[a-zA-Z0-9-]+\)' "$page" 2>/dev/null | grep -oE '--[a-zA-Z0-9-]+' | sort -u)
    
    local missing=""
    for v in $used_vars; do
        if ! echo "$defined_vars" | grep -q "^$v$"; then
            missing="$missing $v"
        fi
    done
    
    if [ -n "$missing" ]; then
        echo "FAIL: $page missing CSS vars:$missing" >> "$LOG"
    else
        echo "PASS: $page - all CSS vars defined" >> "$LOG"
    fi
}

for page in $TEACHER_PAGES; do
    if [ -f "$page" ]; then
        check_css_vars "$page"
    fi
done
echo "" >> "$LOG"

echo "--- NAV CSS CONSISTENCY CHECK (hash comparison) ---" >> "$LOG"
# Extract nav CSS from messages.html (reference)
nav_hash=$(sed -n '/\/\* Nav \*\//,\/\* Main Content \*\//p' messages.html 2>/dev/null | sha256sum | cut -c1-8)
echo "Reference nav CSS hash (messages.html): $nav_hash" >> "$LOG"

for page in teacher_dashboard.html teacher_schedule.html student_dashboard.html reviews.html earnings.html; do
    if [ -f "$page" ]; then
        page_nav_hash=$(sed -n '/\/\* Nav \*\//,\/\* Main Content \*\//p' "$page" 2>/dev/null | sha256sum | cut -c1-8)
        if [ "$page_nav_hash" = "$nav_hash" ]; then
            echo "PASS: $page - nav CSS matches reference" >> "$LOG"
        else
            echo "WARN: $page - nav CSS differs from reference (hash: $page_nav_hash)" >> "$LOG"
        fi
    fi
done
echo "" >> "$LOG"

echo "--- BROKEN ONCLICK SYNTAX CHECK ---" >> "$LOG"
for page in $PAGES; do
    if [ -f "$page" ]; then
        # Check for escaped quotes in onclick that break parsing
        broken_onclick=$(grep -n "onclick=\"[^\"]*\\\\\"" "$page" 2>/dev/null | head -3)
        if [ -n "$broken_onclick" ]; then
            echo "FAIL: $page has broken onclick: $broken_onclick" >> "$LOG"
        else
            echo "PASS: $page - onclick syntax OK" >> "$LOG"
        fi
    fi
done
echo "" >> "$LOG"

echo "--- COMPLETE ---" >> "$LOG"
echo "Full report: $LOG"
echo "Timestamp: $(date -u)" >> "$LOG"

# Also copy to latest
cp "$LOG" /home/jonat/.openclaw/workspace/memory/audit-latest.txt

# Print summary to stdout
echo "Audit complete. Summary:"
grep "^FAIL:\|^WARN:" "$LOG" | head -20
echo ""
echo "Full report: $LOG"
