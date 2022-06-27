import React, { useState } from "react";
import ActivityItem from "../ActivityItem/ActivityItem";
import "./ActivityBox.css";

function ActivityBox(props) {
  const [todoarr, settodoarr] = useState(props.todo);

  const [titleInput, settitleInput] = useState("");

  return (
    <div className="acbox-container">
      <div
        style={{
          textAlign: "center",
        }}
      >
        {props.title}
      </div>
      {todoarr.map((data) => (
        <ActivityItem title={data.title} isCompleted={data.isCompleted} />
      ))}

      <input
        value={titleInput}
        onChange={(e) => settitleInput(e.target.value)}
      />

      <button
        onClick={() =>
          settodoarr((prevState) => {
            return [...prevState, { title: titleInput, isCompleted: false }];
          })
        }
      >
        Add To Do Item
      </button>
    </div>
  );
}

export default ActivityBox;
