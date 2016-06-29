const React = require('react');

const NavBarLeft = require('./navbar_left.jsx');

const NavBar = React.createClass({

  render () {
    return(
      <div className='navbar'>
        <NavBarLeft />
      </div>
    );
  }
});

module.exports = NavBar;
