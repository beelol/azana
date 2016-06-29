# Schema Information

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
author_id   | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key, indexed
completed   | boolean   | not null, default: false

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key, indexed
title       | string    | not null
description | string    |

## teams
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
department      | string    |
about           | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
