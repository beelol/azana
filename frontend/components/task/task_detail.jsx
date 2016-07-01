"use strict";

const React = require('react');
const TaskActions = require('../../actions/task_actions');
const TaskStore = require('../../stores/task_store');

const TaskDetail = React.createClass({

  getInitialState() {
      return {
        task: {
          id: undefined,
          title: "Task Title",
          description: "Task Description"
        },
        id: undefined
      }
  },

  componentDidUpdate () {
    console.log("updated");
    let path = this.props.location.pathname;
    this.id = parseInt(path.replace('/tasks/', ''));
  },

  componentDidMount () {
    let path = this.props.location.pathname;
    this.id = parseInt(path.replace('/tasks/', ''));

    this.onReceivedTaskListener = TaskStore.addListener(this.onReceivedTask)
    TaskActions.fetchTask(this.id);
  },

  componentWillUnmount () {
    this.onReceivedTaskListener.remove();
  },

  onReceivedTask () {
    this.setState({
      task: TaskStore.find(this.id)
    })
  },

  render () {
    let task = this.state.task;

    return (
      <div className="task-detail-container">
        <div>{task.title}</div>
        <div>{task.description}</div>
      </div>
    );
  }
});

module.exports = TaskDetail;
