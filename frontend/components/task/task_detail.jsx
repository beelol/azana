"use strict";

const React = require('react');
const TaskActions = require('../../actions/task_actions');
const TaskStore = require('../../stores/task_store');

const TaskDetail = React.createClass({
  setTargetTask (newProps) {
    if(this.id === undefined) {
      let path = newProps.location.pathname;
      this.id = parseInt(path.replace('/tasks/', ''));

      this.setState({
        task: TaskStore.find(this.id)
      })
    } else {
      let path = this.props.location.pathname;
      let oldId = this.id

      path = newProps.location.pathname;
      this.id = parseInt(path.replace('/tasks/', ''));

      if (this.id !== oldId) {
        this.setState({
          task: TaskStore.find(this.id)
        })
      }
    }
  },

  getInitialState() {
    return {
      task: {
        id: undefined,
        title: "Task Title",
        description: "Task Description"
      }
    }
  },

  componentWillReceiveProps(newProps) {
    this.setTargetTask(newProps);
  },

  onReceivedTask () {
    console.log("we found the task with this id: " + this.id);
    this.setState({
      task: TaskStore.find(this.id)
    })
  },

  render () {
    let task = this.state.task;

    let taskCheck = TaskStore.find(this.id);

    let empty = (Object.keys(taskCheck).length === 0 && taskCheck.constructor === Object);

    let className = (!empty ? "task-detail-container" : "hidden");

    return (
      <div className={className}>
        <h1>{task.title}</h1>
        <textarea>{task.description}</textarea>
      </div>
    );
  }
});

module.exports = TaskDetail;
