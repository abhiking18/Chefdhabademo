import { createClient } from '@supabase/supabase-js';

export const SUPABASE_PROJECT_ID = 'zvenqyvqjopnixfkwndo';
export const SUPABASE_URL = 'https://zvenqyvqjopnixfkwndo.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_noWfqqzoB6_gy-u-sNKhrw__en3GeRw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const SUPABASE_SQL_SETUP_SCRIPT = `-- ========================================================
-- NEW HIGHWAY CHEF DHABA - SUPABASE SCHEMA SETUP SCRIPT
-- Paste this into your Supabase Dashboard -> SQL Editor -> Click 'Run'
-- ========================================================

-- 1. Create gallery table for photos
create table if not exists public.gallery (
  id text primary key,
  title text not null,
  category text not null,
  image text not null,
  caption text,
  aspect text default 'wide',
  is_real_photo boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create menu_items table
create table if not exists public.menu_items (
  id text primary key,
  name text not null,
  category text not null,
  description text,
  price numeric not null,
  half_price numeric,
  is_veg boolean default true,
  is_signature boolean default false,
  image text,
  tag text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create orders table
create table if not exists public.orders (
  id text primary key,
  customer_name text,
  phone text,
  items jsonb,
  total_amount numeric,
  notes text,
  status text default 'received',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Enable Row Level Security (RLS)
alter table public.gallery enable row level security;
alter table public.menu_items enable row level security;
alter table public.orders enable row level security;

-- 5. Create Permissive Policies for the Dhaba Website Demo
drop policy if exists "Allow public read gallery" on public.gallery;
create policy "Allow public read gallery" on public.gallery for select using (true);

drop policy if exists "Allow public insert gallery" on public.gallery for insert with check (true);
create policy "Allow public insert gallery" on public.gallery for insert with check (true);

drop policy if exists "Allow public delete gallery" on public.gallery for delete using (true);
create policy "Allow public delete gallery" on public.gallery for delete using (true);

drop policy if exists "Allow public update gallery" on public.gallery for update using (true);
create policy "Allow public update gallery" on public.gallery for update using (true);

drop policy if exists "Allow public read menu_items" on public.menu_items;
create policy "Allow public read menu_items" on public.menu_items for select using (true);

drop policy if exists "Allow public insert menu_items" on public.menu_items;
create policy "Allow public insert menu_items" on public.menu_items for insert with check (true);

drop policy if exists "Allow public update menu_items" on public.menu_items;
create policy "Allow public update menu_items" on public.menu_items for update using (true);

drop policy if exists "Allow public delete menu_items" on public.menu_items;
create policy "Allow public delete menu_items" on public.menu_items for delete using (true);

drop policy if exists "Allow public read orders" on public.orders;
create policy "Allow public read orders" on public.orders for select using (true);

drop policy if exists "Allow public insert orders" on public.orders;
create policy "Allow public insert orders" on public.orders for insert with check (true);

drop policy if exists "Allow public update orders" on public.orders;
create policy "Allow public update orders" on public.orders for update using (true);
`;
