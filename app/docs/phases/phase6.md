# Phase 6: Profile

## Rails
### Models
* Profile

### Controllers
* Api::ProfilesController (create, destroy, index, show, update)

### Views
* users/index.json.jbuilder
* users/show.json.jbuilder
* users/edit.json.jbuilder

## Flux
### Views (React Components)
* ProfilesIndex
  - ProfileIndexItem
* ProfileShow
* ProfileForm

### Stores
* Profile

### Actions
* ApiActions.receiveAllProfiles -> triggered by ApiUtil
* ApiActions.receiveSingleProfile
* ApiActions.deleteProfile
* UserActions.fetchAllUsers -> triggers ApiUtil
* UserActions.fetchSingleUser
* UserActions.createUser
* UserActions.updateUser
* UserActions.destroyUser

### ApiUtil
* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser
* ApiUtil.createUser
* ApiUtil.updateUser
* ApiUtil.destroyUser

## Gems/Libraries
