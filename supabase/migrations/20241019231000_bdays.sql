create table
  public.bdays (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    homie text not null,
    dob date not null,
    constraint bdays_pkey primary key (id),
    constraint bdays_homie_key unique (homie)
  ) tablespace pg_default;
