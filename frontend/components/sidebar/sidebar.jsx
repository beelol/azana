const React = require('react');

const ProjectIndex = require('../project/project_index');
const hashHistory = require('react-router').hashHistory;
const TeamIndex = require('../team/team_index');

const SideBar = React.createClass({
  goHome () {
    hashHistory.push("/");
  },

  render () {
    return(
      <div className='side-bar'>

        <div className="logo" onClick={this.goHome}>
          <img className='logo-icon'
               src="http://asanatraining.com/wp-content/uploads/2015/10/Asana-Logo_Full-Color-Mark.png"/>

             <h1 className='logo-text'>aZana</h1>
        </div>

        <h1>Projects</h1>
        <ProjectIndex projects={this.props.projects} />

      </div>
    );
  }
});

// <h1>Teams</h1>
// <TeamIndex />
module.exports = SideBar;
