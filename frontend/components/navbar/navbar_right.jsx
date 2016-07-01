const React = require('react');
const Link = require('react-router').Link;

// User session stuff
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');

const NavBarRight = React.createClass({
  _handleLogOut(){
    SessionActions.logOut();
  },
  render () {
    let logout = <div></div>;

    if (SessionStore.isUserLoggedIn()) {
      logout = <div className="navigation-link-right" onClick={ this._handleLogOut }>Sign out</div>
    }

    return (
      <div className='navbar-right'>
        {logout}
      </div>
    );
  }
})

module.exports = NavBarRight;
