import { fireEvent, render } from "@testing-library/react";
import TasksPage from "./TasksPage";
import { TaskProviderWrapper } from "../context/task.context";
import { MemoryRouter } from "react-router-dom";

describe("TaskPage", () => {
  it("should render 'Tasks'", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <TaskProviderWrapper>
          <TasksPage />
        </TaskProviderWrapper>
      </MemoryRouter>
    );

    const title = getByTestId("tasks-title").textContent;
    expect(title).toEqual("Tasks");
  });

  it("should add one to taskCounter", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <TaskProviderWrapper>
          <TasksPage />
        </TaskProviderWrapper>
      </MemoryRouter>
    );

    const increaseBtn = getByTestId("increase-task-counter");
    fireEvent.click(increaseBtn);

    const taskCounter = getByTestId("task-counter").textContent;
    expect(taskCounter).toEqual("2");
  });
});
