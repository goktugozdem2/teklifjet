# TeklifJet Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Launch a new money-focused MVP that can collect pilot interest for a ₺499 manual setup package.

**Architecture:** Next.js App Router landing page with a small serverless API for lead notifications. If provider credentials are missing, the API returns a deliberate 503 and the client opens a mailto fallback so sales is not blocked.

**Tech Stack:** Next.js, React, TypeScript, Vercel serverless route, Telegram Bot API optional destination.

---

## Tasks

1. Create new `/home/hermes/teklifjet` Next.js project.
2. Build conversion-focused Turkish landing page.
3. Add `/api/leads` with validation and Telegram destination guard.
4. Add SEO artifacts: robots and sitemap.
5. Add smoke script and verify build/API behavior.
6. Push as a fresh GitHub repo if credentials exist.
7. Prepare first outreach message and pilot fulfillment checklist.
