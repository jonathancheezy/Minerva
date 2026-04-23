#!/usr/bin/env python3
"""Minerva daily site audit — runs from minerva-git/ directory"""
import json, hashlib, re, os
from datetime import datetime

BOT_TOKEN = "8770315322:AAGKjBIfPftCDZoCHEZKfruPD12yEVgas1A"
CHAT_ID = "8641200785"
MINERVA = "/home/jonat/.openclaw/workspace/minerva-git"
PAGES = [
    "teacher_dashboard.html","teacher_schedule.html","student_dashboard.html",
    "messages.html","reviews.html","earnings.html","admin_dashboard.html",
    "parent_dashboard.html","parent_schedule.html","teacher_login.html",
    "teacher_profile.html"
]

def send(msg):
    import urllib.request, urllib.parse
    data = urllib.parse.urlencode({"chat_id": CHAT_ID, "text": msg, "parse_mode": "Markdown"}).encode()
    req = urllib.request.Request(f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage", data=data, method="POST")
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.loads(r.read())

def nav_section(src):
    s = src.find('<div class="nav-links">')
    if s < 0:
        s = src.find('<div class="nav-links ')
    if s < 0:
        return ""
    e = src.find('</div>', s)
    return src[s:e+6]

def self_link_check(page, src):
    nav = nav_section(src)
    if not nav:
        return True, "ok"
    m = re.search(r'<a href="([^"]*)" class="active"[^>]*>', nav)
    if not m:
        return True, "ok"
    href = m.group(1)
    if href == "#":
        return True, "ok"
    if href.startswith(page):
        return False, f"self-link: {href}"
    return True, f"ok"

def run():
    results, all_pass = [], True
    for page in PAGES:
        path = f"{MINERVA}/{page}"
        if not os.path.exists(path):
            results.append(f"⚠️ {page} — not found"); continue
        src = open(path).read()
        # 1. orphan JS
        before = src[:src.find('<!DOCTYPE')]
        ok = '<script>' not in before
        results.append(f"{'✅' if ok else '❌'} {page} — orphan JS: {'FAIL' if not ok else 'PASS'}")
        if not ok: all_pass = False
        # 2. empty data-i18n
        n = src.count('data-i18n=""')
        results.append(f"{'✅' if n==0 else '❌'} {page} — empty data-i18n: {'FAIL' if n>0 else 'PASS'}")
        if n > 0: all_pass = False
        # 3. self-link
        ok, detail = self_link_check(page, src)
        results.append(f"{'✅' if ok else '❌'} {page} — hamburger self-link: {'FAIL' if not ok else 'PASS'} ({detail})")
        if not ok: all_pass = False
        # 4. nav CSS hash
        try:
            ns = src.find('/* Nav */')
            me = src.find('/* Main Content */')
            if me == -1: me = src.find('/* Main */')
            if me == -1: me = src.find('/* Hero */')
            h = hashlib.sha256(src[ns:me].encode()).hexdigest()[:8]
            ok = h == "6f9ec9a0"
            results.append(f"{'✅' if ok else '⚠️'} {page} — nav CSS hash: {h} (ref: 6f9ec9a0)")
            if not ok: all_pass = False
        except Exception as e:
            results.append(f"⚠️ {page} — hash error: {e}"); all_pass = False

    msg = "\n".join([f"📋 *Minerva Site Audit* — {datetime.now().strftime('%Y-%m-%d %H:%M HKT')}", ""] + results + ["", f"Overall: {'✅ ALL PASS' if all_pass else '❌ ISSUES FOUND'}"])
    try:
        send(msg)
    except Exception as e:
        print(f"Telegram error: {e}")
    open(f"/home/jonat/.openclaw/workspace/memory/audit-{datetime.now().strftime('%Y-%m-%d')}.txt", "w").write(msg)
    print(msg)

if __name__ == "__main__":
    run()
