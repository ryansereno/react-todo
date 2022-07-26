import TodoList from "./TodoList";
import React, { useState, useRef, useEffect } from "react";
const uuid = require("uuid");
const LOCAL_STOR_KEY = "tasksApp.tasks";
function App() {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STOR_KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STOR_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function toggleTask(id) {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
      task.complete = !task.complete
      setTasks(newTasks)
  }

  function handleAddTask(e) {
    const taskName = taskNameRef.current.value;
    if (taskName === "") return;
    setTasks((prevTask) => {
      return [
        ...prevTask,
        { id: Math.random() * 1000, name: taskName, complete: false },
      ];
    });
    taskNameRef.current.value = null;
  }
    function handleClearTasks(e){
        const newTasks = tasks.filter(task=> !task.complete)
        setTasks(newTasks)
    }
  return (
    <>
      <TodoList taskList={tasks} toggleTask={toggleTask} />
      <input ref={taskNameRef} type="text" />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleClearTasks}>Clear Completed Tasks</button>
      <div>{tasks.filter(task=>!task.complete).length} tasks left</div>
    </>
  );
}

export default App;
