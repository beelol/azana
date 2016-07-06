"use strict";

const React = require('react');
const TaskActions = require('../../actions/task_actions');
const SessionStore = require('../../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const TaskForm = React.createClass({

  getInitialState() {
    return {
      title: "",
      description: "",
      project_id: 0,
      author_id: 0,
      completed: false
    };
  },

  handleSubmit(event) {
    event.preventDefault();

    const task = Object.assign({}, this.state);

    TaskActions.createTask(task);
    this.goHome();

    this.setState({title: ""})
  },

  goHome() {
    // TaskActions.fetchAllTasks();
  },

  handleCancel(event) {
    event.preventDefault();
    this.goHome();
  },

  componentWillReceiveProps (newProps) {
    this.setState({
      project_id: newProps.projectId
    });

  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    return (
      <div className="new-task-container">
        <div className="new-task-form">

          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.title}
              onChange={this.update("title")} className="task-index-item"/>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = TaskForm;

// <div className="button-holder">
//   <input type="submit" value="Create Task" className="new-task-button"/>
// </div>
// </form>
//
// <div className="button-holder">
//   <button className="new-task-button" onClick={this.handleCancel}>Cancel</button>
// </div>
