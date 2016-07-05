"use strict";

const React = require('react');
const ProjectForm = require('./project_form');
const IndexItem = require('./project_index_item');

const ProjectDetail = require('./project_detail');
const ProjectStore = require('../../stores/project_store');
const ProjectActions = require('../../actions/project_actions');

const ProjectIndex = React.createClass({
  //Set state for detail and form here.
  getInitialState () {
    return {
      projects: ProjectStore.all()
    };
  },

  componentDidMount () {
    this.onChangeListener = ProjectStore.addListener(this.onChange);
    ProjectActions.fetchAllProjects();
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  onChange () {
    this.setState({projects: ProjectStore.all()});
  },

  render () {
    let projectKeys = Object.keys(this.state.projects);

    return (
      <div>
      <div className="project-index-container">
        <div className="project-index">
            {
              projectKeys.map( key => {
                let project = this.state.projects[key];

                return (
                  <li>
                    <IndexItem project={project} key={project.id}/>
                  </li>
                );
              })
            }
        </div>
      </div>
      {this.props.children}
      </div>
    );
  }
});

// <ProjectForm />
module.exports = ProjectIndex;
