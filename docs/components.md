## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **ProjectsIndex**
    * ProjectIndexItem
    * ProjectForm
      * **TasksIndex**
        * TaskForm
        * TaskIndexItem
        * TaskDetail
  * **TeamsIndex**
    * TeamIndexItem
    * TeamForm
  * **ProfilesIndex**
    * ProfileIndexItem
## Routes

* **component:** `App` **path:** `/`
  * **component:** `ProjectsIndex` **path:** index
  * **component:** `ProjectsIndex` **path:** `projects/:projectId`
    * **component:** `TasksIndex` **path:** `projects/:projectId/tasks`
      * **component:** `TaskIndexItem` **path:** `projects/:projectId/tasks/:taskId`
        * **component:** `TaskDetail` **path:** `projects/:projectId/tasks/:taskId/detail`
  * **component:** `TeamsIndex` **path:** `/teams`
    * **component:** `TeamIndexItem` **path:** `index/:teamId`

For Routes that have no `notebookId`, `TasksIndex` will render all
notes.
