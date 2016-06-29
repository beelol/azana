# Phase 7: Team

## Rails
### Models
* Team

### Controllers
* Api::TeamsController (create, destroy, index, show, update)

### Views
* teams/index.json.jbuilder
* teams/show.json.jbuilder

## Flux
### Views (React Components)
* TeamsIndex
  - TeamIndexItem
* TeamForm

### Stores
* Team

### Actions
* ApiActions.receiveAllTeams -> triggered by ApiUtil
* ApiActions.receiveSingleTeam
* ApiActions.deleteTeam
* TeamActions.fetchAllTeams -> triggers ApiUtil
* TeamActions.fetchSingleTeam
* TeamActions.createTeam
* TeamActions.editTeam
* TeamActions.destroyTeam

### ApiUtil
* ApiUtil.fetchAllTeams
* ApiUtil.fetchSingleTeam
* ApiUtil.createTeam
* ApiUtil.editTeam
* ApiUtil.destroyTeam

## Gems/Libraries
