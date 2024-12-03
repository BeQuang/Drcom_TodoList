/* eslint-disable array-callback-return */
import "./Tasks.scss";
import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import TaskHeader from "./TaskHeader";

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [countFinish, setCountFinish] = useState(0);
  const [showFinishTasks, setShowFinishTasks] = useState(false);

  return (
    <>
      <div className="input container">
        <TaskInput taskList={taskList} setTaskList={setTaskList} />
      </div>

      <div className="task-list container">
        <div className="pending">
          {taskList.map((task, index) => {
            if (!task.complete) {
              return (
                <TaskItem
                  key={index}
                  title={task.text}
                  complete={task.complete}
                  setTaskList={setTaskList}
                  taskList={taskList}
                  setCountFinish={setCountFinish}
                />
              );
            }
          })}
        </div>

        {countFinish > 0 ? (
          <>
            <hr></hr>
            <div className="finish">
              <TaskHeader
                showFinishTasks={showFinishTasks}
                setShowFinishTasks={setShowFinishTasks}
                countFinish={countFinish}
              />
              {showFinishTasks ? (
                <>
                  <hr></hr>
                  <div className="finish-list">
                    {taskList.map((task, index) => {
                      if (task.complete) {
                        return (
                          <TaskItem
                            key={index}
                            title={task.text}
                            complete={task.complete}
                            setTaskList={setTaskList}
                            taskList={taskList}
                            setCountFinish={setCountFinish}
                          />
                        );
                      }
                    })}
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default TaskList;
