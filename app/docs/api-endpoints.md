# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Tasks

- `GET /api/tasks`
  - Tasks index/search
  - accepts `tag_name` query param to list tasks by tag
  - accepts pagination params (if I get there)
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Projects

- `GET /api/projects`
- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/projects/:id/tasks`
  - Gets all tasks of a specified project

### Teams

- `GET /api/teams`
- `POST /api/teams`
- `GET /api/teams/:id`
- `PATCH /api/teams/:id`
- `DELETE /api/teams/:id`
- `GET /api/teams/:id/projects`
  - Gets all projects of a specified team
- `GET /api/teams/:id/users`
  - Gets all members of a specified team
