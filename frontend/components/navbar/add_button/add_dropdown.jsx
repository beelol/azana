const React = require('react');

// const ProjectIndex = require('../project/project_index');
// const TeamIndex = require('../team/team_index');

const AddDropDown = React.createClass({

  goToProjectForm () {
    hashHistory.push('/projects/new');
  },

  render () {
    return(
      <div className='add-drop-down'>
        <button></button>
      </div>
    );
  }
});

module.exports = AddDropDown;
