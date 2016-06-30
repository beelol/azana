"use strict";

const ApiUtil = {
  // fetchAllTasks (filters, success) {
  //   $.get('api/tasks', filters, success);
  // },
  // fetchTask () {
  //   $.get('api/task/:id', filters, success);
  // },
  // createTask (data, success) {
  //   $.post('api/benches', { task: data }, success);
  // },

  fetchAllTasks (cb) {
    $.ajax({
      url: "api/tasks",
      success: cb
    });
  },

  fetchTask (id, cb) {
    $.ajax({
      url: `api/tasks/${id}`,
      success: cb
    });
  },

  createTask (newTask, cb, redirectCb) {
    $.ajax({
      url: "api/tasks",
      method: "POST",
      data: {task: newTask},
      success: function (task) {
        cb(task, redirectCb);
      }
    });
  },

  updateTask (task, cb, redirectCb) {
    $.ajax({
      url: `api/tasks/${task.id}`,
      method: "PATCH",
      data: {task: task},
      success: function (task) {
        cb(task, redirectCb);
      }
    });
  }
};

module.exports = ApiUtil;
