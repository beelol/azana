"use strict";

const React = require('react');
const TaskForm = require('./task_form');
const IndexItem = require('./task_index_item');
const TaskStore = require('../../stores/task_store');
const TaskActions = require('../../actions/task_actions');

const TaskIndex = React.createClass({
  getInitialState () {
    return {tasks: TaskStore.all()};
  },
  componentWillMount () {
    TaskStore.addListener(this.onTasksWereFetched);
    TaskActions.fetchAllTasks();
  },
  onTasksWereFetched () {
    this.setState({tasks: TaskStore.all()})
  },
  render() {
    let taskKeys = Object.keys(this.state.tasks);

    console.log(taskKeys);
    return (
      <div>
        <h1>Tasks: </h1>
          {
            taskKeys.map( key => {
              return (
                <IndexItem task={this.state.tasks[key]} key={key} />
              );
            })
          }
        <TaskForm />
      </div>
    );
  }
});

module.exports = TaskIndex;
