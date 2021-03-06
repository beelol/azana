const React = require('react');
const Link = require('react-router').Link;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const ASANA_PLUS_PATH = "http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Mathematic%20Plus2.ico";

const AddButton = React.createClass({
  goToProjectForm () {
    hashHistory.push('/projects/new');
  },

  goToTaskForm () {
    hashHistory.push('/tasks/new');
  },

  render () {
    return (
      <div className="navigation-link-left nav-dropdown">
        <img className="navigation-image" src={ASANA_PLUS_PATH} />
        <ul className="list">
          <li onClick={this.goToTaskForm}>Add Task</li>
          <li onClick={this.goToProjectForm}>Add Project</li>
        </ul>
      </div>
    );
  }
});

//         <Link to="/projects" className="navigation-link-left">Projects</Link>
// <Link to="/teams" className="navigation-link-left">Teams</Link>

module.exports = AddButton;
