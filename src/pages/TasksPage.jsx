import "./TasksPage.css";
import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import { useSelector } from "react-redux";

function TasksPage() {
  const { tasks, hasLoaded, hasError } = useSelector((state) => state.task);

  const useCounter = () => {
    const [counter, setCounter] = useState(1);

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return { counter, increase, decrease };
  };

  const taskCounter = useCounter();
  const completedCounter = useCounter();

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
              <button onClick={taskCounter.decrease}>-</button>
              <h3>{taskCounter.counter}</h3>
              <button onClick={taskCounter.increase}>+</button>
            </div>
          </div>
          <div className="counter">
            <h3 className="counter-title">Completadas</h3>
            <div className="btns">
              <button onClick={completedCounter.decrease}>-</button>
              <h3>{completedCounter.counter}</h3>
              <button onClick={completedCounter.increase}>+</button>
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
