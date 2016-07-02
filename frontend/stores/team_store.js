"use strict";

const Store = require('flux/utils').Store;
const TeamConstants = require('../constants/team_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const TeamStore = new Store(AppDispatcher);

let _teams = {};

TeamStore.all = function(){
  return Object.assign({}, _teams);
};

TeamStore.find = function(id){
  return Object.assign({}, _teams[id]);
};

function resetAllTeams(teams) {
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
