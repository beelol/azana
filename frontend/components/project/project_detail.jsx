"use strict";

const React = require('react');
const ProjectActions = require('../../actions/project_actions');
const ProjectStore = require('../../stores/project_store');

const ProjectDetail = React.createClass({

  getInitialState() {
    return {
      project: {
        id: undefined,
        title: "Project Title",
        description: "Project Description"
      }
    }
  },

  componentDidMount () {
    this.onChangeListener = ProjectStore.addListener(this.onProjectChanged);
    // this.setState({title: this.props.project.title});
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  setDescription (e) {
    let newProject = this.state.project;
    newProject.description = e.currentTarget.value;

    this.setState({project: newProject});
  },

  handleExit (e) {
    let newProject = this.state.project;
    newProject.description = e.currentTarget.value;

    ProjectActions.editProject(newProject);
  },

  handleChange(e) {
    let newProject = this.props.project;
    newProject.title = e.currentTarget.value;

    // console.log("we handled a change in the detail");
    this.props.onEditTitle(newProject);
  },

  handleTitleExit (e) {
    let newProject = this.props.project;
    newProject.title = e.currentTarget.value;

    this.props.onUpdateProject(newProject);
  },

  handleTitleKeyPress (e) {
    if (e.keyCode === 13) {
      this.handleTitleExit(e);
    }
  },

  onReceivedProject () {
    // console.log("we found the project with this id: " + this.id);

    this.setState({
      project: ProjectStore.find(this.id)
    });
  },

  onProjectChanged () {
    this.setState({
      project: ProjectStore.find(this.state.project.id)
    });
  },

  render () {
    let project = this.props.project;

    let empty = (project === undefined);

    let className = (!empty ? "project-detail-container" : "hidden");

    return (
      <div className={className}>
        <input value={project.title}
               onChange={this.handleChange}
               onBlur={this.handleTitleExit}
               onKeyDown={this.handleTitleKeyPress} />

             <textarea value={project.description}
                  onChange={this.setDescription}
                  onBlur={this.handleExit} />
      </div>
    );
  }
});

module.exports = ProjectDetail;
