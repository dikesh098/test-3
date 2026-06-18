# eSakha 2.0

The upgraded eSakha website — Next.js 15, TypeScript, Tailwind CSS, Framer Motion, React Hook Form,
and Supabase — rebuilt from the original single-page site while keeping the same green/gold brand,
logo, copy, pricing, and Razorpay payment flow you already had live.

## What's in this build

- **Every page from the original site**, now as real routes: Home, Careers, Terms & Refund Policy —
  plus new pages the upgrade brief asked for: About, Services hub, a dedicated page per service,
  Contact, FAQ, Blog, and Privacy Policy.
- **16 service detail pages** (`/services/[slug]`) — the 9 original services (GST, Udyam, ITR, FSSAI,
  Gumasta, PF Withdrawal, Website Dev, App Dev, Digital Marketing) plus the new categories the brief
  requested (Company Registration, Trademark Registration, GeM Registration, Tender Consultancy,
  AI Solutions, PAN Card Services, Documentation Services). Edit them all in one place:
  `src/lib/data/services.ts`.
- **Every form wired to Supabase**: home page enquiry form, the dedicated Contact page, each service's
  "Apply" form (with optional document upload), and the Careers application form (with resume upload).
  If Supabase isn't configured yet, forms gracefully fall back to opening WhatsApp instead of failing.
- **The same Razorpay checkout** as before (UPI, cards, net banking, wallets), now available from any
  page via a shared "Pay Online" button, plus successful payments are logged to a `payments` table.
- **An AI chat assistant** (floating button, bottom-right) grounded in your real services/pricing/FAQ
  data — it answers questions, stays on-topic, and automatically saves a lead to Supabase once it has
  a visitor's name and phone number.
- **SEO**: per-page metadata, `sitemap.xml`, `robots.txt`, Open Graph tags, and LocalBusiness JSON-LD
  structured data targeting Nagpur/Maharashtra.

## What's intentionally NOT in this build yet

The original brief also asked for an **admin panel** to manage all this from a dashboard. That's the
one remaining piece — the database schema already has every table an admin dashboard would read from
(`leads`, `contacts`, `service_applications`, `job_applications`, `payments`, `testimonials`), so for
now, view and manage submissions directly in the Supabase Table Editor.

A few About-page sections (founder message, team, timeline) are written as honest starter copy — I
don't have your real founder bio, team photos, or exact company milestones, so I kept that section
generic and clearly editable rather than inventing specific facts. Swap in your real story whenever
you're ready, in `src/app/about/page.tsx`.

## Getting started locally

```bash
npm install
cp .env.example .env.local   # then fill in real values, see below
npm run dev
```

Open http://localhost:3000.

## Connecting Supabase

1. Go to [supabase.com](https://supabase.com) → your project (or create a new one).
2. **Settings → API**: copy the Project URL and the `anon` `public` key into `.env.local` as
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. **SQL Editor**: paste the contents of `supabase/schema.sql` and run it. This creates every table
   (`contacts`, `leads`, `service_applications`, `job_applications`, `payments`, `testimonials`), sets
   up Row Level Security so visitors can submit forms but never read other people's data, and creates
   the `resumes` and `service-documents` storage buckets.
4. Restart `npm run dev` (or redeploy). Forms will now insert real rows instead of falling back to
   WhatsApp.

You can browse submissions for now directly in the Supabase Table Editor — that's your admin view
until the dedicated admin panel is built.

## Connecting Razorpay

The Razorpay **key ID** from your original site is already wired in as a fallback
(`NEXT_PUBLIC_RAZORPAY_KEY_ID` in `src/lib/constants.ts`). To use a different key, set
`NEXT_PUBLIC_RAZORPAY_KEY_ID` in your environment. The key ID is safe to expose publicly — it's how
Razorpay's checkout widget identifies your account. The **key secret** is only needed later for
server-side payment verification/webhooks; never expose it with a `NEXT_PUBLIC_` prefix.

## Connecting the AI Assistant

1. Get an API key from [platform.openai.com](https://platform.openai.com) (Settings → API Keys) and
   add billing — chat usage on a small model like `gpt-4o-mini` is inexpensive but isn't free.
2. Add `OPENAI_API_KEY=sk-...` to your `.env.local` (and to Vercel's environment variables when you
   deploy). Never prefix this with `NEXT_PUBLIC_` — it must stay server-side only.
3. That's it — the chat button (bottom-right, separate from the WhatsApp button) will start working.
   It already knows your full service catalogue, pricing, and FAQ content from
   `src/lib/data/services.ts` and `src/lib/data/faqs.ts`, so update those files and the assistant's
   answers update automatically — no retraining needed.
4. When a visitor gives their name and phone number while chatting, the assistant automatically saves
   it to the `leads` table in Supabase with `source = 'ai_assistant'`, the same table the home page
   enquiry form uses.
5. If `OPENAI_API_KEY` isn't set, the widget still renders but tells visitors the assistant isn't
   configured yet — it won't break the site.

To change the model (e.g. to a more capable one), set `OPENAI_MODEL` in your environment — see
`.env.example`.

## Deploying

This is a standard Next.js 15 app — deploys cleanly to **Vercel** (recommended, zero config):

1. Push this folder to a GitHub repo.
2. Import it on [vercel.com](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy. Update your domain's DNS to point at Vercel when ready.

It will also run on any Node.js host that supports Next.js (Render, Railway, a VPS with `npm run build && npm start`, etc.).

## Project structure

```
src/
  app/                 Routes (App Router) — one folder per page
    api/chat/           AI assistant API route (calls OpenAI, saves leads to Supabase)
  components/
    layout/             Navbar, Footer, WhatsApp float button
    chat/               Floating AI assistant widget
    payment/            Global Razorpay modal + context (usePayModal)
    forms/              All Supabase-wired forms
    home/               Home page sections
    services/, faq/      Page-specific components
    ui/                 Shared primitives (Reveal animation, section headings, etc.)
  lib/
    data/               Editable content: services, jobs, blog posts, FAQs, testimonials, portfolio
    ai/                 AI assistant system prompt (built from the data above)
    supabase/           Browser Supabase client
    constants.ts        Business info (phone, address, hours, socials) — edit this first
supabase/
  schema.sql            Run this once in the Supabase SQL editor
```

## Editing content

Almost everything a non-developer would want to change lives in `src/lib/data/` and
`src/lib/constants.ts` — service pricing and descriptions, job openings, blog posts, FAQs, and
business contact info are all plain TypeScript data files, not buried in markup.
