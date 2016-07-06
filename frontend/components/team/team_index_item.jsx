"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;
const ProjectActions = require('../../actions/project_actions');
const ProjectStore = require('../../stores/project_store');

const IndexItem = React.createClass({
  getInitialState () {
    return {title: ""};
  },

  render() {
    return (
      <Link to={`/projects/${this.props.project.id}`} className="project-index-item">
        {this.props.project.title}
      </Link>
    );
  }
});

// <button onClick={this.deleteProject}>delete</button>

module.exports = IndexItem;
