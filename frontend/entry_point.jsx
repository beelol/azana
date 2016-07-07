"use strict";

//React
const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal')

//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const IndexRedirect = ReactRouter.IndexRedirect;

/* Components */
// General
const App = require('./components/app');
const LoginForm = require('./components/login_form.jsx');

// Tasks
const TaskForm = require('./components/task/task_form.jsx');
const TaskDetail = require('./components/task/task_detail.jsx');
const TaskIndex = require('./components/task/task_index.jsx');

// Teams
// const TeamForm = require('./components/team/team_form.jsx');
// const TeamDetail = require('./components/team/team_detail.jsx');
const TeamIndex = require('./components/team/team_index.jsx');

// Projects
const ProjectIndex = require('./components/project/project_index.jsx');
const ProjectForm = require('./components/project/project_form.jsx');
const ProjectDetail = require('./components/project/project_detail.jsx');

//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

// <IndexRedirect to="/tasks" />

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>

      <Route path="/tasks" component={ TaskIndex } onEnter={_ensureLoggedIn}>
        <Route path=":id" component={ TaskDetail }>
        </Route>
      </Route>

      <Route path="/teams" component={ TeamIndex } onEnter={_ensureLoggedIn}>
      </Route>

        <Route path="/projects/new" component={ ProjectForm } />

      <Route path="/projects/:project_id" component={ TaskIndex } >
        <Route path=":task_id" component={ TaskDetail }>
        </Route>
      </Route>

      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
    </Route>
  </Router>
);

// <Route path="/benches/new" component={ BenchForm } onEnter={ _ensureLoggedIn }/>
// <Route path="/benches/:benchId" component={ BenchShow} >
//   <Route path="review" component={ ReviewForm } onEnter={ _ensureLoggedIn }/>
// </Route>
function _ensureLoggedIn(nextState, replace) {
  // We don't want users to be able to visit our 'new' or 'review' routes
  // if they haven't already signed in/up. Let's redirect them!
  // `replace` is like a redirect. It replaces the current entry
  // into the history (and the hashFragment), so the Router is forced
  // to re-route.
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

// window.TaskApiUtil = require('./util/task_api_util');

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  Modal.setAppElement(document.body);
  ReactDOM.render(appRouter, root);
});
