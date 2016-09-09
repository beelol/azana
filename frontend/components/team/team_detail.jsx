"use strict";

const React = require('react');
const TeamActions = require('../../actions/team_actions');
const TeamStore = require('../../stores/team_store');
const ProjectStore = require('../../stores/project_store');
// const ProjectIndex = require('../project/project_index');

const TeamDetail = React.createClass({

  getInitialState() {
    return {
      team: {
        id: undefined,
        author_id: undefined,
        name: "Team Title"
        // projects: ProjectStore.all(this.props.params.id)
      }
    };
  },

  componentDidMount () {
    this.onChangeListener = TeamStore.addListener(this.onTeamChanged);
    // this.setState({title: this.props.team.title});
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  setDescription (e) {
    let newTeam = this.state.team;
    newTeam.description = e.currentTarget.value;

    this.setState({team: newTeam});
  },

  handleExit (e) {
    let newTeam = this.state.team;
    newTeam.description = e.currentTarget.value;

    TeamActions.editTeam(newTeam);
  },

  handleChange(e) {
    let newTeam = this.props.team;
    newTeam.title = e.currentTarget.value;

    // console.log("we handled a change in the detail");
    this.props.onEditTitle(newTeam);
  },

  handleTitleExit (e) {
    let newTeam = this.props.team;
    newTeam.title = e.currentTarget.value;

    this.props.onUpdateTeam(newTeam);
  },

  handleTitleKeyPress (e) {
    if (e.keyCode === 13) {
      this.handleTitleExit(e);
    }
  },

  onReceivedTeam () {
    this.setState({
      team: TeamStore.find(this.id)
    });
  },

  onTeamChanged () {
    this.setState({
      team: TeamStore.find(this.state.team.id)
    });
  },

  render () {
    let team = this.state.team;

    let empty = (team === undefined);

    let className = (!empty ? "team-detail-container" : "hidden");

    return (
      <div className="team-detail"></div>
    );
  }
});

// <ProjectIndex projects={this.state.projects} teamId={team.id}/>
module.exports = TeamDetail;
