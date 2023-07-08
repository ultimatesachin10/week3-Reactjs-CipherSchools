import React, { useEffect, useState } from "react";
import { getAllTasks } from "../apis/testApi";

const TaskScreen = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TaskScreen Mounted");
    getAllTasks().then((foundTasks) => setAllTasks(foundTasks));
  }, [count]);

  useEffect(() => {
    console.log("TaskScreen Updated");
  });

  return allTasks.map((task, index) => (
    <div
      key={index}
      onClick={(e) => {
        console.log("Clicked");
        setCount(count + 1);
      }}
    >
      <h1>
        {task.taskNumber} {task.taskName}
      </h1>
      <p>{task.taskDescription}</p>
    </div>
  ));
};

export default TaskScreen;