"use strict";

const ApiUtil = {
  // fetchAllProjects (filters, success) {
  //   $.get('api/projects', filters, success);
  // },
  // fetchProject () {
  //   $.get('api/project/:id', filters, success);
  // },
  // createProject (data, success) {
  //   $.post('api/projects', { project: data }, success);
  // },

  fetchAllProjects (cb) {
    $.ajax({
      url: "api/projects",
      success: cb
    });
  },

  fetchProject (id, cb) {
    $.ajax({
      url: `api/projects/${id}`,
      success: cb
    });
  },

  deleteProject (id, cb) {
    $.ajax({
      url: `api/projects/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createProject (newProject, cb, redirectCb) {
    $.ajax({
      url: "api/projects",
      method: "POST",
      data: {project: newProject},
      success: function (project) {
        cb(project, redirectCb);
      }
    });
  },

  updateProject (project, cb, redirectCb) {
    $.ajax({
      url: `api/projects/${project.id}`,
      method: "PATCH",
      data: {project: project},
      success: function (project) {
        cb(project, redirectCb);
      }
    });
  }
};

module.exports = ApiUtil;

/* Stuff for testing */

// let newProject = {id: 2, title: "nice", project_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/projects",
//   method: "POST",
//   data: {project: newProject},
//   success: function (project) {
//     console.log(project);
//   }
// });
