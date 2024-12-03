import React, { useState } from "react";
import "./Tasks.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TaskInput({ taskList, setTaskList }) {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, { text: task, complete: false }]);
    }
    setTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <div className="wrap">
        <FontAwesomeIcon
          icon={faPlus}
          className="icon"
          title="Add task"
          onClick={() => addTask()}
        />
        <input
          type="text"
          placeholder="Add task"
          className="add-task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <hr></hr>
    </>
  );
}

export default TaskInput;
