"use strict";

const React = require('react');
const TaskActions = require('../../actions/task_actions');
const TaskStore = require('../../stores/task_store');

const TaskDetail = React.createClass({

  setDescription (e) {
    this.description = e.currentTarget.value;
  },

  handleExit (e) {
    let newTask = this.props.task;
    newTask.description = e.currentTarget.value;

    this.props.onUpdateTask(newTask);
  },

  handleChange(e) {
    let newTask = this.props.task;
    newTask.title = e.currentTarget.value;

    this.props.onEditTitle(newTask);
  },

  handleTitleExit (e) {
    let newTask = this.props.task;
    newTask.title = e.currentTarget.value;

    this.props.onUpdateTask(newTask);
  },

  handleTitleKeyPress (e) {
    if (e.keyCode === 13) {
      this.handleTitleExit(e);
    }
  },

  render () {
    let task = this.props.task;

    let empty = (task === undefined);

    let className = (!empty ? "task-detail-container" : "hidden");

    return (
      <div className={className}>
        <input value={task.title}
               onChange={this.handleChange}
               onBlur={this.handleTitleExit}
               onKeyDown={this.handleTitleKeyPress} />

             <textarea value={task.description}
                  onChange={this.setDescription}
                  onBlur={this.handleExit} />
      </div>
    );
  }
});

module.exports = TaskDetail;
