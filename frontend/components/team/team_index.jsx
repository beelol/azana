"use strict";

const React = require('react');
// const TeamForm = require('./team_form');
const IndexItem = require('./team_index_item');

// const TeamDetail = require('./team_detail');
const TeamStore = require('../../stores/team_store');
const TeamActions = require('../../actions/team_actions');

const TeamIndex = React.createClass({
  //Set state for detail and form here.
  getInitialState () {
    return {
      teams: TeamStore.all()
    };
  },

  componentDidMount () {
    this.onChangeListener = TeamStore.addListener(this.onChange);
    TeamActions.fetchAllTeams();
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  onChange () {
    this.setState({teams: TeamStore.all()});
  },

  render () {
    let teamKeys = Object.keys(this.state.teams);

    return (
      <div>
      <div className="team-index-container">
        <div className="team-index">
            {
              teamKeys.map( key => {
                let team = this.state.teams[key];

                return (
                  <li key={team.id}>
                    {team.name}
                  </li>
                );
              })
            }
        </div>
      </div>
      {this.props.children}
      </div>
    );
  }
});
// <IndexItem team={team}/>


// <TeamForm />
module.exports = TeamIndex;
