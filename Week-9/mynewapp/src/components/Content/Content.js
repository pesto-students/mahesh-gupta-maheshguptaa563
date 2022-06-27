import React from "react";
import ActivityBox from "../Activity/ActivityBox";
import "./Content.css";

function Content() {
  const activity = [
    {
      title: "Todays Activity",
      todos: [
        {
          title: "Assign1",
          isComplete: false,
        },
        {
          title: "Assign2",
          isComplete: false,
        },
        {
          title: "Assign3",
          isComplete: false,
        },
      ],
    },
    {
      title: "Tomorrows Activity",
      todos: [
        {
          title: "Assign4",
          isComplete: false,
        },
        {
          title: "Assign5",
          isComplete: false,
        },
        {
          title: "Assign6",
          isComplete: false,
        },
      ],
    },
  ];

  return (
    <div className="todocontainer">
      {activity.map((data) => (
        <ActivityBox title={data.title} todo={data.todos} />
      ))}
    </div>
  );
}

export default Content;
