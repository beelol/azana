"use strict";

const React = require('react');
const ProjectActions = require('../../actions/project_actions');
const hashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');

const ProjectForm = React.createClass({
  getInitialState() {
    return {
      title: "",
      description: "",
      team_id: 0,
      completed: false
    };
  },

  handleSubmit(event) {
    event.preventDefault();

    const project = Object.assign({}, this.state);
    ProjectActions.createProject(project);
    this.backToIndex();
  },

  backToIndex() {
    hashHistory.push("/projects");
  },

  handleCancel(event) {
    event.preventDefault();
    this.backToIndex();
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    return (
      <Modal isOpen={true}>
        <div className="new-project-container">
          <div className="new-project-form">
            <h3 className="new-project-title">Create A Project!</h3>

            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.title}
                onChange={this.update("title")} className="project-field"/>

              <label className="project-field">Description</label>
              <input type="text" value={this.state.description}
                onChange={this.update("description")} className="project-field"/>

              <div className="button-holder">
                <input type="submit" value="Create Project" className="new-project-button"/>
              </div>
            </form>

            <div className="button-holder">
              <button className="new-project-button" onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
});

module.exports = ProjectForm;
