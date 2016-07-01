"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;
const TaskActions = require('../../actions/task_actions');

const IndexItem = React.createClass({
  getInitialState () {
    return {title: ""}
  },

  componentDidMount () {
    this.setState({title: this.props.task.title});
  },

  handleChange(e) {
    this.setState({title: e.currentTarget.value});
  },

  handleExit(e) {
    let newTask = this.props.task;
    newTask.title = this.state.title;

    TaskActions.editTask(newTask);
  },

  handleKeyPress (e) {
    if (e.keyCode === 13) {
      this.handleExit(e);
    }

    if (e.keyCode === 8 || e.keyCode === 46) {
      if (this.state.title === "") {
        e.preventDefault();
        this.deleteTask();
      }
    }
  },

  handleClick() {
    const taskID = this.props.task.id;
    hashHistory.push("tasks/" + taskID );
  },

  deleteTask () {
    TaskActions.deleteTask(this.props.task.id);
  },

  render() {
    let task = this.props.task;
    return (
        <input className="task-index-item"
             onClick={this.handleClick}
             value={this.state.title}
             onChange={this.handleChange}
             onBlur={this.handleExit}
             onKeyDown={this.handleKeyPress}>
        </input>
    );
  }
});

// <button onClick={this.deleteTask}>delete</button>

module.exports = IndexItem;
