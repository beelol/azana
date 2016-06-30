"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;
const TaskActions = require('../../actions/task_actions');

const IndexItem = React.createClass({
  handleClick() {
    // const taskID = this.props.task.id;
    // hashHistory.push("tasks/" + taskID );
  },
  deleteTask () {
    TaskActions.deleteTask(this.props.task.id);
  },
  render() {
    let task = this.props.task;
    return (
        <input className="task-index-item"
             onClick={this.handleClick}
             key={this.props.key} value={task.title}>
        </input>
    );
  }
});

// <button onClick={this.deleteTask}>delete</button>

module.exports = IndexItem;
