"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const NavBar = require('../components/navbar/navbar');
const WelcomeNavBar = require('../components/navbar/welcome_navbar');
const SideBar = require('../components/sidebar/sidebar');

const App = React.createClass({
  componentDidMount() {
    this.forceUpdateListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.forceUpdateListener.remove();
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {

    	return (
    		<hgroup className="header-group">
    		</hgroup>
    	);
    } else if ( !this.onLoginPage() ) {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },

  onLoginPage () {
    return ["/login", "/signup"].includes(this.props.location.pathname)
  },

  shouldShowWelcome () {
    return !SessionStore.isUserLoggedIn() && !this.onLoginPage();
  },

  getWelcomeDiv() {

    return this.shouldShowWelcome() ? <div className="background"></div> : <div></div>;
  },

  getNavBar () {
    let navBar = SessionStore.isUserLoggedIn() ? <NavBar /> : <div />

    if (this.shouldShowWelcome()) {
      navBar = <WelcomeNavBar />;
    }

    return navBar;
  },

  render() {
    let sideBar = SessionStore.isUserLoggedIn() ? <SideBar /> : <div/>

    console.log(this.onLoginPage());

    return (
      <div>
        {sideBar}
        {this.getNavBar()}
        {this.getWelcomeDiv()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;






// <h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>
