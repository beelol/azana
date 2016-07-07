const React = require('react');
const Link = require('react-router').Link;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

// Plus icon in navbar to add a new anything
const AddButton = require('./add_button/add_button.jsx');

const ASANA_PLUS_PATH = "http://icons.veryicon.com/ico/System/Icons8%20Metro%20Style/Mathematic%20Plus2.ico"

const NavBarLeft = React.createClass({
  render () {
    return (
      <div className='navbar-left'>
        <Link to="/tasks" className="navigation-link-left">All Tasks</Link>
        <AddButton />
      </div>
    );
  }
})

//         <Link to="/projects" className="navigation-link-left">Projects</Link>
// <Link to="/teams" className="navigation-link-left">Teams</Link>

module.exports = NavBarLeft;
