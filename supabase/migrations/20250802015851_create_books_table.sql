drop table if exists books;

create table books (
    id uuid not null primary key default gen_random_uuid(),
    author text not null,
    title text not null,
    cover_i int,
    first_publish_year int not null,
    genre text
);

alter table books enable row level security;  