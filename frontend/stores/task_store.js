"use strict";

const Store = require('flux/utils').Store;
const TaskConstants = require('../constants/task_constants');
const FavoriteConstants = require('../constants/favorite_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher');
const TaskStore = new Store(AppDispatcher);
let _tasks = {};

window.TaskStore = TaskStore;

TaskStore.all = function(){
  return Object.assign({}, _tasks);
};

TaskStore.find = function(id){
  return Object.assign({}, _tasks[id]);
};

function resetAllTasks(tasks) {
  _tasks = tasks;
  TaskStore.__emitChange();
}

function resetSingleTask(task) {
  _tasks[task.id] = task;
  TaskStore.__emitChange();
}

TaskStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case TaskConstants.TASKS_RECEIVED:
      resetAllTasks(payload.tasks);
      break;
    case TaskConstants.TASK_RECEIVED:
      resetSingleTask(payload.task);
      break;
  }
};

module.exports = TaskStore;
