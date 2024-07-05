import "./TasksPage.css";
import { useContext, useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { TaskContext } from "../context/task.context";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";

function TasksPage() {
  const { tasks, hasLoaded, hasError, getTasks } = useContext(TaskContext);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getTasks();
  }, []);

  const taskCards = tasks.map((task) => (
    <li key={task.id}>
      <TaskCard task={task}></TaskCard>
    </li>
  ));

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section id="tasks-page">
        <h2 className="title">Tasks</h2>
        <div className="counters">
          <div className="counter">
            <h3 className="counter-title">Tareas</h3>
            <div className="btns">
              <button onClick={() => setCounter(counter - 1)}>-</button>
              <h3>{counter}</h3>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
          </div>
          <div className="counter">
            <h3 className="counter-title">Completadas</h3>
            <div className="btns">
              <button onClick={() => setCounter(counter - 1)}>-</button>
              <h3>{counter}</h3>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
          </div>
        </div>
        <ul className="task-list">
          <li>
            <CreateTask></CreateTask>
          </li>
          {hasError ? (
            <h2>No se han podido obtener las tareas</h2>
          ) : !hasLoaded ? (
            <h2>Cargando...</h2>
          ) : (
            taskCards
          )}
        </ul>
      </section>
    </>
  );
}
export default TasksPage;
