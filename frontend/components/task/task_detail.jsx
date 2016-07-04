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
      });
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

  componentDidMount () {
    this.onChangeListener = TaskStore.addListener(this.onTaskChanged);
    // this.setState({title: this.props.task.title});
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  setDescription (e) {
    let newTask = this.state.task;
    newTask.description = e.currentTarget.value;

    this.setState({task: newTask});
  },

  handleExit (e) {
    let newTask = this.state.task;
    newTask.description = e.currentTarget.value;

    TaskActions.editTask(newTask);
  },

  setTitle (e) {
    let newTask = this.state.task;
    newTask.title = e.currentTarget.value;

    this.setState({task: newTask});
  },

  handleTitleExit (e) {
    let newTask = this.state.task;
    newTask.title = e.currentTarget.value;

    TaskActions.editTask(newTask);
  },

  componentWillReceiveProps(newProps) {
    this.setTargetTask(newProps);
  },

  handleTitleKeyPress (e) {
    if (e.keyCode === 13) {
      this.handleTitleExit(e);
    }
  },

  onReceivedTask () {
    console.log("we found the task with this id: " + this.id);

    this.setState({
      task: TaskStore.find(this.id)
    });
  },

  onTaskChanged () {
    this.setState({
      task: TaskStore.find(this.state.task.id)
    });
  },

  render () {
    let task = this.state.task;

    let taskCheck = TaskStore.find(this.id);

    let empty = (Object.keys(taskCheck).length === 0 && taskCheck.constructor === Object);

    let className = (!empty ? "task-detail-container" : "hidden");

    return (
      <div className={className}>
        <input value={task.title}
               onChange={this.setTitle}
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
