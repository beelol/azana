"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;
const TaskActions = require('../../actions/task_actions');
const TaskStore = require('../../stores/task_store');

const IndexItem = React.createClass({
  getInitialState () {
    return {
      title: "",
      completed: false
    };
  },

  handleChange(e) {
    let newTask = this.props.task;
    newTask.title = e.currentTarget.value;

    this.props.onEditTitle(newTask);
  },

  toggleCompletion(e) {
    this.setState({
      completed: !this.state.completed
    });
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

  handleFocus () {
    this.props.onSelected(this.props.task);
  },

  deleteTask () {
    TaskActions.deleteTask(this.props.task.id);
  },

  render() {
    let completeText = (this.state.completed ? "Undo" : "Complete");

    return (
        <div>
          <img className="task-index-item-img"
               src={"http://cliparts.co/cliparts/gce/Eeg/gceEeg9Mi.png"}
               onClick={this.deleteTask} />
          <input className="task-index-item"
               onFocus={this.handleFocus}
               value={this.props.title}
               onChange={this.handleChange}
               onBlur={this.handleExit}
               onKeyDown={this.handleKeyPress}>
          </input>
        </div>
    );
  }
});

// <button onClick={this.deleteTask}>delete</button>

module.exports = IndexItem;
