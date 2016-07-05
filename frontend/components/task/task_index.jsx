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
      tasks: TaskStore.all()
    };
  },

  componentDidMount () {
    this.onChangeListener = TaskStore.addListener(this.onChange);
    TaskActions.fetchAllTasks();
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  onChange () {
    this.setState({tasks: TaskStore.all()})
  },

  onTitleWasEdited (e, newTask) {
    // Store a task pointing to its new value
    this.setState({task: newTask});
  },

  onTaskWasUpdated (newTask) {
    // Edit the task in the database?
    TaskActions.editTask(newTask)
  },

  render () {
    let taskKeys = Object.keys(this.state.tasks);

    return (
      <div>
      <div className="task-index-container">
        <div className="task-index">
            {
              taskKeys.map( key => {
                let task = this.state.tasks[key];

                let title = (this.state[task] !== undefined ? this.state[task].title : task.title)

                // console.log(this.state[task]);
                return (
                  <IndexItem onEditTitle={this.onTitleWasEdited}
                             onUpdateTask={this.onTaskWasUpdated}
                             task={task}
                             title={title}
                             key={key} />
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

module.exports = TaskIndex;
