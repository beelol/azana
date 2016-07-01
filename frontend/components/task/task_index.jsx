"use strict";

const React = require('react');
const TaskForm = require('./task_form');
const IndexItem = require('./task_index_item');

const TaskDetail = require('./task_detail');
const TaskStore = require('../../stores/task_store');
const TaskActions = require('../../actions/task_actions');

const TaskIndex = React.createClass({
  //Set state for detail and form here.
  getInitialState () {
    return {
      tasks: TaskStore.all(),
      selectedTask: undefined
    };
  },

  componentDidMount () {
    TaskStore.addListener(this.onChange);
    TaskActions.fetchAllTasks();
  },

  selectTask (task) {
    this.setState({selectedTask: task})
  },

  onChange () {
    this.setState({tasks: TaskStore.all()})
  },

  render () {
    let taskKeys = Object.keys(this.state.tasks);

    // let taskDetail = this.state.selectedTask !== undefined ? <TaskDetail task={this.state.selectedTask}/> : <div className="hidden" />

    return (
      <div>
      <div className="task-index-container">
        <div className="task-index">
            {
              taskKeys.map( key => {
                return (
                  <IndexItem onClick={this.onTaskWasClicked} task={this.state.tasks[key]} key={key} />
                );
              })
            }
        </div>
        <TaskForm />
      </div>
      {this.props.children}
      </div>
    );
  }
});

// {taskDetail}
module.exports = TaskIndex;
