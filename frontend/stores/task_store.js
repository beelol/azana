"use strict";

const Store = require('flux/utils').Store;
const TaskConstants = require('../constants/task_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const TaskStore = new Store(AppDispatcher);

let _tasks = {};

TaskStore.all = function(){
  return Object.assign({}, _tasks);
};

TaskStore.find = function(id){
  return Object.assign({}, _tasks[id]);
};

TaskStore.findByProject = function (project_id) {
  let tasks = [];
  // console.log(_tasks);

  Object.keys(_tasks).forEach((key) => {
    // console.log(project_id);
    if (_tasks[key].project_id === project_id) {
      // console.log(_tasks[key].project_id);
      tasks.push(_tasks[key]);
    }
  });

  return tasks;
};

function resetAllTasks(tasks) {
  tasks.forEach((task) => {
    _tasks[task.id] = task;
  });

  TaskStore.__emitChange();
}

function resetSingleTask(task) {
  _tasks[task.id] = task;
  TaskStore.__emitChange();
}

function removeTask(id) {
  delete _tasks[id];

  TaskStore.__emitChange();
}

TaskStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case TaskConstants.TASKS_RECEIVED:
      resetAllTasks(payload.tasks);
      break;
    case TaskConstants.TASK_RECEIVED:
      resetSingleTask(payload.task);
      break;
    case TaskConstants.TASK_REMOVED:
      removeTask(payload.id);
      break;
  }
};

module.exports = TaskStore;
