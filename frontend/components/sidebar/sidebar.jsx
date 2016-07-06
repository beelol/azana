const React = require('react');

const ProjectIndex = require('../project/project_index')
const TeamIndex = require('../team/team_index')

const SideBar = React.createClass({

  render () {
    return(
      <div className='side-bar'>
        <h1 className='logo'>Azana</h1>

        <h1>Projects</h1>
        <ProjectIndex />

        <h1>Teams</h1>
        <TeamIndex />
      </div>
    );
  }
});

module.exports = SideBar;
