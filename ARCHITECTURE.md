# Minerva Architecture — Current State

## 🌐 GitHub Repository
```
https://github.com/jonathancheezy/Minerva
├── master  ← primary branch (protected/default)
└── main   ← secondary branch (mirrored)
```

**Tags:** `pre-muses-fixes-v3` (latest) — reset here to get clean pre-edit state.

---

## 📁 Local Workspace
```
/home/jonat/.openclaw/workspace/
│
├── *.html                    ← All HTML pages (24 live + 3 backup)
│   │
│   ├── minerva_landing.html  ← Landing page (has footer, glass nav)
│   ├── index.html             ← Redirects to minerva_landing.html
│   │
│   ├── Auth pages
│   │   ├── login.html
│   │   ├── teacher_login.html
│   │   ├── teacher_registration.html
│   │   ├── parent_login.html
│   │   └── parent_registration.html
│   │
│   ├── Teacher pages
│   │   ├── teacher_dashboard.html
│   │   ├── teacher_schedule.html
│   │   ├── teacher_profile.html
│   │   ├── messages.html
│   │   ├── reviews.html
│   │   └── earnings.html
│   │
│   ├── Student/Parent pages
│   │   ├── student_dashboard.html
│   │   ├── parent_dashboard.html
│   │   └── parent_schedule.html
│   │
│   ├── Info pages
│   │   ├── faq.html
│   │   ├── terms.html
│   │   └── privacy.html
│   │
│   ├── Admin pages
│   │   ├── admin_dashboard.html
│   │   └── admin_login.html
│   │
│   └── Other pages
│       ├── progress.html
│       ├── promo.html
│       └── teachers.html
│
├── i18n.js                   ← Global i18n engine (loaded by all pages)
├── teacher_i18n.js          ← Teacher-side translation overrides
├── teachers.json             ← Teacher data
│
├── minerva-project/          ← Secondary copy (i18n files, archive)
│   ├── i18n.js
│   ├── teacher_i18n.js
│   ├── i18n/
│   │   ├── en.json
│   │   ├── zh-TW.json
│   │   └── zh-CN.json
│   └── archive/
│
└── archive/                  ← Old/temp files (NOT deployed)
    ├── student_dashboard_backup_old.html
    ├── teacher_schedule_backup_v2.html
    └── teacher_registration_old.html
```

---

## 🔄 i18n System

**i18n files location:**
- `/workspace/minerva-project/i18n/en.json`
- `/workspace/minerva-project/i18n/zh-TW.json`
- `/workspace/minerva-project/i18n/zh-CN.json`

**i18n engine:** `i18n.js` (global), loaded via `<script src="i18n.js">` in all pages.

**How it works:**
1. Page loads `i18n.js`
2. `i18n.js` reads `document.documentElement.lang` (e.g. `en`, `zh-TW`, `zh-CN`)
3. `i18n.js` fetches `i18n/{lang}.json`
4. Elements with `data-i18n="key"` get their `textContent` replaced

**Known key namespaces:**
| Namespace | Pages |
|-----------|-------|
| `teacher_dash.*` | teacher dashboard |
| `reviews.*` | reviews page |
| `earnings.*` | earnings page |
| `messages.*` | messages page |
| `footer_*` | all footers |
| `nav.*` | nav links |

---

## 👥 Multi-Agent Workflow

```
                    ┌─────────────────────┐
                    │   You (Human)       │
                    └──────────┬──────────┘
                               │ instruct
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
┌─────────────┐      ┌─────────────────┐    ┌──────────────┐
│  Poseidon  │      │     Muses       │    │  Hercules   │
│ (main ses) │      │ (sub-agent)     │    │ (sub-agent) │
│            │      │                 │    │             │
│ workspace/ │      │ workspace-muses/│    │ workspace/  │
│ *.html     │      │ SESSION_        │    │ i18n audit  │
│            │      │ CHANGE_LOG.md   │    │             │
└─────┬──────┘      └────────┬────────┘    └──────┬──────┘
      │ push                  │ handoff            │
      └──────────┬───────────┴────────────────────┘
                 ▼
      ┌──────────────────────┐
      │   GitHub             │
      │   Minerva repo       │
      │   master + main     │
      └──────────────────────┘
```

**Sub-agent handoff:** Via `SESSION_CHANGE_LOG.md` in `/home/jonat/.openclaw/workspace-muses/`

**Poseidon (main agent):** Works directly in `/home/jonat/.openclaw/workspace/`, pushes to both branches, tags save points.

---

## 🔀 Branch & Tag Strategy

| Tag/Branch | Purpose |
|-----------|---------|
| `master` | Primary branch — all agents push here |
| `main` | Mirrored branch — everything also pushed here |
| `feat/muses-design` | Muses' design audit work |
| `fix/i18n-syntax-and-nav` | i18n/nav fixes |
| `fix/earnings-remove-this-week` | Removed "This Week" card from earnings |
| `pre-muses-fixes-v3` | Clean savepoint before new audit round |
| `pre-muses-fixes-v2` | Earlier savepoint |
| `pre-muses-fixes` | First savepoint |

---

## 🎨 Canonical CSS Standards (Established)

| Element | Value |
|---------|-------|
| Nav background | `var(--navy)` |
| Page body background | `#f8fafc` |
| Page body padding-top | `60px` |
| Stat card padding | `20px` |
| Stat card border-radius | `12px` |
| Stat card value font-size | `28px` |
| Lang dropdown | Solid `#0f1f33`, no blur |
| Hamburger color | `var(--gold)` |

---

## 📝 To-Do: Standardization

- [ ] Clean up archive/ — remove 3 backup files or move to a clearly separate location
- [ ] Consolidate i18n files — `minerva-project/i18n/` vs root vs workspace-muses — pick ONE canonical location
- [ ] Border-radius standard — pick: inputs `8px`, cards `12px`, pills `50px` (design decision needed)
- [ ] Delete `teacher_profile.html.clean` artifact
- [ ] Write `ARCHITECTURE.md` to workspace root
- [ ] Create `CONTRIBUTING.md` for agent workflow standardization
