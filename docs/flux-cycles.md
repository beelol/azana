# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Task Cycles

### Tasks API Request Actions

* `fetchAllTasks`
  0. invoked from `TasksIndex` `didMount`/`willReceiveProps`
  1. `GET /api/tasks` is called.
  2. `receiveAllTasks` is set as the callback.

* `createTask`
  0. invoked from new task button `onClick`
  1. `POST /api/tasks` is called.
  2. `receiveSingleTask` is set as the callback.

* `fetchSingleTask`
  0. invoked from `TaskDetail` `didMount`/`willReceiveProps`
  1. `GET /api/tasks/:id` is called.
  2. `receiveSingleTask` is set as the callback.

* `updateTask`
  0. invoked from `TaskForm` `onSubmit`
  1. `POST /api/tasks` is called.
  2. `receiveSingleTask` is set as the callback.

* `destroyTask`
  0. invoked from delete task button `onClick`
  1. `DELETE /api/tasks/:id` is called.
  2. `removeTask` is set as the callback.

### Tasks API Response Actions

* `receiveAllTasks`
  0. invoked from an API callback.
  1. `Task` store updates `_tasks` and emits change.

* `receiveSingleTask`
  0. invoked from an API callback.
  1. `Task` store updates `_tasks[id]` and emits change.

* `removeTask`
  0. invoked from an API callback.
  1. `Task` store removes `_tasks[id]` and emits change.

### Store Listeners

* `TasksIndex` component listens to `Task` store.
* `TaskDetail` component listens to `Task` store.

## Project Cycles

### Project API Request Actions

* `fetchAllProjects`
  0. invoked from `ProjectsIndex` `didMount`/`willReceiveProps`
  1. `GET /api/projects` is called.
  2. `receiveAllProjects` is set as the callback.

* `createProject`
  0. invoked from new project button `onClick`
  1. `POST /api/projects` is called.
  2. `receiveSingleProject` is set as the callback.

* `fetchSingleProject`
  0. invoked from `ProjectDetail` `didMount`/`willReceiveProps`
  1. `GET /api/projects/:id` is called.
  2. `receiveSingleProject` is set as the callback.

* `updateProject`
  0. invoked from `ProjectForm` `onSubmit`
  1. `POST /api/projects` is called.
  2. `receiveSingleProject` is set as the callback.

* `destroyProject`
  0. invoked from delete project button `onClick`
  1. `DELETE /api/projects/:id` is called.
  2. `removeProject` is set as the callback.

### Projects API Response Actions

* `receiveAllProjects`
  0. invoked from an API callback.
  1. `Project` store updates `_projects` and emits change.

* `receiveSingleProject`
  0. invoked from an API callback.
  1. `Project` store updates `_projects[id]` and emits change.

* `removeProject`
  0. invoked from an API callback.
  1. `Project` store removes `_projects[id]` and emits change.

### Store Listeners

* `ProjectsIndex` component listens to `Project` store.

## Team Cycles

### Team API Request Actions

* `fetchAllTeams`
  0. invoked from `TeamsIndex` `didMount`/`willReceiveProps`
  1. `GET /api/teams` is called.
  2. `receiveAllTeams` is set as the callback.

* `createTeam`
  0. invoked from new team button `onClick`
  1. `POST /api/teams` is called.
  2. `receiveSingleTeam` is set as the callback.

* `fetchSingleTeam`
  0. invoked from `TeamDetail` `didMount`/`willReceiveProps`
  1. `GET /api/teams/:id` is called.
  2. `receiveSingleTeam` is set as the callback.

* `updateTeam`
  0. invoked from `TeamForm` `onSubmit`
  1. `POST /api/teams` is called.
  2. `receiveSingleTeam` is set as the callback.

* `destroyTeam`
  0. invoked from delete team button `onClick`
  1. `DELETE /api/teams/:id` is called.
  2. `removeTeam` is set as the callback.

### Teams API Response Actions

* `receiveAllTeams`
  0. invoked from an API callback.
  1. `Team` store updates `_teams` and emits change.

* `receiveSingleTeam`
  0. invoked from an API callback.
  1. `Team` store updates `_teams[id]` and emits change.

* `removeTeam`
  0. invoked from an API callback.
  1. `Team` store removes `_teams[id]` and emits change.

### Store Listeners

* `TeamsIndex` component listens to `Team` store.

## User Cycles

### User API Request Actions

* `fetchAllUsers`
  0. invoked from `UsersIndex` `didMount`/`willReceiveProps`
  1. `GET /api/teams` is called.
  2. `receiveAllUsers` is set as the callback.

* `createUser`
  0. invoked from new team button `onClick`
  1. `POST /api/teams` is called.
  2. `receiveSingleUser` is set as the callback.

* `fetchSingleUser`
  0. invoked from `UserDetail` `didMount`/`willReceiveProps`
  1. `GET /api/teams/:id` is called.
  2. `receiveSingleUser` is set as the callback.

* `updateUser`
  0. invoked from `UserForm` `onSubmit`
  1. `POST /api/teams` is called.
  2. `receiveSingleUser` is set as the callback.

* `destroyUser`
  0. invoked from delete team button `onClick`
  1. `DELETE /api/teams/:id` is called.
  2. `removeUser` is set as the callback.

### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback.
  1. `User` store updates `_teams` and emits change.

* `receiveSingleUser`
  0. invoked from an API callback.
  1. `User` store updates `_teams[id]` and emits change.

* `removeUser`
  0. invoked from an API callback.
  1. `User` store removes `_teams[id]` and emits change.

### Store Listeners

* `Profile` component listens to `User` store for user info.
