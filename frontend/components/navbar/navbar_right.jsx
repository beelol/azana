const React = require('react');
const Link = require('react-router').Link;

// User session stuff
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');

const NavBarRight = React.createClass({
  _handleLogOut(){
    SessionActions.logOut();
  },

  viewProfile () {
    console.log("great profile, nerd");
  },

  render () {
    let userController = <div></div>;

    if (SessionStore.isUserLoggedIn()) {
      userController =
      <div className="navigation-link-right nav-dropdown">
        {SessionStore.currentUser().username}
        <ul className="list">
          <li onClick={this._handleLogOut}>SIGN OUT</li>
          <li onClick={this.viewProfile}>PROFILE</li>
        </ul>
      </div>
    }

    return (
      <div className='navbar-right'>
        {userController}
      </div>
    );
  }
})

module.exports = NavBarRight;
