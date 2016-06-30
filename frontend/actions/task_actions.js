"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const TaskConstants = require('../constants/task_constants');
const TaskApiUtil = require('../util/task_api_util');

const TaskActions = {
  fetchAllTasks(filters) {
    TaskApiUtil.fetchAllTasks(filters, TaskActions.receiveAllTasks);
  },
  fetchTask(filters) {
    TaskApiUtil.fetchTasks(filters, TaskActions.receiveAllTasks);
  },
  createTask(task){
    TaskApiUtil.createTask(task, TaskActions.receiveSingleTask);
  },

  receiveAllTasks(taskes) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.TASKS_RECEIVED,
      taskes: taskes
    });
  },
  receiveSingleTask(task) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.TASK_RECEIVED,
      task: task
    });
  }
};

module.exports = TaskActions;
