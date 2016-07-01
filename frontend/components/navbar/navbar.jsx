const React = require('react');

const NavBarLeft = require('./navbar_left.jsx');
const NavBarRight = require('./navbar_right.jsx');

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
