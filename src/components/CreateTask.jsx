import "./CreateTask.css";
import { useRef, useState } from "react";
import { createId } from "../utils/utils";

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");

  const newTaskInputRef = useRef();

  const focus = () => {
    newTaskInputRef.current.focus();
  };

  const handleInput = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle) return;

    const newTask = {
      id: createId(),
      title: taskTitle,
      completed: false,
    };

    // addTask(newTask);
    setTaskTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} onClick={focus}>
      <input
        ref={newTaskInputRef}
        className="task-title"
        placeholder="Nueva Tarea"
        value={taskTitle}
        onChange={handleInput}
      />
      <button className="create-btn">+</button>
    </form>
  );
}

export default CreateTask;
