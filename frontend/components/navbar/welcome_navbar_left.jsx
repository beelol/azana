const React = require('react');
const Link = require('react-router').Link;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

// Plus icon in navbar to add a new anything
const AddButton = require('./add_button/add_button.jsx');

const NavBarLeft = React.createClass({
  render () {
    return (
      <div className='navbar-left'>
        <img className='logo-icon'
             src="logo.png"/>
        <h1 className='logo-text'>aZana</h1>
      </div>
    );
  }
})

//         <Link to="/projects" className="navigation-link-left">Projects</Link>
// <Link to="/teams" className="navigation-link-left">Teams</Link>

module.exports = NavBarLeft;
