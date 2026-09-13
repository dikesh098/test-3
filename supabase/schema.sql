-- ============================================================
-- eSakha 2.0 — Supabase schema
-- Run this once in the Supabase SQL editor (Project → SQL Editor)
-- on your project (ref shown in the dashboard URL).
-- Safe to re-run: every statement is idempotent.
-- ============================================================

create extension if not exists pgcrypto;

-- ----------------------------------------------------------------
-- 1. contacts — General "Contact Us" page submissions
-- ----------------------------------------------------------------
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text not null,
  message text,
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- 2. leads — Home page enquiry form + (future) AI assistant captures
-- ----------------------------------------------------------------
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  service text,
  message text,
  source text not null default 'website', -- 'website' | 'ai_assistant'
  status text not null default 'new',      -- 'new' | 'contacted' | 'closed'
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- 3. service_applications — "Apply for this service" forms on each
--    /services/[slug] detail page (with optional document upload)
-- ----------------------------------------------------------------
create table if not exists public.service_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  service_slug text not null,
  service_name text not null,
  message text,
  document_url text,
  status text not null default 'pending', -- 'pending' | 'in_progress' | 'completed'
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- 4. job_applications — Careers page applications
--    (kept compatible with the column names already used by the
--    pre-existing JobApplicationForm.jsx in the old codebase)
-- ----------------------------------------------------------------
create table if not exists public.job_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  position text not null,
  college text,
  message text,
  resume_url text,
  status text not null default 'new', -- 'new' | 'shortlisted' | 'rejected' | 'hired'
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- 5. payments — Log of completed Razorpay payments (for the admin
--    dashboard revenue summary in a later phase)
-- ----------------------------------------------------------------
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  service text not null,
  amount numeric not null,
  razorpay_payment_id text not null,
  status text not null default 'success', -- 'success' | 'failed'
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- 6. testimonials — editable from the future admin panel
-- ----------------------------------------------------------------
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  quote text not null,
  rating int not null default 5,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

-- ============================================================
-- Row Level Security
-- Public (anon) visitors may INSERT into the form tables (so the
-- forms work without a login) but may never SELECT/UPDATE/DELETE.
-- Only the service_role key (used server-side / by the admin panel)
-- bypasses RLS and can read everything.
-- ============================================================

alter table public.contacts             enable row level security;
alter table public.leads                enable row level security;
alter table public.service_applications enable row level security;
alter table public.job_applications     enable row level security;
alter table public.payments             enable row level security;
alter table public.testimonials         enable row level security;

drop policy if exists "public can insert contacts" on public.contacts;
create policy "public can insert contacts" on public.contacts
  for insert to anon, authenticated with check (true);

drop policy if exists "public can insert leads" on public.leads;
create policy "public can insert leads" on public.leads
  for insert to anon, authenticated with check (true);

drop policy if exists "public can insert service_applications" on public.service_applications;
create policy "public can insert service_applications" on public.service_applications
  for insert to anon, authenticated with check (true);

drop policy if exists "public can insert job_applications" on public.job_applications;
create policy "public can insert job_applications" on public.job_applications
  for insert to anon, authenticated with check (true);

drop policy if exists "public can insert payments" on public.payments;
create policy "public can insert payments" on public.payments
  for insert to anon, authenticated with check (true);

drop policy if exists "public can read published testimonials" on public.testimonials;
create policy "public can read published testimonials" on public.testimonials
  for select to anon, authenticated using (published = true);

-- ============================================================
-- Storage buckets
-- Public-read buckets so a stored file's public URL can be saved
-- straight into the row (resume_url / document_url above).
-- ============================================================

insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('service-documents', 'service-documents', true)
on conflict (id) do nothing;

drop policy if exists "public can upload resumes" on storage.objects;
create policy "public can upload resumes" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'resumes');

drop policy if exists "public can upload service documents" on storage.objects;
create policy "public can upload service documents" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'service-documents');

-- ============================================================
-- Seed data: starter testimonials (safe to edit/delete later)
-- ============================================================
insert into public.testimonials (name, role, quote, rating)
select * from (values
  ('Priyanka M.', 'Founder, EvokeEssentia', 'Yogesh and team understood our vision perfectly. From branding to launch, everything was professional and results-driven.', 5),
  ('DJ Helmet Team', 'Brand Growth', 'They handle our social media growth. Consistent, professional, and we are seeing real results month over month.', 5),
  ('Ashish K.', 'Business Owner', 'Best government services experience. No hassle, transparent pricing, and they completed everything on time.', 5)
) as v(name, role, quote, rating)
where not exists (select 1 from public.testimonials);
