"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;
const ProjectActions = require('../../actions/project_actions');
const ProjectStore = require('../../stores/project_store');

const IndexItem = React.createClass({
  getInitialState () {
    return {title: ""};
  },

  render() {
    return (
      <div className="project-index-item">
        {this.props.project.title}
      </div>
    );
  }
});

// <button onClick={this.deleteProject}>delete</button>

module.exports = IndexItem;
