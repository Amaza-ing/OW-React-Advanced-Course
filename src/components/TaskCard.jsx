import { updateTask } from "../redux/taskSlice";
import "./TaskCard.css";
import { useDispatch } from "react-redux";

function TaskCard({ task }) {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const updatedTask = { ...task, title: e.target.value };
    dispatch(updateTask(updatedTask));
  };

  const handleCheck = () => {
    const updatedTask = { ...task, completed: !task.completed };
    dispatch(updateTask(updatedTask));
  };

  return (
    <article className="task-card">
      <input className="card-title" value={task.title} onChange={handleInput} />
      <input type="checkbox" checked={task.completed} onChange={handleCheck} />
    </article>
  );
}

export default TaskCard;
