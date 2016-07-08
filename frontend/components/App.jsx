"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const NavBar = require('../components/navbar/navbar');
const WelcomeNavBar = require('../components/navbar/welcome_navbar');
const SideBar = require('../components/sidebar/sidebar');

const hashHistory = require('react-router').hashHistory;

const TeamStore = require('../stores/team_store');
const TeamActions = require('../actions/team_actions');

const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');

const App = React.createClass({
  getInitialState () {
    return {
      projects: []
    }
  },

  componentDidMount() {
    this.forceUpdateListener = SessionStore.addListener(this.forceUpdate.bind(this));

    // Used to create a new team once we find all of them
    // to check if we already have one or not
    this.teamListener = TeamStore.addListener(this.onTeamsChanged);

    // Used to create a new project once we find all of them
    // to check if we already have one or not,
    // then we use it to view the project
    this.projectListener = ProjectStore.addListener(this.onProjectsChanged);
  },

  componentWillUnmount() {
    this.forceUpdateListener.remove();
    this.teamListener.remove();
  },

  onProjectsChanged () {
    if (!TeamStore.currentTeam) {
      return;
    }
    // find the projects by a team
    // get the first one
    // display it

    let teamProjects = ProjectStore.findByTeam(TeamStore.currentTeam.id);

    this.setState({projects: teamProjects})

    if (Object.keys(teamProjects).length === 0) {
      // If we have no projects, make dat shet

      let defaultProject = {
        title: `${SessionStore.currentUser().username}'s First Project'`,
        description: "It's your first project. Go crazy!",
        team_id: TeamStore.currentTeam.id,
      };

    } else {
      // If we're here, then creating a team worked,
      // So we can just view the first team.


      let firstProjectId = teamProjects[Object.keys(teamProjects)[0]].id;

      hashHistory.push(`/projects/${firstProjectId}`);
    }
  },

  onTeamsChanged () {
    // find the teams by a user
    // get the first one
    // display it
    let authoredTeams = TeamStore.findByUser(SessionStore.currentUser().id);

		if (Object.keys(authoredTeams).length === 0) {
			/* Put all this in a listener for signing up */
      let teamName = SessionStore.currentUser().username + "'s Team";

			const defaultTeam = {
				author_id: SessionStore.currentUser().id,
				name: teamName,
			};
			// create team
			// set callback to set current team and
			// create project under that team
			// then set a callback to view that project
			// set callback to view it
			TeamActions.createTeam(defaultTeam);
		} else {
			// If we're here, then creating a team worked,
			// So we can just view the first team.

      let firstTeamId = authoredTeams[Object.keys(authoredTeams)[0]].id;

      // Set currently viewed team
      TeamStore.currentTeam = TeamStore.find(firstTeamId);

      // Get all projects so we can check if we have any.
      // Or view the first one
      ProjectActions.fetchAllProjects();
		}
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
    let sideBar = SessionStore.isUserLoggedIn() ? <SideBar projects={this.state.projects}/> : <div/>

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
