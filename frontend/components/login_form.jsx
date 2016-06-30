"use strict";

const React = require('react');
const Link = require('react-router').Link;
const Modal = require('react-modal');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

	DEMO_USERNAME: "Guest",

	DEMO_PASSWORD: "the_best",

	demoLoginHandler(e) {
		e.preventDefault();

		this.setState({ username: "", password: ""});
		var _username = this.DEMO_USERNAME.split("").slice();
		this.fillDemoUsername(_username);
	},

	fillDemoUsername: function(_username) {
	 var self = this;
	 if (_username.length > 0) {
		 setTimeout(function() {
			 self.setState({
				 username: self.state.username + _username.shift()
			 });

			 self.fillDemoUsername(_username);
		 }, 120);
	 } else {
		 var _password = this.DEMO_PASSWORD.split("").slice();
		 this.fillDemoPassword(_password);
	 }
 },

 fillDemoPassword: function(_password) {
	 var self = this;
	 if (_password.length > 0) {
		 setTimeout(function() {
			 self.setState({
				 password: self.state.password + _password.shift()
			 });

			 self.fillDemoPassword(_password);
		 }, 120);
	 } else {
		 var e = { preventDefault: function() {} };

		 this.login();
	 }
 },

 login () {
	 const formData = {
		username: this.state.username,
		password: this.state.password
	 };

	 SessionActions.logIn(formData);
 },

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }

		console.log(this.fieldErrors("username"));
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {

    let navLink;
		let submitText = "Log In";
    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
			submitText = "Sign Up"
    }

		return (
				<div>
					<div className="login-form-container">
						{ this.fieldErrors("base") }
					<form className="login-form-box">
		        Welcome!
						<br/>
						Please { this.formType() } or { navLink }

						<div className="login-form">

							<div className="login-input-label">Username</div>
							{ this.fieldErrors("username") }
								<input type="text"
			            value={this.state.username}
			            onChange={this.update("username")}
									className="login-input" />

								<div className="login-input-label">Password</div>
								{ this.fieldErrors("password") }
			          <input type="password"
			            value={this.state.password}
			            onChange={this.update("password")}
									className="login-input" />
						</div>
					</form>
					<div className="login-form-submit">
						<input onClick={this.handleSubmit} className="login-submit button-general" type="submit" value={submitText} />
					</div>
				</div>
				<button onClick={this.demoLoginHandler} className="button-general login-demo">Use a Demo Account</button>
			</div>
		);
	}
});

module.exports = LoginForm;