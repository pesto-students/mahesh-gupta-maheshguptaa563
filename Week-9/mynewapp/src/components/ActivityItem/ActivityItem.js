import React, { useState } from "react";
import "./ActivityItem.css";

function ActivityItem(props) {
  const [completed, setCompleted] = useState(false);

  return (
    <div
      className="ac-item-container"
      style={{
        display: props.isCompleted || completed ? "none" : "flex",
      }}
    >
      <div>{props.title}</div>
      <button className="item-btn" onClick={() => setCompleted(true)}>
        Mark As Complete
      </button>
    </div>
  );
}

export default ActivityItem;
