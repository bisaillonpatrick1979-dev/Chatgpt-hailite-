create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text not null,
  region text not null,
  currency text not null,
  tax_name text not null,
  tax_rate numeric not null default 0,
  unit_system text not null,
  created_at timestamptz not null default now()
);

create table if not exists app_users (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  auth_user_id uuid,
  full_name text not null,
  role text not null check (role in ('owner','admin','employee','subcontractor')),
  access_code_hash text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id),
  name text not null,
  client_name text,
  address text,
  region text,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists project_assignments (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id),
  user_id uuid not null references app_users(id),
  pay_mode text not null,
  rate numeric not null default 0
);

create table if not exists project_tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id),
  assigned_user_id uuid references app_users(id),
  title text not null,
  section text,
  status text not null default 'todo',
  created_at timestamptz not null default now()
);

alter table companies enable row level security;
alter table app_users enable row level security;
alter table projects enable row level security;
alter table project_assignments enable row level security;
alter table project_tasks enable row level security;
