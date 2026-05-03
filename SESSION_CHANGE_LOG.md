# Handover Note: Formatting Consistency Audit

**Date:** 2026-05-03  
**Audited by:** Muses  
**Files audited:** 26 HTML pages  

---

## What's Changed Since Last Audit (2026-04-30)

The previous audit covered **nav height, logo sizes, and hamburger display modes**. Those were supposedly fixed. This audit covers broader **formatting consistency** — nav style patterns, button styles, and CSS variable definitions.

---

## Issues Found

### 🔴 HIGH — Nav Inconsistencies

#### 1. Nav Style Split — One Page Still on Old Nav

**Frosted glass nav** (blur backdrop, gold hamburger ☰, globe SVG dropdown with `rowReveal` animation): `faq.html`, `terms.html`, `minerva_landing.html`, `login.html`, `parent_login.html`, `teacher_login.html`, `parent_registration.html`, `reviews.html`, `teacher_profile.html`, `parent_schedule.html`, `teacher_schedule.html`, `parent_dashboard.html`, `teacher_dashboard.html`, `student_dashboard.html`, `parent_messages.html`, `messages.html`, `earnings.html`, `admin_login.html`, `teacher_registration.html`, `parent_profile.html`, `student_profile.html`, `teacherschat.html`, `privacy.html`, `progress.html`

**Plain navy nav** (no blur, no animation, basic language links `EN | 繁 | 简`):  
→ `admin_dashboard.html` ← **only one left**

#### 2. Language Switcher Pattern — 3 variants

| Pattern | Pages |
|---------|-------|
| Globe SVG + animated dropdown (`EN/繁/简`) | Most frosted glass pages |
| Plain text links `EN \| 繁 \| 简` | `admin_dashboard.html` |
| **No lang selector at all** | `parent_schedule.html`, `teacher_schedule.html` |

#### 3. Nav Structure Variants — 4 different layouts

| Layout | Pages |
|--------|-------|
| `nav > nav-inner > nav-right` (logo + controls right, links hidden or separate) | `faq.html`, `terms.html`, `minerva_landing.html`, `login.html`, `privacy.html` |
| `nav > nav-inner > nav-start + nav-links + nav-end` (back btn optional) | `reviews.html`, `teacher_profile.html`, `parent_profile.html` |
| `nav > nav-left (btn+logo) + nav-links + nav-right (meta+lang)` | `admin_dashboard.html` |
| `nav > nav-inner > nav-left + nav-right` | `messages.html`, `parent_messages.html`, `student_dashboard.html`, `teacher_dashboard.html`, `parent_schedule.html`, `teacher_schedule.html`, `earnings.html`, `parent_dashboard.html`, `teacherschat.html`, `student_profile.html`, `admin_login.html`, `parent_login.html`, `teacher_login.html` |

#### 4. Hamburger Color

- **Frosted glass pages**: hamburger ☰ styled in **gold** (`color: var(--gold)`)
- **`admin_dashboard.html`**: no color set → defaults to user-agent stylesheet

#### 5. Back Button — Only on teacher_profile

- `teacher_profile.html`: has `‹` back button in nav
- `parent_profile.html`: no back button (same profile page type)

---

### 🟡 MEDIUM — Button Inconsistencies

#### 6. Login/Submit Button — 3 different treatments

| Class | Style | Pages |
|-------|-------|-------|
| `.btn-submit` | Navy gradient | `login.html` |
| `.btn-primary` | Gold gradient | `parent_login.html`, `teacher_login.html`, `admin_login.html`, `parent_registration.html`, `teacher_registration.html` |
| `.btn-payout` | Solid navy block | `earnings.html` |

→ `login.html` uses a completely different button class from all other auth forms.

#### 7. Profile Page Primary Buttons

| Page | Style |
|------|-------|
| `parent_profile.html` | Gold gradient |
| `teacher_profile.html` | Solid navy |
| `student_profile.html` | Solid navy |

#### 8. Schedule Accept/Reject Buttons

`parent_schedule.html`, `teacher_schedule.html`: use tiny 28×28px circular `.btn-accept` / `.btn-reject` buttons — not using standard button classes at all.

---

### 🟢 LOW — CSS Variable Issues

#### 9. Broken `:root` Syntax

