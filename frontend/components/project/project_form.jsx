"use strict";

const React = require('react');
const ProjectActions = require('../../actions/project_actions');
const ProjectStore = require('../../stores/project_store');
const TeamStore = require('../../stores/team_store');
const hashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');

const TaskActions = require('../../actions/task_actions');
const SessionStore = require('../../stores/session_store');

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
    // Get the project from the store
    let all = ProjectStore.all();
    let keys = Object.keys(all)

    this.setState({
      projectId: all[keys.length].id
    })

    let project = all[keys.length];

    ProjectStore.currentProject = project;

    let newTask = {
      title: "",
      description: "",
      completed: false,
      author_id: SessionStore.currentUser().id,
      project_id: project.id,
    }

    // Populate the project
    for (let i = 0; i < 18; i++) {
      TaskActions.createTask(newTask)
    }

    // Display the project
    this.showProject(project.id);
  },

  handleSubmit(event) {
    event.preventDefault();


    const project = Object.assign({}, this.state.project);

    if (TeamStore.currentTeam) project.team_id = TeamStore.currentTeam.id

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
    var modalStyles = {
      overlay: {
        display: 'flex',
        position: "absolute",
        alignItems: 'center',
        zIndex: 1000
      },
      content: {
      }
    };

    return (
      <Modal isOpen={true}
             style={modalStyles}>
        <div className="new-project-container">
          <div className="new-project-form">
            <h3 className="new-project-title">Create A Project!</h3>

            <form onSubmit={this.handleSubmit}>
              <div className='project-form-div'>
                <label className="project-title">Title</label>
                <input type="text" value={this.state.project.title}
                  onChange={this.update("title")} className="project-field"/>
              </div>

              <div className='project-form-div'>
                <label className="project-description">Description</label>
                <input type="text" value={this.state.project.description}
                  onChange={this.update("description")} className="project-field"/>
              </div>

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
