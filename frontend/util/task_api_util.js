"use strict";

const ApiUtil = {
  // fetchAllTasks (filters, success) {
  //   $.get('api/tasks', filters, success);
  // },
  // fetchTask () {
  //   $.get('api/task/:id', filters, success);
  // },
  // createTask (data, success) {
  //   $.post('api/tasks', { task: data }, success);
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

  deleteTask (id, cb) {
    $.ajax({
      url: `api/tasks/${id}`,
      method: "DELETE",
      success: cb(id)
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

  updateTask (task, cb) {
    $.ajax({
      url: `api/tasks/${task.id}`,
      method: "PATCH",
      data: {task: task},
      success: function (newTask) {
        // cb(newTask, redirectCb);

        // Calling this callback gives an apply error
        cb(newTask);
      }
    });
  }
};

module.exports = ApiUtil;

/* Stuff for testing */

// let newTask = {id: 2, title: "nice", project_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/tasks",
//   method: "POST",
//   data: {task: newTask},
//   success: function (task) {
//     console.log(task);
//   }
// });
