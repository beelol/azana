// "use strict";
//
// const React = require('react');
// const TaskActions = require('../../actions/task_actions');
// const hashHistory = require('react-router').hashHistory;
//
// const TaskForm = React.createClass({
//   getInitialState() {
//     return {
//       title: "",
//       description: "",
//       picture_url: "",
//       project_id: 0,
//       author_id: 0,
//       completed: false
//     };
//   },
//   handleSubmit(event) {
//     event.preventDefault();
//
//     const task = Object.assign({}, this.state);
//     TaskActions.createTask(task);
//     this.goHome();
//   },
//   goHome() {
//     hashHistory.push("/");
//   },
//   handleCancel(event) {
//     event.preventDefault();
//     this.goHome();
//   },
//   update(property) {
//     return (e) => this.setState({[property]: e.target.value});
//   },
//   render() {
//     return (
//         <div className="new-task-container">
//           <div className="new-task-form">
//             <h3 className="new-task-title">Create A Task!</h3>
//
//             <form onSubmit={this.handleSubmit}>
//               <input type="text" value={this.state.title}
//                 onChange={this.update("title")} className="task-field"/>
//
//               <label className="task-field">Description</label>
//               <input type="text" value={this.state.description}
//                 onChange={this.update("description")} className="task-field"/>
//
//               <div className="button-holder">
//                 <input type="submit" value="Create Task" className="new-task-button"/>
//               </div>
//             </form>
//
//             <div className="button-holder">
//               <button className="new-task-button" onClick={this.handleCancel}>Cancel</button>
//             </div>
//           </div>
//         </div>
//     );
//   }
// });
//
// module.exports = TaskForm;
