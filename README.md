# Todo List Application

Welcome to the Todo List application!

This is a simple todo list app built with React. The app allows you to add, mark as complete, and delete tasks. Completed tasks can be viewed in a separate section, and you can toggle between showing or hiding them.

## Setup Instructions

### Step 1:

Download the zip file or clone the repository from GitHub using the following command:

```bash
git clone [your-repo-url]
```

### Step 2:

Navigate to the project folder and install the required dependencies by running:

```bash
npm install
```

### Step 3:

To start the project, run:

```bash
npm start
```

## Application Overview

### Features:

- **Add Task**: Enter a task in the "Add task" input field and click the "+" button to add a new task to the list.
- **Hover Actions**:

  - When you hover over a task, you will see two icons:
    - **Green Check Icon**: Marks the task as complete. Once marked, the task will move to the "Completed Tasks" section.
    - **Red Trash Icon**: Deletes the task from the list permanently.

- **Completed Tasks Section**:
  - When at least one task is marked as completed, a "Completed Tasks" section will appear at the bottom of the task list. A dropdown arrow allows you to show or hide the completed tasks.
  - When you hover over any completed task, you will see two icons:
    - **Black "X" Icon**: Reverts the task back to an incomplete state, making it move back to the main task list.
    - **Red Trash Icon**: Deletes the completed task from the list permanently.
