"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;
const TaskActions = require('../../actions/task_actions');
const TaskStore = require('../../stores/task_store');

const IndexItem = React.createClass({
  getInitialState () {
    return {title: ""};
  },

  componentDidUpdate(newProps) {
    // console.log(newProps.title);
  },

  componentDidMount () {
    this.onChangeListener = TaskStore.addListener(this.onTaskChanged);
    // this.setState({title: this.props.task.title});
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  handleChange(e) {
    let newTask = this.props.task;
    newTask.title = e.currentTarget.value;

    this.props.onEditTitle(e, this.props.task);
    // this.setState({title: e.currentTarget.value});
  },

  handleExit(e) {
    let newTask = this.props.task;
    newTask.title = this.props.title;

    TaskActions.editTask(newTask);
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

  handleClick() {
    const taskID = this.props.task.id;
    hashHistory.push("tasks/" + taskID );
  },

  deleteTask () {
    TaskActions.deleteTask(this.props.task.id);
  },

  // Called when task is updated from anywhere
  onTaskChanged () {
    // this.setState({
    //   title: TaskStore.find(this.props.task.id).title
    // });
  },

  render() {
    return (
        <input className="task-index-item"
             onClick={this.handleClick}
             defaultValue={this.props.title}
             onChange={this.handleChange}
             onBlur={this.handleExit}
             onKeyDown={this.handleKeyPress}>
        </input>
    );
  }
});

// <button onClick={this.deleteTask}>delete</button>

module.exports = IndexItem;
