"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const TaskConstants = require('../constants/bench_constants');
const TaskApiUtil = require('../util/bench_api_util');

const TaskActions = {
  fetchAllTasks(filters) {
    TaskApiUtil.fetchAllTasks(filters, TaskActions.receiveAllTasks);
  },
  createTask(bench){
    TaskApiUtil.createTask(bench, TaskActions.receiveSingleTask);
  },
  createReview(review){
    TaskApiUtil.createReview(review, TaskActions.receiveSingleTask);
  },

  receiveAllTasks(benches) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  receiveSingleTask(bench) {
    AppDispatcher.dispatch({
      actionType: TaskConstants.BENCH_RECEIVED,
      bench: bench
    });
  }
};

module.exports = TaskActions;
