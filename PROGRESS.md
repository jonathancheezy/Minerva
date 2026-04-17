# Minerva MVP Progress Tracker

**Last updated:** 2026-04-18
**Repo:** https://github.com/jonathancheezy/Minerva

---

## 🚀 Core Product Logic

### Booking Flow
- [ ] Parent picks a teacher
- [ ] Parent selects subject, level, frequency
- [ ] Parent picks available time slot
- [ ] Booking confirmation screen
- [ ] Booking confirmation email

### Payment / Escrow
- [ ] Stripe checkout integration
- [ ] Escrow hold on funds at booking
- [ ] Escrow release after lesson completion
- [ ] Cancellation → partial/full refund logic
- [ ] Teacher payout (withdrawal) flow

### Teacher Search / Browse
- [ ] Teacher listing page with search
- [ ] Filter by subject, language, price, rating, availability
- [ ] Teacher profile page (public-facing)
- [ ] Availability calendar (public view)
- [ ] Trial lesson booking

---

## 👥 User Dashboards

### Parent Dashboard
- [ ] Upcoming booked lessons
- [ ] Quick book new lesson
- [ ] Past lessons history
- [ ] Saved / favourite teachers
- [ ] Payment history / receipts

### Teacher Dashboard
- [ ] Upcoming lessons
- [ ] Lesson requests (pending/confirmed/declined)
- [ ] Earnings overview + payout button
- [ ] Availability management
- [ ] Public profile editing

### Admin Panel
- [ ] User management (teachers, parents, students)
- [ ] Booking management
- [ ] Dispute resolution queue
- [ ] Commission / revenue view
- [ ] Platform analytics

---

## 💬 Messaging
- [ ] Real-time inbox
- [ ] Message threads per booking
- [ ] Push / email notifications for new messages
- [ ] Attachment support (images, files)

---

## ⭐ Reviews & Ratings
- [ ] Post-lesson review submission
- [ ] Star rating (1–5) + text review
- [ ] Teacher review display on profile
- [ ] Review moderation (admin)

---

## 📅 Notifications
- [ ] Booking confirmation email
- [ ] Lesson reminder (24h / 1h before)
- [ ] Cancellation confirmation
- [ ] New message notification
- [ ] Teacher: new booking request notification
- [ ] Teacher: payout processed notification

---

## 📆 Calendar Integration
- [ ] Google Calendar sync (teacher availability)
- [ ] Apple Calendar (.ics) export
- [ ] iCal feed for booking slots

---

## 📋 Lesson History & Records
- [ ] Per-student lesson history
- [ ] Attendance tracking
- [ ] Lesson notes / progress log
- [ ] Completion certificates

---

## 🔧 Infrastructure / DevOps

### Auth & Security
- [ ] Secure login (not mock)
- [ ] Password reset / email verification
- [ ] Role-based access control
- [ ] Session management

### Database & Backend
- [ ] User accounts (teachers, parents, students, admin)
- [ ] Teacher profiles + subjects + pricing
- [ ] Availability slots
- [ ] Bookings table
- [ ] Messages table
- [ ] Reviews table
- [ ] Payments / transactions table

### Landing Page / Marketing
- [ ] How it Works section
- [ ] Testimonials / social proof
- [ ] Pricing page
- [ ] Blog / resources
- [ ] SEO (meta tags, sitemap)

---

## ✅ Already Done

- [x] Landing page (minerva_landing.html)
- [x] Teacher registration + login
- [x] Parent registration + login
- [x] Teacher dashboard (UI)
- [x] Parent dashboard (UI)
- [x] Admin dashboard (UI)
- [x] FAQ page
- [x] Privacy Policy
- [x] Terms & Conditions
- [x] Teachers listing page
- [x] i18n (EN / ZH-TW / ZH-CN) on all pages
- [x] Hamburger nav menus
- [x] GitHub Pages deployment (main branch)

---

## Milestones

| Milestone | Target | Status |
|-----------|--------|--------|
| Landing page + auth flows | Done | ✅ |
| Teacher browse + public profiles | — | ❌ |
| Booking flow + Stripe escrow | — | ❌ |
| Messaging system | — | ❌ |
| MVP (book a lesson end-to-end) | TBD | 🚧 |
