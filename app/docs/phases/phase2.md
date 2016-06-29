# Phase 2: Task Model, API, and basic APIUtil

## Rails
### Models
* Task
* Team
* Project

### Controllers
* Api::TasksController (create, destroy, index, show, update)

### Views
* projects/index.json.jbuilder
* projects/show.json.jbuilder
* tasks/show.json.jbuilder
* tasks/edit.json.jbuilder

## Flux
### Views (React Components)
* TasksIndex
  - TasksIndexItem
* TaskForm

### Stores
* Task

### Actions
* ApiActions.receiveAllTasks -> triggered by ApiUtil
* ApiActions.receiveSingleTask
* ApiActions.deleteTask
* TaskActions.fetchAllTasks -> triggers ApiUtil
* TaskActions.fetchSingleTask
* TaskActions.createTask
* TaskActions.editTask
* TaskActions.destroyTask

### ApiUtil
* ApiUtil.fetchAllTasks
* ApiUtil.fetchSingleTask
* ApiUtil.createTask
* ApiUtil.editTask
* ApiUtil.destroyTask

## Gems/Libraries
* Flux Dispatcher (npm)
