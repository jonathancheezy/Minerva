#!/usr/bin/env python3
"""Precise comparison of teacher_dashboard vs messages i18n setup"""
import re

with open('/tmp/td.html') as f:
    td = f.read()
with open('/tmp/msg.html') as f:
    msg = f.read()

print("=== STRUCTURAL COMPARISON ===")
print(f"TD: {len(td)} chars, {td.count(chr(10))} lines")
print(f"MSG: {len(msg)} chars, {msg.count(chr(10))} lines")

print("\n=== i18n.js POSITIONS ===")
td_i18n = [(i, m.start()) for i, m in enumerate(re.finditer(r'i18n\.js', td))]
msg_i18n = [(i, m.start()) for i, m in enumerate(re.finditer(r'i18n\.js', msg))]
print(f"TD i18n.js occurrences: {len(td_i18n)}")
for idx, pos in td_i18n:
    line_num = td[:pos].count('\n') + 1
    print(f"  Script block {idx}, line ~{line_num}")
print(f"MSG i18n.js occurrences: {len(msg_i18n)}")
for idx, pos in msg_i18n:
    line_num = msg[:pos].count('\n') + 1
    print(f"  Script block {idx}, line ~{line_num}")

print("\n=== DATA-I18N KEYS ===")
td_keys = sorted(set(re.findall(r'data-i18n="([^"]+)"', td)))
msg_keys = sorted(set(re.findall(r'data-i18n="([^"]+)"', msg)))
print(f"TD keys ({len(td_keys)}): {td_keys}")
print(f"MSG keys ({len(msg_keys)}): {msg_keys}")
print(f"Keys in MSG but not TD: {set(msg_keys) - set(td_keys)}")
print(f"Keys in TD but not MSG: {set(td_keys) - set(msg_keys)}")

print("\n=== LANG SELECTOR ===")
td_lang = re.search(r'<div class="lang-selector">(.*?)</div>', td, re.DOTALL)
msg_lang = re.search(r'<div class="lang-selector">(.*?)</div>', msg, re.DOTALL)
if td_lang:
    print(f"TD LANG: {td_lang.group(1)}")
if msg_lang:
    print(f"MSG LANG: {msg_lang.group(1)}")

print("\n=== BODY TAG COUNT ===")
print(f"TD <body> count: {td.count('<body>')}, </body> count: {td.count('</body>')}")
print(f"MSG <body> count: {msg.count('<body>')}, </body> count: {msg.count('</body>')}")

print("\n=== HEAD TAG COUNT ===")
print(f"TD <head> count: {td.count('<head>')}, </head> count: {td.count('</head>')}")
print(f"MSG <head> count: {msg.count('<head>')}, </head> count: {msg.count('</head>')}")

print("\n=== STYLE TAG COUNT ===")
print(f"TD <style> count: {td.count('<style>')}, </style> count: {td.count('</style>')}")
print(f"MSG <style> count: {msg.count('<style>')}, </style> count: {msg.count('</style>')}")