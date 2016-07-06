const React = require('react');
const Link = require('react-router').Link;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const ASANA_PLUS_PATH = "http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Mathematic%20Plus2.ico"

const NavBarLeft = React.createClass({
  goToProjectForm () {
    hashHistory.push('/projects/new');
  },

  render () {
    return (
      <div className='navbar-left'>
        <Link to="/projects" className="navigation-link-left">Projects</Link>
        <Link to="/tasks" className="navigation-link-left">All Tasks</Link>
        <Link to="/teams" className="navigation-link-left">Teams</Link>
        <img className="navigation-link-left navigation-image" src={ASANA_PLUS_PATH} onClick={this.goToProjectForm} />
      </div>
    );
  }
})

module.exports = NavBarLeft;
