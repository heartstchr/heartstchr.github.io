---
title: "How to Vet a Development Agency: Founder's Technical Checklist"
description: "Most vetting advice is written by salespeople. This is the technical checklist I'd run — from GitHub signals to reference calls that actually reveal quality."
date: 2026-08-16
category: "Business Strategy"
tags: ["Vendor Vetting", "Outsourcing", "Agency Selection", "Technical Due Diligence", "Founders"]
---

<MetaContent :date="$frontmatter.date" :category="$frontmatter.tags" />

You're a non-technical founder. You need to hire a development agency or partner to build your product. Every agency has a polished deck, glowing testimonials, and a "senior team." How do you tell who will actually ship quality code on time — and who will leave you with technical debt, missed deadlines, and a codebase you can't maintain?

I've been a developer for 15+ years, worked at agencies, and seen how the sausage gets made from both sides. Here's the vetting process I would run for my own product.

## Phase 1: What You Can Verify Before the First Call

### Check Their GitHub (Not Their Website)

Any development company worth considering has a public GitHub presence. Look for:
- **Open source contributions** — not just forks, but original libraries, tools, or meaningful PRs to major projects
- **Public repos with real documentation** — README with setup instructions, architecture diagrams, contribution guidelines
- **Code quality signals** — consistent formatting, meaningful commit messages, tests included, CI/CD configured
- **Dependency hygiene** — are their public projects on current major versions, or stuck on 3-year-old frameworks?

**Red flag:** No GitHub org, or only private repos with zero public footprint. Code that's poorly commented, inconsistently structured, or full of outdated dependencies is a preview of what they'll produce for you.

### Use Their Client Products

If they list products they've built on their website, **actually use them**. Sign up. Complete a core workflow.
- How is the performance?
- Does it feel polished?
- How does the sign-up flow work?
- Are there obvious bugs?

You don't need technical knowledge to evaluate whether a product works well as a user. If their showcase products are clunky, yours will be worse.

### Check Team Tenure on LinkedIn

How senior are the engineers they *actually* employ (not just the founders)?
- How long have they stayed at the company?
- High turnover in development teams = internal dysfunction that will affect your project
- Are the people you'll work with the same ones in the pitch deck?

### Third-Party Reviews — Read the Negative Ones

Clutch, G2, Google Reviews. Look for **patterns** in negative reviews:
- Every company has some negatives. The question: what were the problems and how did the company respond?
- "They missed deadlines but communicated well and fixed it" ≠ "They ghosted us for three weeks and delivered broken code"

## Phase 2: The Technical Signals You Can Evaluate (Without Writing Code)

Ask these specific questions in your vetting calls. A good answer includes concrete practices. A vague answer ("we take security seriously") is a red flag.

### 1. "What's your standard approach to security in production applications?"

**Good answer includes specifics:** HTTPS everywhere, secure environment variable management (not .env files committed), input validation to prevent injection, authentication with industry-standard libraries (not custom auth), secrets rotation, dependency scanning in CI.

**Red flag:** "We follow best practices" without naming any. Security is concrete. If they can't describe their practices in detail, they don't have rigorous ones.

### 2. "What does your code review process look like?"

**Good answer:** Every PR requires review. Reviewers check for: tests, security issues, performance implications, architectural consistency, not just syntax. They have a defined SLA for review turnaround (e.g., 4 hours during business hours).

**Red flag:** "We review code" with no process details, or "senior devs review" but no structure.

### 3. "How do you handle testing — unit, integration, E2E?"

**Good answer:** Specific tools (Vitest/Jest, Playwright/Cypress), target coverage thresholds (e.g., 80% unit, critical paths E2E), tests run in CI on every PR, flaky test management process.

**Red flag:** "We test manually" or "we have some tests" with no automation or coverage goals.

### 4. "How do you manage deployments and rollbacks?"

**Good answer:** Automated CI/CD to staging and production. Blue-green or canary deployments. One-click rollback. Feature flags for risky changes. Staging environment mirrors production.

**Red flag:** Manual FTP/SSH deploys, "we deploy on Fridays," no rollback plan.

### 5. "How do you handle scope changes and technical debt during a project?"

