const React = require('react');

const NavBarLeft = require('./welcome_navbar_left.jsx');
const NavBarRight = require('./welcome_navbar_right.jsx');

const NavBar = React.createClass({

  render () {
    return(
      <div className='navbar'>
        <NavBarLeft />
        <NavBarRight />
      </div>
    );
  }
});

module.exports = NavBar;
