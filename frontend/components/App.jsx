"use strict";

const React = require('react');

// Page Navigation
const NavBar = require('../components/navbar/navbar');
const WelcomeNavBar = require('../components/navbar/welcome_navbar');
const SideBar = require('../components/sidebar/sidebar');

// Sessions / Login
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

// Routing
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

// Teams
const TeamStore = require('../stores/team_store');
const TeamActions = require('../actions/team_actions');

// Projects
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');

// Tasks
const TaskStore = require('../stores/task_store');
const TaskActions = require('../actions/task_actions');

// Other
const WelcomeScreen = require('./welcome_screen');

const App = React.createClass({
  getInitialState () {
    return {
      projects: []
    };
  },

  componentDidMount() {
    this.forceUpdateListener = SessionStore.addListener(this.forceUpdate.bind(this));

    this.taskListener = TaskStore.addListener(this.onTasksChanged);

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
    this.taskListener.remove();
    this.teamListener.remove();
    this.projectListener.remove();
  },

  onTasksChanged () {
    // let tasks = TaskStore.all();
    // let keys = Object.keys(tasks);
    //
    // let lastTaskId = keys[Object.keys.length-1];

    // let currentProjectId = ProjectStore.currentProject.id;

    // hashHistory.push(`/projects/${currentProjectId}`);
  },

  onProjectsChanged () {
    // find the projects by a team
    // get the first one
    // display it
    // console.log(TeamStore.currentTeam);

    let teamProjects = ProjectStore.all(TeamStore.currentTeam.id);

    this.setState({
      projects: teamProjects
    });

    if (TeamStore.currentTeam === undefined) {
      return;
    }

    if (Object.keys(teamProjects).length === 0) {

      // no projects; make one
      let defaultProject = {
        title: `${SessionStore.currentUser().username}'s First Project'`,
        description: "It's your first project. Go crazy!",
        team_id: TeamStore.currentTeam.id
      };

      ProjectActions.createProject(defaultProject);
    } else {
      if (this.props.location.pathname === '/' && SessionStore.currentUser()) {
        this.redirectToFirstProject();
      }

      // If we're here, then creating a project worked,
      // So we can just view the first project and create 18 tasks.
      let project = teamProjects[Object.keys(teamProjects)[0]]

      let firstProjectId = project.id;

      if (project.tasks.length === 0) {

        let newTask = {
          title: "",
          description: "",
          completed: false,
          author_id: SessionStore.currentUser().id,
          project_id: firstProjectId
        }

        for (let i = 0; i < 18; i++) {
          TaskActions.createTask(newTask);
        }

        console.log(firstProjectId);
      }

      hashHistory.push(`/projects/${firstProjectId}`);
    }
  },

  componentWillReceiveProps (newProps) {
    if (newProps.location.pathname === '/' && SessionStore.currentUser()) {
      this.redirectToFirstProject();
    }
  },

  redirectToFirstProject () {
    let teamProjects = this.state.projects;

    if (teamProjects[Object.keys(teamProjects)[0]] === undefined) {
      return;
    }

    let firstProjectId = teamProjects[Object.keys(teamProjects)[0]].id;


    hashHistory.push(`/projects/${firstProjectId}`);
  },

  onTeamsChanged () {
    // if (!SessionStore.currentUser()) {
    //   return;
    // }

    // find the teams by a user
    // get the first one
    // display it
    let authoredTeams = TeamStore.all(SessionStore.currentUser().id);

		if (Object.keys(authoredTeams).length === 0) {
			/* Put all this in a listener for signing up */
      let teamName = SessionStore.currentUser().username + "'s Team";

			const defaultTeam = {
				author_id: SessionStore.currentUser().id,
				name: teamName
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
    return ["/login", "/signup"].includes(this.props.location.pathname);
  },

  shouldShowWelcome () {
    return (!SessionStore.isUserLoggedIn() && !this.onLoginPage());
  },

  getWelcomeDiv() {
    return this.shouldShowWelcome() ? <WelcomeScreen /> : <div></div>;
  },

  getNavBar () {
    let navBar = SessionStore.isUserLoggedIn() ? <NavBar /> : <div />;

    if (this.shouldShowWelcome()) {
      navBar = <WelcomeNavBar />;
    }

    return navBar;
  },

  render() {
    let sideBar = SessionStore.isUserLoggedIn() ? <SideBar projects={this.state.projects}/> : <div/>;

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
