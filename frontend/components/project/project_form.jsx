"use strict";

const React = require('react');
const ProjectActions = require('../../actions/project_actions');
const ProjectStore = require('../../stores/project_store');
const hashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');

const ProjectForm = React.createClass({
  getInitialState() {
    return {
      project:
      {
        title: "",
        description: "",
        team_id: 0,
      }
    };
  },

  componentDidMount () {
    this.listener = ProjectStore.addListener(this.onChange);
    // ProjectActions.fetchAllProjects();
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  onChange () {
    let all = ProjectStore.all();
    let keys = Object.keys(all)

    this.setState({
      projectId: all[keys.length].id
    })

    this.showProject(all[keys.length].id);
  },

  handleSubmit(event) {
    event.preventDefault();

    const project = Object.assign({}, this.state.project);
    ProjectActions.createProject(project);
  },

  showProject(id) {
    hashHistory.push("/projects/" + id);
  },

  handleCancel(event) {
    event.preventDefault();
    hashHistory.push("/");
  },

  update(property) {
    return (e) => {
      let project = this.state.project;
      project[[property]] = e.target.value

      this.setState({project: project});
    }
  },

  render() {
    var modalStyles = {overlay: {zIndex: 1000}};

    return (
      <Modal isOpen={true}
             style={modalStyles}
             className="project-form-modal">>
        <div className="new-project-container">
          <div className="new-project-form">
            <h3 className="new-project-title">Create A Project!</h3>

            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.project.title}
                onChange={this.update("title")} className="project-field"/>

              <label className="project-field">Description</label>
              <input type="text" value={this.state.project.description}
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
