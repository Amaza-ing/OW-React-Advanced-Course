import "./TaskCard.css";
import { useRecoilState } from "recoil";
import { taskListState } from "../atoms/taskListState";

function TaskCard({ task }) {
  const [taskList, setTaskList] = useRecoilState(taskListState);

  const getUpdatedTasks = (prev, updatedTask) => {
    const updatedTasks = prev.map((task) => {
      if (task.id === updatedTask.id) return updatedTask;
      return task;
    });
    return updatedTasks;
  };

  const handleInput = (e) => {
    const updatedTask = { ...task, title: e.target.value };
    setTaskList((prev) => getUpdatedTasks(prev, updatedTask));
  };

  const handleCheck = () => {
    const updatedTask = { ...task, completed: !task.completed };
    setTaskList((prev) => getUpdatedTasks(prev, updatedTask));
  };

  return (
    <article className="task-card">
      <input className="card-title" value={task.title} onChange={handleInput} />
      <input type="checkbox" checked={task.completed} onChange={handleCheck} />
    </article>
  );
}

export default TaskCard;
