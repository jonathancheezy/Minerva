#!/usr/bin/env python3
"""
Minerva i18n Auditor — Daily check
Reports missing zhTW/zhCN translations to Telegram
"""
import re, requests
from datetime import date

I18N = "/home/jonat/.openclaw/workspace/minerva-git/i18n.js"
TOKEN = "8756512655:AAEEEUQMEmEk7pZxV9pZJ4v4NEo-Btzi-4E"
CHAT  = "8641200785"

def parse_i18n():
    src = open(I18N).read()
    m = re.search(r'const T = \{([\s\S]+)\};', src)
    tree = {}
    i = 0
    while i < len(src):
        m = re.match(r'(\w+):\{', src[i:])
        if m:
            key = m.group(1)
            depth = 1; j = i + m.end()
            while j < len(src) and depth > 0:
                if src[j] == '{': depth += 1
                elif src[j] == '}': depth -= 1
                j += 1
            inner = src[i + m.end():j-1]
            if re.search(r'\b(en|zhTW|zhCN):"', inner):
                d = {}
                for lm in re.finditer(r'(\w+):"(.*?)"', inner, re.DOTALL):
                    d[lm.group(1)] = lm.group(2)
                for lm in re.finditer(r'(\w+):\'(.*?)\'', inner, re.DOTALL):
                    d[lm.group(1)] = lm.group(2)
                tree[key] = d
            i = j
        else:
            i += 1
    return tree

def audit(tree):
    issues = []
    for key, val in tree.items():
        missing = [l for l in ('en','zhTW','zhCN') if l not in val]
        if missing:
            issues.append(f"❌ `{key}` missing: {', '.join(missing)}")
    return issues

def send(msg):
    requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage",
                  json={"chat_id": CHAT, "text": msg, "parse_mode": "Markdown"})

def main():
    today = date.today().strftime("%Y-%m-%d")
    tree = parse_i18n()
    total = len(tree)
    issues = audit(tree)

    if issues:
        body = "\n".join(issues[:15])
        send(f"📋 *Minerva i18n Audit* — {today}\n\n{body}\n\n_Showing {len(issues)} of {len(issues)}_")
    else:
        send(f"✅ *Minerva i18n Audit* — {today}\n\nAll {total} keys fully translated across en/zhTW/zhCN")

if __name__ == "__main__":
    main()