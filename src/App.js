import { useState, useRef, useEffect } from "react";

const PROJECT_CONTEXT = `
You are the SuvTV Build Proposal Assistant — a knowledgeable, clear, and helpful guide created by Intuitio Labs for Marques Burnett and the SuvTV team.

Your job is to help Marques understand the four build proposals Intuitio Labs has prepared: Basic MVP, Original, Cadillac, and the Phased Build. Answer questions about features, costs, timelines, technology, and how the plans compare to each other.

Your tone is: neutral, informative, and easy to understand. Avoid technical jargon unless the user asks for technical detail. Be specific with numbers — always use the exact figures from the proposals below. If something is not covered in these materials, say so clearly and suggest Marques reach out to the Intuitio Labs team directly.

IMPORTANT: All cost figures below reflect the 5% Friends & Family discount already applied. Gross figures (before discount) are also noted where relevant. All data is sourced from the official Intuitio Labs build proposals dated March 2026.

CONTACT: For questions not answered here, contact Deep Kalina at deep.kalina@intuitiolabs.com or the Intuitio Labs team directly.


== WHO IS BUILDING THIS ==

Intuitio Labs is a software development studio based in Atlanta, Georgia. They specialize in building AI-powered digital products — 32+ products launched across 11 industry verticals, $225M+ in product value created, 95% client retention rate. The SuvTV app will be built by their team of designers, engineers, and product experts using a proven delivery process.

The strategic relationship: Intuitio Labs is working exclusively with Marques and the SuvTV team. No development has started yet. All four proposals represent what can be built starting from scratch.


== WHAT IS SUVTV ==

SuvTV is a sports streaming and fan engagement platform targeting youth sports and high school sports audiences. The core product is a native mobile app (iOS + Android) that lets fans watch live and on-demand broadcasts, purchase tickets via a premium "SUV Lane" experience, order game highlights, and earn loyalty rewards.

The strategic vision Marques has shared: the loyalty and fan engagement layer — not just the streaming — is the real business. It is designed to be a "Trojan horse" into real-life commerce for youth and high school sports families, connecting fans to rewards on everyday spending like travel, food, and local commerce. The goal is to build enough scale and consumer data to become an attractive acquisition target or strategic data asset.

Primary audience: Youth sports and high school sports families. Secondary: small college sports.
Key insight: This audience travels — sports tourism is a meaningful part of their lives, and a loyalty program tied to real-world spending (lodging, restaurants, groceries) is something no one else has built for this ecosystem.


== THE FOUR PROPOSALS — OVERVIEW ==

There are four proposals total:

1. Basic MVP — The fastest path to market. Core streaming + basic ticketing + highlights + optional points system. 8 weeks, $135,152.
2. Original — Adds social features, gamification, push notifications, and ad insertion on top of the Basic. 14 weeks, $185,775.
3. Cadillac — The full vision: card-linked loyalty, AI personalization, POS in-venue redemption, geotargeting, premium ticketing, custom sponsor games, and more. 18 weeks, $338,519.
4. Phased Build — Executes the full Cadillac vision in three sequential phases, each with its own launch and its own cost. 26 weeks total (8+6+12). Note: the Phased Build totals $356,304 net — slightly more than the Cadillac standalone ($338,519) because hyper-care ($9,360) is charged separately per phase (×3) rather than once.

The recommended strategy: Start with Phase 1 (Basic MVP) to build traction and validate the market, raise capital off that traction, then build through Phase 2 (Original) and Phase 3 (Cadillac) progressively.


== PROPOSAL 1: BASIC MVP ==

Timeline: 8 weeks + 2 weeks post-launch hyper-care
Total cost (before discount): $142,266
Friends & Family Discount (5%): -$7,113
FINAL NET INVESTMENT: $135,152

Monthly Infrastructure & Third-Party Costs (estimated at 10,000 Monthly Active Users): $800–$1,200/month
This covers: AWS (EC2, S3, CloudFront, Auto Scaling), Firebase Crashlytics (crash reporting), Heap (analytics), Stripe (payments), Transmit.live (ad insertion).
Note: Intuitio Labs makes no margin on infrastructure costs. These are pass-through estimates.

Post-Launch Maintenance Retainer (optional): $19,656/month for 3 months.
This covers platform optimization, system health monitoring, bug fixes, and minor enhancements during the critical early adoption window.

--- WHAT'S INCLUDED ---

Authentication & Onboarding (8 features):
- Multi-provider login: Email, Google, Apple
- OTP verification and password recovery
- Account management and soft-delete (data retained 90 days then purged)
- GDPR consent and Privacy Policy acceptance on signup

User Profile (2 features):
- Complete profile management with image upload
- Points balance display

Content Discovery & Navigation (3 features):
- Home screen showing Live Now and Upcoming Matches
- Category-based listings by league/tournament with pagination
- Video detail pages with play button and highlights order button

Analytics (1 feature):
- Heap integration: page views, button clicks, video views, watch time, completion rates

Video Streaming, VOD & Playback (6 features):
- Live and VOD streaming via Vimeo (HLS/DASH)
- ExoPlayer (Android) / AVPlayer (iOS) with adaptive bitrate
- Custom UI controls and player skinning to match SuvTV branding
- Live stream seek controls with live edge management
- Dynamic ad insertion via Transmit.live (SSAI/DAI)
- Position tracking and resume functionality (picks up where you left off)

SUV Lane Ticketing — Basic (1 feature):
- Browse events, purchase a ticket via Stripe, receive a QR code in-app
- User shows QR code to entry staff for visual verification
- Admin dashboard to manage events and tickets
- Note: No staff-side scanning app is built in this version. Entry is visual verification only.

GDPR & Data Privacy (1 feature):
- Consent collected on signup with timestamp
- Soft delete on account deletion — data retained 90 days then permanently purged
- GDPR consent records managed in admin

Highlights Order Form (1 feature):
- In-app form to order highlights from a completed broadcast
- Manual admin fulfilment workflow (Intuitio Labs admin processes orders)
- Order history visible in user profile

Points System (1 feature):
- Earn points for every broadcast watched
- Points balance and earn history shown in profile
- Full points infrastructure built from day one — ready for future redemption
- Note: Points redemption UI is NOT included in this version. The data model is built to support it later without rework.

Backend & Infrastructure (3 features):
- Django admin interface for video listings, tickets, orders, and user management
- App store release process support (iOS App Store + Google Play)
- Firebase Crashlytics for stability monitoring

--- WHAT IS NOT IN THE BASIC MVP ---
- Social features (emoji reactions, comments, sharing)
- Push notifications / FCM
- Search by team or league
- Watch list and continue watching
- Gamification engine, badges, daily streaks
- Points redemption
- Deep linking from notifications
- Card-linked loyalty
- AI personalization
- Geotargeting or beacons
- Premium SUV Lane ticketing (no gameday perks in this version)
- Microtransactions or subscriptions

--- KEY ASSUMPTIONS ---
- iOS and Android smartphones only. Tablets in a follow-up phase. No TV apps.
- All streaming via Vimeo (HLS/DASH). No alternative streaming providers.
- English language only.
- Formal GDPR legal review, Data Processing Agreements, and full GDPR audit are the client's responsibility.

--- 8-WEEK DEVELOPMENT ROADMAP ---
Weeks 1–2: Discovery, design & architecture — requirements, API design, architecture blueprint, environment setup, risk planning
Weeks 3–4: Core Development Sprint 1 — backend APIs, database schema, authentication system, GDPR consent flow
Weeks 5–6: Core Development Sprint 2 — user profile, home screen, listings, video player, ad insertion, soft delete
Week 7: Core Development Sprint 3 — SUV Lane ticketing, highlights form, points system, analytics, admin expansion, DevOps
Week 8: Testing, QA & Launch Prep — comprehensive QA across devices and OS versions, performance optimization, app store submission
Weeks 9–10: Post-Launch Hyper-care — real-time monitoring, rapid bug fixes


== PROPOSAL 2: ORIGINAL ==

Timeline: 14 weeks + 2 weeks post-launch hyper-care
Total cost (before discount): $195,553
Friends & Family Discount (5%): -$9,778
FINAL NET INVESTMENT: $185,775

Monthly Infrastructure Estimate: $800–$1,200/month at 10,000 MAU
Post-Launch Retainer: $19,656/month for 3 months

--- WHAT THE ORIGINAL ADDS ON TOP OF THE BASIC ---

The Original includes everything in the Basic MVP, plus:

Authentication & Onboarding additions:
- Team/league preference selection during onboarding

User Profile & Personalization (expands to 5 features):
- Favourite teams and leagues with search and sync
- Custom watch lists with cross-device sync
- Continue watching with playback position tracking
- Granular push notification preferences

Content Discovery additions:
- Advanced search by team or league
- Dynamic home screen with Recommended section (not just Live Now and Upcoming)

Video Streaming additions:
- Partner platform broadcast links (SUVtv broadcasts + links to partner platform broadcasts)

Analytics (expands to 2 features):
- Comprehensive video analytics including drop-off analysis
- Button clicks and page view tracking

Social & Engagement (4 new features):
- Live emoji reactions with floating animations during broadcasts
- Real-time comments via WebSocket/Firebase
- Social sharing with deep linking to content
- Direct navigation from shared content

Gamification & Rewards (4 new features):
- Watch & Earn points system (expanded from Basic)
- Daily login streaks and bonuses
- Share & Earn referral program
- Badge and level progression system

Push Notifications (2 new features):
- FCM integration with token management
- Deep linking from notifications to relevant content

--- WHAT THE ORIGINAL STILL DOES NOT INCLUDE ---
- Card-linked loyalty program
- AI personalization engine
- POS integration
- Premium SUV Lane ticketing with gameday perks (Basic ticketing carries forward from the Basic MVP)
- Highlights Order Form (not in Original — present in Basic and reintroduced as part of Cadillac)
- Geotargeting or BLE beacons
- Microtransactions or subscriptions
- Gamification engine with custom sponsor-branded games
- Loyalty interoperability API
- Robust first-party data capabilities

--- 14-WEEK DEVELOPMENT ROADMAP ---
Weeks 1–3: Discovery, design & architecture
Weeks 4–5: Core Sprint 1 — backend APIs, database, foundation
Weeks 6–7: Core Sprint 2 — authentication, user profile, home feed, GDPR
Weeks 8–9: Core Sprint 3 — search, video player, ABR support
Weeks 10–11: Core Sprint 4 — watch history, continue watching, watchlist, cross-device sync, DevOps
Weeks 12–14: Testing, QA & Launch Prep — analytics integration, QA, performance, app store submission
Weeks 15–16: Post-Launch Hyper-care


== PROPOSAL 3: CADILLAC ==

Timeline: 18 weeks + 2 weeks post-launch hyper-care
Total cost (before discount): $356,335
Friends & Family Discount (5%): -$17,817
FINAL NET INVESTMENT: $338,519

Monthly Infrastructure Estimate: $2,170–$2,880/month at 10,000 MAU
(Higher than other plans due to: Anthropic Claude API for AI personalization, Card-linking API, BLE Beacon Provider SDK)
Post-Launch Retainer: $19,656/month for 3 months

--- WHAT MAKES THE CADILLAC DIFFERENT ---

The Cadillac is the full vision — everything in the Original plus the loyalty commerce engine, AI, POS, geotargeting, and the full gamification engine. It is the product Marques described: a transactional rewards platform that connects to real-life commerce, not just sentiment.

Full feature list includes everything in the Original, PLUS:

AI & Intelligence (2 features):
- Claude API-powered engagement engine: personalized content recommendations, optimal engagement timing, tailored loyalty offers — delivered in real time to each user
- Robust first-party data capabilities: consent management, audience segmentation, data export
- Note: AI personalization improves as more user data accumulates. No custom ML infrastructure required — powered directly by Anthropic's Claude API.

Advanced Content Discovery:
- AI-powered home screen (Live Now, Upcoming, Recommended for You — personalized per user)
- Rich video detail pages with purchase and subscription CTAs

Gamification & Rewards (expanded to 7 features):
- Watch & Earn points tied to loyalty tier progression
- Daily login streaks and bonuses
- Share & Earn referral program
- Badge and level progression system
- Gamification engine with custom sponsor-branded mini-games (example: a pest control chain sponsors a "smashing bugs" game; a grocery chain sponsors a grocery spree game — brands pay to be in the game)
- Card-linked multi-currency loyalty program (via Fidel or Marqeta)
- Tiered reward levels: Bronze → Silver → Gold → Platinum

Push Notifications (expanded to 3 features):
- FCM integration with token management
- Deep linking from notifications
- Geotargeting and BLE beacon-triggered notifications (GPS zones + Bluetooth proximity at physical venues)

Commerce & Monetization (3 new features):
- Microtransaction and subscription capabilities: monthly/annual memberships, highlight purchases, early-bird SUV Lane tickets
- SUV Lane Premium Ticketing: dedicated entry lane + gameday perks (upgraded from Basic ticketing)
- POS integration for in-venue loyalty earning and redemption at concessions and merchandise

Loyalty Interoperability (1 feature):
- API framework enabling point exchange with external loyalty programs and partner apps

GDPR & Data Privacy (expanded):
- Explicit consent on signup for data collection, Privacy Policy, and Terms of Service
- Separate consent prompts for location data (geotargeting) and card data (card-linked)
- Right to erasure — soft delete with 90-day data retention then permanent purge
- Data export/portability screen in user profile
- GDPR consent management in Django admin

--- HOW THE LOYALTY & AI SYSTEMS WORK ---

AI Personalization Flow:
1. User activity signals (watch history, loyalty events, purchases, game completions) are collected into a first-party data store
2. When personalization is triggered (home screen load, notification scheduling, offer generation), a structured context prompt is assembled from the user's behavioral profile
3. That prompt is sent to the Anthropic Claude API
4. Claude returns ranked recommendations or a personalized offer as structured data
5. The response is surfaced in the home screen, video detail page, or push notification in real time

Loyalty & Commerce Flow:
1. A card transaction is detected by the card-linking API (Fidel or Marqeta) — webhook received by loyalty backend
2. Points are calculated based on merchant rules and credited to the user's account
3. Tier eligibility is re-evaluated — user notified in-app if they move up a tier
4. To redeem: user generates a redemption QR code in the app → cashier scans QR on a cashier web screen Intuitio Labs builds → discount confirmed → cashier applies it on their existing till → points marked as redeemed in backend
Note: No POS vendor terminal SDK integration required. The cashier just needs a device with a browser.

--- KEY ASSUMPTIONS FOR CADILLAC ---
- Card-linking integrates with one provider (Fidel or Marqeta — selected during Discovery). Additional providers require re-estimation.
- BLE beacons: one beacon vendor SDK included. Beacon hardware procurement and physical installation at venues are the client's responsibility.
- Claude API usage costs are variable third-party costs and NOT included in the build fee — they are part of ongoing monthly infrastructure costs.
- Loyalty API covers build and documentation only. Partner onboarding and certification are not estimated.
- One custom sponsor game template included at launch. Additional game types require re-estimation.
- Payments processed via Stripe. PCI-DSS compliance and Stripe transaction fees are the client's responsibility.

--- 18-WEEK DEVELOPMENT ROADMAP ---
Weeks 1–3: Discovery, design & architecture — vendor selection for card-linking, POS, beacons; loyalty data model design; risk planning
Weeks 4–5: Core Sprint 1 — backend APIs, database, foundation, loyalty data model
Weeks 6–7: Core Sprint 2 — authentication, user profile with loyalty tier/badge display, GDPR, AI-powered home feed
Weeks 8–9: Core Sprint 3 — search, video player, SUVtv + partner broadcasts, ad insertion
Weeks 10–11: Core Sprint 4 — watch history, watchlist, gamification engine, first sponsor game template, social features
Weeks 12–13: Core Sprint 5 — card-linked loyalty, tiered rewards, POS redemption, microtransactions, premium SUV Lane ticketing
Weeks 14–15: Core Sprint 6 — loyalty interoperability API, first-party data platform, GDPR full consent, geotargeting, BLE beacons, Claude API integration
Week 16: Core Sprint 7 — Django admin expansion (all 10 modules), soft delete, cross-module integration testing, DevOps
Weeks 17–18: Testing, QA, Security Review & Launch Prep
Weeks 19–20: Post-Launch Hyper-care + Loyalty program go-live support


== PROPOSAL 4: PHASED BUILD ==

The Phased Build delivers the exact same end product as the Cadillac — but in three sequential phases, each with its own launch, its own investment, and its own set of features live in the market.

This is the recommended approach for Marques because: it gets something into the market in 8 weeks, it generates early traction and data, it gives a fundraising story ("we're live, here's what we learned"), and it allows capital to be raised between phases rather than needing the full amount upfront.

TOTAL TIMELINE: 26 weeks (8 + 6 + 12)
TOTAL INVESTMENT ACROSS ALL 3 PHASES: $356,304 net
Note: This is $17,785 more than the Cadillac standalone ($338,519) because hyper-care ($9,360) is included in each of the three phases separately rather than once. The trade-off is earlier launches and the ability to raise capital between phases.

--- PHASE 1: BASIC ---
Duration: 8 weeks
Cost before discount: $142,266
Discount (5%): -$7,113
NET INVESTMENT: $135,152
What's live after Phase 1: Everything in the Basic MVP proposal above.
Goal: Get into the app stores. Start building an audience. Prove the streaming works. Capture early SUV Lane ticket buyers. Begin earning loyalty points data.

--- PHASE 2: ORIGINAL LAYER ---
Duration: +6 weeks (added on top of Phase 1)
Cost before discount: $62,648 (includes $9,360 post-launch hyper-care)
Discount (5%): -$3,132
NET INVESTMENT: $59,516
Cumulative spend after Phase 2: $194,668
What's added in Phase 2: Everything in the Original that's not in the Basic — social features (emoji reactions, real-time comments, sharing), gamification (daily streaks, badges, referral program), push notifications with deep linking, dynamic ad insertion, advanced analytics, and expanded user profile (favourite teams, watch list, continue watching). SUV Lane Basic ticketing carries forward from Phase 1 unchanged.
What's still NOT in Phase 2: Card-linked loyalty, AI personalization, POS redemption, premium ticketing with gameday perks, highlights order form, subscriptions, geotargeting, beacons.

--- PHASE 3: CADILLAC LAYER ---
Duration: +12 weeks (added on top of Phases 1 & 2)
Cost before discount: $170,143 (includes $9,360 post-launch hyper-care)
Discount (5%): -$8,507
NET INVESTMENT: $161,636
Cumulative spend after Phase 3: $356,304
What's added in Phase 3: The full loyalty commerce engine — card-linked loyalty with Bronze→Platinum tiers, AI personalization via Claude API, POS in-venue redemption via cashier web screen, premium SUV Lane ticketing with gameday perks, geotargeting and BLE beacon notifications, microtransactions and subscriptions, gamification engine with custom sponsor-branded games, loyalty interoperability API, and full GDPR consent management.
Goal: The full Cadillac product is live — card-linked rewards, AI-driven personalization, real-world commerce integration.

--- PHASE-BY-PHASE ROADMAPS ---

Phase 1 Roadmap (8 weeks):
Weeks 1–2: Discovery, design, architecture, GDPR consent flow design, UI/UX for core screens
Weeks 3–4: Sprint 1 — backend APIs, authentication, GDPR consent logic
Weeks 5–6: Sprint 2 — video player, streaming, home screen, listings, SUV Lane ticketing, highlights form, user profile
Week 7: Sprint 3 — points system, Django admin, Heap analytics, Crashlytics, cross-device testing
Week 8: QA & app store submission
Weeks 9–10: Post-launch hyper-care

Phase 2 Roadmap (+6 weeks):
Week 1: Discovery — review Phase 1 learnings, design social/gamification/notification screens, API design for FCM and ad insertion
Weeks 2–3: Sprint 1 — FCM, push notifications, emoji reactions, real-time comments, social sharing
Weeks 4–5: Sprint 2 — daily streaks, badges, referral program, favourite teams, watchlist, continue watching, ad insertion, advanced analytics
Week 6: QA, regression testing across Phase 1 features, app store update
Weeks 7–8: Post-launch hyper-care

Phase 3 Roadmap (+12 weeks):
Week 1: Discovery — vendor confirmation (card-linking, BLE), POS cashier screen design, AI prompt design, loyalty tier/gamification UX
Weeks 1–2: Sprint 1 — card-linked loyalty, tiered rewards, POS redemption, premium ticketing, microtransactions, expanded Django admin
Week 3: Sprint 2 — Claude API AI personalization, geotargeting, BLE beacons, loyalty interoperability API, first-party data platform, full GDPR consent
Week 4: QA, security review, performance optimization, app store update
Weeks 5–6: Post-launch hyper-care + loyalty program go-live support

--- PHASE 3 COST NOTE ---
The Phase 3 cost slide in the deck shows $135,152 as the net figure — this is a copy/paste error (it matches the Phase 1 figure). The correct Phase 3 gross is $170,143 (including $9,360 hyper-care), net investment after 5% discount is $161,636.


== FEATURE COMPARISON ACROSS ALL PLANS ==

Feature | Basic | Original | Cadillac/Phase3
Basic Project Setup | ✓ | ✓ | ✓
Splash Screen | ✓ | ✓ | ✓
Email / Google / Apple Login | ✓ | ✓ | ✓
Signup + Delete Account | ✓ | ✓ | ✓
GDPR Consent on Signup | ✓ | ✓ | ✓
Team Preference Selection | ✗ | ✓ | ✓
User Profile | ✓ | ✓ | ✓
Favourite Teams / Leagues | ✗ | ✓ | ✓
Watch List | ✗ | ✓ | ✓
Continue Watching | ✗ | ✓ | ✓
Push Notification Preferences | ✗ | ✓ | ✓
Home Screen (Live Now, Upcoming) | ✓ | ✓ | ✓
Search by Team or League | ✗ | ✓ | ✓
Category Listings (Leagues) | ✓ | ✓ | ✓
Video Detail Page | ✓ | ✓ | ✓
Live + VOD Streaming | ✓ | ✓ | ✓
Partner Platform Broadcast Links | ✗ | ✗ | ✓
Video Player + ABR | ✓ | ✓ | ✓
Dynamic Ad Insertion | ✓ | ✓ | ✓
Heap Analytics | ✓ | ✓ | ✓
Robust First-Party Data | ✗ | ✗ | ✓
Live Emoji Reactions | ✗ | ✓ | ✓
Real-Time Comments | ✗ | ✓ | ✓
Social Sharing + Deep Linking | ✗ | ✓ | ✓
Watch & Earn Points | ✓ | ✓ | ✓
Daily Login / Streak Bonus | ✗ | ✓ | ✓
Referral Program (Share & Earn) | ✗ | ✓ | ✓
Badge & Level System | ✗ | ✓ | ✓
Custom Sponsor Mini-Games Engine | ✗ | ✗ | ✓
Card-Linked Multi-Currency Loyalty | ✗ | ✗ | ✓
Tiered Reward Levels (Bronze→Platinum) | ✗ | ✗ | ✓
FCM Push Notifications | ✗ | ✓ | ✓
Deep Linking from Notifications | ✗ | ✓ | ✓
Geotargeting + BLE Beacons | ✗ | ✗ | ✓
SUV Lane Ticketing — Basic | ✓ | ✓ | ✗
SUV Lane Ticketing — Premium (with perks) | ✗ | ✗ | ✓
Highlights Order Form | ✓ | ✗ | ✗
Microtransactions & Subscriptions | ✗ | ✗ | ✓
POS Integration for Loyalty Redemption | ✗ | ✗ | ✓
AI-Powered Personalization (Claude API) | ✗ | ✗ | ✓
Loyalty Interoperability API | ✗ | ✗ | ✓
Django Admin Interface | ✓ | ✓ | ✓
App Store Release Support | ✓ | ✓ | ✓
Crashlytics | ✓ | ✓ | ✓

Note on SUV Lane Ticketing: Basic SUV Lane ticketing (QR code entry, visual verification) is included in both the Basic MVP and the Original. The Cadillac upgrades this to Premium SUV Lane ticketing with a dedicated entry lane and gameday perks. The highlights order form is in Basic and Cadillac only — it is not in the Original.


== TECHNOLOGY STACK ==

Frontend: React Native (cross-platform iOS + Android, ~70% shared codebase, native performance)
Backend: Python / Django (REST API, business logic, admin interface)
Video Streaming: Vimeo (HLS/DASH via Vimeo API)
Video Player: ExoPlayer (Android) + AVPlayer (iOS) with adaptive bitrate
Ad Insertion: Transmit.live (SSAI/DAI — server-side ad insertion)
Payments: Stripe
Analytics: Heap
Crash Reporting: Firebase Crashlytics
Push Notifications: Firebase Cloud Messaging (FCM)
Real-Time Messaging: Firebase (WebSocket for comments)
AI Personalization (Cadillac only): Anthropic Claude API
Card-Linking (Cadillac only): Fidel or Marqeta (vendor selected during Discovery)
Geotargeting (Cadillac only): GPS geofencing + BLE beacon vendor SDK
Infrastructure: AWS (EC2 for compute, S3 for storage, CloudFront CDN, Auto Scaling, Route53, Elastic Load Balancer, AWS WAF)
Database: PostgreSQL (primary), Redis (real-time session/points state — Cadillac only)
Message Queue: RabbitMQ


== COST SUMMARY TABLE ==

Plan | Gross Cost | Discount | Net Investment | Timeline | Monthly Infra (10K MAU)
Basic MVP | $142,266 | -$7,113 | $135,152 | 8 weeks | $800–$1,200
Original | $195,553 | -$9,778 | $185,775 | 14 weeks | $800–$1,200
Cadillac | $356,335 | -$17,817 | $338,519 | 18 weeks | $2,170–$2,880
Phased Phase 1 | $142,266 | -$7,113 | $135,152 | 8 weeks | $800–$1,200
Phased Phase 2 | $62,648 | -$3,132 | $59,516 | +6 weeks | $800–$1,200
Phased Phase 3 | $170,143 | -$8,507 | $161,636 | +12 weeks | $2,170–$2,880
Phased Total | $375,057 | -$18,752 | $356,304 | 26 weeks | $2,170–$2,880

Post-Launch Maintenance Retainer (all plans): $19,656/month for 3 months
This covers: continuous platform optimization, proactive system health & security monitoring, reliable support and bug fixes.


== RISK MANAGEMENT ==

Basic & Original Plans — 4 risks identified:
1. Third-Party Integration Issues (Low-Medium): Vimeo API, Stripe, Transmit.live may take longer than expected. Mitigation: Spike week in discovery for API validation. Backup: Alternative streaming and payment providers pre-identified.
2. App Store Approval Delays (Low): Apple/Google policy review. Mitigation: Following platform guidelines from day one, proper privacy disclosures. Backup: Pre-submission review by platform experts.
3. Resource Availability (Low): Key developer unavailable. Mitigation: Two developers per critical role, daily standups, documentation. Backup: Bench of developers available within 48 hours.
4. Technical Performance Issues (Low): App crashes or streaming failures. Mitigation: 2-week post-launch hyper-care included, rapid hotfix capability.

Cadillac/Phased Plan — adds 2 additional risks:
5. Third-Party Integration (Medium, upgraded): Card-linking API, POS SDK, and BLE beacon integrations involve vendor dependencies. Mitigation: Vendor selection during Discovery, contractual SLA review. Backup: Alternative vendors pre-identified for each.
6. AI Personalization Quality (Low): Claude API recommendations improve with more user data — early users may see less personalized results before behavioral data accumulates. Mitigation: Content-based filtering used as starting point, transitioning to behavioral personalization as data grows. Backup: Rule-based recommendations as fallback.


== COMMON QUESTIONS ==

Q: What is the difference between the Cadillac and the Phased Build?
A: The end product is identical — the same 54 features. The difference is timeline, approach, and total cost. The Cadillac builds everything in one continuous 18-week sprint and launches all at once at $338,519 net. The Phased Build launches in three stages — 8 weeks (Basic), +6 weeks (Original features), +12 weeks (Cadillac features) — totalling 26 weeks and $356,304 net. The Phased Build costs $17,785 more because hyper-care ($9,360) is charged at the end of each phase rather than once. The benefit is you get something live in 8 weeks, generate real user data, and can raise capital between phases rather than needing the full amount upfront.

Q: Why does the Basic MVP not include push notifications?
A: To keep the timeline to 8 weeks and the cost under $135K, push notifications (FCM) were excluded from the Basic. They are included starting with the Original (Phase 2 of the Phased Build).

Q: What is "SUV Lane" ticketing exactly?
A: SUV Lane is a premium ticketing concept unique to SuvTV. In the Basic version, fans can browse events, purchase a ticket via Stripe, and receive a QR code in the app. They show the QR code to entry staff for visual verification — no scanning app is built. In the Cadillac version, SUV Lane becomes a premium experience: a dedicated entry lane at the venue, gameday perks, and integration with the loyalty program so attending events earns points.

Q: Can the Basic MVP points system be used for redemptions?
A: Not yet. The Basic builds the full points infrastructure (earning logic, data model, balance display) from day one — specifically designed so that redemption UI can be added later without rework. Redemption UI becomes available in the Cadillac / Phase 3.

Q: What does the card-linked loyalty program actually do for fans?
A: Fans link their credit or debit card to the app (via Fidel or Marqeta). When they make a purchase at a participating merchant — a restaurant near the venue, a travel partner, a grocery chain — the transaction is automatically detected and points are credited to their loyalty account. No manual check-in or coupon needed. This is the real-world commerce layer Marques described: rewards that follow fans into their everyday lives, not just at the game.

Q: What is the Claude API used for in the Cadillac?
A: Claude (by Anthropic) powers the AI personalization engine. When a fan opens the app, their behavioral data (what they've watched, what they've purchased, what rewards they've earned) is sent to Claude, which returns personalized content recommendations, tailored loyalty offers, and optimal times to send push notifications. No custom machine learning infrastructure is required — it runs on top of Anthropic's API.

Q: What does "geotargeting and beacon-capable" mean in practice?
A: GPS geofencing means that when a fan enters a defined geographic zone (e.g., within a mile of a sports complex), the app can send them a targeted push notification — a special offer, an early bird ticket, a sponsor deal. BLE beacons are small Bluetooth devices placed inside venues; when a fan's phone comes within proximity of a beacon, they can receive even more granular location-based content. Beacon hardware procurement and installation at venues is the client's responsibility.

Q: What is the monthly infrastructure cost and who pays it?
A: Intuitio Labs makes no margin on infrastructure. The monthly estimates ($800–$1,200 for Basic/Original; $2,170–$2,880 for Cadillac) are pass-through estimates based on real usage projections at 10,000 Monthly Active Users. As the user base grows, these costs will scale. The client pays these directly to AWS, Firebase, Heap, Stripe, Vimeo, and other third-party providers.

Q: Is development starting immediately?
A: No development has started. All four proposals are scoping documents. The next step is for Marques to approve a scope, sign contracts, and begin the Discovery phase.

Q: Who do I contact to move forward?
A: Reach out to Deep Kalina at Intuitio Labs directly to discuss next steps, finalize scope, and begin the engagement.
`;

