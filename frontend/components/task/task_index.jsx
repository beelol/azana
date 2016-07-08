"use strict";

const React = require('react');
const TaskForm = require('./task_form');
const IndexItem = require('./task_index_item');

const TaskDetail = require('./task_detail');
const TaskStore = require('../../stores/task_store');
const ProjectStore = require('../../stores/project_store');
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
    this.onChangeListener = TaskStore.addListener(this.onChange);
    TaskActions.fetchAllTasks();
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  onChange () {
    // console.log("Task was updated");

    let projectId = parseInt(this.props.params.project_id);
    this.setState({tasks: TaskStore.findByProject(projectId)});
  },

  /* TaskIndexItem and TaskDetail Updating Functions */

  /* Called whenever something is typed in the index item
  or in the task detail */
  onTitleWasEdited (newTask) {
    // console.log(newTask.title);
    // Store a task pointing to its new value
    // let id = newTask.id
    // console.log(newTask.title);

    this.setState({[newTask.id]: newTask});
  },

  componentWillReceiveProps (newProps) {
    let projectId = parseInt(newProps.params.project_id);
    this.setState({tasks: TaskStore.findByProject(projectId)});
  },

  /* Called whenever the user is done editing a task.
  Updates the database with the new task information. */
  onTaskWasUpdated (newTask) {
    // Edit the task in the database?
    TaskActions.editTask(newTask)
  },

  // Stores a task in state as the selected task when clicked.
  onTaskWasSelected(task) {
    this.setState({
      selectedTask: task.id
    });
  },

  render () {
    let taskKeys = Object.keys(this.state.tasks);
    let taskDetail = "";
    let project = ProjectStore.find(this.props.params.project_id);


    if (this.state.selectedTask) {
      console.log(this.state.selectedTask);

      let task = this.state[[this.state.selectedTask]] ? this.state[[this.state.selectedTask]] : TaskStore.find(this.state.selectedTask)

      taskDetail = <TaskDetail task={task}
                               onEditTitle={this.onTitleWasEdited}
                               onUpdateTask={this.onTaskWasUpdated} />
    }

    return (
      <div>
        <h1 className="task-index-header">{project.title}</h1>
        <div className="task-index-detail-container">
        <div className="task-index-container">
          <div className="task-index">
              {
                taskKeys.map( key => {
                  let task = this.state.tasks[key];

                  let title = (this.state[task.id] !== undefined ? this.state[task.id].title : task.title)

                  return (
                    <IndexItem onEditTitle={this.onTitleWasEdited}
                               onUpdateTask={this.onTaskWasUpdated}
                               onSelected={this.onTaskWasSelected}
                               task={task}
                               title={title}
                               key={key} />
                  );
                })
              }
          </div>
          <TaskForm projectId={this.props.params.project_id}/>
        </div>
        {taskDetail}
        </div>
      </div>
    );
  }
});
// {this.props.children}

module.exports = TaskIndex;
