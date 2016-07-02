"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectConstants = require('../constants/project_constants');
const ProjectApiUtil = require('../util/project_api_util');

const ProjectActions = {
  // fetchAllProjects (filters) {
  //   ProjectApiUtil.fetchAllProjects(filters, ProjectActions.receiveAllProjects);
  // },
  // fetchProject (filters) {
  //   ProjectApiUtil.fetchProjects(filters, ProjectActions.receiveAllProjects);
  // },
  // createProject (project) {
  //   ProjectApiUtil.createProject(project, ProjectActions.receiveSingleProject);
  // },

  fetchAllProjects () {
    ProjectApiUtil.fetchAllProjects(ProjectActions.receiveAllProjects);
  },

  fetchProject (id) {
    ProjectApiUtil.fetchProject(id, ProjectActions.receiveProject);
  },

  createProject (project) {
    ProjectApiUtil.createProject(project, ProjectActions.receiveSingleProject);
  },

  deleteProject(id) {
    ProjectApiUtil.deleteProject(id, ProjectActions.removeProject);
  },

  editProject(project){
    ProjectApiUtil.updateProject(project, ProjectActions.updateProject);
  },

  removeProject (id) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_REMOVED,
      id: id
    });
  },

  updateProject (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    });
  },

  receiveAllProjects(projects) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveSingleProject (project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    });
  }
};

module.exports = ProjectActions;
