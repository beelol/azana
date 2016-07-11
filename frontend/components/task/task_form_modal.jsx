"use strict";

const React = require('react');
const Modal = require('react-modal');

const TaskActions = require('../../actions/task_actions');
const SessionStore = require('../../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const ProjectStore = require('../../stores/project_store');

const TaskFormModal = React.createClass({

  getInitialState() {
    return {
      title: "",
      description: "",
      project_id: 0,
      author_id: 0,
      completed: false
    };
  },

  handleSubmit(event) {
    event.preventDefault();

    const task = Object.assign({}, this.state);

    let projectId = ProjectStore.currentProject.id;

    task.project_id = projectId;

    TaskActions.createTask(task);
    this.setState({title: ""});

    // 'Cave Johnson - we're done here.'
    hashHistory.push(`/projects/${projectId}`);
  },

  goHome() {
    hashHistory.push("/");
  },

  handleCancel(event) {
    event.preventDefault();
    this.goHome();
  },

  componentWillReceiveProps (newProps) {
    this.setState({
      project_id: newProps.projectId
    });

  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    var modalStyles = {
      overlay: {
        display: 'flex',
        position: "absolute",
        alignItems: 'center',
        zIndex: 1000
      },
      content: {
      }
    };

    return (
      <Modal isOpen={true}
             style={modalStyles}>
        <div className="new-project-container">
          <div className="new-project-form">
            <h3 className="new-project-title">Create A Task!</h3>

            <form onSubmit={this.handleSubmit}>
              <div className='project-form-div'>
                <label className="project-title">Title</label>
                <input type="text" value={this.state.title}
                  onChange={this.update("title")} className="project-field"/>
              </div>

              <div className='project-form-div'>
                <label className="project-description">Description</label>
                <input type="text" value={this.state.description}
                  onChange={this.update("description")} className="project-field"/>
              </div>

              <div className="button-holder">
                <input type="submit" value="Create Task" className="new-project-button"/>
              </div>
            </form>

            <div className="button-holder">
              <button className="new-project-button" onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </Modal>

    );
  }
});

module.exports = TaskFormModal;

// <div className="button-holder">
//   <input type="submit" value="Create Task" className="new-task-button"/>
// </div>
// </form>
//
// <div className="button-holder">
//   <button className="new-task-button" onClick={this.handleCancel}>Cancel</button>
// </div>
