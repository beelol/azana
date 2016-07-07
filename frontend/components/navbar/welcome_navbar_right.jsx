const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

// User session stuff
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');

const NavBarRight = React.createClass({
  handleSignIn(){
    hashHistory.push("/login");
  },
  handleSignUp(){
    hashHistory.push("/signup");
  },
  render () {
    let signin = <div></div>;
    let signup = <div></div>;

    if (!SessionStore.isUserLoggedIn()) {
      signin = <div className="navigation-link-right" onClick={ this.handleSignIn }>Sign In</div>

      signup = <div className="navigation-link-right" onClick={ this.handleSignUp }>Sign Up</div>
    }

    return (
      <div className='navbar-right'>
        {signin}
        {signup}
      </div>
    );
  }
})

module.exports = NavBarRight;
