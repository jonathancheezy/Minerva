# AGENT_PROTOCOL.md — Multi-Agent Coordination

## The Problem

When multiple agents work on the same codebase without coordination, they overwrite each other's work. This is a real failure mode we've experienced:

- Agent A pushes to `master`, then Agent B pushes to `master` without knowing what A did
- Revert cascade follows — time wasted, trust broken
- No one knows what the other changed unless they manually dig through git history

This protocol prevents that.

---

## Core Rule (The One Law)

**Only ONE agent owns the deployment branches.** All other agents work in feature branches or their own workspace.

```
Main Agent (primary)  → owns master, main, netlify  (deployment branches)
Sub-Agents (workers)  → feature branches only       (never touch deployment)
```

When the protocol says "main agent" it means the agent that has the deployment branches as its working context. When it says "sub-agent" it means any agent spawned for a specific task.

---

## Branch Strategy

### Deployment Branches (main agent only)
| Branch | Purpose | Who touches it |
|--------|---------|----------------|
| `master` | GitHub Pages deploy | Main agent only |
| `main` | Primary branch | Main agent only |
| `netlify` | Cloudflare Pages deploy | Main agent only |

### Feature Branches (sub-agents)
- Sub-agents create branches named after their task: `feat/reviews-redesign`, `fix/nav-frosted-glass`, etc.
- Sub-agents **never push to master/main/netlify directly**
- When work is done, sub-agent **hands off to main agent** for review and merge

---

## Session Start Checklist (Main Agent)

Before every session, main agent must:

1. **Read MEMORY.md** — check for any ongoing work, pending handoffs, sub-agent notes
2. **Check SESSION_CHANGE_LOG.md** — see what sub-agents did since last session
3. **Git status** — confirm current deployed state matches what's expected
4. **Announce to user** — brief summary of current state if anything is outstanding

---

## Sub-Agent Rules

### Before starting work
1. Read `/home/jonat/.openclaw/workspace/MEMORY.md` and `/home/jonat/.openclaw/workspace/SESSION_CHANGE_LOG.md` — understand current state and what's already been done
2. Check git log — confirm what the last known-good deployed commit is
3. **Do NOT begin work if the task conflicts with recent commits** — ask for clarification

### During work
1. **Save SESSION_CHANGE_LOG.md updates after every significant change** — don't wait until end of session. Use append mode, never overwrite the log.
2. **Announce via sessions_send to main agent** for anything that touches deployment branches
3. **Write to feature branches**, not deployment branches

### After completing work
1. Push feature branch to origin
2. Write a **handoff note** to SESSION_CHANGE_LOG.md:
   - What was done
   - What branch it's on
   - What the user should test
   - Any pending items
3. **Do NOT force-push to shared branches** (e.g. `master`, `main`)

---

## SESSION_CHANGE_LOG.md Format

Every agent session appends to this file. Structure:

```markdown
## [DATE] — [AGENT NAME] — [SESSION TYPE]
### Timestamp: HH:MM HKT
### Status: [done|partial|blocked]

#### Changes Made
- [filename]: [brief description] (branch: `feature-name`)

#### Handoff
- Branch: `feature-name`
- Status: ready for review / needs main agent decision / blocked
- Testing: [what to test]

#### Notes
- [anything the main agent should know before merging]
```

Example:

```markdown
## 2026-04-25 — Muses — sub-agent (reviews redesign)
### Timestamp: 14:30 HKT
### Status: done

#### Changes Made
- reviews.html: full redesign with aggregate score, SVG stars, filter tabs (branch: `feat/reviews-redesign`)

#### Handoff
- Branch: `feat/reviews-redesign`
- Status: ready for review
- Testing: open reviews.html, check My Reviews title, filter tabs, star rendering

#### Notes
- Reviews redesign is based on messages.html nav CSS as reference
- CSS variables (--gold, --teal) are defined in :root block
- i18n keys: my_reviews, review_count, etc. all wired
```

---

## Main Agent Merge Protocol

When a sub-agent announces work is ready:

1. **Fetch and check the feature branch** — don't just trust the sub-agent's description
2. **Review the diff** — confirm it does what the handoff says
3. **Test locally or via raw GitHub URL** before pushing to deployment
4. **Push to deployment branches** (master/main/netlify) — sub-agents do NOT
5. **Update SESSION_CHANGE_LOG.md** to mark the handoff as merged
6. **Announce to user** — brief confirmation that it's live

---

## What Triggers an Immediate Handoff Alert

Sub-agents must notify main agent immediately (via `sessions_send`) when:

- ANY change to `master`, `main`, or `netlify` branches was attempted (even if failed)
- User requested a change that contradicts prior work
- Sub-agent encountered a conflict with recent commits
- Sub-agent is about to do something destructive (git reset --hard, large file deletion)
- User seems frustrated or confused about the current state

---

## Anti-Patterns (Never Do These)

| ❌ Never | ✅ Instead |
|---------|------------|
| Push directly to `master`/`main`/`netlify` from a sub-agent | Push to feature branch, hand off |
| Overwrite MEMORY.md without reading it first | Read, then update |
| Force-push to shared branches | Create new commit, discuss with main agent |
| Start work without checking git state | Always `git fetch` + check log first |
| Wait until end of session to write change log | Append after every significant change |
| Assume the user will remember what was discussed | Document everything, assume nothing |

---

## Exception: Emergency Fixes

If a sub-agent encounters a **production-breaking bug** that requires immediate deployment:

1. Fix in a feature branch
2. Immediately notify main agent via `sessions_send` with full details
3. Main agent reviews and deploys ASAP
4. Document in SESSION_CHANGE_LOG.md

The sub-agent does NOT push directly to deployment even in emergencies — unless the main agent is unreachable for >30 minutes and the fix is critical.

---

## Quick Reference

| Question | Answer |
|----------|--------|
| Who owns deployment branches? | Main agent only |
| Where do sub-agents work? | Feature branches |
| How do sub-agents communicate handoffs? | SESSION_CHANGE_LOG.md + sessions_send |
| What if two sub-agents conflict? | First to write in SESSION_CHANGE_LOG.md wins; main agent arbitrates |
| What if I forget to check? | MEMORY.md at start of session — always read it first |
| Can sub-agents read SESSION_CHANGE_LOG.md? | Yes — always read before starting work |
| Can sub-agents push to deployment in an emergency? | Only after 30min silence from main agent and it's critical |

---

_Last updated: 2026-04-25 — Created after Apollo/Muses coordination failure_
