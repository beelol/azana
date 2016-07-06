"use strict";

const React = require('react');
const TaskActions = require('../../actions/task_actions');
const TaskStore = require('../../stores/task_store');

const TaskDetail = React.createClass({

  getInitialState() {
    return {
      description: this.props.task.description
    }
  },

  // componentDidMount () {
  //   this.onChangeListener = TaskStore.addListener(this.onTaskChanged);
  // },

  // componentWillUnmount () {
  //   this.onChangeListener.remove();
  // },

  componentWillReceiveProps (newProps) {
    this.setState({
      description: newProps.task.description
    });
  },

  setDescription (e) {
    this.setState({description: e.currentTarget.value});
  },

  handleExit (e) {
    let newTask = this.props.task;
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

  // onReceivedTask () {
  //   this.setState({
  //     task: TaskStore.find(this.id)
  //   });
  // },

  // onTaskChanged () {
  //   this.setState({
  //     task: TaskStore.find(this.state.task.id)
  //   });
  // },

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

             <textarea value={this.state.description}
                  onChange={this.setDescription}
                  onBlur={this.handleExit} />
      </div>
    );
  }
});

module.exports = TaskDetail;
