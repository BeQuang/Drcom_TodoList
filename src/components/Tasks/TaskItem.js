import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Tasks.scss";

function TaskItem({ title, complete, setTaskList, taskList, setCountFinish }) {
  const handleChecked = () => {
    const newTasks = taskList.map((item) =>
      item.text === title ? { ...item, complete: !item.complete } : item
    );

    setTaskList(newTasks);

    if (!complete) {
      setCountFinish((prevCount) => prevCount + 1);
    } else {
      setCountFinish((prevCount) => prevCount - 1);
    }
  };

  const handleDelete = () => {
    const newTasks = taskList.filter((item) => item.text !== title);
    setTaskList(newTasks);
  };

  return (
    <div className={!complete ? "task-item" : "task-item finish"}>
      <span>{title}</span>
      <div className="action">
        {!complete ? (
          <FontAwesomeIcon
            icon={faCheck}
            className="icon-finish"
            title="Finish"
            onClick={() => handleChecked()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className="icon-xmark"
            onClick={() => handleChecked()}
          />
        )}
        <FontAwesomeIcon
          icon={faTrashCan}
          className="icon-delete"
          title="Remove task"
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
}

export default TaskItem;
