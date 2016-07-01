const React = require('react');
const Link = require('react-router').Link;

const NavBarLeft = React.createClass({

  render () {
    return (
      <div className='navbar-left'>
        <Link to="/" className="navigation-link-left">Projects</Link>
        <Link to="/tasks" className="navigation-link-left">Tasks</Link>
      </div>
    );
  }
})

module.exports = NavBarLeft;