| Page | `:root` line |
|------|-------------|
| Most pages | ` :root {` (leading space, correct) |
| `messages.html`, `parent_messages.html`, `teacherschat.html` | `root {` — **missing colon and space** — likely treated as element selector, not CSS custom properties block |

#### 10. earnings.html — No CSS Variables at All

Every color is hardcoded. Zero use of CSS variables despite all other pages using the system.

---

## Pages with Zero Issues (Fully Consistent)

- `faq.html`
- `terms.html`
- `minerva_landing.html`
- `parent_registration.html`
- `teacher_registration.html`
- `parent_dashboard.html`
- `privacy.html`
- `progress.html`
- `student_dashboard.html`

---

## Priority Fix Order

### P0 — Must Fix
1. **`admin_dashboard.html`** — adopt frosted glass nav with globe dropdown (only page left on old nav)
2. **`messages.html`, `parent_messages.html`, `teacherschat.html`** — fix broken `:root` syntax → `:root {`
3. **`login.html`** — change `.btn-submit` to `.btn-primary` to match other auth pages

### P1 — Should Fix
4. **`earnings.html`** — replace hardcoded colors with CSS variables
5. **`parent_schedule.html`, `teacher_schedule.html`** — add lang selector to nav
6. **`teacher_profile.html`** — align back button treatment with `parent_profile.html`

### P2 — Nice to Have
7. `admin_login.html` primary button is navy — consider gold to match auth page standard
8. Standardize profile page primary buttons across `teacher_profile.html`, `student_profile.html`, `parent_profile.html` to gold

---

## File Status Summary

| Page | Nav | Button | CSS Vars | Notes |
|------|-----|--------|----------|-------|
| `admin_dashboard.html` | ❌ old navy | — | ✅ | Only page with old nav |
| `admin_login.html` | ✅ | ⚠️ navy | ✅ | Auth btn should be gold |
| `earnings.html` | ✅ | ⚠️ hardcoded | ❌ no vars | |
| `faq.html` | ✅ | — | ✅ | |
| `login.html` | ✅ | ⚠️ `.btn-submit` | ✅ | Should use `.btn-primary` |
| `minerva_landing.html` | ✅ | ✅ | ✅ | Reference page |
| `messages.html` | ✅ | — | ❌ syntax | |
| `parent_dashboard.html` | ✅ | ✅ | ✅ | |
| `parent_login.html` | ✅ | ✅ | ✅ | |
| `parent_messages.html` | ✅ | — | ❌ syntax | |
| `parent_profile.html` | ✅ | ✅ | ✅ | |
| `parent_registration.html` | ✅ | ✅ | ✅ | |
| `parent_schedule.html` | ⚠️ no lang | ⚠️ tiny | ✅ | Missing lang selector |
| `privacy.html` | ✅ | — | ✅ | |
| `progress.html` | ✅ | — | ✅ | |
| `reviews.html` | ✅ | — | ✅ | |
| `student_dashboard.html` | ✅ | — | ✅ | |
| `student_profile.html` | ✅ | ✅ navy | ✅ | |
| `teacher_dashboard.html` | ✅ | — | ✅ | |
| `teacher_login.html` | ✅ | ✅ | ✅ | |
| `teacher_profile.html` | ⚠️ back btn | ✅ navy | ✅ | Back btn inconsistent |
| `teacher_registration.html` | ✅ | ✅ | ✅ | |
| `teacher_schedule.html` | ⚠️ no lang | ⚠️ tiny | ✅ | Missing lang selector |
| `teacherschat.html` | ✅ | — | ❌ syntax | |
| `terms.html` | ✅ | — | ✅ | |
| `teachers.html` | ❌ minimal | — | ✅ | No mobile nav at all |

---

## Notes for Implementor

- The frosted glass nav is the **design standard** — any page not using it should be updated
- Nav structure variant #4 (`nav-left + nav-right`) is the most common — use this as the default structure for any new pages
- The globe SVG dropdown with `rowReveal` animation is the standard lang switcher — plain text links should be replaced
- Button hierarchy: `.btn-primary` (gold, CTAs), `.btn-secondary` (teal), `.btn-outline` (white outline), `.btn-danger` (red)
- CSS vars should always be used — hardcoded colors block theming

---

*Muses — Formatting consistency audit complete. Ready for implementation.*