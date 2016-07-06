"use strict";

const React = require('react');
const TaskActions = require('../../actions/task_actions');
const TaskStore = require('../../stores/task_store');

const TaskDetail = React.createClass({

  getInitialState() {
    return {
      description: this.props.task.description,
      title: this.props.task.title
    }
  },

  componentDidMount () {
    this.onChangeListener = TaskStore.addListener(this.onTaskChanged);
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  componentWillReceiveProps (newProps) {
    this.setState({
      description: newProps.task.description,
      title: newProps.task.title
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

    // console.log(newTask.title);

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

  onTaskChanged () {
    this.setState({
      description: TaskStore.find(this.props.task.id).description,
      title: TaskStore.find(this.props.task.id).title
    });
  },

  render () {
    // console.log("called render in the detail");

    let task = this.props.task;

    task.title = this.state.title
    task.description = this.state.description

    // console.log(task.title);

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
