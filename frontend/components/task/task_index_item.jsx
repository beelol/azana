"use strict";

const React = require('react');
const hashHistory = require('react-router').hashHistory;

const IndexItem = React.createClass({
  handleClick() {
    // const taskID = this.props.task.id;
    // hashHistory.push("tasks/" + taskID );
    console.log("wooooooooooooœ");
  },

  render() {
    let task = this.props.task;
    return (
        <div className="task-index-item"
             onClick={this.handleClick}
             key={this.props.key}>
             <div className="task">{task.title}</div>
        </div>
    );
  }
});

module.exports = IndexItem;
