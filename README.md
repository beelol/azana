# Azana

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://azana-capstone.herokuapp.com/#/login?_k=hp8x50

## Minimum Viable Product

Azana is a web application inspired by Asana that I will build using Rails, React, and Flux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku *
- [ ] New account creation, login, and guest/demo login *
- [ ] A production README, replacing this README
- [ ] Tasks for projects
  - [ ] Ability to add names to tasks *
  - [ ] Ability to add descriptions to tasks *
  - [ ] Adequate seed data
  - [ ] Adequate styling
  - [ ] Smooth bug free navigation
- [ ] Projects with lists of tasks
  - [ ] Ability to create tasks
  - [ ] Ability complete a task
  - [ ] Ability to delete a task
  - [ ] Ability for whole team to view projects
  - [ ] Adequate seed data
  - [ ] Adequate styling
  - [ ] Smooth bug free navigation
- [ ] Teams to manage projects
  - [ ] Ability to join a team
  - [ ] Ability to invite to a team
  - [ ] Team permissions to hide projects from unwanted viewers
  - [ ] Adequate seed data
  - [ ] Adequate styling
  - [ ] Smooth bug free navigation
- [ ] Profiles for users
  - [ ] Ability to add details including picture, name, role, department, and about.
  - [ ] Ability to view user profile.
  - [ ] Adequate seed data
  - [ ] Adequate styling
  - [ ] Smooth bug free navigation

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] Set up new project
- [ ] Create `User` model
- [ ] Implement authentication
- [ ] Add Sign Up/Sign In pages
- [ ] Create basic landing page viewed upon login

### Phase 2: Task Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Tasks can be created, read, edited and destroyed through
the API.

- [ ] Create `Task` model
- [ ] Create skeleton `Team` model
- [ ] Create skeleton `Project` model
- [ ] Seed the database with a small amount of test data
- [ ] CRUD API for tasks (`TasksController`)
- [ ] jBuilder views for tasks
- [ ] Set up Webpack & Flux scaffold
- [ ] Set up `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Tasks can be created, read, edited and destroyed with the
user interface.

- [ ] Set up the flux loop with skeleton files
- [ ] Set up React Router
- Implement each project related component, building out the flux loop as needed.
  - [ ] `App`
  - [ ] `TasksIndex`
  - [ ] `TaskIndexItem`
  - [ ] `TaskForm`

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] Create a basic style guide
- [ ] Add basic colors & styles

### Phase 5: Projects (1 day, W2 Tu 12pm)

**Objective:** Projects can be created, edited, and destroyed. Projects have a list of tasks which can be added to through the Project view.

- [ ] Finish `Project` model
- [ ] Finish `Project` component
- build out API, Flux loop, and components for:
  - [ ] Project CRUD
  - [ ] Fetching tasks for projects
  - [ ] Adding tasks to a project.
  - [ ] Editing a task
  - [ ] Deleting tasks from a project.
  - [ ] Viewing tasks by projects.
- Use CSS to style new views

### Phase 6: Profile (1 days, W2 Th 12pm)

**Objective:** Users have a profile which can store a picture and information about a user.

- [ ] Update `User` model to include profile info
- [ ] Finish `Profile` component
- build out API, Flux loop, and components for:
  - [ ] Viewing a user's profile
  - [ ] Adding information to a user's profile
  - [ ] Editing information on a user's profile
  - [ ] Style new elements

### Phase 7: Team (0.5 days, W2 Th 6pm)

**objective:** Finish up the Team feature.

- [ ] Finish the `Team` model
- [ ] Finish the `Team` component
- [ ] Allow inviting other users to a team.
- [ ] Teams have many users, users many teams
- [ ] Projects belong to a team, teams have many projects
- [ ] Allow viewing, editing, creation, and destruction of a team.
- [ ] Allow adding projects to, and removing projects from a team.

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add any missing app navigation to the menu
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Calendar
- [ ] Comments on tasks
- [ ] Assign team members to tasks
- [ ] Conversations

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
[phase-six]: docs/phases/phase6.md
[phase-seven]: docs/phases/phase7.md
[phase-eight]: docs/phases/phase8.md
