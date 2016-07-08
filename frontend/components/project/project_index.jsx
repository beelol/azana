"use strict";

const React = require('react');
const IndexItem = require('./project_index_item');

const ProjectDetail = require('./project_detail');
const ProjectStore = require('../../stores/project_store');
const ProjectActions = require('../../actions/project_actions');

const TeamStore = require('../../stores/team_store');

const ProjectIndex = React.createClass({
  //Set state for detail and form here.
  // getInitialState () {
  //   return {
  //     projects: ProjectStore.all()
  //   };
  // },

  // componentDidMount () {
  //   this.onChangeListener = ProjectStore.addListener(this.onChange);
  //   // ProjectActions.fetchAllProjects();
  // },
  //
  // componentWillUnmount () {
  //   this.onChangeListener.remove();
  // },

  // onChange () {
  //   this.setState({projects: ProjectStore.all()});
  // },

  render () {
    let projectKeys = Object.keys(this.props.projects);

    return (
      <div>
      <div className="project-index-container">
        <div className="project-index">
            {
              projectKeys.map( key => {
                let project = this.props.projects[key];

                return (
                  <li key={project.id}>
                    <IndexItem project={project}/>
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

module.exports = ProjectIndex;
