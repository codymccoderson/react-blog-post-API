CREATE TABLE authors (
    id serial PRIMARY KEY,
    name varchar(100),
    email varchar(200)

);

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(200),
    content text,
    author_id integer REFERENCES author(id)
);