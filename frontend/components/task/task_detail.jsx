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

  handleChange(e) {
    let newTask = this.props.task;
    newTask.title = e.currentTarget.value;

    // console.log("we handled a change in the detail");
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

  onReceivedTask () {
    // console.log("we found the task with this id: " + this.id);

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