const SUGGESTED_QUESTIONS = [
  "What's the difference between the four proposals?",
  "How much does the Basic MVP cost and what does it include?",
  "What is SUV Lane ticketing?",
  "How does the card-linked loyalty program work?",
  "What does the AI personalization engine actually do?",
  "Walk me through the Phased Build approach",
  "What is the monthly infrastructure cost?",
  "What features are only in the Cadillac?",
];
export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to the SuvTV Build Proposal Assistant. I have full details on all four proposals Intuitio Labs has prepared — Basic MVP, Original, Cadillac, and the Phased Build. Ask me anything about features, costs, timelines, or how the plans compare. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: PROJECT_CONTEXT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "I couldn't process that. Please try again.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Connection error. Please try again." }]);
    }
    setLoading(false);
  };

  const showSuggestions = messages.length === 1;

  return (
    <div style={{
      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: "#1a1919",
      height: "100vh",
      minHeight: "100vh",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      color: "#e8e4dc",
    }}>
      {/* Header — fixed */}
      <div style={{
        flexShrink: 0,
        borderBottom: "1px solid #2a2820",
        padding: "18px 32px",
        display: "flex",
        alignItems: "center",
        gap: "14px",
        background: "#0d0d0a",
      }}>
        <img src="/intuitio_logo_white.svg" height="28px" alt="Intuitio Labs" />
        <div style={{ width: "1px", height: "28px", background: "#2a2820", marginLeft: "4px" }} />
        <div>
          <div style={{ fontSize: "15px", fontWeight: "600", fontFamily: '"Neue Haas Grotesk", Helvetica, Arial, sans-serif', letterSpacing: "0.04em", color: "#ffffff" }}>
            SuvTV Build Proposal Assistant
          </div>
          <div style={{ fontSize: "11px", color: "#7a7468", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
            IntuitioLabs · March 2026
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <div style={{
            fontSize: "11px",
            color: "#c9a84c",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            border: "1px solid #3a3420",
            padding: "4px 10px",
            borderRadius: "2px",
          }}>
            Confidential
          </div>
        </div>
      </div>

      {/* Chat messages — scrollable */}
      <div
        className="chat-shell"
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          padding: "24px 32px 16px",
          maxWidth: "780px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          background: "#1a1919",
          borderLeft: "1px solid #262626",
          borderRight: "1px solid #262626",
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{
            marginBottom: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: m.role === "user" ? "flex-end" : "flex-start",
          }}>
            {m.role === "assistant" && (
              <div style={{
                fontSize: "10px",
                color: "#c9a84c",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
                paddingLeft: "2px",
              }}>SuvTV Build Assistant</div>
            )}
            <div style={{
              maxWidth: "88%",
              padding: m.role === "user" ? "12px 18px" : "20px 24px",
              background: m.role === "user"
                ? "linear-gradient(135deg, #1e1c14, #2a2618)"
                : "#111108",
              border: m.role === "user"
                ? "1px solid #3a3420"
                : "1px solid #1e1c14",
              borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "2px 12px 12px 12px",
              fontSize: "15px",
              lineHeight: "1.75",
              color: m.role === "user" ? "#d4cfc4" : "#e0dbd0",
              whiteSpace: "pre-wrap",
            }}>
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#7a7468",
            fontSize: "13px",
            paddingLeft: "2px",
          }}>
            <div style={{ display: "flex", gap: "4px" }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: "5px",
                  height: "5px",
                  background: "#c9a84c",
                  borderRadius: "50%",
                  animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                  opacity: 0.6,
                }} />
              ))}
            </div>
            Composing response...
          </div>
        )}

        {showSuggestions && !loading && (
          <div style={{ marginTop: "8px" }}>
            <div style={{
              fontSize: "11px",
              color: "#5a5650",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}>Common questions</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button key={i} onClick={() => sendMessage(q)} style={{
                  background: "transparent",
                  border: "1px solid #2a2820",
                  borderRadius: "20px",
                  padding: "7px 16px",
                  fontSize: "13px",
                  color: "#a09890",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s ease",
                }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = "#c9a84c";
                    e.target.style.color = "#c9a84c";
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = "#2a2820";
                    e.target.style.color = "#a09890";
                  }}
                >{q}</button>
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input — fixed at bottom */}
      <div style={{
        flexShrink: 0,
        borderTop: "1px solid #1e1c14",
        padding: "20px 32px",
        background: "#0d0d0a",
        maxWidth: "780px",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}>
        <div style={{
          display: "flex",
          gap: "12px",
          alignItems: "flex-end",
        }}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask about fund structure, returns, team, or how to invest..."
            rows={1}
            style={{
              flex: 1,
              background: "#111108",
              border: "1px solid #2a2820",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "14px",
              color: "#e8e4dc",
              fontFamily: "inherit",
              resize: "none",
              outline: "none",
              lineHeight: "1.5",
              maxHeight: "120px",
              overflow: "auto",
              transition: "border-color 0.15s",
            }}
            onFocus={e => e.target.style.borderColor = "#c9a84c"}
            onBlur={e => e.target.style.borderColor = "#2a2820"}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            style={{
              background: input.trim() && !loading
                ? "linear-gradient(135deg, #c9a84c, #a8881c)"
                : "#1e1c14",
              border: "none",
              borderRadius: "8px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              transition: "all 0.15s ease",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !loading ? "#0a0a08" : "#3a3830"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <div style={{
          marginTop: "10px",
          fontSize: "11px",
          color: "#3a3830",
          textAlign: "center",
          letterSpacing: "0.05em",
        }}>
          This assistant has access to all four SuvTV build proposals prepared by Intuitio Labs · For questions contact deep.kalina@intuitiolabs.com
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        textarea::placeholder { color: #3a3830; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2820; border-radius: 2px; }

        @media (max-width: 640px) {
          .chat-shell {
            padding: 20px 16px;
            border-left: none;
            border-right: none;
          }
          .founders-strip {
            padding: 6px 12px 8px;
          }
          .founders-strip-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 10px 12px;
            gap: 4px;
          }
          .founders-strip-label {
            min-width: auto;
            margin-bottom: 2px;
            font-size: 10px;
            letter-spacing: 0.12em;
          }
          .founders-strip-people {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px 10px;
          }
          .founders-strip-people img {
            width: 32px;
            height: 32px;
          }
          .founders-strip-people > div {
            min-width: 0;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            text-align: center;
          }
          .founders-strip-people > div > div:last-child {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0;
          }
          .founder-block .founder-name {
            font-size: 12px !important;
          }
          .founder-block .founder-role {
            font-size: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
