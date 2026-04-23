#!/usr/bin/env python3
"""
validate.sh — Minerva Pre-Push Validation
Run: python3 validate.sh
"""
import re, sys, os
from pathlib import Path

MINERVA = Path("/home/jonat/.openclaw/workspace/minerva-git")
PAGES = list(MINERVA.glob("*.html"))

def fail(msg):
    print(f"   ❌ {msg}")

def warn(msg):
    print(f"   ⚠️  {msg}")

def ok(msg):
    print(f"   ✅ {msg}")

print("========================================")
print("Minerva Pre-Push Validation")
print("========================================\n")

errors = 0

# ── 1. HTML Syntax ──────────────────────────────────
print("1. HTML syntax...")
for p in PAGES:
    try:
        content = p.read_text(encoding="utf-8", errors="replace")
        # Basic checks
        if not re.search(r'<!DOCTYPE\s+html', content, re.IGNORECASE):
            fail(f"{p.name}: missing <!DOCTYPE html>")
            errors += 1
        # Check for <script> before DOCTYPE
        doctype_match = re.search(r'<!DOCTYPE', content, re.IGNORECASE)
        script_match = re.search(r'<script', content, re.IGNORECASE)
        if doctype_match and script_match:
            if script_match.start() < doctype_match.start():
                fail(f"{p.name}: <script> appears before <!DOCTYPE>")
                errors += 1
    except Exception as e:
        fail(f"{p.name}: read error - {e}")
        errors += 1
ok("HTML syntax OK")
print()

# ── 2. Empty data-i18n ──────────────────────────────
print("2. Empty data-i18n...")
found_empty = False
for p in PAGES:
    content = p.read_text(encoding="utf-8", errors="replace")
    for m in re.finditer(r'data-i18n=""', content):
        fail(f"{p.name}: empty data-i18n at position {m.start()}")
        found_empty = True
        errors += 1
if not found_empty:
    ok("No empty data-i18n")
print()

# ── 3. Hamburger self-link check ───────────────────
print("3. Hamburger self-link check...")
for p in PAGES:
    content = p.read_text(encoding="utf-8", errors="replace")
    page_name = p.stem  # filename without extension
    # Find active links that point to the same page
    active_links = re.finditer(r'<a\s+([^>]*)class="active"([^>]*)>', content, re.IGNORECASE)
    for m in active_links:
        link_html = m.group(0)
        href_match = re.search(r'href="([^"]*)"', link_html)
        if href_match:
            href = href_match.group(1)
            # Check if it links to the same page (with or without version hash)
            if href.startswith(f"{page_name}.html") or href == f"{page_name}.html":
                fail(f"{p.name}: active hamburger link points to self: {href}")
                errors += 1
ok("No hamburger self-links")
print()

# ── 4. CSS variable references ─────────────────────
print("4. CSS variable references...")
# Collect all defined CSS variables (from :root blocks)
defined = set()
for p in PAGES:
    content = p.read_text(encoding="utf-8", errors="replace")
    # Match --var-name: value in :root
    for m in re.finditer(r'--([a-zA-Z0-9-]+)\s*:', content):
        defined.add(m.group(1))
# Collect all var() references
undefined = set()
for p in PAGES:
    content = p.read_text(encoding="utf-8", errors="replace")
    for m in re.finditer(r'var\(--([a-zA-Z0-9-]+)\)', content):
        var_name = m.group(1)
        if var_name not in defined:
            undefined.add(var_name)
if undefined:
    for v in sorted(undefined):
        warn(f"Undefined CSS var: --{v}")
else:
    ok("All CSS vars defined")
print()

# ── 5. i18n.js syntax ─────────────────────────────
print("5. i18n.js syntax...")
i18n_path = MINERVA / "i18n.js"
if i18n_path.exists():
    import subprocess
    result = subprocess.run(["node", "--check", str(i18n_path)], capture_output=True, text=True)
    if result.returncode == 0:
        ok("i18n.js syntax OK")
    else:
        fail(f"i18n.js syntax error: {result.stderr}")
        errors += 1
else:
    warn("i18n.js not found")
print()

# ── 6. site-audit.py quick check ───────────────────
print("6. site-audit.py exists...")
sa_path = MINERVA / "site-audit.py"
if sa_path.exists():
    ok("site-audit.py present")
else:
    warn("site-audit.py not found")
print()

# ── Summary ────────────────────────────────────────
print("========================================")
if errors == 0:
    print("✅ ALL CHECKS PASSED")
    print("========================================")
    sys.exit(0)
else:
    print(f"❌ VALIDATION FAILED — {errors} error(s)")
    print("========================================")
    sys.exit(1)
