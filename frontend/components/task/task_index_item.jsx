"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;
const TaskActions = require('../../actions/task_actions');
const TaskStore = require('../../stores/task_store');

const IndexItem = React.createClass({
  getInitialState () {
    return {title: ""};
  },

  handleChange(e) {
    let newTask = this.props.task;
    newTask.title = e.currentTarget.value;

    this.props.onEditTitle(newTask);
  },

  handleExit(e) {
    let newTask = this.props.task;
    newTask.title = this.props.title;

    this.props.onUpdateTask(newTask);
  },

  handleKeyPress (e) {
    if (e.keyCode === 13) {
      this.handleExit(e);
    }

    if (e.keyCode === 8 || e.keyCode === 46) {
      if (this.props.title === "") {
        e.preventDefault();
        this.deleteTask();
      }
    }
  },

  handleClick () {
    // const taskID = this.props.task.id;
    // hashHistory.push("tasks/" + taskID );

    this.props.onSelected(this.props.task);
  },

  deleteTask () {
    TaskActions.deleteTask(this.props.task.id);
  },

  render() {
    return (
        <input className="task-index-item"
             onClick={this.handleClick}
             value={this.props.title}
             onChange={this.handleChange}
             onBlur={this.handleExit}
             onKeyDown={this.handleKeyPress}>
        </input>
    );
  }
});

// <button onClick={this.deleteTask}>delete</button>

module.exports = IndexItem;