**Good answer:** A defined change request process with impact assessment (timeline, scope, technical debt score). Regular debt retrospectives. A technical debt allowance (e.g., 20% of sprint capacity). They surface problems early and propose alternatives.

**Red flag:** "We're flexible" or "we figure it out." A team without a process for surfacing problems early will either hide them until they become crises or change direction without telling you.

### 6. "Can I talk to a client who had a difficult experience with your team?"

**This question makes most teams uncomfortable. That's the point.**

A team confident in how they handled past difficulties will give you a name. Their willingness to do this tells you more than any testimonial.

## Phase 3: The Portfolio Evaluation Nobody Does

Most founders look at portfolios to evaluate design quality. **Here's the question you should actually ask:**

> "Can you connect me with the founders of these products so I can ask them about the experience?"

Not testimonials. **Actual conversations.** Ask specifically:
- Did the project come in on time?
- What did you have to fix after launch that should have been caught before?
- How did they handle the inevitable "this is harder than we thought" moments?
- Would you hire them again for your next phase?

Any team that refuses this (NDAs, "clients are busy") is hiding something. The best teams *want* you to talk to their past clients — their process holds up to scrutiny.

## Phase 4: The Proposal & Contract Red Flags

### Proposal Must Break Down Scope by Feature or Phase

Any team that quotes you a fixed scope on a new product without understanding it in detail is either guessing or planning to add scope change orders throughout the project. A real proposal:
- Breaks down scope by feature/phase
- Lists assumptions explicitly
- Identifies risks and unknowns
- Includes discovery phase if scope isn't fully defined

### Contract Must Assign All IP to You

**Non-negotiable:** Source code, designs, documentation, credentials, domains, third-party accounts — everything created under the engagement is yours. No "license back" clauses. No agency-owned libraries you can't extract.

### Contract Must Include Exit Terms

What happens if either party walks away at month 3?
- Code handover process and timeline
- Access to all accounts/repos/infrastructure
- Documentation handover checklist
- No lock-in clauses that trap you

## Your Vetting Scorecard (Use This)

| Check | Pass? | Notes |
|---|---|---|
| Public GitHub with quality signals | ☐ | |
| Can use & vouch for their client products | ☐ | |
| Team tenure >18 months avg | ☐ | |
| Negative review patterns acceptable | ☐ | |
| Security practices described specifically | ☐ | |
| Code review process defined + SLA | ☐ | |
| Automated testing + CI/CD + rollback | ☐ | |
| Scope change + debt process defined | ☐ | |
| Willing to connect you to a difficult client | ☐ | |
| Proposal breaks scope by feature/phase | ☐ | |
| Contract assigns all IP to you | ☐ | |
| Contract has clear exit/handover terms | ☐ | |

**If any of these are ☐, you don't have enough information to make a sound decision.**

## A Trial Engagement: Your Best Insurance

A small trial on a specific, bounded component (2–3 weeks) is an excellent way to evaluate a team before committing to a full engagement. You get real data on:
- Communication cadence and clarity
- Code quality and test coverage
- Deployment reliability
- How they handle feedback and iteration

This requires a fraction of a full engagement and gives you evidence, not hope.

<div class="my-6 p-4 surface-0 border-round-3xl shadow-2 border-left-3 border-primary">
  <h3 class="text-2xl font-bold mb-3">Want a second opinion on a proposal or team?</h3>
  <p class="text-lg text-700 mb-4">I run Technical Diligence engagements for founders evaluating development partners — 2 weeks, fixed scope, deliverable is a go/no-go memo with specific risk findings. No obligation beyond the assessment.</p>
  <a href="https://cal.com/stackseekers/25min?utm_source=website&utm_medium=cta&utm_campaign=technical-diligence" target="_blank" class="no-underline">
    <Button label="Book Technical Diligence" icon="pi pi-shield" size="large" rounded />
  </a>
</div>

<div class="blog-content-and-aside">
  <div class="blog-content-main"></div>
  <div class="blog-content-aside">
    <YouTubeAside />
  </div>
</div>

<RelatedPosts />

<BlogNavigation />

<ConsultingBridge />