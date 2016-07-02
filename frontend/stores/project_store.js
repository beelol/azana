"use strict";

const Store = require('flux/utils').Store;
const ProjectConstants = require('../constants/project_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const ProjectStore = new Store(AppDispatcher);

let _projects = {};

ProjectStore.all = function(){
  return Object.assign({}, _projects);
};

ProjectStore.find = function(id){
  return Object.assign({}, _projects[id]);
};

function resetAllProjects(projects) {
  projects.forEach((project) => {
    _projects[project.id] = project;
  });

  ProjectStore.__emitChange();
}

function resetSingleProject(project) {
  _projects[project.id] = project;
  ProjectStore.__emitChange();
}

function removeProject(id) {
  delete _projects[id];

  ProjectStore.__emitChange();
}

ProjectStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      resetAllProjects(payload.projects);
      break;
    case ProjectConstants.PROJECT_RECEIVED:
      resetSingleProject(payload.project);
      break;
    case ProjectConstants.PROJECT_REMOVED:
      removeProject(payload.id);
      break;
  }
};

module.exports = ProjectStore;
