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
  console.log(TaskStore.all());

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
