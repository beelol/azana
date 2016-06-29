# Phase 5: Projects

## Rails
### Models
* Project

### Controllers
* Api::ProjectsController (create, destroy, index, show, update)

### Views
* projects/index.json.jbuilder

## Flux
### Views (React Components)
* ProjectsIndex
  - ProjectIndexItem
* ProjectShow
* ProjectForm

### Stores
* Project

### Actions
* ApiActions.receiveAllProjects -> triggered by ApiUtil
* ApiActions.receiveSingleProject
* ApiActions.deleteProject
* ProjectActions.fetchAllProjects -> triggers ApiUtil
* ProjectActions.fetchSingleProject
* ProjectActions.createProject
* ProjectActions.updateProject
* ProjectActions.destroyProject

### ApiUtil
* ApiUtil.fetchAllProjects
* ApiUtil.fetchSingleProject
* ApiUtil.createProject
* ApiUtil.updateProject
* ApiUtil.destroyProject

## Gems/Libraries
