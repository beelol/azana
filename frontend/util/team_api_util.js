"use strict";

const ApiUtil = {
  // fetchAllTeams (filters, success) {
  //   $.get('api/teams', filters, success);
  // },
  // fetchTeam () {
  //   $.get('api/team/:id', filters, success);
  // },
  // createTeam (data, success) {
  //   $.post('api/teams', { team: data }, success);
  // },

  fetchAllTeams (cb) {
    $.ajax({
      url: "api/teams",
      success: cb
    });
  },

  fetchTeam (id, cb) {
    $.ajax({
      url: `api/teams/${id}`,
      success: cb
    });
  },

  deleteTeam (id, cb) {
    $.ajax({
      url: `api/teams/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createTeam (newTeam, cb, redirectCb) {
    $.ajax({
      url: "api/teams",
      method: "POST",
      data: {team: newTeam},
      success: function (team) {
        cb(team, redirectCb);
      }
    });
  },

  updateTeam (team, cb, redirectCb) {
    $.ajax({
      url: `api/teams/${team.id}`,
      method: "PATCH",
      data: {team: team},
      success: function (team) {
        cb(team, redirectCb);
      }
    });
  }
};

module.exports = ApiUtil;

/* Stuff for testing */

// let newTeam = {id: 2, title: "nice", team_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/teams",
//   method: "POST",
//   data: {team: newTeam},
//   success: function (team) {
//     console.log(team);
//   }
// });
