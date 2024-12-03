import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function TaskHeader({ showFinishTasks, setShowFinishTasks, countFinish }) {
  return (
    <>
      <div className="header">
        {!showFinishTasks ? (
          <FontAwesomeIcon
            icon={faCaretDown}
            className="icon-show-more"
            onClick={() => setShowFinishTasks(!showFinishTasks)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCaretUp}
            className="icon-show-more"
            title="Show more"
            onClick={() => setShowFinishTasks(!showFinishTasks)}
          />
        )}
        <span>{`${countFinish} checked off`}</span>
      </div>
    </>
  );
}

export default TaskHeader;
