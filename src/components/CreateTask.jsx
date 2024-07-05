import "./CreateTask.css";
import { useRef, useState } from "react";
import { createId } from "../utils/utils";
import { connect } from "react-redux";

function CreateTask(props) {
  const { addTask } = props;

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

    addTask(newTask);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => {
      dispatch({ type: "CREATE_TASK", newTask });
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateTask);
