const Store = require('flux/utils').Store;
const TeamConstants = require('../constants/team_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionStore = require('./session_store');

const TeamStore = new Store(AppDispatcher);

let _teams = {};

TeamStore.all = function(){
  return Object.assign({}, _teams);
};

TeamStore.findByUser = function (user_id) {
  let teams = [];


  Object.keys(_teams).forEach((key) => {
    let newKey = parseInt(key);

    if (_teams[newKey].author_id === user_id) {
      teams.push(_teams[key]);
    }
  });

  return teams;
};


TeamStore.find = function(id){
  return Object.assign({}, _teams[id]);
};

TeamStore.currentTeam = function() {
  // return _teams[SessionStore.currentUser().team_id];
};

function resetAllTeams(teams) {
  console.log("reset all teams");

  teams.forEach((team) => {
    _teams[team.id] = team;
  });

  TeamStore.__emitChange();
}

function resetSingleTeam(team) {
  _teams[team.id] = team;
  TeamStore.__emitChange();
}

function removeTeam(id) {
  delete _teams[id];

  TeamStore.__emitChange();
}

TeamStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case TeamConstants.TEAMS_RECEIVED:
      resetAllTeams(payload.teams);
      break;
    case TeamConstants.TEAM_RECEIVED:
      resetSingleTeam(payload.team);
      break;
    case TeamConstants.TEAM_REMOVED:
      removeTeam(payload.id);
      break;
  }
};

module.exports = TeamStore;
