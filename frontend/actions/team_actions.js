"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const TeamConstants = require('../constants/team_constants');
const TeamApiUtil = require('../util/team_api_util');

const TeamActions = {
  // fetchAllTeams (filters) {
  //   TeamApiUtil.fetchAllTeams(filters, TeamActions.receiveAllTeams);
  // },
  // fetchTeam (filters) {
  //   TeamApiUtil.fetchTeams(filters, TeamActions.receiveAllTeams);
  // },
  // createTeam (team) {
  //   TeamApiUtil.createTeam(team, TeamActions.receiveSingleTeam);
  // },

  fetchAllTeams () {
    // console.log("fetch all teams");
    TeamApiUtil.fetchAllTeams(TeamActions.receiveAllTeams);
  },

  fetchTeam (id) {
    TeamApiUtil.fetchTeam(id, TeamActions.receiveTeam);
  },

  createTeam (team) {
    TeamApiUtil.createTeam(team, TeamActions.receiveSingleTeam);
  },

  deleteTeam(id) {
    TeamApiUtil.deleteTeam(id, TeamActions.removeTeam);
  },

  editTeam(team){
    TeamApiUtil.updateTeam(team, TeamActions.updateTeam);
  },

  removeTeam (id) {
    AppDispatcher.dispatch({
      actionType: TeamConstants.TEAM_REMOVED,
      id: id
    });
  },

  updateTeam (team) {
    AppDispatcher.dispatch({
      actionType: TeamConstants.TEAM_RECEIVED,
      team: team
    });
  },

  receiveAllTeams(teams) {
    // console.log("receive all teams");
    AppDispatcher.dispatch({
      actionType: TeamConstants.TEAMS_RECEIVED,
      teams: teams
    });
  },

  receiveSingleTeam (team) {
    AppDispatcher.dispatch({
      actionType: TeamConstants.TEAM_RECEIVED,
      team: team
    });
  }
};

module.exports = TeamActions;
